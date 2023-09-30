const temperatureScaleFrom = document.getElementById('temperature-scale-from');
const temperatureToConvert = document.getElementById('temperature-to-convert');
const convertedTemperature = document.getElementById('converted-temperature');
const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', () => {
  const temperatureToConvertValue = parseFloat(temperatureToConvert.value);
  const temperatureScaleFromValue = temperatureScaleFrom.value;

  let convertedTemperatureValue;

  switch (temperatureScaleFromValue) {
    case 'Celsius':
      convertedTemperatureValue = (temperatureToConvertValue * 9 / 5) + 32;
      break;
    case 'Fahrenheit':
      convertedTemperatureValue = (temperatureToConvertValue - 32) * 5 / 9;
      break;
    default:
      convertedTemperatureValue = 0;
  }

  convertedTemperature.textContent = convertedTemperatureValue.toFixed(2);
});