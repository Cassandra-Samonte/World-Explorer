import { Link } from 'react-router-dom'

export default function Card({ countryData, updateDetails }) {
    // console.log(countryData)

    return (
        <Link to={"/details"} onClick={() => { updateDetails(countryData) }}>
        <figure className="relative">
            <img
                className="w-60 h-40 m-2 mt-2 object-cover opacity-30"
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
    )
}
