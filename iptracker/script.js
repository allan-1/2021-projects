// dom
const inputs = document.querySelector('input');
const submit = document.querySelector('.submit');
const ipAddr = document.querySelector('.ip-adress');
const locations = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

// event listeners
submit.addEventListener('click', getIp)

// functions
function getIp(event) {
    event.preventDefault();
    let ipadress = inputs.value;
    getIpAdress(ipadress)
    inputs.value = '';
}
const getIpAdress = async (ipadress) => {
    const response = await fetch(' https://geo.ipify.org/api/v1?apiKey=at_oHLI4USowbc8HyCirAD0CcqIrpSPr&ipAddress='+ipadress)
    const api = await response.json()
    const latitude = api.location.lat
    const longitude = api.location.lng
    map(latitude, longitude)
    ipAddr.innerText = api.ip;
    locations.innerText = api.location.region + ' ,' + api.location.city;
    timezone.innerText = 'UTC' + ' ' + api.location.timezone;
    isp.innerText = api.isp;
}

function map(latitude, longitude) {
    let myMap = L.map('mapid').setView([latitude, longitude], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxsYW4wMDAiLCJhIjoiY2toeXgybnR2MDB6bjJxbXNvNjc4bnd0ZSJ9.FicNEeEcu8rXtk-voao0sA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(myMap);
    let marker = L.marker([latitude, longitude]).addTo(myMap)
}
