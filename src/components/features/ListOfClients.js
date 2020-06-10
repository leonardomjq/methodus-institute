import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

// POLITICS
import dem from "../../images/clients/politics/dem-logo.jpg";
import pdt from "../../images/clients/politics/pdt-logo.jpg";
import phs from "../../images/clients/politics/phs-logo.jpg";
import pmdb from "../../images/clients/politics/pmdb-logo.jpg";
import pp from "../../images/clients/politics/pp-logo.jpg";
import pps from "../../images/clients/politics/pps-logo.jpg";
import prb from "../../images/clients/politics/prb-logo.jpg";
import psb from "../../images/clients/politics/psb-logo.jpg";
import psdb from "../../images/clients/politics/psdb-logo.jpg";
import ptb from "../../images/clients/politics/ptb-logo.jpg";
import pv from "../../images/clients/politics/pv-logo.jpg";

// PRIVATE
import agrale from "../../images/clients/private/agrale-logo.jpg";
import band from "../../images/clients/private/band-logo.jpg";
import braskem from "../../images/clients/private/braskem-logo.jpg";
import competence from "../../images/clients/private/competence-logo.jpg";
import correio from "../../images/clients/private/correio-logo.jpg";
import detranrs from "../../images/clients/private/detranrs-logo.jpg";
import fiergs from "../../images/clients/private/fiergs-logo.jpg";
import morya from "../../images/clients/private/morya-logo.jpg";
import multiplar from "../../images/clients/private/multiplar-logo.jpg";
import nycomed from "../../images/clients/private/nycomed-logo.jpg";
import odebrecht from "../../images/clients/private/odebrecht-logo.jpg";
import paqueta from "../../images/clients/private/paqueta-logo.jpg";
import pfizer from "../../images/clients/private/pfizer-logo.jpg";
import procerg from "../../images/clients/private/procerg-logo.jpg";
import sicredi from "../../images/clients/private/sicredi-logo.jpg";
import solvi from "../../images/clients/private/solvi-logo.jpg";
import stihl from "../../images/clients/private/stihl-logo.jpg";
import trt4 from "../../images/clients/private/trt4-logo.jpg";
import unimed from "../../images/clients/private/unimed-logo.jpg";

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
      imageSrc: dem,
    },
    {
      imageSrc: pdt,
    },
    {
      imageSrc: phs,
    },
    {
      imageSrc: pmdb,
    },
    {
      imageSrc: pp,
    },
    {
      imageSrc: pps,
    },
    {
      imageSrc: prb,
    },
    {
      imageSrc: psb,
    },
    {
      imageSrc: psdb,
    },
    {
      imageSrc: ptb,
    },
    {
      imageSrc: pv,
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
      imageSrc: braskem,
    },
    {
      imageSrc: unimed,
    },
    {
      imageSrc: correio,
    },
    {
      imageSrc: detranrs,
    },
    {
      imageSrc: sicredi,
    },
    {
      imageSrc: fiergs,
    },
    {
      imageSrc: morya,
    },
    {
      imageSrc: multiplar,
    },
    {
      imageSrc: competence,
    },
    {
      imageSrc: nycomed,
    },
    {
      imageSrc: odebrecht,
    },
    {
      imageSrc: paqueta,
    },
    {
      imageSrc: pfizer,
    },
    {
      imageSrc: procerg,
    },
    {
      imageSrc: stihl,
    },
    {
      imageSrc: solvi,
    },
    {
      imageSrc: trt4,
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          Na <span tw="text-primary-400">Política</span>
        </Heading>
        {cardsPolitics.map((card, i) => (
          <Column key={i}>
            <Card>
              <span>
                <img src={card.imageSrc} alt="logotipo de partidos políticos" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <ThreeColumnContainer>
        <Heading>
          No <span tw="text-primary-400">Privado</span>
        </Heading>
        {cardsPrivate.map((card, i) => (
          <Column key={i}>
            <Card>
              <span>
                <img src={card.imageSrc} alt="logotipo de empresas privadas" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
