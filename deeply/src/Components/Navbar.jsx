import React from "react";
import { Link } from "react-router-dom";
import { Image, Button, Box } from "@chakra-ui/react";

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            {/* <h1>I am Navbar </h1> */}
            <Box className="Nav">
                <Box className="Nav2">
                    
                    <Box className="Nav-1">
                    <Box><Link to="/"><Image w="100px" src="https://tse1.mm.bing.net/th?id=OIP.NKFrNX_QT0o-3YN0pBLPZAHaHa&pid=Api&P=0"/></Link></Box>
                        <Box className="Nav-2">
                        <span><select className="Sel"><option value="Channels">Tool</option></select></span>

                            <Box className="Nav-3">
                                <Box className="In">
                                    <Box>
                                        <h3>Publishing</h3>
                                        <p>Plan, collaborate, and publish thumb-stopping content</p>
                                    </Box>
                                    <Box>
                                        <h3>Publishing</h3>
                                        <p>Plan, collaborate, and publish thumb-stopping content</p>
                                    </Box>
                                    <Box>
                                        <h3>Publishing</h3>
                                        <p>Plan, collaborate, and publish thumb-stopping content</p>
                                    </Box>
                                    <Box>
                                        <h3>Publishing</h3>
                                        <p>Plan, collaborate, and publish thumb-stopping content</p>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                        <Box className="Nav-2">
                            <span><select select className="Sel"><option value="Channels">Channels</option></select></span>

                            <Box className="Nav-3">
                                <Box className="In In2">
                                    <Box>
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.TCXRgFk1N5mv-R3N2PGbtAHaHa&pid=Api&P=0" alt="" />
                                        <h3>Facebook</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.adnKj2XWbN8Aw0rnXRDw5gHaHw&pid=Api&P=0" alt=""/>
                                        <h3>Google Business Profile</h3>
                                    </Box>
                                    <Box>
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.SvQsh4WL9lpg9mMqrzZqLwHaHa&pid=Api&P=0" alt=""/>
                                        <h3>Instagram</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.2Ly_4RNrogTMsQskjTbuAgHaHa&pid=Api&P=0" alt=""/>
                                        <h3>Linkedln</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.vEwWMNNIVJn5wg8VnExRwwHaHa&pid=Api&P=0" alt=""/>
                                        <h3>Pintereste</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse4.mm.bing.net/th?id=OIP.ktdGeHe3wMKC4n7B1EC9hQHaHa&pid=Api&P=0" alt=""/>
                                        <h3>Shopify</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse4.mm.bing.net/th?id=OIP.Tdeo-_mtBpLK0zIsuklY3wHaHa&pid=Api&P=0" alt=""/>
                                        <h3>TikTok</h3>
                                    </Box>
                                    <Box>
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.ZAH_UphfL-dciUOXOqfo6QHaHa&pid=Api&P=0" alt=""/>
                                        <h3>Twitter</h3>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                        <Box className="Nav-2">
                            <Link className='link' to="/">Pricing</Link>
                        </Box>
                        <Box className="Nav-2">
                           <Link className='link' to="/">Blog</Link>
                        </Box>
                        <Box className="Nav-2">
                        <Link className='link' to="/about">About</Link>
                        </Box>
                        <Box className="Nav-2">
                            <Link className='link' to="/Customers">Customers</Link>
                        </Box>
                        <Box  className="Nav-2">
                        <Link className='login' to="/login">Login</Link>
                        </Box>
                        <Box className="Nav-2">
                            <h3><Button p="20px" fontSize="20px" borderRadius="10px" color="white" border="none" bg="blue">Get starte now</Button></h3>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default Navbar;