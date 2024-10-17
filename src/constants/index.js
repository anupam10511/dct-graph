export const cities = [
  { id: "Mumbai", latitude: 19.076, longitude: 72.8777, region: "West" },
  { id: "Delhi", latitude: 28.7041, longitude: 77.1025, region: "North" },
  { id: "Bangalore", latitude: 12.9716, longitude: 77.5946, region: "South" },
  { id: "Kolkata", latitude: 22.5726, longitude: 88.3639, region: "East" },
  { id: "Chennai", latitude: 13.0827, longitude: 80.2707, region: "South" },
  { id: "Hyderabad", latitude: 17.385, longitude: 78.4867, region: "South" },
  { id: "Pune", latitude: 18.5204, longitude: 73.8567, region: "West" },
  { id: "Ahmedabad", latitude: 23.0225, longitude: 72.5714, region: "West" },
  { id: "Jaipur", latitude: 26.9124, longitude: 75.7873, region: "North" },
  { id: "Lucknow", latitude: 26.8467, longitude: 80.9462, region: "North" },
];

export const edges = [
  { from: "Mumbai", to: "Delhi" },
  { from: "Delhi", to: "Bangalore" },
  { from: "Kolkata", to: "Chennai" },
  { from: "Hyderabad", to: "Bangalore" },
  { from: "Pune", to: "Ahmedabad" },
  { from: "Jaipur", to: "Lucknow" },
  { from: "Mumbai", to: "Pune" },
  { from: "Delhi", to: "Lucknow" },
  { from: "Pune", to: "Lucknow" },
  { from: "Bangalore", to: "Lucknow" },
];

export const regions = ["North", "South", "East", "West"];
