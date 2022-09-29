import React from "react";
// import { Form } from "react-router-dom";
import "./Home.css"
import { Flex, Box, Svg, Text, Container, Image, Button, Headers } from "@chakra-ui/react"


const Home = () => {
    return (
        <Container>
            <Container maxW='2xl' bg='blue.600' centerContent>
                <Box className="Cont">
                    <Box className="Cont-2">
                        <Box className="Cont2-1">
                            <h1>Grow your audience on social and beyond</h1>
                            <Text>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</Text>
                            <Box className="Btn">
                                <Box><Button className="Btn1">Get started now</Button></Box>
                                <Box><Button className="Btn2">Get started now</Button></Box>
                            </Box>
                        </Box>
                        <Box >
                            <Image className="Img" src="https://buffer.com/static/illustrations/all-channels-3.webp" alt="" />
                        </Box>
                    </Box>
                    <Box className="Cont-2 Cont-cl" fontSize="30px">
                        <Box>
                            <Text>Hukberry</Text>
                        </Box>
                        <Box>
                            <Text >FOOD52</Text>
                        </Box>
                        <Box>
                            <Text>The Sill</Text>
                        </Box>
                        <Box>
                            <Text>BURROW</Text>
                        </Box>
                        <Box>
                            <Text>HappySocks</Text>
                        </Box>
                        <Box>
                            <Text>DressUp</Text>
                        </Box>
                    </Box>
                    <Box className="Cont2-2">
                        <Box >
                            <Text fontSize="25px">Be where your customers are</Text>
                            <Text>People spend, on average, almost 2.5 hours on social media every day. ​​Let them find your brand more easily through these four simple steps:</Text>
                        </Box>
                    </Box>
                    <img className="Img2" src="https://buffer.com/static/misc/buffer-loop-v2.svg" alt="" />

                    <br />
                    <div className="Cont-2">
                        <div className="Cont2-1">
                            <h5>1. ANALYZE</h5>
                            <h2>Grow your audience on social and beyond</h2>
                            <p>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</p>
                            <div className="Btn">
                                <div><button className="Btn1">Get started now</button></div>
                                <div><button className="Btn2">Learn More</button></div>
                            </div>
                        </div>
                        <div >
                            <img className="Img" src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="" />
                        </div>
                    </div>
                    <div className="Cont-2">

                        <div >
                            <img className="Img" src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp" alt="" />
                        </div>
                        <div className="Cont2-1">
                            <h5>2. PLAN AND PUBLISH YOUR CONTENT</h5>
                            <h2>Measure your social media performance in a few clicks</h2>
                            <p>See what’s working and deliver high engagement content.</p>
                            <div className="Btn">
                                <div><button className="Btn1">Get started now</button></div>
                                <div><button className="Btn2">Learn More</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="Cont-2">
                        <div className="Cont2-1">
                            <h5>3. ENGAGE</h5>
                            <h2>Respond to comments twice as fast</h2>
                            <p>Skip to important comments with the help of labels and hotkeys.</p>
                            <div className="Btn">
                                <div><button className="Btn1">Get started now</button></div>
                                <div><button className="Btn2">Learn More</button></div>
                            </div>
                        </div>
                        <div >
                            <img className="Img" src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp" alt="" />
                        </div>
                    </div>
                    <div className="Cont2-2">
                        <div >
                            <h5>4. CELEBRATE</h5>
                            <h2>Businesses all over the world trust Buffer to build their brand</h2>
                        </div>
                    </div>


                </Box>



                <Container className="" w="100vw">
                    <Flex color='gray' w="100%">
                        {/* <Flex w='100px' bg='green.500'>

                            <Image src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" />
                            <Text fontFamily="Roboto, sans-serif" mt={{ base: "30px", lg: "50px" }}>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                            <Svg w="70px" xmlns="https://tse2.mm.bing.net/th?id=OIP.cRWLS3xlHirb5A4voGhJqAHaHa&pid=Api&P=0" />
                            <Text fontFamily="Popping, sans-serif" mt={{ base: "30px", lg: "50px" }}>Luis Cancel, Managing Editor</Text>
                        </Flex>
                        <Flex w='100px' bg='green.500'>
                            <Image src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" />
                            <Text fontFamily="Roboto, sans-serif" mt={{ base: "30px", lg: "50px" }}>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                            <Image w="70px" src="https://tse2.mm.bing.net/th?id=OIP.cRWLS3xlHirb5A4voGhJqAHaHa&pid=Api&P=0" />
                            <Text fontFamily="Popping, sans-serif" mt={{ base: "30px", lg: "50px" }}>Luis Cancel, Managing Editor</Text>
                        </Flex>
                        <Flex w='100px' bg='green.500'>
                            <Image src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" />
                            <Text fontFamily="Roboto, sans-serif" mt={{ base: "30px", lg: "50px" }}>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                            <Image w="70px" src="https://tse2.mm.bing.net/th?id=OIP.cRWLS3xlHirb5A4voGhJqAHaHa&pid=Api&P=0" />
                            <Text fontFamily="Popping, sans-serif" mt={{ base: "30px", lg: "50px" }}>Luis Cancel, Managing Editor</Text>
                        </Flex>
                        <Flex w='100px' bg='green.500'>
                            <Image position="absolute" top={{ base: "-50px", lg: "67px" }} w={{ base: "90px", lg: "110px" }} src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" />
                            <Text fontFamily="Roboto, sans-serif" mt={{ base: "30px", lg: "50px" }}>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                            <Image w="70px" src="https://tse2.mm.bing.net/th?id=OIP.cRWLS3xlHirb5A4voGhJqAHaHa&pid=Api&P=0" />
                            <Text fontFamily="Popping, sans-serif" mt={{ base: "30px", lg: "50px" }}>Luis Cancel, Managing Editor</Text>
                        </Flex>
                        <Flex w='100px' bg='green.500'>
                            <Image src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" />
                            <Text fontFamily="Roboto, sans-serif" mt={{ base: "30px", lg: "50px" }}>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                            <Image w="70px" src="https://tse2.mm.bing.net/th?id=OIP.cRWLS3xlHirb5A4voGhJqAHaHa&pid=Api&P=0" />
                            <Text fontFamily="Popping, sans-serif" mt={{ base: "30px", lg: "50px" }}>Luis Cancel, Managing Editor</Text>
                        </Flex> */}
                        {/* <Square bg='blue.500' size='150px'>
                        <Text>Box 2</Text>
                    </Square>
                    <Box flex='1' bg='tomato'>
                        <Text>Box 3</Text>
                    </Box> */}

                        <Box className="Cont2-3">
                        <Box>
                            <Image className="Img3" src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" alt="" />

                        </Box>
                        <Text>Buffer has made sharing our story and building our brand on social media so much easier.</Text>
                        <Text>Hucberry</Text>
                        <Text>Luis Cancel, Managing Editor</Text>
                    </Box>
                    <Box className="Cont2-3">
                        <Box>
                            <Image className="Img3" src="https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg" alt="" />

                        </Box>
                        <p>On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.</p>
                        <h4>DressUp</h4>
                        <h6>Liz Gillis, Digital Marketer</h6>
                    </Box>
                    <Box className="Cont2-3">
                        <Box>
                            <Image className="Img3" src="https://buffer.com/static/testimonials/troy-petrunoff@mobile.jpg" alt="" />

                        </Box>
                        <p>For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.</p>
                        <h4>lensabl</h4>
                        <h6>Troy Petrunoff, Marketing Manager</h6>
                    </Box>
                    <Box className="Cont2-3">
                        <Box>
                            <Image className="Img3" src="https://buffer.com/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg" alt="" />

                        </Box>
                        <p>Buffer makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.</p>
                        <h4>Happy socks</h4>
                        <h6>Rodrigo Hyago, Social Media Content Manager</h6>
                    </Box>
                    <Box className="Cont2-3">
                        <Box>
                            <Image className="Img3" src="https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg" alt="" />

                        </Box>
                        <p>Buffer saves us, literally, hours and in turn helps us spread our message even further.</p>
                        <h4>Hucberry</h4>
                        <h6>Joe Loria, Content Manager</h6>
                    </Box> 

                    
                    {/* <div className="Cont2-3">
                        <div>
                            <img className="Img3" src="https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg" alt="" />

                        </div>
                        <p>Buffer has made sharing our story and building our brand on social media so much easier.</p>
                        <h4>Hucberry</h4>
                        <h6>Luis Cancel, Managing Editor</h6>
                    </div> */}
                 </Flex>
                </Container>
                <div>

                </div>
            </Container>
        </Container>
    )
}

export default Home;