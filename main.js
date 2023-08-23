const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = "5daaaf3a31c84f86920195645232308";
const currentWeather = "/current.json";
const locationQuery = "poznan";

class WetherCurrentData {
  constructor() {
    this.location = null;
    this.timezone = null;
    this.temperature = null;
    this.humidity = null;
    this.condition = null;
  }
  async getCurrentData() {
    const response = await fetch(
      `${baseUrl}${currentWeather}?key=${apiKey}&q=${locationQuery}`,
      {
        mode: "cors",
      }
    );
    const wetherData = await response.json();
    this.location = wetherData.location.name;
    this.timezone = wetherData.location.tz_id;
    this.temperature = wetherData.current.temp_c;
    this.humidity = wetherData.current.humidity;
    this.condition = wetherData.current.condition.text;
    console.log(wetherData);
  }
}
async function callData() {
  const currentData = new WetherCurrentData();
  await currentData.getCurrentData();
  console.log(currentData.location);
  console.log(currentData.timezone);
  console.log(currentData.temperature);
  console.log(currentData.humidity);
  console.log(currentData.condition);
}
callData();
