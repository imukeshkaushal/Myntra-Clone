import { Box,Image, Text } from '@chakra-ui/react'
import React from 'react'
import Carousal from '../Components/Slider'
import { bagImages, brandPriceImages, brandsImages, dealImages, dealTopImages, topImages, bestBuyImages, myntraImages, giftCards, giftCardImages, styleImages, tendHerImages, tendHimImages, kidsStarImages, newTopImages, imageStock, beautyImages, seasonImages, colorSeason, topStyleImages, loveImages, trendingImages } from '../Components/images'


const Home = () => {
  return (
    <Box>
      <Carousal/>
      <Box>
        <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {4} pl={10} fontWeight = "bold" textAlign={["center","left","left"]}>DEAL OF THE DAY</Text>
        <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
        {
          dealImages.map((el) => {
            return (
              <Box>
                <Image borderRadius={"10px"} src={el.image} alt = "images"/>
              </Box>
            )
          })
        }
        </Box>
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]}>BEST OF MYNTRA EXCLUSIVE BRANDS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        brandsImages.map((el) => {
          return (
            <Box>
              <Image borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >TOP PICS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(7,1fr)"]} gap = "10px" mt={8}>
      {
        topImages.map((el) => {
          return (
            <Box>
              <Image borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >CATEGORIES TO BAG</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} mt={8}>
      {
        bagImages.map((el) => {
          return (
            <Box>
              <Image borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]}>DEALS ON TOP BRANDS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} mt={8}>
      {
        dealTopImages.map((el) => {
          return (
            <Box>
              <Image borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >BRANDS AT SLASHED PRICES</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(7,1fr)"]} gap = "10px" mt={8}>
      {
        brandPriceImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >BEST BUY</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        bestBuyImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"10px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >MYNTRA LUXE</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        myntraImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >GIFTING CARDS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap = "10px" mt={8}>
      {
        giftCards.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={4}>
      {
        giftCardImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >STYLECAST HONEST FIND</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(5,1fr)","repeat(7,1fr)"]} gap = "10px" mt={8}>
      {
        styleImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >TENDS FOR HER</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        tendHerImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >TENDS FOR HIM</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        tendHimImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >NEW IN TOP BRANDS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        newTopImages.map((el) => {
          return (
            <Box>
              <Image borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >NEWNESS FOR EVERY OCCASION</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap = "10px" mt={8}>
      {
        imageStock.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >LATEST & BEAUTY GROMMING</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap = "10px" mt={8}>
      {
        beautyImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>
      
      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >UNMISSABLE THIS SEASON</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        seasonImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >COLORS OF THE SEASON</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap = "10px" mt={8}>
      {
        colorSeason.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >TOP INFLUENCERS EXCLUSIVE STYLES</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)"]} gap = "10px" mt={8}>
      {
        topStyleImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >BUDGET PICKS INFLUENCERS LOVE</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8}>
      {
        loveImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      <Text fontSize={["22px","25px","28px"]} letterSpacing = {4} p= {[1,2,4]} pl={[2,4,10]} fontWeight = "bold" mt={12} textAlign={["center","left","left"]} >TRENDING OUTFITS BY INFLUENCERS</Text>
      <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(6,1fr)","repeat(8,1fr)"]} gap = "10px" mt={8} mb = {16}>
      {
        trendingImages.map((el) => {
          return (
            <Box>
              <Image border={"1px solid gainsboro"} borderRadius={"15px"} src={el.image} alt = "images"/>
            </Box>
          )
        })
      }
      </Box>

      
    </Box>
  )
}

export default Home