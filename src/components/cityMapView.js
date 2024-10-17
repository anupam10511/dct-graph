import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import indiaGeoJSON from "../india.json";
import { cities, edges } from "../constants";
import Filter from "./filter";
const CityMapView = () => {
  const width = 800;
  const height = 600;

  const projection = d3
    .geoMercator()
    .center([78.9629, 23.5937]) // Center of India
    .scale(1000) // Zoom scale
    .translate([width / 2, height / 2]); // Center the map

  const pathGenerator = d3.geoPath().projection(projection);

  const [activeRegion, setActiveRegion] = useState(null);

  // Filter cities by region
  const filteredCities = activeRegion
    ? cities.filter((city) => city.region === activeRegion)
    : cities;

  const filteredEdges = edges.filter((edge) => {
    const fromCity = filteredCities.find((city) => city.id === edge.from);
    const toCity = filteredCities.find((city) => city.id === edge.to);
    return fromCity && toCity;
  });

  const cityNodes = filteredCities.map((city) => {
    const [x, y] = projection([city.longitude, city.latitude]);
    return (
      <g key={city.id}>
        <circle cx={x} cy={y} r={5} fill="blue" stroke="black" />
        <text x={x + 8} y={y} fontSize="10" fill="black">
          {city.id}
        </text>{" "}
      </g>
    );
  });

  const paths = filteredEdges.map((edge, index) => {
    const fromCity = filteredCities.find((city) => city.id === edge.from);
    const toCity = filteredCities.find((city) => city.id === edge.to);

    if (!fromCity || !toCity) return null;

    const [x1, y1] = projection([fromCity.longitude, fromCity.latitude]);
    const [x2, y2] = projection([toCity.longitude, toCity.latitude]);

    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="red"
        strokeWidth="2"
      />
    );
  });

  const handleRegionChange = (region) => {
    setActiveRegion(region);
  };

  return (
    <div>
      <Filter region={activeRegion} handleClick={setActiveRegion}></Filter>

      <svg width={width} height={height}>
        <g>
          {indiaGeoJSON.features.map((feature, index) => (
            <path
              key={index}
              d={pathGenerator(feature)}
              fill="#E5E5E5"
              stroke="#000"
            />
          ))}
        </g>

        {paths}

        {cityNodes}
      </svg>
    </div>
  );
};

export default CityMapView;
