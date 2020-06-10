import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImage";
import FeaturesOne from "components/features/TwoColSingleFeatureWithStats2";
import FeaturesTwo from "components/features/OurServices";
import Forms from "components/forms/SimpleContactUs";
import Cards from "components/cards/PortfolioTwoCardsWithImage";
import Footer from "components/footers/MiniCenteredFooter";

export default function Home() {
  return (
    <div>
      <AnimationRevealPage>
        <Hero />
        <FeaturesOne />
        <FeaturesTwo />
      </AnimationRevealPage>
      <Forms />
      <AnimationRevealPage>
        <Cards />
        <Footer />
      </AnimationRevealPage>
    </div>
  );
}
