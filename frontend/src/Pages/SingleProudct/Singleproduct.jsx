import React, { useEffect, useState } from "react";
import { Container, Divider, ListItem, Tooltip, Icon, UnorderedList, Toast } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { StackDivider, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandbagFill, BsTruck } from "react-icons/bs";
import { BiPurchaseTag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { GoNote } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";

// import { addToCart } from "../Redux/AppReducer/product/action";
import { Input } from "@chakra-ui/react";
import axios from "axios";
// const navigate = Navigate();
const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  // console.log(products);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("6");
  // const dispatch = useDispatch();

  const getProduct = () => {
    axios.get(`https://calm-cyan-octopus-wear.cyclic.app/products/${id}`).then(res => setProduct(res.data[0]));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleAddToCart = () => {
    console.log(product);
    let newItem = {
      ...product,
      size: size,
      totalPrice: product.price
    };

    fetch("https://calm-cyan-octopus-wear.cyclic.app/carts/add", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(response => {
        Toast({
          title: "Product Added to Cart",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true
        });
        console.log(newItem);
        // navigate("/cart");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <VStack divider={<StackDivider borderColor="white" />} spacing={14} align="stretch">
        <Container padding="8" maxW="100%" bg="#FFFF">
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={"20px"}>
            <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }} spacing="10px" h={"800px"}>
              <Image src={product.imageSrc} alt={product.brand} />
              <Image src={product.imageSrc} alt={product.brand} />
              <Image src={product.imageSrc} alt={product.brand} />
              <Image src={product.imageSrc} alt={product.brand} />
            </SimpleGrid>
            <Box ml={"30px"}>
              {/* <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={2}
                  align="stretch"
                > */}
              <Box mt="20px">
                <Flex>
                  <Box>
                    <Text as="b" fontSize="20px">
                      {/* {product.brand} */}
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <SimpleGrid>
                  <Box mt="20px">
                    <Text as={"h1"} fontWeight={"bold"} fontSize="20px">
                      {product.brand}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"xl"} color="GrayText">
                      {product.description}
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
                        {"  "} {product.rating}
                        {"  "}
                        <Icon color={"#03A685"} fontSize="20px">
                          <AiFillStar />
                        </Icon>
                      </Text>
                      <Divider orientation="vertical" fontWeight={"extrabold"} w="5px" />
                      <Text fontWeight={"thin"} fontSize="15px">
                        {"  "}24 Ratings{"  "}
                      </Text>
                    </Button>
                  </Box>
                  <Divider mt={"10px"} variant={"solid"} />
                  <Box mt={"10px"}>
                    <Text fontSize={"20px"} fontWeight="bold">
                      Rs.{product.price}
                    </Text>
                    <Text fontWeight={"bold"} color={"#03A685"} fontSize="13px" mt={"7px"}>
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
                        value={6}
                        onClick={e => setSize(e.target.value)}
                      >
                        <Tooltip label="To Fit Foot Length - 25.0CM " aria-label="A tooltip">
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
                        value={7}
                        onClick={e => setSize(e.target.value)}
                      >
                        <Tooltip label="To Fit Foot Length - 26.0CM " aria-label="A tooltip">
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
                        value={8}
                        onClick={e => setSize(e.target.value)}
                      >
                        <Tooltip label="To Fit Foot Length - 27.0CM " aria-label="A tooltip">
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
                        value={9}
                        onClick={e => setSize(e.target.value)}
                      >
                        <Tooltip label="To Fit Foot Length - 28.0CM " aria-label="A tooltip">
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
                        value={10}
                        onClick={e => setSize(e.target.value)}
                      >
                        <Tooltip label="To Fit Foot Length - 29.0CM " aria-label="A tooltip">
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
                        onClick={e => setSize(e.target.value)}
                        value={11}
                      >
                        <Tooltip label="To Fit Foot Length - 30.0CM " aria-label="A tooltip">
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
                          onClick={handleAddToCart}
                        >
                          <Icon mr={"10px"} fontSize={"20px"}>
                            <BsFillHandbagFill />
                          </Icon>{" "}
                          ADD TO BAG
                        </Button>
                      </Link>
                    </Box>
                    <Box>
                      <Button fontSize={{ sm: "15px", md: "1rem" }} h={"55px"} w="50%" size={"lg"} border="1px   " bg={"#fff"}>
                        <Icon mr={{ sm: "5px", md: "10px" }} fontSize={{ sm: "20px", md: "23px" }}>
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
                      focusBorderColor: "black"
                    }}
                  />
                  <Text as={"p"} fontSize="12px" mt="5px">
                    Please enter PIN code to check delivery time & Pay on Delivery Availability
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
                  <Text display={"inline-flex"} gap="5px" fontSize="l" fontWeight={"bold"}>
                    Best Price: <Text color="#FF905A"> Rs{product.price}</Text>
                  </Text>

                  <UnorderedList>
                    <ListItem>Applicable on: Orders above Rs. 799 (only on first purchase)</ListItem>
                    <ListItem display={"inline-flex"}>
                      Coupon code:
                      <Text color="black" fontWeight={"bold"}>
                        MASAI
                      </Text>
                    </ListItem>
                    <ListItem>Coupon Discount: Rs. 200 off (check cart for final savings)</ListItem>
                  </UnorderedList>
                </Box>
                <Box mt={"30px"}>
                  <Text fontWeight={"bold"}>EMI option available</Text>
                  <UnorderedList>
                    <ListItem fontSize={"12px"}> EMI starting from Rs.294/month</ListItem>
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
                <Text> A pair of round toe white sneakers ,has regular styling</Text>
                <Text>Lace-ups detail</Text>
                <Text>Synthetic upper</Text>
                <Text>Cushioned footbed</Text>
                <Text>
                  Padded, low-cut collar looks sleek and feels great while the perforations on the toe and sides add comfort and
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
                  Meet the Nike Court Vision Low. A classic remixed with at least 20% recycled materials by weight, its crisp
                  upper and stitched overlays keep the soul of the original style. The plush, low-cut collar keeps it sleek and
                  comfortable for your world.
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
