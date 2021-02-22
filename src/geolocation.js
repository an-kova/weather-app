export function getCurrentLocation() {
  const status = document.querySelector("#status");
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(position) {
    const coordinates = position.coords;
    status.textContent = "";

    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.latitude}+
        ${coordinates.longitude}&key=${process.env.API_CURRENT_LOCATION_KEY}`
    )
      .then((response) => response.json())
      .then(
        console.log(
          "Your current position is:",
          `Latitude : ${coordinates.latitude}`,
          `Longitude: ${coordinates.longitude}`,
          `More or less ${coordinates.accuracy} meters.`
        )
      );
  }

  function error(err) {
    status.textContent = "Oops, we were unable to find you. But you can still enter your location below";
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.innerHTML = `<span class="spinner-border text-primary mr-3 mt-1"></span>
    Trying to locate you…`;
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  // return coordinates;
}
