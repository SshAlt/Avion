import './heroBlocksSection/HeroBlocks';
import HeroBlocks from "./heroBlocksSection/HeroBlocks";
import FirstFeature from "./firstFeaturesSection/FirstFeature";
import FirstListing from "./firstListingSection/FirstListing";
import SecondListing from "./secondListingSection/SecondListing";

function Main() {
    return (
        <div>
        <HeroBlocks />
        <FirstFeature />
        <FirstListing />
        <SecondListing />
        </div>
    );
}

export default Main;