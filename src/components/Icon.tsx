
import { Box, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

const Icons = () => {
  return (
    <Flex bg='#fff' boxShadow='md' p='10px' w='3%' alignContent='center' position='absolute' zIndex='100' top='8%' borderRadius='md'>
    <Box>
        <Box p='5px'>
            <Link href={'https://www.facebook.com/'} target='_blank'>
                <Icon as={ImFacebook2} fontSize='25px'></Icon>
            </Link>
        </Box> 
        <Box p='5px'>
            <Link href={'https://mail.google.com/'} target='_blank'>
                <Icon as={MdEmail} fontSize='25px'></Icon>
            </Link>
        </Box>
        <Box p='5px'>
            <Link href={'https://github.com/'} target='_blank'>
                <Icon as={BsGithub} fontSize='25px'></Icon>
            </Link>
        </Box>
        <Box p='5px'>
            <Link href={'https://www.linkedin.com/'} target='_blank'>
                <Icon as={BsLinkedin} fontSize='25px'></Icon>
            </Link>
        </Box>
    </Box>
    </Flex>
  )
}

export default Icons