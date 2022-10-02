import { Container, Box, Text, Image, Button, Flex, Grid, Select, Stack } from "@chakra-ui/react"

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
    return (
        <Container>
            <Navbar />
            <Box>
                <Box h="800px" backgroundColor="#ef9dab" p="10%" textAlign="center">
                    <Text fontSize="40px" fontFamily="fantasy">About us</Text>
                    <Image src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/team/buffer-group-photo.jpg" />
                </Box>
                <Box w="50%" m="auto">
                    <Box fontSize="28px" lineHeight="40px">
                        <Text border="1px solid green">We’re a fully distributed team of 82 people living and working in 22 countries around the world. And we’re working to build the best products to help our customers build their brands and grow their businesses on social media.</Text>
                        <Image w="100%" src="https://3.imimg.com/data3/NR/HY/MY-2074628/30x40_34-500x500.jpg" />
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
                            <Text mb="35px" color="#E97284" fontSize="100px" fontFamily="heading">140,000+</Text>
                            <Text mt="-39px" fontSize="40px" >users</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Box className="grid">
                        <Grid
                            display="geid"
                            gridAutoColumns="repete(4, 1fr)"
                            gridAutoRows="auto"
                            w="75%"
                            m="auto"
                            p="70px"
                            lineHeight="100px"
                        >
                            <Image w="170px" p="30px" src="https://tse3.mm.bing.net/th?id=OIP.zjq2Rw8gis5AzR8_RhqSjQHaBN&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse4.explicit.bing.net/th?id=OIP.bSE57QAoWGvdcG5KjlTQnQHaBi&pid=Api&P=0" />
                            <Image w="170px" pt="50px" p="30px" src="https://tse4.mm.bing.net/th?id=OIP.Ner7EDPLs4b694_zF5cvbwAAAA&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse4.mm.bing.net/th?id=OIP.zQGQGtjzOgcvbKgVAxm_zwHaCh&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse1.mm.bing.net/th?id=OIP.xIK93dLO51bw8qWGXeqdggHaCG&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse4.mm.bing.net/th?id=OIP.5HyLntARXDnKpKs3Lnq3-gHaHa&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse2.mm.bing.net/th?id=OIP.RNOdf9Vo_JkNMZvQzvpLnwHaEK&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse4.mm.bing.net/th?id=OIP.TmZEbrS7o3MRZXo43p5tagHaEo&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse2.mm.bing.net/th?id=OIP.bGb91Qz_j7KLUEEn8as-5AHaBu&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse1.mm.bing.net/th?id=OIP.OO4qdidJjPTQaagY5gpQywAAAA&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse2.mm.bing.net/th?id=OIP.LdBt0CHIv2konLvnAbTXrQHaDt&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse2.mm.bing.net/th?id=OIP.d8X31tiIep6zNF94_LkWCQHaB3&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse3.mm.bing.net/th?id=OIP.SiLFmERKL5S2iomrHDUrCAHaD4&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://tse4.mm.bing.net/th?id=OIP.mnSUdNZ-v5AZ3jS0nSofdQHaCT&pid=Api&P=0" />
                            <Image w="170px" p="30px" src="https://buffer.com/static/caseStudies/denver-broncos/denver-broncos-logo.svg" />
                            <Image w="170px" p="30px" src="https://tse1.mm.bing.net/th?id=OIP.vVnHLBp8WNVkiLojUzDLGwHaBR&pid=Api&P=0" />
                        </Grid>
                        <svg xmlns="https://tse3.mm.bing.net/th?id=OIP.kjEPvQimf99j2b-ATDbZPAHaBi&pid=Api&P=0" width="100%" height="24px" ></svg>
                    </Box>
                </Box>
                <Box w="60%" m="auto" textAlign="center">
                    <Text fontSize="30px" fontFamily="fantasy"> Pit values</Text>
                    <Text fontSize="20px">We want to build a different type of company that’s focused not only on the bottom line, but also the happiness of our customers and team, and our personal growth along the journey. Here are the values that collectively guide our decisions and actions:</Text>
                </Box>
                <Box>
                    <Box w="50%" m="auto">
                        <Grid >
                            <Select border="none" fontFamily="sans-serif" fontSize="17px" p="0px" m="20px" placeholder='1 Default to transparency'>
                                <option value='option1'> 1. As individuals, we view transparency as a lifestyle of authenticity and honesty.</option>
                                <option value='option2'> 2. As a team, we view transparency as an effective way to work remotely and establish a culture of trust</option>
                                <option value='option3'> 3. As a company, we view transparency as a tool to help others</option>
                                <option value='option3'> 4. We share early in the decision process to avoid “big revelations.”</option>
                                <option value='option3'> 5. We strive to make all communication clear and avoid making assumptions.</option>
                            </Select>
                            <Select border="none" fontFamily="sans-serif" fontSize="17px" p="0px" m="30px" placeholder='2  Cultivate positivity'>
                                <option value='option1'> We strive to approach things in a positive way while realizing all emotions are valid.</option>
                                <option value='option2'> We avoid non-constructive criticism of team members or customers.</option>
                                <option value='option3'> We assume the best of others because we may lack full context.</option>
                                <option value='option3'> We believe that constructive, honest feedback is an opportunity for growth.</option>
                                <option value='option3'> We push through any artificial harmony to work towards a better environment, product or concept.</option>
                            </Select>
                            <Select border="none" fontFamily="sans-serif" fontSize="17px" p="0px" m="30px" placeholder='3  Show gratitude'>
                                <option value='option1'> We regularly stop and demonstrate gratitude for our circumstances.</option>
                                <option value='option2'> We are thankful for our customers and approach customer conversations with the knowledge that it’s a privilege to serve them.</option>
                                <option value='option3'> We practice humility, operate as no-ego doers and do not attach our personal selves to ideas.</option>
                                <option value='option3'> We are grateful for the work teammates do to push the company forward.</option>
                                <option value='option3'> We display gratitude for the platforms, tools and open source code and communities that make our company possible and view it as our duty to give back.</option>
                            </Select>
                            <Select border="none" fontFamily="sans-serif" fontSize="17px" p="0px" m="30px" placeholder='4  Practice reflection'>
                                <option value='option1'> We believe the act of introspection is where true learning and life-changing adjustments originate.</option>
                                <option value='option2'> We approach discussions intentionally and think through all angles.</option>
                                <option value='option3'> We listen first and then listen more: seeking first to understand, then to be understood.</option>
                                <option value='option3'> We step back from the day-to-day and reflect on overall themes that will make an impact.</option>
                                <option value='option3'> We take the approach that everything is a hypothesis and we could be wrong.</option>
                            </Select>
                            <Select border="none" fontFamily="sans-serif" fontSize="14px" p="0px" m="30px" placeholder='5  Improve consistently'>
                                <option value='option1'> We are biased toward action and have a higher expectation of ourselves and of our product than others have of us.</option>
                                <option value='option2'> We aim to be fully engaged in our work and activities, and fully disconnected when we’re not working.</option>
                                <option value='option3'> We choose to be where we are the happiest and most productive.</option>
                                <option value='option3'> We desire to be better tomorrow than today, knowing that improvement can be found in small changes.</option>
                                <option value='option3'> We strive to exemplify a growth mindset and believe that any skill or talent can be learned through deliberate practice.</option>
                            </Select>
                            <Select border="none" fontFamily="sans-serif" fontSize="17px" p="0px" m="30px" placeholder=' 6.  Act beyond yourself'>
                                <option value='option1'>. We consider the bigger picture, knowing our work goes beyond ourselves.</option>
                                <option value='option2'>. We are not afraid of the less-traveled path if it holds true to our values and betters the world</option>
                                <option value='option3'>. We seek balance by taking into account multiple perspectives and listening deeply</option>
                                <option value='option3'>. We advocate for diverse backgrounds and perspectives to make our team and products stronger.</option>
                                <option value='option3'>. We work to create an inclusive environment to build a better company and set a positive example for the world.</option>
                            </Select>
                        </Grid>
                    </Box>
                </Box>
                <Image w="100%" src="https://tse1.mm.bing.net/th?id=OIP.R_9Gf6Jfu_ITFJFYhP-dAwHaE8&pid=Api&P=0" />

                <Box>
                    <Box w="40%" m="auto" textAlign="center" p="30px" lineHeight="40px">
                        <Text fontFamily="fantasy" fontSize="24px">Transparency</Text>
                        <Text fontSize="18px">We try our best to live up to our value of "Default to Transparency." Here's an overview of a few of the things we've made transparent at Buffer.</Text>
                    </Box>
                </Box>
                <Box w="80%" margin="auto">
                    <Box>
                        <Flex justifyContent="space-around" m="auto">
                            <Box>
                                <Image w='50px' src="https://tse1.mm.bing.net/th?id=OIP.hYAcwaYZJPBHVECwCJs9PgHaE7&pid=Api&P=0" />
                                <Text fontFamily="fantasy" fontSize="15px">Salarier</Text>
                                <Text fontSize="15px">All our salaries, and salary formula, are public.</Text>
                            </Box>
                            <Box>
                                <Image w='50px' src="https://tse2.mm.bing.net/th?id=OIP.JsqaFI65bBq7unc2OIlKjgHaF7&pid=Api&P=0" />
                                <Text fontFamily="fantasy" fontSize="15px">Diversity</Text>
                                <Text fontSize="15px">We've open sourced our diversity & inclusion data</Text>
                            </Box>
                            <Box>
                                <Image w='50px' src="https://tse1.mm.bing.net/th?id=OIP.hYAcwaYZJPBHVECwCJs9PgHaE7&pid=Api&P=0" />
                                <Text fontFamily="fantasy" fontSize="15px">Open source</Text>
                                <Text fontSize="15px">All our code, free for anyone to use.</Text>
                            </Box>
                            <Box>
                                <Image w='50px' src="https://tse3.mm.bing.net/th?id=OIP.2ldrdL3Soq2rngjWaABlkgHaH7&pid=Api&P=0" />
                                <Text fontFamily="fantasy" fontSize="15px">Product Roadmap</Text>
                                <Text fontSize="15px">Everything we're researching & building.</Text>
                            </Box>
                            
                        </Flex>
                    </Box>
                </Box>
                <Box>
                    <Box w="30%" m="auto">
                        <Text fontFamily="fantasy" fontSize="30px"> Team</Text>
                        <Text fontSize="20px" lineHeight="40px">We’re committed to building a diverse team and a work environment that’s inclusive of people of all backgrounds. Get to know the wonderful team who’s building our product, supporting our customers, and creating educational content.</Text>
                    </Box>
                </Box>
                <Box w="60%" m="auto" p="40px">
                    <Image src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/about-team@2x-v2.jpg" />
                    
                </Box>
                <Box p="30px" textAlign="center">
                <Button p="20px" fontSize="20px" border="2px solid blue" borderRadius="10px" color="blue"> Get  to  now us better</Button>
                </Box>
            </Box>
            <Footer />
        </Container>
    )
}
export default About;