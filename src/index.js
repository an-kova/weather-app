import { getCurrentLocation } from "./geolocation";

export function showCurrentCoordinates(location) {
  const currentUserCoordinates = getCurrentLocation.coordinates;

  console.log(currentUserCoordinates);
  console.log(getCurrentLocation());
  console.log(window, "test");
}

showCurrentCoordinates(getCurrentLocation);
