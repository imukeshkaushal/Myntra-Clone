import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {BsFilePlus, BsHeart} from "react-icons/bs"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import "./dropdown.css"

const MobileNavbar = () => {
  return (
    <div id='mobile_nav'>
    <Box p={"15px"} >
    <Flex justifyContent={"space-between"} alignItems = "center">
      <HamburgerIcon boxSize={"20px"}/>
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