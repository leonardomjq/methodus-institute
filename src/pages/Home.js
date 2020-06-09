import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImage";
import FeaturesOne from "components/features/TwoColSingleFeatureWithStats2";
import FeaturesTwo from "components/features/DashedBorderSixFeatures";
import Forms from "components/forms/SimpleContactUs";
import Cards from "components/cards/PortfolioTwoCardsWithImage";
// import Testimonials from "components/testimonials/TwoColumnWithImage";
import Footer from "components/footers/MiniCenteredFooter";

export default function Home() {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <Forms />
      <Cards />
      {/* <Testimonials /> */}
      <Footer />
    </AnimationRevealPage>
  );
}
