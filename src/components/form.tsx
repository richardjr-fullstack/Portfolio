import React from 'react'
import { Box, Flex, Input, Button, Textarea, FormControl, FormLabel } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

 const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

    return (
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
      );
}
export default Form