"use client";
import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const [marker, setMarker] = useState();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (window.mapboxgl) {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !mapContainerRef.current || mapRef.current) return;

    // Set document title based on component
    document.title = "Map";

    const mapboxgl = window.mapboxgl;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    // initialize map only once
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.33207, 47.60621],
      zoom: 10,
    });

    // create marker
    const marker = new mapboxgl.Marker({
      color: "#000000", // customize color
    })
      .setLngLat([-122.33207, 47.60621]) // set default marker position in center of map
      .addTo(mapRef.current); // adds to map

    // set marker state based on location chosen from dropdown
    setMarker(marker);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [scriptLoaded]);

  // set landmarks object key & value pairs (landmark: [lng, lat])
  const landmarks = {
    center: [-122.33207, 47.60621],
    spaceneedle: [-122.349358, 47.620422],
    troll: [-122.34728, 47.650955],
    pikeplace: [-122.342148, 47.609631],
  };

  // get landmark value on form change
  function handleDropdownChange(e) {
    // use .setLngLat() method to update lng and lat on marker
    // based on landmarks object key from <option> value
    marker?.setLngLat(landmarks[e.target.value]);
  }

  return (
    <>
      <Script
        src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <h1>Mapbox Map</h1>
      <form>
        <label htmlFor="landmarks">Choose a landmark: </label>
        <select id="landmarks" onChange={handleDropdownChange}>
          <option value="center">Select one</option>
          <option value="spaceneedle">Space Needle</option>
          <option value="troll">The Fremont Troll</option>
          <option value="pikeplace">Pike Place Market</option>
        </select>
      </form>
      <div className="map-wrapper">
        <div ref={mapContainerRef} className="map-container" />
      </div>
    </>
  );
}
