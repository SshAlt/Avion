import './heroBlocksSection/HeroBlocks';
import HeroBlocks from "./heroBlocksSection/HeroBlocks";
import FirstFeature from "./firstFeaturesSection/FirstFeature";
import FirstListing from "./firstListingSection/FirstListing";
import SecondListing from "./secondListingSection/SecondListing";
import Email from "./emailSection/Email";

function Main() {
    return (
        <div>
        <HeroBlocks />
            <FirstFeature />
                <FirstListing />
                    <SecondListing />
                        <Email />
        </div>
    );
}

export default Main;