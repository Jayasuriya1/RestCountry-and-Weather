var bodyEle = document.querySelector("body");
//creating div(container) element inside body element
var mainDiv = document.createElement("div");
mainDiv.classList.add("class", "container");
bodyEle.append(mainDiv);

var weatherContent=document.createElement('div')
weatherContent.innerHTML=`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Weather Report</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>`
bodyEle.append(weatherContent)

//creating div(row) element inside mainDiv element
var rowDiv = document.createElement("div");
rowDiv.classList.add("class", "row");

mainDiv.append(rowDiv);

var weatherContainer = document.querySelector('.modal-body')

async function clicking(event){
    console.log(event)
    var lat =event.getAttribute('lat')
    var lon =event.getAttribute('lon')
    var responce2 = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=76d6c232e921ecd072a8114debe22075&units=metric`);
        weather = await responce2.json();
        console.log(weather);
        console.log('Humidity:'+weather.main.humidity+'%')
        console.log('pressure:'+weather.main.pressure+'hpa')
        // console.log('temp:'+weather.main.temp+ &#x2103)
        
        weatherContainer.innerHTML=`
        <h1>Temperature: ${weather.main.temp}&#x2103</h1>
        <h2>Description: ${weather.weather[0].description}</h2>
        <p>Humidity: ${weather.main.humidity}%</p>
        <p>Wind Speed: ${weather.wind.speed}m/s</p>
        <p>Wind Direction: ${weather.wind.deg}&#176</p>
        <p>pressure: ${weather.main.pressure}hpa</p>
        `
}

var weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=76d6c232e921ecd072a8114debe22075`

async function api() {
  try {
    var responce = await fetch(`https://restcountries.com/v3.1/all`);
    countries = await responce.json();
    console.log(countries);
    console.log(countries[0].name.common);

    for (var data of countries) {
      if (
        data.name.common &&
        data.flags.png &&
        data.capital[0] &&
        data.region &&
        data.cca2
      ) {
        //creating div(card) element inside rowDiv element
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("class", "card");
        cardDiv.classList.add("class", "col-lg-4");
        cardDiv.classList.add("class", "col-sm-12");
        rowDiv.append(cardDiv);

        //creating h1 element inside mainDive element

        var h1Ele = document.createElement("h1");
        h1Ele.classList.add("class", "card-header");
        h1Ele.setAttribute("id", "title");
        h1Ele.classList.add("class", "text-center");
        h1Ele.classList.add("class", "bg-dark");
        h1Ele.classList.add("class", "text-light");
        h1Ele.innerText = `${data.name.common}`;
        cardDiv.append(h1Ele);

        //creating div(card-body) element inside cardDiv element

        var cardbody = document.createElement("div");
        cardbody.classList.add("class", "card-body");
        cardbody.classList.add("class", "text-center");
        cardbody.classList.add("class", "bg-warning");
        cardbody.classList.add("class", "bg-gradient");
        cardDiv.append(cardbody);

        //creating img tag inside cardbody

        var imgEle = document.createElement("img");
        imgEle.setAttribute("src", `${data.flags.png}`);
        imgEle.style.width = "300px";
        imgEle.style.height = "200px";
        imgEle.classList.add("class", "img-thumbnail");
        cardbody.append(imgEle);

        //creating p(capital) tag inside cardbody

        var pCapitalEle = document.createElement("p");
        pCapitalEle.innerText = `Capital: ${data.capital[0]}`;
        pCapitalEle.classList.add("class", "card-text");
        cardbody.append(pCapitalEle);

        //creating p(Region) tag inside cardbody

        var pRegionEle = document.createElement("p");
        pRegionEle.innerText = `Region: ${data.region}`;
        pRegionEle.classList.add("class", "card-text");
        cardbody.append(pRegionEle);

        //creating p(countryCode) tag inside cardbody

        var pCountryCodeEle = document.createElement("p");
        pCountryCodeEle.innerText = `Country Code: ${data.cca2}`;
        pCountryCodeEle.classList.add("class", "card-text");
        cardbody.append(pCountryCodeEle);

        //creating button
        var btn = document.createElement("button");
        btn.classList.add("class", "btn");
        btn.classList.add("class", "btn-primary");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
        btn.setAttribute("type", "button");
        btn.innerText = "Click For Weather";
        cardbody.append(btn);
        btn.setAttribute('onClick','clicking(this)')
        btn.setAttribute('lat',data.latlng[0])
        btn.setAttribute('lon',data.latlng[1])
        

        
        // console.log(data.latlng)
        // var lat = data.latlng[0]
        // var lon = data.latlng[1]
        // console.log(lat)
        // console.log(lon)
        
        



      }
    }
  } catch (error) {
    console.log(error);
  }
}
api();
