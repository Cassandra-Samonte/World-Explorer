export default function Card({ countryData }) {
    console.log(countryData)

    return (
        <figure>
            <figcaption>
                <h2>{countryData.name.common}</h2>
            </figcaption>
        </figure>
    )
}
