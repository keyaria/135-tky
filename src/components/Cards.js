//import styles from './page.module.css'

import { Image, Button } from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react';
import React, { useRef } from 'react'
import { motion, useScroll, useTransform} from 'framer-motion'
import styled from '@emotion/styled';

const cardContainer = {
    width: '93vw',
    height: '100vh',

    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: '50px',
    // willChange: 'transform',
    // transform: 'translate3d(0px, -8vh, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
    // transformStyle: 'preserve-3d',
    // perspectiveOrigin: '50% 0',
    // transformOrigin: '50% 0',
 
  }

const CardBox = styled.div`
    display: flex;
    position: relative;
    border-radius: 15px;
    height: 90%;

    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    align-items: center;
    flex-direction: row;
    color: #292929;

  `
  //transform-origin: top;

const body = {
    display: 'flex',

    flexDirection: 'row',

    height: '100%',

 

    // gap: '50px',

  } 
const descriptionBox = {
  padding:'50px',
  flex: '1'
  } 
  const imageContainer = {
    position: 'relative',

    width: '50%',

    height: '100%',

    // borderRadius: '25px',

    overflow: 'hidden',

  }

  const InnerBox = styled.div`
    width: 100%;
    height: 100%
`
const Card = ({title, description, src, url, color, i}) => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        //What we want to track
      target: container,
        // When do we want to start  tracking and stoping
      offset: ['start end', 'end start']
  
    })
  
   // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
   // const cardScale = useTransform(scrollYProgress,[0, 1], [1, 1] )

  return (

    <Box ref={container} style={cardContainer}>

      <CardBox
        as={motion.div}
      
         //style={{scale: cardScale}}

        css={{backgroundColor: color, top:`calc(-5vh + ${i * 40}px)` }}

      >


        <Box style={body}>


          <Box style={descriptionBox}>
        <Heading textAlign='left' fontWeight={'900'} textTransform={'uppercase'} color='#292929' fontSize={'3rem'}>{title}</Heading>
            <p>{description}</p>

            <Button> Get In Touch</Button>



          </Box>


          <Box style={imageContainer}>
          {/* css={{scale: imageScale}} style={{scale: imageScale}} */}
            <InnerBox as={motion.div} >

              <Image

                fill
                objectFit={'cover'}
                src={src}
                // fallbackSrc='https://via.placeholder.com/500'
                alt="image" 
                h='100%'
                w='100%'
              />

            </InnerBox>

          </Box>

        </Box>

      </CardBox>

    </Box>

  )

}


export default Card