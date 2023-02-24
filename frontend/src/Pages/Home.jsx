import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Carousal from '../Components/Slider'
import { dealImages } from '../Components/images'

const Home = () => {
  return (
    <Box>
      <Carousal/>
      <Box>
        <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {4} pl={10} fontWeight = "bold">DEAL OF THE DAY</Text>
       
        
      </Box>
    </Box>
  )
}

export default Home