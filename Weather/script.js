const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const erro404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey='61d4994db68b5d1a4343473ea7f204e8';
    const city=document.querySelector('.search-box input').ariaValueMax;

    if(city=='')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod ==='404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                erro404.style.display = 'block';
                erro404.classList.add('fadeIn');
                return;
            }
            erro404.style.display = 'none';
            erro404.classList.remove('fadeIn');

            const image = document.querySelector('.weatger-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-box .humidity span');
            const wind = document.querySelector('.weather-box .wind span');

            switch (json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default: 
                    image.src = '';
            }

            temperature.innerHTML = '${parseInt(json.main.temp)}<span>ºC</span>';
            description.innerHTML = '${json.weather[0].description}';
            humidity.innerHTML = '${json.main.humidity}%';
            wind.innerHTML = '${parseInt(json.wind.speed)}Km/h';

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '598px';
        });
    }); 