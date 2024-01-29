import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";

// The number of columns change by resizing the window
const Footer = () => {
  return (
    <Box pb='2rem'>
      <Box w="100%" h="100%" py="4rem">
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Heading
            as="h1"
            fontSize={`clamp(3em, 8vw, 10em)`}
            textAlign={"center"}
          >
            Interested In Working Together?
          </Heading>

          <Text fontSize={`clamp(1.5em, 2vw, 2rem)`}>Contact me at:</Text>
          <Text fontSize={`clamp(1.5em, 2vw, 2rem)`}>
            briannabennett1284@gmail.com
          </Text>
        </Flex>
      </Box>
      <Flex
        minH={"2.5em"}
        border={"1px solid rgba(255,255,255,.15)"}
        borderRadius={"12px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt="24px"
        p={"16px 24px"}
        mx="2rem"
      >
        <Text>©Brianna Bennett. All Rights Reserved.</Text>
        <Text mb="1rem">©2024</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
