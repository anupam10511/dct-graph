export function colorByRegion(region) {
  const colorMap = {
    North: "#00FFFF",
    South: "#8A2BE2",
    East: "#FF7F50",
    West: "#00008B",
  };
  return colorMap[region];
}
