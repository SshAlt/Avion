import './heroBlocksSection/HeroBlocks';
import HeroBlocks from "./heroBlocksSection/HeroBlocks";
import FirstFeature from "./firstFeaturesSection/FirstFeature";
import FirstListing from "./firstListingSection/FirstListing";
import SecondListing from "./secondListingSection/SecondListing";
import Email from "./emailSection/Email";
import SecondFeature from "./secondFeaturesSection/SecondFeature";

function Main() {
    return (
        <div>
        <HeroBlocks />
            <FirstFeature />
                <FirstListing />
                    <SecondListing />
                        <Email />
                            <SecondFeature />
        </div>
    );
}

export default Main;