const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config();

const apiKey = process.env.WEATHER_API_KEY;
const baseUrl = process.env.WEATHER_API_URL;

async function getWeather(city) {
    try {
        
        const url = `${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await axios.get(url);

        const data = response.data;

       
        return {
            ciudad: data.name,
            temperatura: data.main.temp,
            descripcionClima: data.weather[0].description,
            humedad: data.main.humidity,
            velocidadViento: data.wind.speed,
        };
    } catch (error) {
       
        throw new Error('No se pudo obtener la información meteorológica.');
    }
}

module.exports = { getWeather };
