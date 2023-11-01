import Card from '../Card';

export default function Gallery({ countries }) {
    return (
        <div className="gallery">
            {countries.length > 0 ? 
                countries.map((country, index) => (
                    <Card key={index} countryData={country} />
                )) 
                : <p>Countries are loading...</p>}
        </div>
    );
}
