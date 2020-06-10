import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactDetails
        cards={[
          {
            title: "Porto Alegre, RS",
            description: (
              <>
                <Address>
                  <AddressLine>Av. Praia de Belas, 1212 conj 424</AddressLine>
                  <AddressLine>Praia de Belas | 90110-000 </AddressLine>
                </Address>
                <Email>methodus@methodus.com</Email>
                <Phone>051 3208-0170 ou 051 98118-3770</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
