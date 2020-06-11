import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import Features from "components/features/ThreeColSimple.js";
// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Sobre a Methodus</Subheading>}
        heading="Somos referência na região sul do país."
        buttonRounded={false}
        description="Temos mais de 20 anos de experiência. Oferecemos a ferramenta estratégica para a tomada de decisão do cliente de acordo com que pensa seu público-alvo."
        // primaryButtonUrl="/midia"
        primaryButtonText="Estamos na Mídia"
        imageSrc="https://images.unsplash.com/photo-1553013746-fd5454da7078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Veracidade</Subheading>}
        heading="Nossos clientes reconhecem a credibilidade."
        buttonRounded={false}
        description="Trabalhamos com muito planejamento, o que garante entrega de resultados sempre no prazo previsto. Temos total transparência no processo de coleta de informações."
        primaryButtonUrl="/clientes"
        primaryButtonText="Conheça"
        imageSrc="https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Respeito pelos dados."
        buttonRounded={false}
        description="Fazemos pesquisa e prestamos consultoria para partidos políticos, candidatos, órgãos governamentais, entidades de classe e empresas dos mais diversos setores."
        primaryButtonUrl="/faleconosco"
        primaryButtonText="Entre em Contato"
        imageSrc="https://images.unsplash.com/photo-1532726635173-491f83dcce3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
