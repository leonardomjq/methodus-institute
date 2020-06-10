import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import Features from "components/features/ListOfClients";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features />
      <Footer />
    </AnimationRevealPage>
  );
};
