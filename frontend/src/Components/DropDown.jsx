import { Box,  Flex,Image, Text } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'
import "./dropdown.css"

const DropDown = () => {
  return (
    <div>
        <Box display={"flex"} gap = "10px">
           

            <Box id='dropdown' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}>MEN</Text>
            <Box id='content'>
                <Flex gap={"90px"}>
                    <Box>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Topwear</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>T-Shirts</Text>
                            <Text>Casual Shirts</Text>
                           <Link to="/products?gender=Men&category=Shirts"><Text fontWeight={"semibold"} fontSize = "15px">Formal Shirt</Text></Link> 
                            <Text>Sweatshirts</Text>
                            <Text>Sweaters</Text>
                            <Text>Jackets</Text>
                            <Text>Blazers & Coats</Text>
                            <Text>Suits</Text>
                            <Text mb={4}>Rain Jackets</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Indian Festive Wear</Text>
                        <Flex direction={"column"} gap = "2px" mb={8}>
                            <Text mt={2}>Kurtas & Kurta Sets</Text>
                            <Text>Sherwanis</Text>
                            <Text>Nehru Jackets</Text>
                            <Text>Dhotis</Text>
                        </Flex>                        
                    </Box>

                    <Box>
                    <Text color={"#E72744"} fontWeight="semibold" mt={4}>Bottomwear</Text>
                    <Flex direction={"column"} gap = "2px">
                       <Link to = "/products?gender=Men&category=Jeans"><Text mt={2} fontWeight = "semibold" fontSize = "15px">Jeans</Text></Link> 
                        <Text>Casual Trousers</Text>
                        <Text>Formal Trousers</Text>
                        <Text>Shorts</Text>
                        <Text mb={4}>Track Pants & Joggers</Text>
                        <hr/>
                    </Flex>

                    <Text color={"#E72744"} fontWeight="semibold" mt={4}>Innerwear & Sleepwear</Text>
                    <Flex direction={"column"} gap = "2px" mb={8}>
                        <Text mt={2}>Briefs & Trunks</Text>
                        <Text>Boxers</Text>
                        <Text>Vests</Text>
                        <Text>Sleepwear & Loungwear</Text>
                        <Text mb={4}>VestsThermal</Text>
                        <hr/>
                    </Flex> 
                    
                    <Text color={"#E72744"} fontWeight="semibold" mt={4}>Plus Size</Text>
                    </Box>

                    <Box>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Footwears</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Casual Shoes</Text>
                            <Text>Sports Shoes</Text>
                            <Text>Formal Shoes</Text>
                           <Link to="/products?gender=Men&category=Shoes"><Text fontWeight={"semibold"} fontSize = "15px">Sneakers</Text></Link> 
                            <Text>Sandals</Text>
                            <Text>Floaters</Text>
                            <Text>Flip Flops</Text>
                            <Text mb={4}>Socks</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Personal Care & Gromming</Text>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Sunglasses & Frames</Text>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Watches</Text>                       
                    </Box>

                    <Box>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Sports & Active Wear</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Sports Shoes</Text>
                            <Text>Sports Sandals</Text>
                            <Text>Active T-Shirts</Text>
                            <Text>Track Pants & Shorts</Text>
                            <Text>Tracksuits</Text>
                            <Text>Jackets & Sweatshirts</Text>
                            <Text>Sports Accessories</Text>
                            <Text mb={4}>Swimmers</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Gadgets</Text>
                        <Flex direction={"column"} gap = "2px" mb={8}>
                            <Text mt={2}>Smart Watches </Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text>Speakers</Text>
                        </Flex>                        
                    </Box>

                    <Box>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Fashion Accessories</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Wallets</Text>
                            <Text>Belts</Text>
                            <Text>Perfumes & Body Mists</Text>
                            <Text>Trimmers</Text>
                            <Text>Deodarants</Text>
                            <Text>Ties, Cufflinks & Pockets Squares</Text>
                            <Text>Accessory Gifts Sets</Text>
                            <Text>Caps & Hats</Text>
                            <Text>Mufflers, Scarves & Gloves</Text>
                            <Text>Phone Cases</Text>
                            <Text>Rings & Writwear</Text>
                            <Text mb={4}>Helmets</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Bags & Bagpackers</Text>
                        <Text color={"#E72744"} fontWeight="semibold" mt={4}>Luggages & Trolleys</Text>                    
                    </Box>

                </Flex>
            </Box>
            </Box>
            
            <Box id='dropdown' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}>WOMEN</Text>
            <Box id='content'>
                <Flex gap={"90px"}>
                    <Box>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Indian & Fusion Wear</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Kurtas & Suits</Text>
                            <Text>Kurtis, Tunics & Tops</Text>
                            <Text>Sarees</Text>
                            <Text>Ethnic Wear</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text>Shirts & Plazzos</Text>
                            <Text>Dress Meterails</Text>
                            <Text>Lenga Chollis</Text>
                            <Text>Duplicates Shawles</Text>
                            <Text mb={4}>Jackets</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Belts, Scarves & More</Text>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Watches & Wearbles</Text>                
                    </Box>

                    <Box>
                    <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Western Wear</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Dresses</Text>
                        <Text>Tops</Text>
                        <Text>Tshirts</Text>
                        <Text>Jeans</Text>
                        <Text>Trousers & Capris</Text>
                        <Text>Shorts & Skirts</Text>
                        <Text>Co-ords</Text>
                        <Text>Playsuits</Text>
                        <Text>Jumpsuits</Text>
                        <Text>Shrugs</Text>
                        <Text>Sweaters & Sweatshirts</Text>
                        <Text>Jackers & Coats</Text>
                        <Text mb={4}>Blazers & Waistcoats</Text>
                        <hr/>
                    </Flex>                 
                    <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Plus Size</Text>
                    </Box>

                    <Box>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Maternity</Text>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Sunglasses & Frames</Text>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Footwear</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Flat</Text>
                            <Text>Casual Shoes</Text>
                            <Text>Formal Shoes</Text>
                            <Text>Heels</Text>
                            <Text>Boots</Text>
                            <Text mb={4}>Sports Shoes & Floaters</Text>
                            <hr/>
                        </Flex>

                        <Flex direction={"column"} gap = "2px">
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Sports & Active Wears</Text>
                        <Text mt={2}>Clothing</Text>
                        <Text>Footwear</Text>
                        <Text>Sports Accessories</Text>  
                        <Text mb={4}>Sports Equipments</Text>
                        <hr/>  
                        </Flex>          
                    </Box>

                    <Box>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Lingerie & Sleepwars</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Bra</Text>
                            <Text>Briefs</Text>
                            <Text>Shapewear</Text>
                            <Text>Sleepwear & Loungewear</Text>
                            <Text mb = {4}>Swimmers</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Beuty & Personal Care</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Makeup</Text>
                            <Text>Skincare</Text>
                            <Text>Premium Beauty</Text>
                            <Text>Lipsticks</Text>
                            <Text mb = {4}>Fragrances</Text>
                            <hr/>
                        </Flex>                     
                    </Box>

                    <Box>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Gadgets</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Smart Wearables</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text mb={4}>Speakers</Text>
                            <hr/>
                        </Flex>


                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Jewellery</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Fashion Jewellery</Text>
                            <Text>Fine Jewellery</Text>
                            <Text mb={4}>Earrings</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Bagpackers</Text>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4}>Handbags, Bags & Wallets</Text>
                        <Text color={"#F13AB1"} fontWeight="semibold" mt={4} mb={8}>Luggages & Trolleys</Text>                    
                    </Box>

                </Flex>
            </Box>
            </Box>

            <Box id='dropdown' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}>KIDS</Text>
            <Box id='content'>
                <Flex gap={"90px"}>
                    <Box>
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Boys Clothing</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>T-Shirts</Text>
                            <Text>Shirts</Text>
                            <Text>Shorts</Text>
                            <Text>Jeans</Text>
                            <Text>Trousers</Text>
                            <Text>Clothings Sets</Text>
                            <Text>Ethnic Waters</Text>
                            <Text>Track Pants & Pyjamas</Text>
                            <Text>Jackets, Sweaters & Sweatshirts</Text>
                            <Text>Party Wear</Text>
                            <Text>Innerwear & Thermals</Text>
                            <Text>Nightwear & Loungewear</Text>
                            <Text mb={4}>Value Packs</Text>
                            <hr/>
                        </Flex>
                    </Box>

                    <Box>
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Girls Clothing</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Dresses</Text>
                            <Text>Tops</Text>
                            <Text>Tshirts</Text>
                            <Text>Jeans</Text>
                            <Text>Trousers</Text>
                            <Text>Clothings Sets</Text>
                            <Text>Ethnic Waters</Text>
                            <Text>Track Pants & Pyjamas</Text>
                            <Text>Jackets, Sweaters & Sweatshirts</Text>
                            <Text>Party Wear</Text>
                            <Text>Innerwear & Thermals</Text>
                            <Text>Nightwear & Loungewear</Text>
                            <Text>Clothings Sets</Text>
                            <Text>Ethnic Waters</Text>
                            <Text mb={4}>Value Packs</Text>
                     
                        </Flex>
                    </Box>

                    <Box>
            
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Footwear</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Flat</Text>
                            <Text>Casual Shoes</Text>
                            <Text>Formal Shoes</Text>
                            <Text>Heels</Text>
                            <Text>Boots</Text>
                            <Text>Casual Shoes</Text>
                            <Text>Formal Shoes</Text>
                            <Text mb={4}>Sports Shoes & Floaters</Text>
                       
                        </Flex>

                        <Flex direction={"column"} gap = "2px">
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Toys</Text>
                        <Text mt={2}>Clothing</Text>
                        <Text>Footwear</Text>
                        <Text>Sports Accessories</Text>  
                        <Text mb={4}>Sports Equipments</Text>
                 
                        </Flex>          
                    </Box>

                    <Box>
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Infants</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Bodysuits</Text>
                            <Text>Briefs</Text>
                            <Text>Shapewear</Text>
                            <Text>Briefs</Text>
                            <Text>Shapewear</Text>
                            <Text>Briefs</Text>
                            <Text>Shapewear</Text>
                            <Text>Sleepwear & Loungewear</Text>
                            <Text mb = {4}>Swimmers</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Home & Bath</Text>
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Personal Care</Text>
                    </Box>

                    <Box>
                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Kids Accessories</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Smart Wearables</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text mb={4}>Speakers</Text>
                            <hr/>
                        </Flex>


                        <Text color={"#F05524"} fontWeight="semibold" mt={4}>Brands</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Fashion Jewellery</Text>
                            <Text>Fine Jewellery</Text>
                            <Text mt={2}>Fashion Jewellery</Text>
                            <Text>Fine Jewellery</Text>
                            <Text mt={2}>Fashion Jewellery</Text>
                            <Text>Fine Jewellery</Text>
                            <Text mt={2}>Fashion Jewellery</Text>
                            <Text mb={4}>Earrings</Text>
                            <hr/>
                        </Flex>                 
                    </Box>

                </Flex>
            </Box>
            </Box>

            <Box id='dropdown' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}>HOME & LIVING</Text>
            <Box id='content'>
                <Flex gap={"90px"}>
                    <Box>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Bed Lines & Furnishing</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Bed Runners</Text>
                            <Text>Mattress Protectores</Text>
                            <Text>Badsheets</Text>
                            <Text>Badsheet Sets</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text>Shirts & Plazzos</Text>
                            <Text>Dress Meterails</Text>
                            <Text>Lenga Chollis</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text mb={4}>Jackets</Text>
                            <hr/>
                        </Flex>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Flooring</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Bed Runners</Text>
                            <Text>Mattress Protectores</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text mb={4}>Jackets</Text>      
                        </Flex>
                    </Box>

                    <Box>
                    <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Bath</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Bed Runners</Text>
                        <Text>Mattress Protectores</Text>
                        <Text>Badsheets</Text>
                        <Text>Badsheet Sets</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text>Shirts & Plazzos</Text>
                        <Text>Dress Meterails</Text>
                        <Text>Lenga Chollis</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text mb={4}>Jackets</Text>
                        <hr/>
                    </Flex>
                    <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Lamps & Lighting</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Bed Runners</Text>
                        <Text>Mattress Protectores</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text mb={4}>Jackets</Text>      
                    </Flex>
                </Box>

                    <Box>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Home Decore</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Plants & Planters</Text>
                            <Text>Mattress Protectores</Text>
                            <Text>Badsheets</Text>
                            <Text>Badsheet Sets</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text>Shirts & Plazzos</Text>
                            <Text>Dress Meterails</Text>
                            <Text>Lenga Chollis</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text mb={4}>Sports Shoes & Floaters</Text>
                            <hr/>
                        </Flex>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Cushions & Cushion Cover</Text>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Curtains</Text>

                    </Box>

                    <Box>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Home Gifts Sets</Text>
                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Kitchen & Table</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Table Runner</Text>
                            <Text>Badsheets</Text>
                            <Text>Badsheet Sets</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text>Shirts & Plazzos</Text>
                            <Text>Dress Meterails</Text>
                            <Text>Lenga Chollis</Text>
                            <Text mb = {4}>Table Cover</Text>
                            <hr/>
                        </Flex>

                        <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Storage</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Bins</Text>
                            <Text>Hangers</Text>
                            <Text>Premium Holder</Text>
                            <Text mb = {4}>Laundry Bags</Text>
                            <hr/>
                        </Flex>                     
                    </Box>

                    <Box>
                    <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Bath</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Bed Runners</Text>
                        <Text>Mattress Protectores</Text>
                        <Text>Badsheets</Text>
                        <Text>Badsheet Sets</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text>Shirts & Plazzos</Text>
                        <Text>Dress Meterails</Text>
                        <Text>Lenga Chollis</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text mb={4}>Jackets</Text>
                        <hr/>
                    </Flex>
                    <Text color={"#FD913C"} fontWeight="semibold" mt={4}>Lamps & Lighting</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Bed Runners</Text>
                        <Text>Mattress Protectores</Text>
                        <Text>Leggings, Salwars & Chudidar</Text>
                        <Text mb={4}>Jackets</Text>      
                    </Flex>
                </Box>
                </Flex>
            </Box>
            </Box>

            <Box id='dropdown' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}>BEAUTY</Text>
            <Box id='content'>
                <Flex gap={"90px"}>
                    <Box>
                        <Text color={"teal"} fontWeight="semibold" mt={4}>Makeup</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Lipsticks</Text>
                            <Text>Lip Gloss</Text>
                            <Text>Sarees</Text>
                            <Text>Ethnic Wear</Text>
                            <Text>Leggings, Salwars & Chudidar</Text>
                            <Text>Shirts & Plazzos</Text>
                            <Text>Dress Meterails</Text>
                            <Text>Lenga Chollis</Text>
                            <Text>Duplicates Shawles</Text>
                            <Text mb={4}>Nail Polish</Text>
                            
                        </Flex>
                
                    </Box>

                    <Box>
                    <Text color={"teal"} fontWeight="semibold" mt={4}>Skin Care, Bath</Text>
                    <Flex direction={"column"} gap = "2px">
                        <Text mt={2}>Dresses</Text>
                        <Text>Tops</Text>
                        <Text>Tshirts</Text>
                        <Text>Jeans</Text>
                        <Text>Trousers & Capris</Text>
                       
                        <Text>Jackers & Coats</Text>
                        <Text mb={4}>Blazers & Waistcoats</Text>
                        <hr/>
                    </Flex>                 
                    <Text color={"teal"} fontWeight="semibold" mt={4}>Baby Care</Text>
                    <Text color={"teal"} fontWeight="semibold" mt={4} mb = {5}>Masks</Text>

                    </Box>

                    <Box>

                        <Text color={"teal"} fontWeight="semibold" mt={4}>Haircare</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Flat</Text>
                            <Text>Hair Creams</Text>
                            <Text>Hair Creams</Text>
                            <Text>Heels</Text>
                            <Text>Hair Gel</Text>
                            <Text mb={4}>Hair Oil</Text>
                            <hr/>
                        </Flex>

                        <Flex direction={"column"} gap = "2px">
                        <Text color={"teal"} fontWeight="semibold" mt={4}>Fragrances</Text>
                        <Text mt={2}>Perfumes</Text>
                        <Text>Deodarant</Text>
                        <Text mb={4}>Body Mist</Text>
                        <hr/>  
                        </Flex>          
                    </Box>

                    <Box>
                        <Text color={"teal"} fontWeight="semibold" mt={4}>Applicances</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Hair Straingtner</Text>
                            <Text>Hair dryer</Text>
                            <Text>Epilator</Text>
                            <Text mb = {4}>Swimmers</Text>
                            <hr/>
                        </Flex>

                        <Text color={"teal"} fontWeight="semibold" mt={4}>Menus Grooming</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Makeup</Text>
                            <Text>Skincare</Text>
                            <Text>Premium Beauty</Text>
                            <Text>Beard Oil</Text>
                            <Text mb = {4}>Hair Wax</Text>
                            <hr/>
                        </Flex>                     
                    </Box>

                    <Box>
                        <Text color={"teal"} fontWeight="semibold" mt={4}>Beauty Gifts & Makeup Sets</Text>
                        <Flex direction={"column"} gap = "2px">
                            <Text mt={2}>Smart Wearables</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>
                            <Text>Fitness Gadgets</Text>
                            <Text>Headphones</Text>

                            <Text mb={4}>Speakers</Text>
                            <hr/>
                        </Flex>

                        <Text color={"teal"} fontWeight="semibold" mt={4}>Premium Beauty</Text>
                        <Text color={"teal"} fontWeight="semibold" mt={4} mb={8}>Wellness & Hygine</Text>                    
                    </Box>

                    

                </Flex>
            </Box>
            </Box>

            <Box id='dropdown-last' pl={"15px"} pr = {"15px"}>
            <Text fontWeight={"semibold"} fontSize = "15px" fontFamily={"sans-serif"} pt={"30px"} pb={"30px"}><Flex gap={1}>STUDIO <Text fontSize={"9px"} color={"red"}>NEW</Text></Flex></Text>
            <Box id='content-last'>
                <Flex  direction={"column"} justifyContent={"center"} alignItems = "center" gap={"30px"}>
                <Image src = "https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" alt='studio'  mt = {8}/>
                <Text>Your Daily Inspiration for everything fashion</Text>
                <Image src='https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png' alt='banner'/>
                <button style={{border : "1px solid gainsboro", padding: "10px 30px 10px 30px", marginBottom: "20px"}}>EXPLORE STUDIO</button>
                </Flex>
               
            </Box>
            </Box>

            
          
        </Box>
    </div>
  )
}

export default DropDown