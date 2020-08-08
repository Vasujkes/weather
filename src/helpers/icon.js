import sunny from "../assets/sunny.svg"
import cloudy from "../assets/cloudy.svg"
import drizzle from "../assets/drizzle.svg"
import showers from "../assets/showers.svg"
import snow from "../assets/snow.svg"
import thunderstroms from "../assets/thunderstroms.svg"
import tornado from "../assets/tornado.svg"


export default (rangeId) => {
  switch (true) {
    case rangeId >= 200 && rangeId < 232:
      return thunderstroms
    case rangeId >= 300 && rangeId <= 321:
      return drizzle
    case rangeId >= 500 && rangeId <= 521:
      return showers
    case rangeId >= 600 && rangeId <= 622:
      return snow
    case rangeId >= 701 && rangeId <= 781:
      return tornado
    case rangeId === 800:
      return sunny
    case rangeId >= 801 && rangeId <= 804:
      return cloudy
    default:
      return cloudy
  }
};
