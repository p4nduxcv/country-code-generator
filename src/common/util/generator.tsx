import { Countries } from "../data/country";

export function getCountryCode(countryName: string) {
  const formattedCountryName = countryName
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const x = Object.entries(Countries).find(
    ([key, value]) => value === formattedCountryName
  );

  if (x && x.length === 2) {
    return x[0].toLowerCase();
  }

  return "Not Found";
}
