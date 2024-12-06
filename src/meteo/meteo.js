document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle').addEventListener('click', toggleCatArt);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function performAction(action) {
    switch (action) {
        case 'sleep':
            updateStat('energy', 20);
            break;
        case 'comfy':
            updateStat('comfort', 15);
            break;
        case 'play':
            updateStat('mood', 25);
            break;
        case 'heat':
            updateStat('temperature', 10);
            break;
        default:
            console.log('Unknown action');
    }
}

function updateStat(stat, value) {
    const progressBar = document.getElementById(stat);
    const currentValue = parseInt(progressBar.value, 10);
    progressBar.value = Math.min(100, currentValue + value);
}

let toggleState = 0; // 0 for the first cat, 1 for the second cat

// Fonction qui alterne les deux dessins du chat
function toggleCatArt() {
    const petArt = document.getElementById('pet-art');
    
    if (toggleState === 0) {
        petArt.textContent = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⠀⠀⣼⣿⡗⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `;
        toggleState = 1;
    } else {
        petArt.textContent = `
        
⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀      ⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣤⣧⣿⣿⣿⣿⡗⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀       ⠀⠀⠀⠀⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `;
        toggleState = 0;
    }
}

// Appel de la fonction toggleCatArt toutes les 0,5 secondes
setInterval(toggleCatArt, 500);

const apiKey = 'rjCuB3j65eRmtNxZinHBp0a16Rf8a0pc';

async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('Adresse IP:', data.ip);
    return data.ip;  // Retourne l'adresse IP de l'utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'IP:', error);
  }
}

async function getLocation(ip) {
  try {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ip}`);
    const data = await response.json();
    console.log('Location:', data);
    return data.Key;  // Retourne la clé de localisation
  } catch (error) {
    console.error('Erreur lors de la récupération de la localisation:', error);
  }
}

async function getHourlyForecast(locationKey) {
  try {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}&language=en-us&details=true&metric=true`);
    const data = await response.json();
    console.log('Prévisions horaires:', data);
    return data;  // Retourne les prévisions horaires
  } catch (error) {
    console.error('Erreur lors de la récupération des prévisions horaires:', error);
  }
}

function mapWeatherToCategory(weatherText) {
    const lowerCaseText = weatherText.toLowerCase();
    if (lowerCaseText.includes('rain') || lowerCaseText.includes('shower')) {
        return 'rain';
    } else if (lowerCaseText.includes('thunder')) {
        return 'thunder';
    } else if (lowerCaseText.includes('snow')) {
        return 'snowing';
    } else if (lowerCaseText.includes('sunny') || lowerCaseText.includes('clear')) {
        return 'sunny';
    } else if (lowerCaseText.includes('cloud') || lowerCaseText.includes('overcast')) {
        return 'cloudy';
    } else if (lowerCaseText.includes('snowstorm') || lowerCaseText.includes('blizzard')) {
        return 'snowstorm';
    } else if (lowerCaseText.includes('mist') || lowerCaseText.includes('fog')) {
        return 'mist';
    } else if (lowerCaseText.includes('alert') || lowerCaseText.includes('warning')) {
        return 'alert';
    } else {
        return 'unknown';
    }
}

async function updateWeatherStats() {
  try {
    const ip = await getIPAddress();
    const locationKey = await getLocation(ip);
    const forecast = await getHourlyForecast(locationKey);

    // Mettez à jour les statistiques en fonction des prévisions horaires
    const temperature = forecast[0].Temperature.Value;
    const weatherText = forecast[0].IconPhrase;
    const weatherCategory = mapWeatherToCategory(weatherText);

    if (temperature < 10) {
        updateStat('temperature', -10);
    } else if (temperature > 25) {
        updateStat('temperature', 10);
    }

    switch (weatherCategory) {
        case 'rain':
        case 'snowing':
        case 'snowstorm':
        case 'mist':
            updateStat('comfort', -10);
            break;
        case 'sunny':
        case 'cloudy':
            updateStat('comfort', 10);
            break;
        case 'thunder':
        case 'alert':
            updateStat('comfort', -20);
            break;
        default:
            updateStat('comfort', 0);
            break;
    }

    console.log(`Weather updated: ${weatherText}, ${temperature}°C`);

    // Mettre à jour les prévisions horaires pour les 5 prochaines heures
    for (let i = 1; i <= 5; i++) {
        const hourlyWeatherText = forecast[i - 1].IconPhrase;
        const hourlyWeatherCategory = mapWeatherToCategory(hourlyWeatherText);
        document.getElementById(`temp-${i}`).textContent = forecast[i - 1].Temperature.Value;
        document.getElementById(`condition-${i}`).textContent = hourlyWeatherCategory;
    }
  } catch (error) {
    console.error('Error updating weather stats:', error);
  }
}

// Appel de la fonction updateWeatherStats toutes les 12 heures
setInterval(updateWeatherStats, 12 * 60 * 60 * 1000);

// Appel initial pour mettre à jour les statistiques dès le chargement de la page
updateWeatherStats();