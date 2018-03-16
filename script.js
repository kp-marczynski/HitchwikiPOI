var kmlTemplate = null;
var isFileGenerated = false;
var isAlreadyClicked = false;
var baseUrl = "https://hitchwiki.org/maps/api/?who=krispy1396&";
var processedPlaces = 0;
var processedCountries = 0;
var numberOfCountries = 0;
var allPlacesId = [];
var numberOfPlaces = 0;
var indexMod = 1000;
var knownPlaces = null;

function httpGetJson(url, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", url, true);
    xmlHttp.onload = function () {
        var resp = JSON.parse(xmlHttp.responseText);
        callback(resp["body"]);
    };
    xmlHttp.send(null);
}

function getJsonP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        async: true,
        crossDomain: true
    }).done(function (data) {
        callback(data);
    });
}


function httpGetCountries(data) {
    for (i = 0; i < data.length; ++i) {
        var id = data[i]["id"];
        console.log("id:" + id);
        if (knownPlaces.indexOf(id) === -1) {
            console.log("unknown id");
            allPlacesId.push(id);
        }
    }
    movePlacessProccessBar();
    processedCountries += 1;
    var procent = Math.floor(processedCountries / numberOfCountries * 100);
    var elem = document.getElementById("countriesBar");
    elem.style.width = procent + '%';
    elem.innerHTML = processedCountries + "/" + numberOfCountries;
    if (processedCountries >= numberOfCountries) {
        numberOfPlaces = allPlacesId.length;
        elem.className = "progress-bar bg-success";
        elem.style.backgroundColor = "green";
        if (numberOfPlaces === 0) {
            saveToFile();
        } else {
            getPlaces(processedPlaces);
        }
    }

}

function parseXml(string) {
    parser = new DOMParser();
    return parser.parseFromString(string, "text/xml");
}

function movePlacessProccessBar() {
    var procent = Math.floor((processedPlaces + knownPlaces.length) / (numberOfPlaces + knownPlaces.length) * 100);
    var elem = document.getElementById("placesBar");
    elem.style.width = procent + '%';
    elem.innerHTML = (processedPlaces + knownPlaces.length) + "/" + (numberOfPlaces + knownPlaces.length);
}
function httpGetPlaces(data) {
    addPlacemarkToTemplate(parseXml(data));
    processedPlaces += 1;
    console.log("Downloaded " + processedPlaces + " places out of " + numberOfPlaces);
    movePlacessProccessBar();
    if (processedPlaces >= numberOfPlaces) {
        elem.className = "progress-bar bg-success";
        elem.style.backgroundColor = "green";
        saveToFile();
    } else if (processedPlaces % indexMod === 0) {
        getPlaces(processedPlaces);
    }
}


function replaceStyleUrl(styleUrl) {
    switch (styleUrl.nodeValue) {
        case "#rating_0":
            styleUrl.nodeValue = "#placemark-purple";
            break;
        case "#rating_1":
            styleUrl.nodeValue = "#placemark-green";
            break;
        case "#rating_2":
            styleUrl.nodeValue = "#placemark-blue";
            break;
        case "#rating_3":
            styleUrl.nodeValue = "#placemark-yellow";
            break;
        case "#rating_4":
            styleUrl.nodeValue = "#placemark-orange";
            break;
        case "#rating_5":
            styleUrl.nodeValue = "#placemark-red";
            break;
        default:
            styleUrl.nodeValue = "#placemark-brown";
            break;
    }
}

function getKmlTemplate() {
    return parseXml('<kml xmlns="https://earth.google.com/kml/2.2"><Document><Style id="placemark-blue"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-blue.png</href></Icon></IconStyle></Style><Style id="placemark-brown"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-brown.png</href></Icon></IconStyle></Style><Style id="placemark-green"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-green.png</href></Icon></IconStyle></Style><Style id="placemark-orange"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-orange.png</href></Icon></IconStyle></Style><Style id="placemark-pink"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-pink.png</href></Icon></IconStyle></Style><Style id="placemark-purple"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-purple.png</href></Icon></IconStyle></Style><Style id="placemark-red"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-red.png</href></Icon></IconStyle></Style><Style id="placemark-yellow"><IconStyle><Icon><href>https://mapswith.me/placemarks/placemark-yellow.png</href></Icon></IconStyle></Style><name>World</name><visibility>1</visibility></Document></kml>');
}

function addPlacemarkToTemplate(somePLace) {
    replaceStyleUrl(somePLace.getElementsByTagName("styleUrl")[0].childNodes[0]);
    kmlTemplate.getElementsByTagName("Document")[0].appendChild(somePLace.getElementsByTagName("Placemark")[0]);
}

function getCountries() {
    var countriesUrl = baseUrl + "countries&format=json";
    getJsonP(countriesUrl, processCountries)

}

function processCountries(countries) {
    numberOfCountries = Object.keys(countries).length;
    for (var country in countries) {
        var countryDescriptionUrl = baseUrl + "format=json&country=" + countries[country].iso;

        getJsonP(countryDescriptionUrl, httpGetCountries);//httpGetCountries(countryDescriptionUrl, countries[country].name);
    }
}

function getPlaces(startIndex) {
    var endIndex = (startIndex + indexMod < numberOfPlaces) ? startIndex + indexMod : numberOfPlaces;
    console.log("Start index: " + startIndex + ", End index: " + endIndex);

    for (i = startIndex; i < endIndex; i++) {
        var url = baseUrl + "format=kml&place=" + allPlacesId[i];
//            var proxy = "http://cors-proxy.htmldriven.com/?url=" + encodeURIComponent(url);
        httpGetJson(getProxy(url), httpGetPlaces);
    }
}

function setKnownPlaces(data) {
    knownPlaces = JSON.parse(data);
    console.log(knownPlaces);
}
function setKnownKml(data) {
    kmlTemplate = parseXml(data);
    getCountries();
}
function generatePOI() {
    if (isFileGenerated) {
        saveToFile();
    } else if (!isAlreadyClicked) {
        var placesUrl = "https://raw.githubusercontent.com/kp-marczynski/hitchwiki-poi/master/all_places_id.json";
        var url = "https://raw.githubusercontent.com/kp-marczynski/hitchwiki-poi/master/world.kml";
//            var proxy = "http://cors-proxy.htmldriven.com/?url=" + encodeURIComponent(url);
        isAlreadyClicked = true;

        httpGetJson(getProxy(placesUrl), setKnownPlaces);
        httpGetJson(getProxy(url), setKnownKml);
//            kmlTemplate = getKmlTemplate();
//            getCountries();
    }
}

function getProxy(url) {
    return "http://cors-proxy.htmldriven.com/?url=" + encodeURIComponent(url);
}

function saveToFile() {
    isFileGenerated = true;
    console.log("Saving to file");

    var filename = "world.kml";
    var pom = document.createElement('a');
    var bb = new Blob([new XMLSerializer().serializeToString(kmlTemplate)], {type: 'application/vnd.google-earth.kml+xml'});

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['application/vnd.google-earth.kml+xml', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
}