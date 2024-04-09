const apiKey = "580af36742de4a764466c492e38dee06"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const input = document.querySelector('.input');
const btn = document.querySelector('.search-icon')

btn.addEventListener('click', () => {
    const info = input.value;


    const response=fetch(apiUrl + `${info}` + `&appid=${apiKey}`)
        .then((value) => {
            return value.json()
        }).then((data) => {
            console.log(data);
            document.querySelector('.main').style.display='block'
            const city = document.querySelector('.city')
            const temp = document.querySelector('.temp')
            const humidity = document.querySelector('.humidity')
            const wind = document.querySelector('.wind')
            const icon = document.querySelector('.weather-icon')
            
            switch(data.weather[0].main){
                case 'Clouds': icon.src='clouds.png'
                break;

                case 'Drizzle': icon.src='drizzle.png'
                break;

                case 'Clear': icon.src='clear.png'
                break;

                case 'Mist': icon.src='mist.png'
                break;

                case 'Rain': icon.src='rain.png'
                break;

                case 'Snow': icon.src='snow.png'
                break;

                case 'Haze': icon.src='haze.png'
                break;

            }

            city.innerText = `${data.name}`
            temp.innerHTML = `<h1 class="temp">${Math.round(data.main.temp)}&deg</h1>`
            humidity.innerHTML = `<p class="humidity">${data.main.humidity}%</p>`
            wind.innerHTML = `<p class="wind">${data.wind.speed} Km/h</p>`
        }).catch((error) => {
            alert("Enter valid city name")
        })
})

