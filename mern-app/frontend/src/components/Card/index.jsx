import { Link } from 'react-router-dom';

export default function Card({ countryData, updateDetails }) {
  // console.log(countryData)

  return (
    <Link to={"/details"} onClick={() => { updateDetails(countryData) }}>
      <figure className="relative group w-140 h-100 shadow-lg bg-white p-3 hover:scale-105 bg-opacity-30">
        <img
          className="w-60 h-40 m-1 mt-1 object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-300"
          src={countryData.flags.png}
          alt={countryData.flags.alt}
        />
        <figcaption className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-full">
            {countryData.name.common}
          </h2>
        </figcaption>
      </figure>
    </Link>
  );
}
