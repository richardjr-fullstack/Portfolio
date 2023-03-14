import React from 'react'
import { Box, Container, Heading, HStack, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'


const NavBar = () => {
    const router = useRouter()
  return (
    <Box width='100%' bg='#FFFFFF' color='white' position='fixed' top='0' zIndex='100000'>
    <Container height='30px' maxW='xxl' display='flex' justifyContent='space-between' alignItems='center' p='40px 80px'>
        <Box display='flex' justifyContent='space-evenly' alignItems='center'>
        <Image
        boxSize='70px'
        objectFit='cover'
        src='/chad1.png'
        alt='Richard T. Dela Cruz Jr.' onClick={()=> router.push('#home')}>
        </Image>
        <Heading fontSize='21px' fontFamily='Source Sans Pro' color='#333333' fontWeight='700' p='0 0 0 25px'>
            RICHARD DELA CRUZ JR.
        </Heading>
        </Box>
        <HStack spacing='70px' fontSize='18px' fontFamily='Source Sans Pro' color='#333333' fontWeight='700'>
            <Box>
                <Link onClick={()=> router.push('#home')}>
                    HOME
                </Link>
            </Box>
            <Box>
                <Link onClick={()=> router.push('#about')}>
                    ABOUT
                </Link>
            </Box>
            <Box>
                <Link onClick={()=> router.push('#project')}>
                    PROJECTS
                </Link>
            </Box>
            <Box>
                <Link onClick={()=> router.push('#contact')}>
                    CONTACT
                </Link>
            </Box>
        </HStack>
    </Container>
    </Box>
  )
}

export default NavBar