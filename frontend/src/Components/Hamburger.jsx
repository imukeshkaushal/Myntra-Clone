
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react"
import { GiHamburgerMenu, } from "react-icons/gi"
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


export const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { authState, logoutUser } = useContext(AuthContext);
    const btnRef = React.useRef()
    let name = localStorage.getItem("name") || "";
    return (
      <>
        <GiHamburgerMenu ref={btnRef} colorScheme='teal' onClick={onOpen}/>
         
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size = "lg"
          height = "700px"
          p = {0}
        >
          <DrawerOverlay />
          <DrawerContent p = {0}>
            <DrawerCloseButton variant={"none"} border = "0px"/> 
            <DrawerHeader padding={0}>
                <Image src="https://assets.myntassets.com/assets/images/2023/1/25/08139431-49b4-4895-8f06-3d864e4640fd1674670210709-offer-banner-300-1080x496-code-_-MYNTRA300.jpg" alt="banner 1"/>
                {
                    authState.isAuth ? <Flex bgColor={"#FFFDD0"} color= {"#E62044"} pl = "20px" height = "50px" alignItems={"center"} fontSize={"20px"} pr={8} justifyContent= "space-between">Hii {name} <Button bgColor={"none"} onClick = {logoutUser}>LOGOUT</Button></Flex> : <Flex bgColor={"#FFFDD0"} color= {"#E62044"} direction = "row-reverse" height = "30px" alignItems={"center"} fontSize={"12px"} pr={8}><Link to="/login">SIGN UP / LOGIN</Link></Flex>
                }
            </DrawerHeader>
  
            <DrawerBody p={0}>
                <Flex justifyContent={"space-between"} p={2} pl = {4} pr={4}  alignItems= "center">
                  <Link to="/products?gender=Men">  <Text fontWeight={"semibold"} onClick = {onClose}>Men</Text></Link>
                    <ChevronRightIcon/>
                </Flex>

                <Flex justifyContent={"space-between"} p = {2} pl = {4} pr={4} alignItems= "center">
                <Link to="/products?gender=Women"> <Text fontWeight={"semibold"} onClick = {onClose}>Woman</Text></Link>
                    <ChevronRightIcon/>
                </Flex>

                <Flex justifyContent={"space-between"} p = {2} pl = {4} pr={4} alignItems= "center">
                    <Text fontWeight={"semibold"} onClick = {onClose}>Kids</Text>
                    <ChevronRightIcon/>
                </Flex>

                <Flex justifyContent={"space-between"} p = {2} pl = {4} pr={4} alignItems= "center">
                    <Text fontWeight={"semibold"} onClick = {onClose}>Home & Living</Text>
                    <ChevronRightIcon/>
                </Flex>

                <Flex justifyContent={"space-between"} p = {2} pb = {6} pl = {4} pr={4} alignItems= "center" borderBottom = "1px solid gainsboro">
                    <Text fontWeight={"semibold"} onClick = {onClose}>Beauty</Text>
                    <ChevronRightIcon/>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Myntra Studio</Text>
                    <Badge variant='outline' borderRadius={"20px"} colorScheme='pink' fontSize={"8px"}>New</Badge>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Myntra Mall</Text>
                    <Badge variant='outline' borderRadius={"20px"} colorScheme='pink' fontSize={"8px"}>New</Badge>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Myntra Insider</Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Gift Cards</Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Contact Us</Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>FAQs</Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <Text p={2} pl = {4} pr={4} onClick = {onClose}>Legal</Text>
                </Flex>
                <Image src="https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png" alt = "banner2"/>

            </DrawerBody>
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }