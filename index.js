
const zodiac = document.getElementById("zodiac");
const body = document.body;


const changeBackground = () => {

   
   
    if (zodiac.value === "Aries") {
        body.style.background = "#ec0606"
    }
    else if (zodiac.value == "Taurus") {
        body.style.background = "#2e9c06"

    }
    else if (zodiac.value == "Gemini") {
        body.style.background = "#ffff00" 
    }
    else if (zodiac.value == "Cancer") {
        body.style.background = "#c0c0c0" 

    }
    else if (zodiac.value == "Leo") {
        body.style.background = "#ffa500" 
    }
    else if (zodiac.value == "Virgo") {
        body.style.background = "#a52a2a"
    }
    else if (zodiac.value == "Libra") {
        body.style.background = "#ffc0cb"
    }
    else if (zodiac.value == "Scorpio") {
        body.style.background = "#000000"
    }
    else if (zodiac.value == "Sagittarius") {
        body.style.background = "#800080"
    }
    else if (zodiac.value == "Capricorn") {
        body.style.background = "#808080"
    }
    else if (zodiac.value == "Aquarius") {
        body.style.background = "#0000ff"

    }
    else if (zodiac.value == "Pisces") {
        body.style.background = "#90ee90"

    }
    else{
        body.style.background = "#fff"
    }
}