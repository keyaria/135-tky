import * as React from "react";
import Gallery from "../components/Gallery";
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby";
import {
  AspectRatio,
  Box,
  ChakraProvider,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/global";
import Fonts from "../font.js";
import img_0Img from "../images/img_0.png";
import linesImg from "../images/135_Logo_Lines_Color.svg";
import WithSubnavigation from "../components/Navigation";
import Footer from "../components/Footer";
const StylingPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const pageStyles = {
    color: "white",
    background: "#020202",
    // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  };
  console.log("data", data);
  return (
    <ChakraProvider>
      <Fonts />

      <main style={pageStyles}>
        <Global styles={globalStyles} />

        <Flex w="100%" h="100vh" pos="relative" flexDir={"column"}>
          <WithSubnavigation />

          <Image src={linesImg} pos="absolute" />
          <Flex
            w={{ base: "100%", md: "50%" }}
            alignItems={{ base: "center", md: "end" }}
            justifyItems={"center"}
            p="0 3rem 3rem 3rem"
            zIndex={"10"}
            mb="5rem"
          >
            <Image src={img_0Img} />
          </Flex>
        </Flex>
        {/* 
        <AspectRatio ratio={1}>
          <iframe
            src="https://drive.google.com/file/d/1VjXDquUZsQr6g_VsAls9Ds46QRaEkbbD/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </AspectRatio> */}
        <Box bg="black">
          <Gallery images={data} />
        </Box>
        <Footer />
      </main>
    </ChakraProvider>
  );
};

export default StylingPage;
