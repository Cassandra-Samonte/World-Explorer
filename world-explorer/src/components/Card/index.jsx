export default function Card({ countries }) {
    return (
        <figure>
            <figcaption>
                <h2>{countries.name.common}</h2>
            </figcaption>
        </figure>
    )
}
