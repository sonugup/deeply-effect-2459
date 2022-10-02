
import React from "react";
import "./Footer.css"


import { Container, Box, Image, Text, Flex, Button } from "@chakra-ui/react";
const Footer = () =>{
    
    return (
        <Container>
            <Box w="100%" p="50px" bg="blue">
                <Box textAlign="center" w="40%" margin="auto" color="white" p="50px" lineHeight='60px'>
                    <Text p="30px" fontFamily="fantasy" fontSize="35px">140,000+ people like you use Buffer to build their brand on social media every month</Text>
                    <Button border="none" p="20px" fontSize="20px" borderRadius="10px" bg=" rgb(233, 114, 132)">Get stated now</Button>
                    <Flex justifyContent="space-around">
                        <Text>No credit card required</Text>
                        <Text>14-day free trial</Text>
                        <Text>Cancel anytime</Text>
                    </Flex>
                </Box>
            </Box>
            <Box w="90%" justifyContent="space-around" margin=" auto" padding="50px 40px" cursor="pointer" className="Foot" >
                <Flex margin="auto" w="100%" padding="30px 40px" fontSize="20px" justifyContent="space-around">
                <Box margin="auto" padding="10px" w="40%"  textAlign="center">
                    <Image w="100px" src="https://tse1.mm.bing.net/th?id=OIP.NKFrNX_QT0o-3YN0pBLPZAHaHa&pid=Api&P=0"/>
                    <Box padding="10px">
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.SvQsh4WL9lpg9mMqrzZqLwHaHa&pid=Api&P=0" alt=""/>
                        
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.TCXRgFk1N5mv-R3N2PGbtAHaHa&pid=Api&P=0"/>
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.ZAH_UphfL-dciUOXOqfo6QHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse4.mm.bing.net/th?id=OIP.Tdeo-_mtBpLK0zIsuklY3wHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse1.mm.bing.net/th?id=OIP.2Ly_4RNrogTMsQskjTbuAgHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse2.mm.bing.net/th?id=OIP.vEwWMNNIVJn5wg8VnExRwwHaHa&pid=Api&P=0" alt=""/>
                        
                    </Box>
                    <Text>
                        Download
                    </Text>
                    <Box display="flex" margin="auto" >
                        <Box margin="auto" display="flex" padding="5px" border="3px solid blue" h="27px" borderRadius="20px" color="blue">
                            <Image padding="5px" w="25px" src="https://tse1.mm.bing.net/th?id=OIP.QJKZgAQdHQNs-_rfBSKhpAHaHa&pid=Api&P=0"/>
                            <Text fontSize="14px">App Store</Text>
                        </Box>
                        <Box margin="20px" display="flex" padding="5px" border="3px solid blue" h="27px" borderRadius="20px" color="blue">
                            <Image padding="5px" w="25px" src="https://tse4.mm.bing.net/th?id=OIP.R98vk4D5alkZUpzWLqVT2QHaHa&pid=Api&P=0"/>
                            <Text fontSize="14px">Google Play</Text>
                        </Box>
                    </Box>
                    <Text fontSize="15px">Copyright ©2022 Buffer|Privacy|Terms|Security</Text>
                </Box>
                <Box w="30%">
                    <Box >                        
                        <Text fontSize="25px" fontFamily="fantasy">Tools</Text>
                        <Text>Publishing</Text>
                        <Text>Analylics</Text>
                        <Text>Engagement</Text>
                        <Text><span color="red">New</span>Start Page</Text>
                        <Text>Extras</Text>
                    </Box>
                </Box>
                <Box w="30%">
                    <Box>
                        <Text fontSize="25px" fontFamily="fantasy">Resources</Text>
                        <Text>Blog</Text>
                        <Text>Content Library</Text>
                        <Text>Browser</Text>
                        <Text>Extension</Text>
                        <Text>Free Image </Text>
                        <Text>Editor</Text>
                    </Box>
                </Box>
                <Box w="30%">
                    <Box>
                        <Text fontSize="25px" fontFamily="fantasy">Support</Text>
                        <Text>Help Center</Text>
                        <Text>Status</Text>
                        <Text>Changelog</Text>
                        <Text>Product</Text>
                        <Text>Roadmap </Text>
                    </Box>
                </Box>
                <Box w="30%">
                    <Box>
                        <Text fontSize="25px" fontFamily="fantasy">Company</Text>
                        <Text>About</Text>
                        <Text>Transparency</Text>
                        <Text>Careers</Text>
                        <Text>Accessibity</Text>
                        <Text>Press</Text>
                        <Text>Sitemap</Text>
                    </Box>
                </Box>
                </Flex>
            </Box>
        </Container>
    )
}

export default Footer;