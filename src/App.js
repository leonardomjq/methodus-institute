import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImage";
import Cards from "components/cards/PortfolioTwoCardsWithImage";
import FeaturesTwo from "components/features/DashedBorderSixFeatures";
import FeaturesOne from "components/features/TwoColSingleFeatureWithStats2";
import Testimonials from "components/testimonials/TwoColumnWithImageAndRating";
import Footer from "components/footers/FiveColumnDark";
import Forms from "components/forms/SimpleContactUs";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <Forms />
      <Cards />
      <Testimonials />
      <Footer />
    </AnimationRevealPage>
  );
}

export default App;
