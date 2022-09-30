import { Container, Box, Text, Image,Button ,Flex} from "@chakra-ui/react"

import React from "react";

const About = ()=>{
    return (
        <Container>
            <Box>
                <Box h="800px" backgroundColor="#ef9dab" p="10%" textAlign="center">
                    <Text fontSize="40px" fontFamily="fantasy">About us</Text>
                    <Image src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/team/buffer-group-photo.jpg"/>
                </Box>
                <Box w="50%" m="auto">
                    <Box fontSize="28px" lineHeight="40px">
                        <Text border="1px solid green">We’re a fully distributed team of 82 people living and working in 22 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media.</Text>
                        <Image w="100%" src="https://3.imimg.com/data3/NR/HY/MY-2074628/30x40_34-500x500.jpg"/>
                        <Text>
                        We’ve always aimed to do things a little differently at Buffer. Since the early days, we’ve had a focus on building one of the most unique and fulfilling workplaces by rethinking a lot of traditional practices.
                        </Text>
                        <Text>A commitment to supporting our team and our customers has helped Buffer grow from humble beginnings to now serving more than 140,000 users. Our passion for making meaningful connections flows through everything we do.</Text>
                        <Text>We care about building a quality product, trusted relationships with our customers, and a sense of community that connects our customers and team with one another.</Text>
                        <Text>To learn more about our approach to business and work, feel free to hop on over to our Open Blog.</Text>
                    </Box>
                    <Box>
                        <Button border="none" textAlign="center" m="auto" display="block" backgroundColor="blue" p="20px" color="white" fontSize="14px" borderRadius="7px">Read the Open Blog</Button>
                    </Box>
                </Box>
                <Box h="300px" m="4% 0%" textAlign="center" background="#f5f5f5" w="100%" justifyContent="space-around" >
                     <Flex >
                        <Box w="35%"  >
                           <Text mb='40px' color="#87C221" fontSize="100px" fontFamily="heading">82</Text>
                           <Text mt="-39px" fontSize="40px">teammates</Text>
                        </Box>
                        <Box w="35%">
                           <Text mb='40px' color="#FAD32A" fontSize="100px" fontFamily="heading">22</Text>
                           <Text mt="-39px" fontSize="40px" >countries</Text>
                        </Box>
                        <Box w="30%">
                           <Text  mb="35px" color="#E97284" fontSize="100px" fontFamily="heading">140,000+</Text>
                           <Text mt="-39px" fontSize="40px" >users</Text>
                        </Box>
                     </Flex>
                </Box>
                <Box>
                    <Box>
                        <svg xmlns="https://tse3.mm.bing.net/th?id=OIP.kjEPvQimf99j2b-ATDbZPAHaBi&pid=Api&P=0" width="100%" height="24px" ></svg>
                    </Box>
                </Box>
            </Box>

        </Container>
    )
}
export default About;