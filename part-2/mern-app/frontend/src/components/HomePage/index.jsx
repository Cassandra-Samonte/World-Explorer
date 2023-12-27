import Gallery from '../Gallery'
import FooterSection from '../FooterSection'
import myVideo from '../../assets/world.mp4'; 
import "../../assets/world-logo.png"


export default function HomePage(props) {
    return (
        <>
            {/* Video */}
            <div className="relative overflow-hidden">
                <video autoPlay loop playsInline muted className="w-full" style={{ height: '90vh', objectFit: 'cover' }}>
                    <source src={myVideo} type="video/mp4" />
                </video>
                {/* Overlay content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Explore the Countries of the World</h1>
                </div>
            </div>
            <Gallery
                countries={props.countries}
                updateDetails={props.setDetailsData}
            />
            <FooterSection />
        </>
    );
}
