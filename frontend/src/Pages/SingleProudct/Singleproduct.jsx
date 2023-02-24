// import React, { useState } from "react";
import {
  Container,
  Divider,
  ListItem,
  Tooltip,
  Icon,
  UnorderedList,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { StackDivider, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandbagFill, BsTruck } from "react-icons/bs";
import { BiPurchaseTag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GoNote } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../Redux/AppReducer/product/action";
import Navbar from "../../Components/Navbar";
// import Footer from "../Components/Footer";
import { Input } from "@chakra-ui/react";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  //   const products = useSelector((store) => store.AppReducer.products);
  //   const [product, setProduct] = useState({});
  //   const [size, setSize] = useState("5(44.5)");
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     let productData = products.find((el) => el.id === +id);
  //     // console.log(productData);
  //     productData && setProduct(productData);
  //   }, []);

  //   const handleAddToCart = () => {
  //     let newItem = {
  //       //   ...product,
  //       size: size,
  //       quantity: 1,
  //     //   totalPrice: 1 * product.price,
  //     };
  //     dispatch(addToCart(newItem));
  //   };

  //   const property = {
  //     imageUrl:
  //       "https://cdn.caratlane.com/media/catalog/product/J/R/JR07340-1RP9OO_1_lar.jpg",
  //     imageAlt: "Rear view of modern home with pool",
  //     imageUrl2:
  //       "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/R/JR03126-WGP900_13_pdtouch.png",
  //     imageUrl3: "https://assets.cltstatic.com/images/responsive/packaging.jpg",
  //     imagelogo1: "https://image.pngaaa.com/677/6075677-middle.png",
  //     imagelogo2:
  //       "https://www.kindpng.com/picc/m/340-3400180_home-logo-pink-png-transparent-png.png",
  //   };

  return (
    <div>
      <Navbar />
      <VStack
        divider={<StackDivider borderColor="white" />}
        spacing={14}
        align="stretch"
      >
        <Container padding="8" maxW="100%" bg="#FFFF">
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={"20px"}>
            <SimpleGrid
              columns={{ base: 2, sm: 2, md: 2 }}
              spacing="10px"
              h={"800px"}
            >
              <Image
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21252488/2023/1/9/9f8ac3ea-f38d-47a4-ad8e-6f5dac3ab3ba1673261945433-Nike-Renew-Ride-3-Mens-Road-Running-Shoes-4941673261945099-1.jpg"
                alt=""
              />
              <Image
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21252488/2023/1/9/9f8ac3ea-f38d-47a4-ad8e-6f5dac3ab3ba1673261945433-Nike-Renew-Ride-3-Mens-Road-Running-Shoes-4941673261945099-1.jpg"
                alt=""
              />
              <Image
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21252488/2023/1/9/9f8ac3ea-f38d-47a4-ad8e-6f5dac3ab3ba1673261945433-Nike-Renew-Ride-3-Mens-Road-Running-Shoes-4941673261945099-1.jpg"
                alt=""
              />
              <Image
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21252488/2023/1/9/9f8ac3ea-f38d-47a4-ad8e-6f5dac3ab3ba1673261945433-Nike-Renew-Ride-3-Mens-Road-Running-Shoes-4941673261945099-1.jpg"
                alt=""
              />
            </SimpleGrid>
            <Box ml={"30px"}>
              {/* <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={2}
                  align="stretch"
                > */}
              {/* <Box>
                    <Flex>
                      <Box>
                        <Text as="b" fontSize="20px">
                          {}
                        </Text>
                      </Box>
                    </Flex>
                  </Box> */}
              <Box>
                <SimpleGrid>
                  <Box>
                    <Text as={"h1"} fontWeight={"bold"} fontSize="xx-large">
                      Nike
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"xl"} color="GrayText">
                      Men Court Vision Sneakers
                    </Text>
                    <Button
                      textAlign={"center"}
                      // border={"1px solid black"}
                      height="20px"
                      width="130px"
                      mt={"10px"}
                      rounded="none"
                      _hover={{ border: "1px" }}
                    >
                      <Text fontWeight={"bold"} fontSize="15px">
                        {"  "} 4.5{"  "}
                        <Icon color={"#03A685"} fontSize="20px">
                          <AiFillStar />
                        </Icon>
                      </Text>
                      <Divider
                        orientation="vertical"
                        fontWeight={"extrabold"}
                        w="5px"
                      />
                      <Text fontWeight={"thin"} fontSize="15px">
                        {"  "}24 Ratings{"  "}
                      </Text>
                    </Button>
                  </Box>
                  <Divider mt={"10px"} variant={"solid"} />
                  <Box mt={"10px"}>
                    <Text fontSize={"20px"} fontWeight="bold">
                      Rs. {""}6295
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      color={"#03A685"}
                      fontSize="13px"
                      mt={"7px"}
                    >
                      inclusive of All taxes
                    </Text>
                  </Box>
                  <Box gap={"10px"} height="80px" mt="15px" space="10px">
                    {/* <p>Check Delivery & Trial Date</p>
                        <Input placeholder="PINCODE" size="md" /> */}
                    <Text fontSize={"15px"} fontWeight="bold">
                      SELCET SIZE (UK SIZE)
                    </Text>
                    <Flex gap={"10px"} mt="10px">
                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px solid", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 25.0CM "
                          aria-label="A tooltip"
                        >
                          6
                        </Tooltip>
                      </Button>
                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px solid", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 26.0CM "
                          aria-label="A tooltip"
                        >
                          7
                        </Tooltip>
                      </Button>

                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px solid", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 27.0CM "
                          aria-label="A tooltip"
                        >
                          8
                        </Tooltip>
                      </Button>

                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px solid", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 28.0CM "
                          aria-label="A tooltip"
                        >
                          9
                        </Tooltip>
                      </Button>

                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 29.0CM "
                          aria-label="A tooltip"
                        >
                          10
                        </Tooltip>
                      </Button>

                      <Button
                        rounded={"full"}
                        fontSize="12px"
                        bg="#fff"
                        border="1px"
                        borderColor={"gray"}
                        _hover={{ border: "1px solid", borderColor: "red" }}
                      >
                        <Tooltip
                          label="To Fit Foot Length - 30.0CM "
                          aria-label="A tooltip"
                        >
                          11
                        </Tooltip>
                      </Button>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>
              <Box>
                <Box>
                  <SimpleGrid columns={2} spacing={4} mt="20px">
                    <Box height="100px">
                      <Link to="/cart">
                        <Button
                          fontSize="1rem"
                          h={"55px"}
                          w="100%"
                          size="lg"
                          color="white"
                          bg="#FF527B"
                          _hover={{ bg: "#FF527B" }}
                          // onClick={handleAddToCart}
                        >
                          <Icon mr={"10px"} fontSize={"20px"}>
                            <BsFillHandbagFill />
                          </Icon>{" "}
                          ADD TO BAG
                        </Button>
                      </Link>
                    </Box>
                    <Box>
                      <Button
                        fontSize={{ sm: "15px", md: "1rem" }}
                        h={"55px"}
                        w="50%"
                        size={"lg"}
                        border="1px   "
                        bg={"#fff"}
                      >
                        <Icon
                          mr={{ sm: "5px", md: "10px" }}
                          fontSize={{ sm: "20px", md: "23px" }}
                        >
                          <AiOutlineHeart />
                        </Icon>
                        WISHLIST
                      </Button>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Divider borderColor={"black"} />
              </Box>

              <Box>
                <Box mt={"20px"}>
                  <Text fontSize="l" fontWeight={"bold"}>
                    DELIVERY OPTIONS{"   "}
                    <Icon fontSize={"22px"}>
                      {" "}
                      <BsTruck />
                    </Icon>
                  </Text>
                  <Input
                    mt="20px"
                    placeholder="Enter Pincode"
                    w={"40%"}
                    _hover={{
                      border: "1px",
                      borderColor: "black",
                      focusBorderColor: "black",
                    }}
                  />
                  <Text as={"p"} fontSize="12px" mt="5px">
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </Text>
                </Box>
                <Box mt="20px">
                  <Text mt="10px">100% Original Products</Text>
                  <Text mt="10px">Pay on delivery might be available </Text>
                  <Text mt="10px">Easy 14 days returns and exchanges</Text>
                  <Text mt="10px">Try & Buy might be available</Text>
                </Box>
                <Box mt="40px">
                  <Text fontSize="l" fontWeight={"bold"}>
                    BEST OFFERS{" "}
                    <Icon fontSize={"20px"}>
                      <BiPurchaseTag />
                    </Icon>
                  </Text>
                </Box>
                <Box mt="20px">
                  <Text
                    display={"inline-flex"}
                    gap="5px"
                    fontSize="l"
                    fontWeight={"bold"}
                  >
                    Best Price: <Text color="#FF905A"> Rs. 6095</Text>
                  </Text>

                  <UnorderedList>
                    <ListItem>
                      Applicable on: Orders above Rs. 799 (only on first
                      purchase)
                    </ListItem>
                    <ListItem display={"inline-flex"}>
                      Coupon code:
                      <Text color="black" fontWeight={"bold"}>
                        MASAI
                      </Text>
                    </ListItem>
                    <ListItem>
                      Coupon Discount: Rs. 200 off (check cart for final
                      savings)
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box mt={"30px"}>
                  <Text fontWeight={"bold"}>EMI option available</Text>
                  <UnorderedList>
                    <ListItem fontSize={"12px"}>
                      {" "}
                      EMI starting from Rs.294/month
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Divider borderColor={"black"} mt="40px" />
              <Box mt={"20px"}>
                <Text fontSize="l" fontWeight={"bold"}>
                  PRODUCT DETAILS{" "}
                  <Icon fontSize={"20px"}>
                    <GoNote />
                  </Icon>
                </Text>
              </Box>
              <Box mt={"20px"}>
                <Text fontWeight={"bold"}>Features:</Text>
                <Text>
                  {" "}
                  A pair of round toe white sneakers ,has regular styling
                </Text>
                <Text>Lace-ups detail</Text>
                <Text>Synthetic upper</Text>
                <Text>Cushioned footbed</Text>
                <Text>
                  Padded, low-cut collar looks sleek and feels great while the
                  perforations on the toe and sides add comfort and
                  breathability.
                </Text>
                <Text>Perforations on the toe and sides</Text>
                <Text>Rubber outsole</Text>
                <Text>Textured and patterned outsole</Text>
                <Text>Warranty: 6 months</Text>
                <Text>Warranty provided by Brand/Manufacturer</Text>
              </Box>
              <Box mt={"20px"}>
                <Text fontWeight={"bold"}>About NIke Court VIsion shoes:</Text>

                <Text>
                  Meet the Nike Court Vision Low. A classic remixed with at
                  least 20% recycled materials by weight, its crisp upper and
                  stitched overlays keep the soul of the original style. The
                  plush, low-cut collar keeps it sleek and comfortable for your
                  world.
                </Text>
              </Box>

              <Box mt={"20px"}>
                <Text fontWeight={"bold"}>Material & Care:</Text>

                <Text>Synthetic</Text>

                <Text>Wipe with a clean dry cloth</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
        {/* <Footer></Footer> */}
      </VStack>
    </div>
  );
};

export default SingleProduct;
