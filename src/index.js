import { getCurrentLocation } from "./geolocation";
import 'bootstrap/dist/css/bootstrap.min.css';

export function showCurrentCoordinates(location) {
  const currentUserCoordinates = getCurrentLocation.coordinates;

  console.log(currentUserCoordinates);
  console.log(getCurrentLocation());
  console.log(window, "test");
}

showCurrentCoordinates(getCurrentLocation);
