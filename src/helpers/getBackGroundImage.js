import clearWeather from '../assets/bg/clear.jpg';
import cloudsNight from '../assets/bg/clouds-night.jpg';
import cloudsDay from '../assets/bg/clouds.jpg';
import mist from '../assets/bg/mist.jpg';
import clearNight from '../assets/bg/night.jpg';
import rain from '../assets/bg/rain.jpg';
import snow from '../assets/bg/snow.jpg';
import thunderstorm from '../assets/bg/thunderstorm.jpg';

export const getBackGroundImage = (weatherText, time) => {
  if (weatherText && time) {
    if (
      (weatherText.toLowerCase().includes('cloudy') ||
        weatherText.toLowerCase().includes('partly cloudy') ||
        weatherText.toLowerCase().includes('overcast')) &&
      time > '18:00'
    ) {
      return cloudsNight;
    }
    if (
      (weatherText.toLowerCase().includes('cloudy') ||
        weatherText.toLowerCase().includes('partly cloudy') ||
        weatherText.toLowerCase().includes('overcast')) &&
      time < '18:00'
    ) {
      return cloudsDay;
    }
    if (
      (weatherText.toLowerCase().includes('sun') ||
        weatherText.toLowerCase().includes('sunny') ||
        weatherText.toLowerCase().includes('clear')) &&
      time < '18:00'
    ) {
      return clearWeather;
    }
    if (
      (weatherText.toLowerCase().includes('sun') ||
        weatherText.toLowerCase().includes('sunny') ||
        weatherText.toLowerCase().includes('clear')) &&
      time > '18:00'
    ) {
      return clearNight;
    }
    if (
      (weatherText.toLowerCase().includes('mist') ||
        weatherText.toLowerCase().includes('misty')) &&
      (time > '18:00' || time < '18:00')
    ) {
      return mist;
    }
    if (
      (weatherText.toLowerCase().includes('rain') ||
        weatherText.toLowerCase().includes('light rain')) &&
      (time > '18:00' || time < '18:00')
    ) {
      return rain;
    }
    if (
      (weatherText.toLowerCase().includes('snow') ||
        weatherText.toLowerCase().includes('light snow')) &&
      (time > '18:00' || time < '18:00')
    ) {
      return snow;
    }
    if (
      (weatherText.toLowerCase().includes('thunderstorm') ||
        weatherText.toLowerCase().includes('storm') ||
        weatherText.toLowerCase().includes('thundery ')) &&
      (time > '18:00' || time < '18:00')
    ) {
      return thunderstorm;
    }
  }
  return '';
};
