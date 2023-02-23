import {SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import {CiUser} from "react-icons/ci"
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"

import DropDown from './DropDown'
import "./dropdown.css"
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <Box zIndex={99} backgroundColor = "white"  >
      <Box id='desktop_nav' boxShadow= "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" display = "flex" alignItems={"center"} justifyContent = "space-between"  paddingRight={"50px"} >
        <Flex alignItems = "center" gap={"30px"} w = "55%">
          <Box>
            <Image w={"120px"} h= {"50px"} src='https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png' alt='Logo'/>
          </Box>
          <DropDown/>
        </Flex>
        <Box width={"32%"}>
          <InputGroup width={"450px"}>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
          />
          <Input type='tel' placeholder='Search for products, brands and more' fontSize={"14px"} variant = "none" border={"1px solid gainsboro"}/>
          </InputGroup>
        </Box>
        <Flex gap={"30px"} >
          <Box display={"flex"} flexDirection= "column" alignItems={"center"} justifyContent= "center" gap={"5px"} id = "profile_dropdown"  backgroundColor = "white" mb={-8} pb = {8}>
            <CiUser/>
            <Text fontSize={"13px"} fontWeight= "semibold">Profile</Text>
            <Box id='dropdown_content_profile'>
              <Text fontWeight={"semibold"} mt = {4}>Welcome</Text>
              <Text>To access account and manage or...</Text>
              <button className='account_login'>LOGIN / SIGNUP</button>
              <hr/>

              <Box mt={4} mb = {4}>
                  <Text>Orders</Text>
                  <Text>Wishlist</Text>
                  <Text>Gift Cards</Text>
                  <Text>Contact Us</Text>
                  <Text>Myntra Insiders</Text>
              </Box>
              <hr/>

              <Box mt={4} mb = {4}>
                  <Text>Myntra Credit</Text>
                  <Text>Coupon</Text>
                  <Text>Saved Cards</Text>
                  <Text>Saved VPN</Text>
                  <Text>Saved Addresses</Text>
              </Box>

            </Box>
          </Box>

          <Box display={"flex"} flexDirection= "column" alignItems={"center"} justifyContent= "center" gap={"5px"}>
            <AiOutlineHeart/>
            <Text fontSize={"13px"} fontWeight= "semibold">Wishlist</Text>
          </Box>

          <Box display={"flex"} flexDirection= "column" alignItems={"center"} justifyContent= "center" gap={"5px"}>
          <div class="cart">
          <span class="count">0</span> 
          <Box id='cart-icon'>
          <HiOutlineShoppingBag/>
          </Box> 
          
          </div>
            <Text fontSize={"13px"} fontWeight= "semibold">Bag</Text>
          </Box>
        </Flex>
      </Box> 
      <MobileNavbar/>
    </Box>
    
  )
}

export default Navbar