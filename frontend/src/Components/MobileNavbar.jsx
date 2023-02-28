import { SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFilePlus, BsHeart} from "react-icons/bs"
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import "./dropdown.css"
import { Hamburger } from './Hamburger'

const MobileNavbar = ({count}) => {
  
  return (
    <div id='mobile_nav'>
    <Box p={"15px"} >
    <Flex justifyContent={"space-between"} alignItems = "center">
        <Flex gap={"10px"} alignItems= "center">
          <Hamburger/>
          <Link to="/"><Text fontWeight={"semibold"}>Syntra</Text></Link>
        </Flex>
        
      <Flex gap={"20px"} alignItems = "center">
        <BsFilePlus size={"20px"}/>
        <SearchIcon boxSize={"20px"}/>
        <Link to="/wishlist"> <BsHeart size={"20px"}/></Link>
       
        <Link to="/cart">
        <div className="cart">
          <span className="count">{count}</span> 
          <Box id='cart-icon'>
          <HiOutlineShoppingBag size={"20px"}/>
          </Box> 
        </div>
        </Link>
      </Flex>
    </Flex>
  </Box>
    </div>
  )
}

export default MobileNavbar