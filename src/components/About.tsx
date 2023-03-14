import { Badge, Box, Button, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()
  return (
    <Box bgGradient='linear(to-r, rgba(245,245,245,.8), rgba(245,245,245,.8))' w='100%' h='100vh' display= 'flex' flexDirection='column' justifyContent='center' id='about'>
      <Box display= 'flex' flexDirection='column' justifyContent='center' alignItems='center' pb='80px'>
      <Heading fontSize='40px' color='#111111' fontWeight='700'>ABOUT ME</Heading>
      <Divider width='1.5%' height='5px' borderRadius='6px'  bgColor='#FACF0F' m='20px 0'></Divider>
      <Text fontSize='18px' color='#555' w='40%' textAlign='center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Text>
      </Box>
      <Flex justifyContent='center' alignContent='center'>
        <Box width='35%' pr='50px'>
          <Heading fontSize='40px' color='#111111' fontWeight='700' pb='30px'>Get to know me!</Heading>
          <Text fontSize='18px' color='#555' pb='20px'>
          I&apos;m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
          </Text>
          <Text fontSize='18px' color='#555' pb='20px'>
          I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
          </Text>
          <Text fontSize='18px' color='#555' pb='20px'>
          I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
          </Text>
          <Button bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' p='0 60px' mt='30px' onClick={()=> router.push('#contact')}>Contact</Button>
        </Box>
        <Box width='25%'>
          <Heading pl='10px' fontSize='40px' color='#111111' fontWeight='700' pb='20px'>My Skills</Heading>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>HTML</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>CSS</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Javascript</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>React</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>SASS</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Github</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Responsive Design</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Strapi</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Next.js</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>SQL Basics</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Vue</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>WordPress</Badge>
            <Badge p='15px' m='10px' borderRadius='6px' fontSize='13px' fontWeight='700' variant='subtle' colorScheme='gray'>Shopify</Badge>
        </Box>
      </Flex>
    </Box>
  )
}
export default About
