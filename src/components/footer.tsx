import { Box, Flex, Heading, Text, Icon, Divider } from '@chakra-ui/react'
import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box bg={'#000'} h='400px' id='footer'>
        <Flex justifyContent='center' p={'6% 2%'}>
            <Box>
                <Heading color='#fff' fontSize='22px' pb={'40px'}>Richard T. Dela Cruz Jr.</Heading>
                <Text color='#fff' w={'55%'} fontSize='16px' fontWeight={'300'}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</Text>
            </Box>
                <Box>
                    <Heading color='#fff' fontSize='22px' pb={'20px'}>SOCIAL</Heading>
                    <Flex>
                        <Box p='5px'>
                         <Link href={'https://www.facebook.com/'} target='_blank'>
                                <Icon as={ImFacebook2} fontSize='20px' color='#fff' mr={'10px'}></Icon>
                         </Link>
                        </Box> 
                        <Box p='5px'>
                            <Link href={'https://mail.google.com/'} target='_blank'>
                                <Icon as={MdEmail} fontSize='20px' color='#fff' mr={'10px'}></Icon>
                            </Link>
                        </Box>
                        <Box p='5px'>
                            <Link href={'https://github.com/'} target='_blank'>
                                <Icon as={BsGithub} fontSize='20px' color='#fff' mr={'10px'}></Icon>
                            </Link>
                        </Box>
                        <Box p='5px'>
                            <Link href={'https://www.linkedin.com/'} target='_blank'>
                                <Icon as={BsLinkedin} fontSize='20px' color='#fff' mr={'10px'}></Icon>
                            </Link>
                        </Box>
                    </Flex>
                </Box>    
        </Flex>

        <Flex justifyContent='center'>
            <Divider w={'58.5%'}></Divider>
        </Flex>

        <Flex justifyContent='center' pt={'1%'}>
        <Box color='#fff' fontSize='13px' fontWeight={'500'}>© Copyright 2023. Made by <Link href={'https://mail.google.com/'}>Richard T. Dela Cruz Jr.</Link></Box>
        </Flex>
    </Box>
  )
}

export default Footer