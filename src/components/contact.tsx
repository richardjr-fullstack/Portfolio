import React from 'react'
import { Box, Heading, Text, Button, Flex, Image, Divider } from '@chakra-ui/react'
import Form from './Form'

const Contact = () => {
  return (
    <Box bgImage={'/common-bg.svg'} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' position='relative' id='contact'>
    <Box position='absolute' w='100%' h='100%' bgGradient='linear(to-r, rgba(245,245,245,.8), rgba(245,245,245,.8))'></Box>
    <Box h='100vh' position='relative' z-zIndex='1' pt={'5%'}>
      <Box display= 'flex' flexDirection='column' justifyContent='center' alignItems='center' pb='30px'>
        <Heading fontSize='40px' color='#111111' fontWeight='700'>CONTACT</Heading>
        <Divider width='5%' height='5px' borderRadius='6px'  bgColor='#FACF0F' m='20px 0'></Divider>
        <Text fontSize='18px' color='#555' w='100%' textAlign='center'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</Text>
      </Box>
    <Form/>
    </Box>
</Box>
  )
}

export default Contact