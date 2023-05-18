import { getCountryCode } from '../common/index';

export default function Home() {
  const countryName = "Sri Lanka";
  const countryCode = getCountryCode(countryName);
  return (
    <>
      <h1>Contry Code : {countryCode} </h1>
    </>
  );
}
