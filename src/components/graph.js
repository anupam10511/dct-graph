import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { colorByRegion } from "../utils";
import { cities } from "../constants";
import Filter from "./filter";

const width = window.screen.width;
const height = window.screen.height;

const Graph = () => {
  const svgRef = useRef();
  const [activeRegion, setActiveRegion] = useState(null);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const filteredCities = activeRegion
      ? cities.filter((city) => city.region === activeRegion)
      : cities;

    console.log(filteredCities);

    // Set up the force simulation
    const simulation = d3
      .forceSimulation(filteredCities)
      .force("center", d3.forceCenter(width / 2, height / 3))
      .force("collision", d3.forceCollide().radius(50))
      .on("tick", ticked);

    // Add nodes
    const node = svg
      .selectAll("circle")
      .data(filteredCities)
      .enter()
      .append("circle")
      .attr("r", 30)
      .attr("fill", (d) => colorByRegion(d.region))
      .attr("stroke", "#333")
      .attr("stroke-width", 2);

    // Add labels
    const label = svg
      .selectAll("text")
      .data(filteredCities)
      .enter()
      .append("text")
      .attr("dy", 4)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-family", "sans-serif")
      .attr("fill", "#fff")
      .text((d) => d.name);

    function ticked() {
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y);
    }

    return () => {
      simulation.stop();
    };
  }, [activeRegion]);

  return (
    <div>
      <h3>Indian Cities Graph</h3>
      <Filter region={activeRegion} handleClick={setActiveRegion}></Filter>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
