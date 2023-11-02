import Gallery from '../Gallery'
import FooterSection from '../FooterSection'
import "../../assets/world-logo.png"


export default function HomePage(props) {
    return (
        <>
            <Gallery
                countries={props.countries}
                updateDetails={props.setDetailsData}
            />
            <FooterSection/>
        </>
    );
}
