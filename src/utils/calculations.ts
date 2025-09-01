export const calculateWeight = (earthWeight: number, gravity: number): number => {
  return Math.round((earthWeight * gravity) * 100) / 100;
};

export const getWeightDifference = (planetWeight: number, earthWeight: number): number => {
  return Math.abs(planetWeight - earthWeight);
};

export const isHeavier = (planetWeight: number, earthWeight: number): boolean => {
  return planetWeight > earthWeight;
};