import React from 'react'
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()
  return (
    <Box bgImage={'/common-bg.svg'} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' position='relative' id='home'>
        <Box position='absolute' w='100%' h='100%' bgGradient='linear(to-r, rgba(245,245,245,.8), rgba(245,245,245,.8))'></Box>
        <Flex h='100vh' justifyContent='center' alignItems='center' position='relative' z-zIndex='1'>
            <Box>
                <Flex justifyContent='center' pb='30px'>
                    <Image 
                    borderRadius={'50%'}
                    boxSize='250px'
                    objectFit='cover'
                    src='/richard.jpg'
                    alt='Richard'
                    ></Image>
                </Flex>
                <Box>
                    <Heading fontSize='60px' color='#111111' fontWeight='900' textAlign='center'>Hey, I&apos;m Richard T. Dela Cruz</Heading>
                </Box>
                <Flex justifyContent='center' p='50px 0'>
                    <Text fontSize='22px' color='#111111' textAlign='center' lineHeight='35px' w={{lg:'59.5%', base:'100%'}}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</Text>
                </Flex>
                <Box display='flex' justifyContent='center'>
                    <Button bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' p='0 60px' onClick={()=> router.push('#project')}>PROJECTS</Button>
                </Box> 
            </Box> 
        </Flex>
    </Box>
  )
}

export default Home