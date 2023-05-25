import Deal from "./Deal/Deal";
import Gallery from "./Gallery/Gallery";
import NewsLetter from "./NewsLetter/NewsLetter";
import OurService from "./OurService/OurService";
import Slider from "./Slider/Slider";
import TabsData from "./Tabs/TabsData";


const Home = () => {
    return (
        <>
            <header className="md:-mt-7">
                <Slider></Slider>
            </header>
            <main className="mx-5 md:mx-16 lg:mx-36">
                <Gallery></Gallery>
                <TabsData></TabsData>
                <OurService></OurService>
                <Deal></Deal>
            </main>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;