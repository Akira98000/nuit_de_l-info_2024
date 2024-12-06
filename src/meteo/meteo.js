document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle').addEventListener('click', toggleCatArt);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function performAction(action) {
    switch (action) {
        case 'sleep':
            updateStat('sleep', 20);
            break;
        case 'comfy':
            updateStat('dryness', 15);
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
    const icon = document.getElementById(`${stat}-icon`);
    const currentValue = parseInt(progressBar.value, 10);
    const newValue = Math.min(100, currentValue + value);

    progressBar.value = newValue;

    if (value > 0) {
        icon.textContent = '⬆️';
    } else if (value < 0) {
        icon.textContent = '⬇️';
    } else {
        icon.textContent = '➖';
    }
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
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
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

function getBonusMalusIcons(category) {
    switch (category) {
        case 'rain':
            return { bonus: '🌙 Sleep', malus: '💧 Dryness' };
        case 'thunder':
            return { bonus: '😊 Mood', malus: '🌙 Sleep' };
        case 'snowing':
            return { bonus: '🌙 Sleep', malus: '🌡️ Temperature' };
        case 'sunny':
            return { bonus: '😊 Mood', malus: '🌙 Sleep' };
        case 'cloudy':
            return { bonus: '💧 Dryness', malus: '😊 Mood' };
        case 'snowstorm':
            return { bonus: '🌙 Sleep', malus: '🌡️ Temperature' };
        case 'mist':
            return { bonus: '💧 Dryness', malus: '😊 Mood' };
        case 'alert':
            return { bonus: '🌡️ Temperature', malus: '😊 Mood' };
        default:
            return { bonus: '❓ Unknown', malus: '❓ Unknown' };
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
            updateStat('sleep', 10);
            updateStat('dryness', -10);
            break;
        case 'thunder':
            updateStat('mood', 10);
            updateStat('sleep', -10);
            break;
        case 'snowing':
            updateStat('sleep', 10);
            updateStat('temperature', -10);
            break;
        case 'sunny':
            updateStat('mood', 10);
            updateStat('sleep', -10);
            break;
        case 'cloudy':
            updateStat('dryness', 10);
            updateStat('mood', -10);
            break;
        case 'snowstorm':
            updateStat('sleep', 10);
            updateStat('temperature', -10);
            break;
        case 'mist':
            updateStat('dryness', 10);
            updateStat('mood', -10);
            break;
        case 'alert':
            updateStat('temperature', 10);
            updateStat('mood', -10);
            break;
        default:
            updateStat('dryness', 0);
            break;
    }

    console.log(`Weather updated: ${weatherText}, ${temperature}°C`);

    // Mettre à jour les prévisions horaires pour les 5 prochaines heures
    for (let i = 1; i <= 5; i++) {
        const hourlyWeatherText = forecast[i - 1].IconPhrase;
        const hourlyWeatherCategory = mapWeatherToCategory(hourlyWeatherText);
        const { bonus, malus } = getBonusMalusIcons(hourlyWeatherCategory);
        document.getElementById(`temp-${i}`).textContent = forecast[i - 1].Temperature.Value;
        document.getElementById(`condition-${i}`).textContent = hourlyWeatherCategory;
        document.getElementById(`bonus-${i}`).textContent = bonus;
        document.getElementById(`malus-${i}`).textContent = malus;
    }
  } catch (error) {
    console.error('Error updating weather stats:', error);
  }
}

function applyCurrentForecastEffects() {
    const currentWeatherText = document.getElementById('condition-1').textContent;
    const currentWeatherCategory = mapWeatherToCategory(currentWeatherText);

    switch (currentWeatherCategory) {
        case 'rain':
            updateStat('sleep', 1);
            updateStat('dryness', -1);
            break;
        case 'thunder':
            updateStat('mood', 1);
            updateStat('sleep', -1);
            break;
        case 'snowing':
            updateStat('sleep', 1);
            updateStat('temperature', -1);
            break;
        case 'sunny':
            updateStat('mood', 1);
            updateStat('sleep', -1);
            break;
        case 'cloudy':
            updateStat('dryness', 1);
            updateStat('mood', -1);
            break;
        case 'snowstorm':
            updateStat('sleep', 1);
            updateStat('temperature', -1);
            break;
        case 'mist':
            updateStat('dryness', 1);
            updateStat('mood', -1);
            break;
        case 'alert':
            updateStat('temperature', 1);
            updateStat('mood', -1);
            break;
        default:
            break;
    }
}

// Appel de la fonction updateWeatherStats toutes les 12 heures
setInterval(updateWeatherStats, 12 * 60 * 60 * 1000);

// Appel initial pour mettre à jour les statistiques dès le chargement de la page
updateWeatherStats();

// Appliquer les effets du forecast actuel toutes les 5 secondes
setInterval(applyCurrentForecastEffects, 5000);