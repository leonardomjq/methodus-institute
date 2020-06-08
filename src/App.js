import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImage";
import Cards from "components/cards/PortfolioTwoCardsWithImage";
import FeaturesOne from "components/features/DashedBorderSixFeatures";
import FeaturesTwo from "components/features/TwoColSingleFeatureWithStats2";
import Testimonials from "components/testimonials/TwoColumnWithImageAndRating";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <Cards />
      <Testimonials />
    </AnimationRevealPage>
  );
}

export default App;
