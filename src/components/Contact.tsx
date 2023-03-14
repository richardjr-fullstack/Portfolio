import React from 'react'
import { Box, Heading, Text, Divider, Flex, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Box bgImage={'/common-bg.svg'} bgRepeat='no-repeat' bgSize='cover' w='100%' h='100%' position='relative' id='contact'>
    <Box position='absolute' w='100%' h='100%' bgGradient='linear(to-r, rgba(245,245,245,.8), rgba(245,245,245,.8))'></Box>
    <Box h='100vh' position='relative' z-zIndex='1' pt={'5%'}>
      <Box display= 'flex' flexDirection='column' justifyContent='center' alignItems='center' pb='30px'>
        <Heading fontSize='40px' color='#111111' fontWeight='700'>CONTACT</Heading>
        <Divider width='5%' height='5px' borderRadius='6px'  bgColor='#FACF0F' m='20px 0'></Divider>
        <Text fontSize='18px' color='#555' w='100%' textAlign='center'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</Text>
      </Box>
      <Flex justifyContent='center' alignItems='center' h={'auto'}>
          <Box w={'40%'} bg='#fff' p={'30px'} borderRadius='12px' boxShadow={'lg'}>
            <form onSubmit={onSubmit}>
              <Box>
              <FormControl mt={'20px'}>
                <FormLabel>Name</FormLabel>
                <Input p={'35px 10px'} {...register("name", { required: true })} bg='#f3f3f3' type='text' placeholder="Enter Your Name"/>
                </FormControl>
              </Box>
              <Box>
              <FormControl mt={'20px'}>
                <FormLabel>Email</FormLabel>
                <Input p={'35px 10px'} {...register("email", { required: true })} bg='#f3f3f3' type='email' placeholder="Enter Your Email Address"/>
                </FormControl>
              </Box>
              <Box>
              <FormControl mt={'20px'}>
                <FormLabel>Phone</FormLabel>
                <Input p={'35px 10px'} {...register("phone", { required: true })} bg='#f3f3f3' type='text' placeholder="Enter Your Phone Number"/>
                </FormControl>
              </Box>
              <Box>
              <FormControl mt={'20px'}>
                <FormLabel>Message</FormLabel>
                <Textarea bg='#f3f3f3'
                  {...register("message", { required: true })}
                  name="message"
                  placeholder="Message"></Textarea>
                </FormControl>
              </Box>
              <Box>
                <Button type="submit" bgColor='#FACF0F' size='lg' fontFamily='Source Sans Pro' color='#333333' mt={'20px'} p='30px 80px'>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Flex>
    </Box>
</Box>
  )
}

export default Contact