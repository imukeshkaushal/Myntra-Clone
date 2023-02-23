import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFilePlus, BsHeart} from "react-icons/bs"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import "./dropdown.css"
import { Hamburger } from './Hamburger'

const MobileNavbar = () => {
  return (
    <div id='mobile_nav'>
    <Box p={"15px"} >
    <Flex justifyContent={"space-between"} alignItems = "center">
        <Flex gap={"10px"} alignItems= "center">
          <Hamburger/>
          <Text fontWeight={"semibold"}>Syntra</Text>
        </Flex>
        
      <Flex gap={"20px"} alignItems = "center">
        <BsFilePlus size={"20px"}/>
        <SearchIcon boxSize={"20px"}/>
        <BsHeart size={"20px"}/>
        <div class="cart">
          <span class="count">0</span> 
          <Box id='cart-icon'>
          <HiOutlineShoppingBag size={"20px"}/>
          </Box> 
        </div>
      </Flex>
    </Flex>
  </Box>
    </div>
  )
}

export default MobileNavbar