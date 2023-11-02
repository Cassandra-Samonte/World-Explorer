import Gallery from '../Gallery'

export default function HomePage(props) {
    return (
        <>
            <h1>World Explorer</h1>
            <Gallery
                countries={props.countries}
                updateDetails={props.setDetailsData}
                // url={`https://restcountries.com/v3.1/all`}
            />

            {/* <DetailsPage key={index} countryData={country} /> */}

        </>
    );
}
