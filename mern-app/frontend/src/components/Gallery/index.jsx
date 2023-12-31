// import { useState } from 'react';
import Card from '../Card';

export default function Gallery({ countries, updateDetails }) {
  let galleryContent;

  if (countries.length > 0) {
    galleryContent = countries.map((country, index) => (
      <Card key={index} countryData={country} updateDetails={updateDetails} />
    ));
  } else {
    galleryContent = <p>Countries are loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 pt-20 pb-10">
        {galleryContent}
      </div>
    </div>
  );
  
}
