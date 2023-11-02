import { Link } from 'react-router-dom'

export default function Card({ countryData, updateDetails }) {
    // console.log(countryData)

    return (
        <Link
        to={"/details"}
        onClick={() => { updateDetails(countryData) }}
        >
            <figcaption>
                <h2>{countryData.name.common}</h2>
            </figcaption>
        </Link>
    )
}
