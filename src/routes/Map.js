import React, {useState, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VsYnloYXduIiwiYSI6ImNrdWxka3pjeDNncnMydW8xNTRjN3k1cnEifQ.aaKSW9JCIOELKE8jd6D0HQ";

export default function Map() {
  const [marker, setMarker] = useState();

  useEffect(() => {
    // Set document title based on component
    document.title = "Map";

    // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.33207, 47.60621],
      zoom: 10,
    });

    // create marker
    const marker = new mapboxgl.Marker({
      color: "#000000" // customize color
    })
      .setLngLat([-122.33207, 47.60621]) // set default marker position in center of map
      .addTo(map); // adds to map

    // set marker state based on location chosen from dropdown
    setMarker(marker);
  }, []);

  // set landmarks object key & value pairs (landmark: [lng, lat])
  const landmarks = {
    center: [-122.33207, 47.60621],
    spaceneedle: [-122.349358, 47.620422],
    troll: [-122.34998, 47.656658],
    pikeplace: [-122.342148, 47.609631],
  };

  // get landmark value on form change
  function handleDropdownChange(e) {
    // use .setLngLat() method to update lng and lat on marker
    // based on landmarks object key from <option> value
    marker.setLngLat(landmarks[e.target.value]);
  }

  return (
    <>
      <h1>Mapbox Map</h1>
      <form>
        <label htmlFor='landmarks'>Choose a landmark: </label>
        <select id='landmarks' onChange={handleDropdownChange}>
          <option value="center">Select one</option>
          <option value='spaceneedle'>Space Needle</option>
          <option value='troll'>The Fremont Troll</option>
          <option value='pikeplace'>Pike Place Market</option>
        </select>
      </form>
      <div className="map-wrapper">
        <div id="map" className="map-container" />
      </div>
    </>
  );
}
