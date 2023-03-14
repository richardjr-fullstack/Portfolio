import { Box, Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Project = () => {
  return (
    <Box pb={'5rem'} pt={'10rem'} w='100%' h='auto' display= 'flex' flexDirection='column' justifyContent='center' id='project'>
      <Box display= 'flex' flexDirection='column' justifyContent='center' alignItems='center' pb='80px'>
      <Heading fontSize='40px' color='#111111' fontWeight='700'>PROJECTS</Heading>
      <Divider width='1.5%' height='5px' borderRadius='6px'  bgColor='#FACF0F' m='20px 0'></Divider>
      <Text fontSize='18px' color='#555' w='40%' textAlign='center'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</Text>
      </Box>

      <Box>
        
        <Flex justifyContent='center' mb='6rem'>
            <Box w='40%'>
                <Image src='/project1.jpeg'  w='100%' h='auto' alt='Project1'></Image>
            </Box>
            <Box w='23%' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Heading pb={'40px'}>Dopefolio</Heading>
                <Text pb={'40px'}>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally   </Text>
                <Button bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' p='0 60px'>PROJECTS</Button>
            </Box>
        </Flex>

        <Flex justifyContent='center' mb='6rem'>
            <Box w='40%'>
                <Image src='/project1.jpeg'  w='100%' h='auto' alt='Project1'></Image>
            </Box>
            <Box w='23%' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Heading pb={'40px'}>Dopefolio</Heading>
                <Text pb={'40px'}>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally   </Text>
                <Button bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' p='0 60px'>PROJECTS</Button>
            </Box>
        </Flex>

        <Flex justifyContent='center' mb='6rem'>
            <Box w='40%'>
                <Image src='/project1.jpeg'  w='100%' h='auto' alt='Project1'></Image>
            </Box>
            <Box w='23%' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Heading pb={'40px'}>Dopefolio</Heading>
                <Text pb={'40px'}>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally   </Text>
                <Button bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' p='0 60px'>PROJECTS</Button>
            </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Project
