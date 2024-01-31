import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/global";
import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
  chakra,
  Image,
  Grid,
  Icon,
  Show,
  Hide,
  useMediaQuery,
} from "@chakra-ui/react";
import heroImage from "../images/heroImage.png";
import showImg from "../images/IMG_8539.jpeg";
import rightsImg from "../images/rights.jpg";
import img_0Img from "../images/img_0.png";
import socialImg from "../images/social.jpg";
import stylingImg from "../images/Website/Self Kimono Shoot 3.jpg";
import { Heading } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import WithSubnavigation from "../components/Navigation";

import { Player } from "@lottiefiles/react-lottie-player";
import Card from "../components/Cards";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, Variants, useAnimation } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useInView } from "react-intersection-observer";

import styled from "@emotion/styled";

import Spline from "@splinetool/react-spline";
import Fonts from "../font.js";
import {
  MdOutlineGrain,
  MdOutlineGraphicEq,
  MdOutlineGridOn,
} from "react-icons/md";
import Footer from "../components/Footer";
const pageStyles = {
  color: "white",
  background: "#020202",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const player = {
  position: "absolute",
};

const SectionBox = styled.div`
  z-index: 3;
  grid-row-gap: 8vh;

  flex-direction: column;
  align-items: center;
  padding-top: 6vh;
  display: flex;
  position: relative;
`;

export const projects = [
  {
    title: "Social Media Management",

    description:
      "I currently work as the Project Manager at Bestimmung Creative, a Tokyo-based creative agency. My client is G-Shock Casio, the renowned watch brand. My role involves collaborating with Instagram influencers to bring to life the unique charm of G-Shock's 'Baby-G OOTD' watches. From scouting the perfect influencers to orchestrating photoshoots, I ensure that every campaign shoot and partnering influencer meets my clients needs and standards.",

    src: socialImg,

    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

    color: "#FFFFFF",
    buttonText: "Get In Contact",
  },

  {
    title: "Styling",

    description: "",

    src: stylingImg,

    link: "/135tky",

    buttonText: "See Works",
    color: "white",
  },

  {
    title: "Rights Management",

    description:
      "As the Rights Manager for CPRA, with the Japanese Government, I worked in the international department and was responsible for communication between our international partners and my Japanese agency. My work in rights management involved navigating the legal and financial complexities of intellectual property, ensuring fair compensation for both creators and rights holders as well as editing and translating company documents into English and Japanese in addition to routinely updating the company’s English website. This experience underscores my proficiency in international compliance, web design, financial acumen, and effective communication skills, which I now leverage as a freelancer.",

    src: rightsImg,

    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",

    color: "white",
    buttonText: "Get In Contact",
  },
];
const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};
const IndexPage: React.FC<PageProps> = () => {
  const controls = useAnimation();
  const [isFinished, setIsFinished] = useState(false);
  const container = useRef(null);
  const playerRef = useRef();
  const [ref, inView] = useInView();
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  useEffect(() => {
    // const lenis = new Lenis();

    // function raf(time: any) {
    //   lenis.raf(time);
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
  }, [controls, inView]);
  //const bg = useColorModeValue("white", "gray.800");

  const startAnimation = () => {
    setIsFinished(true); // make use of the player and call methods
  };
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const sequence = [
    ["ul", { opacity: 1 }],
    ["li", { x: [-100, 0] }, { at: 1 }],
  ];

  return (
    <ChakraProvider>
      <Fonts />

      <main style={pageStyles}>
        <Global styles={globalStyles} />

        {/* Body */}
        <Box
          w="100%"
          h="100vh"
          // css={{ backgroundImage: `url(${heroImage})` }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize={"cover"}
        >
          {/* <lottie-player src="../components/data2.json"  background="transparent"  speed="1"  style="width: 300px; height: 250px;"  loop  autoplay></lottie-player> */}

          <Flex
            flexDir="column"
            h="100%"
            color="white"
            overflow={"hidden"}
            pos="relative"
          >
            {/* <div id="lottie"></div> */}
            {/* <ReactBodymovin options={bodymovinOptions} /> */}
            {/* <iframe src="https://lottie.host/embed/199ade72-150b-4d17-b80e-f9f3addf810d/prdoptz80P.json"></iframe> */}
            <Player
              autoplay
              loop={false}
              keepLastFrame={true}
              src={
                isLargerThan500
                  ? "https://lottie.host/982bad1a-8500-446d-83f6-ca3050c33924/f5fjjVnCHE.json"
                  : "https://lottie.host/ea0bd5b6-0469-4f0c-856a-9dcc03366c3e/16p6YTtTL3.json"
              }
              style={player}
              ref={playerRef}
              onEvent={(event) => {
                if (event === "complete") startAnimation(); // check event type and do something
              }}
            />
            {/* initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 10 }}*/}
            {isFinished && (
              <Box
                zIndex={100}
                h="100%"
                as={motion.div}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"space-between"}
                animate={
                  !isFinished
                    ? { opacity: 0, scale: 0.5 }
                    : { opacity: 1, scale: 1 }
                }
              >
                <WithSubnavigation />

                <Center flexDir="column" h="60%" zIndex={100}>
                  <Show below="md">
                    <Heading
                      as="h1"
                      fontSize="8rem"
                      textAlign="center"
                      mb="0"
                      fontWeight="700"
                      textTransform={"uppercase"}
                      color="#bfea88"
                    >
                      Brianna Bennett
                    </Heading>
                  </Show>
                  {/* <Heading as="h1" fontSize='8rem' textAlign="center" mb='0' fontWeight='700' textTransform={'uppercase'}  color='#bfea88'
>Brianna Bennett</Heading> */}
                  <Hide below="md">
                    <Spline
                      scene="https://prod.spline.design/sYQGKl6Q5k8rUhYA/scene.splinecode"
                      w="auto"
                    />{" "}
                  </Hide>
                </Center>
                <Flex h="30%" pb="2em" paddingX="1em" color="#bfea88">
                  <Show above="sm">
                    <Heading
                      w="300px"
                      textAlign="center"
                      m="auto"
                      fontWeight="900"
                      fontSize="2rem"
                      color="#bfea88"
                    >
                      {" "}
                      Based In <br /> Tokyo
                    </Heading>
                  </Show>
                  <Spacer />
                  <VStack
                    w="600px"
                    textAlign="center"
                    textTransform="uppercase"
                  >
                    <Text
                      fontSize="xl"
                      fontWeight="300"
                      letterSpacing="5px"
                      color="#bfea88"
                    >
                      Working on projects for
                    </Text>
                    <HStack spacing="18px" justifyContent="center">
                      <chakra.a fontSize="lg" fontWeight="900">
                        Fashion
                      </chakra.a>{" "}
                      <chakra.a fontSize="lg" fontWeight="900">
                        Social Media
                      </chakra.a>{" "}
                      <chakra.a fontSize="lg" fontWeight="900">
                        Digital
                      </chakra.a>{" "}
                    </HStack>
                    <Text textTransform="none">
                      Collaborating with ambitious brands that have powerful
                      stories to tell I work Independently and with creative
                      Freelancers, studios and Agencies
                    </Text>
                  </VStack>
                  <Spacer />
                  <Show above="sm">
                    <Box
                      w="300px"
                      bg="black"
                      borderRadius="10%"
                      overflow={"hidden"}
                      m="0 4rem 1rem 0"
                    >
                      {/* <chakra.img src='../images/IMG_8539.jpeg' w='600px' h='500px' /> */}
                      <Image src={showImg} bg="gray.400" m="auto 0" />
                    </Box>
                  </Show>
                </Flex>
              </Box>
            )}
          </Flex>
        </Box>

        {/* Based in */}
        <Box w="100%" h="100vh" paddingX="2em" position="relative" py="4rem">
          <Box w="100%" h="1px" bg="white" mb="1em"></Box>
          <Grid
            gridTemplateColumns={{ md: "1fr 1fr" }}
            gridAutoColumns={"1fr"}
            gridTemplateRows={"auto"}
          >
            <Box>
              <Heading as={"h2"}>ABOUT ME</Heading>
            </Box>
            <Text
              as={motion.p}
              color="white"
              fontSize={`clamp(1rem, 2rem , 2rem)`}
              initial="hidden"
              animate={controls}
              variants={fadeInUpAnimation}
              ref={ref}
            >
              Originally from Chicago,IL USA I moved to Japan in 2017 where I
              worked as an English teacher for three years before transitioning
              into the creative arts field. Through my exploration I discovered
              my true calling: Fashion Styling and Social Media Management.
            </Text>
          </Grid>

          {/* <Heading color='white' fontSize='clamp(2rem, 14vw , 13rem)' fontWeight='300' letterSpacing='0px'><chakra.span color="#bfea88">Born In </chakra.span>Chicago</Heading>
      <Heading color='white' fontSize='13rem' fontWeight='300' letterSpacing='0px'>Based In <chakra.span color="#bfea88">Tokyo</chakra.span> </Heading>
      <chakra.img src='./heroImage.png' w='600px' h='500px' position='absolute' /> */}
        </Box>

        <Box w="100%" h="100%" paddingX="2em" position="relative" py="4rem">
          <Box w="100%" h="1px" bg="white" mb="1em"></Box>
          <Grid
            gridTemplateColumns={{ md: "1fr 1fr" }}
            gridAutoColumns={"1fr"}
            gridTemplateRows={"auto"}
          >
            <Box>
              <Heading as={"h2"}>HERE'S WHERE I DO</Heading>
            </Box>
            <Grid
              gridColumnGap={"1.5rem"}
              gridRowGap={"1.5rem"}
              gridTemplateRows={"auto auto"}
              gridTemplateColumns={"1fr 1fr"}
              gridAutoColumns={"1fr"}
            >
              <Flex
                gridColumnGap={"8em"}
                gridRowGap={"8em"}
                borderRadius={".5rem"}
                flexDir={"column"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                pos={"relative"}
                overflow={"hidden"}
                padding={"1.25rem 1.5rem 1.25rem 1.25rem"}
                bg={"rgba(255,255,255,0.1)"}
                color={"white"}
              >
                <Box>
                  <Box
                    bg="white"
                    w="4rem"
                    h="4rem"
                    mb="1rem"
                    borderRadius={".5rem"}
                    padding={".8em"}
                  >
                    <Icon
                      as={MdOutlineGrain}
                      color={"green"}
                      w="100%"
                      h="100%"
                    />
                  </Box>
                  <Heading as="h3">Languages</Heading>
                </Box>
                <VStack>
                  <Text>Japanese</Text>
                  <Text>English</Text>
                  <Text>Mandarin</Text>
                </VStack>
              </Flex>
              <Flex
                gridColumnGap={"8em"}
                gridRowGap={"8em"}
                borderRadius={".5rem"}
                flexDir={"column"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                pos={"relative"}
                overflow={"hidden"}
                padding={"1.25rem 1.5rem 1.25rem 1.25rem"}
                bg={"rgba(255,255,255,0.1)"}
                color={"white"}
              >
                <Box>
                  <Box
                    bg="white"
                    w="4rem"
                    h="4rem"
                    mb="1rem"
                    borderRadius={".5rem"}
                    padding={".8em"}
                  >
                    <Icon
                      as={MdOutlineGraphicEq}
                      color={"green"}
                      w="100%"
                      h="100%"
                    />
                  </Box>
                  <Heading as="h3">Software</Heading>
                </Box>
                <VStack>
                  <Text>Cap Cut</Text>
                  <Text>Google Presentation</Text>
                  <Text>Microsoft Office</Text>
                </VStack>
              </Flex>
              <Flex
                gridColumnGap={"8em"}
                gridRowGap={"8em"}
                borderRadius={".5rem"}
                flexDir={"column"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                pos={"relative"}
                overflow={"hidden"}
                padding={"1.25rem 1.5rem 1.25rem 1.25rem"}
                bg={"rgba(255,255,255,0.1)"}
                color={"white"}
                gridArea={"2 / 1 / 3 / 3"}
              >
                <Box>
                  <Box
                    bg="white"
                    w="4rem"
                    h="4rem"
                    mb="1rem"
                    borderRadius={".5rem"}
                    padding={".8em"}
                  >
                    <Icon
                      as={MdOutlineGridOn}
                      color={"green"}
                      w="100%"
                      h="100%"
                    />
                  </Box>
                  <Heading as="h3">Skill Set </Heading>
                </Box>
                <Box>
                  <HStack>
                    <Text>Content Creation</Text>
                    <Text>Video Editing</Text>
                    <Text>Copy Writing</Text>
                    <Text>Contract Negotiation</Text>
                    <Text>PR & Communications</Text>
                    <Text>Translation</Text>
                  </HStack>
                </Box>
              </Flex>
            </Grid>
          </Grid>

          {/* <Heading color='white' fontSize='clamp(2rem, 14vw , 13rem)' fontWeight='300' letterSpacing='0px'><chakra.span color="#bfea88">Born In </chakra.span>Chicago</Heading>
      <Heading color='white' fontSize='13rem' fontWeight='300' letterSpacing='0px'>Based In <chakra.span color="#bfea88">Tokyo</chakra.span> </Heading>
      <chakra.img src='./heroImage.png' w='600px' h='500px' position='absolute' /> */}
        </Box>
        {/* WORKS */}
        <SectionBox ref={container}>
          <Text
            color="white"
            textAlign="center"
            fontSize={{ base: "8rem", md: "10rem" }}
          >
            Works
          </Text>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </SectionBox>

        <Footer />
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
