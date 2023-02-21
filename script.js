var key = "83cf49ff64b64d82b1ade720f616dc5f";

document.getElementById("citybutton").onclick = function(){
    document.getElementById("cityform").style.visibility = "visible";
    document.getElementById("llform").style.visibility = "hidden";
    document.getElementById("zipform").style.visibility = "hidden";
    document.getElementById("weather").innerHTML= " ";
    document.getElementById("suggest").innerHTML = " ";

}

document.getElementById("llbutton").onclick = function(){
    document.getElementById("cityform").style.visibility = "hidden";
    document.getElementById("llform").style.visibility = "visible";
    document.getElementById("zipform").style.visibility = "hidden";
    document.getElementById("weather").innerHTML= " ";
    document.getElementById("suggest").innerHTML = " ";
}

document.getElementById("zipbutton").onclick = function(){
    document.getElementById("cityform").style.visibility = "hidden";
    document.getElementById("llform").style.visibility = "hidden";
    document.getElementById("zipform").style.visibility = "visible";
    document.getElementById("weather").innerHTML= " ";
    document.getElementById("suggest").innerHTML = " ";
}






//city form
document.getElementById("cityform").onsubmit = function(){
    
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    var countryName = String(document.getElementById("countryn").value);
    var stateName = String(document.getElementById("state").value);
    var cityName = String(document.getElementById("city").value);

    xhttp.onreadystatechange = function() {
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var result = JSON.parse(this.responseText);
            console.log(result);
            document.getElementById("weather").innerHTML= result.data[0].weather.description;
            document.getElementById("suggestion").style.visibility = "visible";
        }
    };

        
    
    xhttp.open("GET", "https://api.weatherbit.io/v2.0/current?city="+cityName+"&country="+countryName+"&state="+stateName+"&key=83cf49ff64b64d82b1ade720f616dc5f", true);
    
    //xhttp.open("GET", "https://api.weatherbit.io/v2.0/current?city=Chicago&country=US&state=Illinois&key=83cf49ff64b64d82b1ade720f616dc5f", true);
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send();
    document.getElementById("cityform").reset();
    document.getElementById("suggest").innerHTML = " ";
}

//lat long form
document.getElementById("llform").onsubmit = function(){
    
    event.preventDefault();
    var xhttp2 = new XMLHttpRequest();
    var latitude = String(document.getElementById("latitude").value);
    var longitude = String(document.getElementById("longitude").value);
    
    xhttp2.onreadystatechange = function() {
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var result = JSON.parse(this.responseText);
            console.log(result);
            document.getElementById("weather").innerHTML= result.data[0].weather.description;
            document.getElementById("suggestion").style.visibility = "visible";
            
        }
    };

        
    
    xhttp2.open("GET", "https://api.weatherbit.io/v2.0/current?lat="+latitude+"&lon="+longitude+"&key=83cf49ff64b64d82b1ade720f616dc5f", true);
    xhttp2.setRequestHeader("content-type","application/json");
    xhttp2.send();
    document.getElementById("llform").reset();
    document.getElementById("suggest").innerHTML = " ";

}

//zip form
document.getElementById("zipform").onsubmit = function(){
    
    event.preventDefault();
    var xhttp3 = new XMLHttpRequest();
    var countryName = String(document.getElementById("country").value);
    var zipcode = String(document.getElementById("code").value);
    
    xhttp3.onreadystatechange = function() {
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var result = JSON.parse(this.responseText);
            console.log(result);
            document.getElementById("weather").innerHTML= result.data[0].weather.description;
            document.getElementById("suggestion").style.visibility = "visible";
            
        }
    };

        
    
    xhttp3.open("GET", "https://api.weatherbit.io/v2.0/current?postal_code="+zipcode+"&country="+countryName+"&key=83cf49ff64b64d82b1ade720f616dc5f", true);
    xhttp3.setRequestHeader("content-type","application/json");
    xhttp3.send();
    document.getElementById("zipform").reset();
    document.getElementById("suggest").innerHTML = " ";
}

document.getElementById("suggestion").onclick = function(){
    
    var weather = document.getElementById("weather").innerHTML;
    var sug = document.getElementById("suggest").innerHTML;
    if(weather.includes("rain") || weather.includes("snow")){
        sug = "You should bring an umbrella!"
    }else if(weather.includes("Clouds") || weather.includes("clouds")){
        sug = "You should put away your sunglasses!"
    }else{
        sug = "Wear whatever you want to!"
    }

    document.getElementById("suggest").innerHTML=sug;
}