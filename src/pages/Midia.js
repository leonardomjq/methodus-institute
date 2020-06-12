import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

// CONSTS
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Estamos em todos os lugares",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "População",
      date: "18/03/2020",
      title:
        "O impacto do coronavírus na rotina da população em Venâncio Aires",
      description:
        "Pesquisa indica que a população ainda está despreocupada com o coronavírus.",
      url:
        "https://folhadomate.com/livre/pesquisa-indica-que-a-populacao-ainda-esta-despreocupada-com-o-coronavirus/",
      featured: true,
    },
    {
      imageSrc:
        "https://vermelho.org.br/wp-content/uploads/2019/10/29745981438_6000b39ec9_o135481.jpg",
      category: "Governo",
      date: "08/10/2019",
      title: "Manuela D’Ávila lidera pesquisa à Prefeitura de Porto Alegre",
      description:
        "Segundo pesquisa do Instituto Methodus, Manu pontua em primeiro lugar na capital gaúcha, tanto na sondagem espontânea quanto na estimulada.",
      url:
        "https://vermelho.org.br/2019/10/08/manuela-davila-lidera-pesquisa-a-prefeitura-de-porto-alegre-2/",
      featured: true,
    },
    {
      imageSrc:
        "https://www.correiodopovo.com.br/image/policy:1.323292:1557879843/Prefeitura-Pagamento.jpg?f=2x1&$p$f=719fdff&w=2400&$w=d2ad2f2",
      category: "População",
      date: "24/12/2019",
      title: "Números mostram disputa pela Prefeitura de Porto Alegre",
      description:
        "Instituto Methodus avaliou a intenção de votos em cinco simulações eleitorais para o pleito de outubro de 2020.",
      url:
        "https://www.correiodopovo.com.br/not%C3%ADcias/pol%C3%ADtica/n%C3%BAmeros-mostram-disputa-pela-prefeitura-de-porto-alegre-1.388865",
      featured: true,
    },
    {
      imageSrc:
        "https://www.correiodopovo.com.br/image/policy:1.383620:1575037043/.jpg?f=2x1&$p$f=7d891a5&w=2400&$w=d2ad2f2",
      category: "Jornal",
      date: "18/03/2020",
      title: "Leite tem 57% e Sartori, 42%, diz Instituto Methodus",
      description:
        "A pesquisa, encomendada pela TV Bandeirantes, foi realizada entre os dias 20 e 23 de outubro, e entrevistou 1500 pessoas em todo o estado.",
      url:
        "https://www.jornaldocomercio.com/_conteudo/politica/2018/10/654386-leite-tem-57-e-sartori-42--diz-instituto-methodus.html",
      featured: true,
    },
  ],
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post
                  className="group"
                  as="a"
                  href={post.url}
                  target="_blank"
                  rel="noopener"
                >
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && (
                      <Description>{post.description}</Description>
                    )}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
