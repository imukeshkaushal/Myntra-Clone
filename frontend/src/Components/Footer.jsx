import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import {ImInstagram} from "react-icons/im"
import {BsYoutube} from "react-icons/bs"
import { BsTwitter } from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <Box bgColor="#FAFBFC" fontFamily={"sans-serif"}>
        <Box width="70%" m={"auto"} height={"auto"} pb = {8}>
          <Box display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}>
            <Box>
              <Box>
                <Text fontSize={"13px"} fontWeight="semibold">
                  ONLINE SHOPPING
                </Text>
                <Flex direction={"column"} gap={1}>
                  <Text fontSize={"14px"} color="gray" mt={4}>
                    Men
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Woman
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Home & Living
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Beauty
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Gift Cards
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Myntra Insider
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fontSize={"13px"} fontWeight="semibold" mt={12}>
                  USEFUL LINKS
                </Text>
                <Flex direction={"column"} gap={1}>
                  <Text fontSize={"14px"} color="gray" mt={4}>
                    Blog
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Carriers
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Site Maps
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Corporate
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Information
                  </Text>
                  <Text fontSize={"14px"} color="gray">
                    Whitehat
                  </Text>
                </Flex>
              </Box>
              
            </Box>
            <Box>
            <Text fontSize={"13px"} fontWeight = "semibold" mt={[8,0,0,0]}>CUSTOMER POLICIES</Text>
              <Flex direction={"column"} gap = {1} >
                <Text fontSize={"14px"} color = "gray" mt={4}>Contact Us</Text>
                <Text fontSize={"14px"} color = "gray">FAQs</Text>
                <Text fontSize={"14px"} color = "gray">T&C</Text>
                <Text fontSize={"14px"} color = "gray">Terms of Use</Text>
                <Text fontSize={"14px"} color = "gray">Track Orders</Text>
                <Text fontSize={"14px"} color = "gray">Shipping</Text>
                <Text fontSize={"14px"} color = "gray">Cancellation</Text>
                <Text fontSize={"14px"} color = "gray">Returns</Text>
                <Text fontSize={"14px"} color = "gray">Privacy Policy</Text>
                <Text fontSize={"14px"} color = "gray">Grivience Officers</Text>
              </Flex>
            </Box>
            <Box>
            <Text fontSize={"13px"} fontWeight = "semibold" mt={[8,0,0,0]}>EXPERIENCE SYNTRA APP ON MOBILE</Text>
            <Flex mt={4} gap="20px">
              <Image width={"40%"} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="gp store"/>
              <Image width={"40%"} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="apple store"/>
            </Flex>
            <Text mt={8} fontSize={"13px"} fontWeight = "semibold">KEEP IN TOUCH</Text>
            <Flex gap={"10px"} alignItems = "center" mt={4}>
              <FaFacebookSquare size={"28px"} color = "gray"/>
              <BsTwitter size={"28px"} color = "gray"/>
              <BsYoutube size={"28px"} color = "gray"/>
              <ImInstagram size={"28px"} color = "gray"/>
            </Flex>
            </Box>
          </Box>
          <Box display={"flex"} flexWrap = "wrap" alignItems={"center"} mt={8} gap = "10px">
            <Text fontSize={"13px"} fontWeight = "semibold" >POPULAR SEARCHES</Text>
            <Box border={"1px solid gainsboro"} width = {"85%"}></Box>
          </Box>
          <Text fontSize={"14px"} color = "gray" mt={4}>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes  Boxers  Wallets  Tops  Earrings | Fastrack Watches  |Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</Text>
            <Box display={"flex"} flexWrap = "wrap" mt={12} justifyContent = "space-between" gap={4}>
              <Text fontSize={"14px"} color = "gray">In Case of any concern, <span style={{color : "blue", fontSize : "16px", fontWeight: "bold"}}>Contact Us</span></Text>
              <Text fontSize={"14px"} color = "gray">© 2023 www.myntra.com. All rights reserved.</Text>
            </Box>
          </Box>
      </Box>
    </div>
  );
};

export default Footer;
