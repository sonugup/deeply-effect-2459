
import React from "react";

import { Container, Box, Image, Text } from "@chakra-ui/react";
const Footer = () =>{
    return (
        <Container>
            <Box>
                <Box padding="40px">
                    <Image w="100px" src="https://tse1.mm.bing.net/th?id=OIP.NKFrNX_QT0o-3YN0pBLPZAHaHa&pid=Api&P=0"/>
                    <Box padding="40px">
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.SvQsh4WL9lpg9mMqrzZqLwHaHa&pid=Api&P=0" alt=""/>
                        
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.TCXRgFk1N5mv-R3N2PGbtAHaHa&pid=Api&P=0"/>
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.ZAH_UphfL-dciUOXOqfo6QHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse4.mm.bing.net/th?id=OIP.Tdeo-_mtBpLK0zIsuklY3wHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse1.mm.bing.net/th?id=OIP.2Ly_4RNrogTMsQskjTbuAgHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse2.mm.bing.net/th?id=OIP.vEwWMNNIVJn5wg8VnExRwwHaHa&pid=Api&P=0" alt=""/>
                        <Image padding="5px" w="35px" src="https://tse3.mm.bing.net/th?id=OIP.adnKj2XWbN8Aw0rnXRDw5gHaHw&pid=Api&P=0" alt=""/>
                    </Box>
                    <Text>
                        Download
                    </Text>
                    <Box display="flex" margin="auto" padding="10px">
                        <Box margin="20px" display="flex" padding="10px" border="1px solid blue" h="33px" borderRadius="20px" color="blue">
                            <Image padding="5px" w="35px" src="https://tse1.mm.bing.net/th?id=OIP.QJKZgAQdHQNs-_rfBSKhpAHaHa&pid=Api&P=0"/>
                            <Text>App Store</Text>
                        </Box>
                        <Box margin="20px" display="flex" padding="10px" border="1px solid blue" h="33px" borderRadius="20px" color="blue">
                            <Image padding="5px" w="35px" src="https://tse1.mm.bing.net/th?id=OIP.QJKZgAQdHQNs-_rfBSKhpAHaHa&pid=Api&P=0"/>
                            <Text>App Store</Text>
                        </Box>
                    </Box>
                    <Text>Copyright ©2022 Buffer|Privacy|Terms|Security</Text>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer;