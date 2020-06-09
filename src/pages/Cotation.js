import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import FAQ from "components/faqs/SingleCol.js";

export default function Cotation() {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial heading="Our Paying Customers" />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}