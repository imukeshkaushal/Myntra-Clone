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
        <Box width="70%" m={"auto"} height={"800px"}>
          <Box display="grid" gridTemplateColumns={"repeat(4,1fr)"}>
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
            <Text fontSize={"13px"} fontWeight = "semibold">CUSTOMER POLICIES</Text>
              <Flex direction={"column"} gap = {1}>
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
            <Text fontSize={"13px"} fontWeight = "semibold">EXPERIENCE MYNTRA APP ON MOBILE</Text>
            <Flex mt={4} gap="20px">
              <Image width={"50%"} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="gp store"/>
              <Image width={"50%"} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="apple store"/>
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
          <Flex>
            <Text fontSize={"13px"} fontWeight = "semibold" mt={8}>POPULAR SEARCHES</Text>
            <hr style={{color : "green"}}/>
          </Flex>
          
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
