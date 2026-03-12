import Banner from "./Components/Banner";
import { aboutPageData } from "./Components/PageData";
import Residential from "./Components/Residential";
import Spa from "./Components/Spa";

export default function AboutUsPage() {
    return (
        <main className="bg-background">
            <Banner {...aboutPageData.bannerData} />
            <Residential {...aboutPageData.residentialBlocksData} />
            <Spa {...aboutPageData.spaData} />
        </main>
    );
}