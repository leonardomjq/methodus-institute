import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

// PRIVATE

import agrale from "../../images/clients/private/agrale-logo.png";
import band from "../../images/clients/private/band-logo.png";
import braskem from "../../images/clients/private/braskem-logo.png";
import competence from "../../images/clients/private/competence-logo.png";
import correio from "../../images/clients/private/correio-logo.png";
import detranrs from "../../images/clients/private/detranrs-logo.png";
import fiergs from "../../images/clients/private/fiergs-logo.png";
import morya from "../../images/clients/private/morya-logo.png";
import multiplar from "../../images/clients/private/multiplar-logo.png";
import nycomed from "../../images/clients/private/nycomed-logo.png";
import odebrecht from "../../images/clients/private/odebrecht-logo.png";
import paqueta from "../../images/clients/private/paqueta-logo.png";
import pfizer from "../../images/clients/private/pfizer-logo.png";
import procerg from "../../images/clients/private/procerg-logo.png";
import sicredi from "../../images/clients/private/sicredi-logo.png";
import solvi from "../../images/clients/private/solvi-logo.png";
import stihl from "../../images/clients/private/stihl-logo.png";
import trt4 from "../../images/clients/private/trt4-logo.png";
import unimed from "../../images/clients/private/unimed-logo.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. 
   Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cardsPolitics = [
    {
      imageSrc: agrale,
    },
  ];

  const cardsPrivate = [
    {
      imageSrc: agrale,
    },
    {
      imageSrc: band,
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
    {
      imageSrc: "",
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          Quem <span tw="text-primary-500">Confia</span> na Gente
        </Heading>
        <Heading>
          Na <span tw="text-primary-300">Politica</span>
        </Heading>
        {cardsPolitics.map((card, i) => (
          <Column key={i}>
            <Card>
              <span>
                <img src={card.imageSrc} alt="" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <ThreeColumnContainer>
        <Heading>
          No <span tw="text-primary-300">Privado</span>
        </Heading>
        {cardsPrivate.map((card, i) => (
          <Column key={i}>
            <Card>
              <span>
                <img src={card.imageSrc} alt="" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
