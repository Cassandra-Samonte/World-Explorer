import { useState } from 'react'
import Card from '../Card';

export default function Gallery({ countries, updateDetails, setDetailsData }) {
    let galleryContent;

    if (countries.length > 0) {
        galleryContent = countries.map((country, index) => (
            <Card key={index} countryData={country} updateDetails={updateDetails} />
        ));
    } else {
        galleryContent = <p>Countries are loading...</p>;
    }

    return (
        <div className="gallery">
            {galleryContent}
        </div>
    );
}
