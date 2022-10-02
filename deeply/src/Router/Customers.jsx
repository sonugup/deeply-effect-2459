
import { Box, Text, Flex, Image } from "@chakra-ui/react"
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Menu from "./Menu"
const Customers = () => {
    const [menudata, setMenudata] = useState(Menu)
    console.log(menudata)
    return (
        <>
        <Navbar/>
            <Box>
                <Box w="690px" m=" auto" pt="8%"  textAlign="center">
                    <Text fontSize="18px" color="blue">YOU'RE IN GOOD COMPANY</Text>
                    <Text fontSize="50px" fontFamily="fantasy">Featured Customers</Text>
                    <Text fontSize="18px" >See how big brands and growing businesses find social media success with Buffer</Text>
                </Box>
            </Box>
            {
                menudata.map((el) => {
                    return (
                        <>
                            <Box >
                                <Box>

                                    <Box key={el.id} w="650px" margin=" auto" pt="7%" >
                                        <Box
                                            h="450px"
                                            m=' 1% auto'
                                            w="90%"
                                            border="4px solid green"
                                            textAlign="center"
                                            p="15%"
                                        >
                                            <Box p="30px" ><Image src={el.img} /></Box>
                                            <Text fontSize="25px" lineHeight="40px">{el.desc}</Text>
                                            <Text fontSize="18px" color="blue">{el.study}</Text>
                                            <Flex m="40px" pl=" 90px">
                                                <Image src={el.img2} />
                                                <Text p="20px" fontSize="20px" fontFamily="fantasy">{el.name}</Text>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )
                })
            }
            <Footer/>
        </>
    )
}
export default Customers;