import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Spacer,
  Container,
  UnorderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   getCartData,
//   handleCouponDiscount,
//   handleTotalAmount,
// } from "../Redux/AppReducer/Cart/action";
// import SingleCartCard from "../Components/Cart/SingleCartCard";
import Footer from "../Components/Footer";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState("");
  //   const dispatch = useDispatch();
  //   const cart = useSelector((store) => store.cartReducer.cart);
  //   const amount = useSelector((store) => store.cartReducer.totalCartAmount);
  //   const items = useSelector((store) => store.cartReducer.totalItems);
  //   const discount = useSelector((store) => store.cartReducer.discount);

  //   useEffect(() => {
  //     dispatch(getCartData);
  //   }, []);

  //   const handleCouponCode = () => {
  //     // console.log(data);
  //     dispatch(handleCouponDiscount(data, amount));
  //   };

  return (
    <Box border="1px solid white" w="100%">
      {/* navbar */}
      <Flex w="100%" position="fixed" bg="white">
        <Flex position="fixed" w="100%" padding="0.5rem" bg="white">
          <HStack w="100%">
            <Box justifyContent="left" w="20%">
              <Image
                w="3rem"
                src="https://assets.myntassets.com/assets/images/2021/1/29/3fa39f6c-edfe-4733-9f64-56d9bdc448fe1611931505688-Myntra-Logo-01.jpg"
              ></Image>
            </Box>
            <UnorderedList
              padding="0.5rem"
              w="60%"
              display="flex"
              listStyleType="none"
              justifyContent="center"
            >
              <ListItem
                mr="0rem"
                fontSize="1.2rem"
                fontWeight="500"
                justifyContent="space-evenly"
              >
                Shopping Cart
              </ListItem>
              <ListItem>
                <Flex>
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png"
                    maxW="2rem"
                  ></Image>
                  <span>{/* <Text as="b">{items}</Text> */}</span>
                </Flex>
              </ListItem>
            </UnorderedList>
          </HStack>
        </Flex>
      </Flex>
      <Spacer></Spacer>
      {/* cart page data */}
      <Box mt="5rem" h="auto" ml="10rem">
        <Box backgroundColor="#F9F9FA" w="90%">
          <HStack spacing="24px" w="100%">
            <Flex w="70%" h="auto">
              <Flex
                w="100%"
                borderRight="1px solid"
                borderRightColor="rgb(233, 233, 233)"
              >
                <VStack w="95%">
                  <Flex
                    border="1px solid"
                    borderColor="#D9E1EA"
                    w="100%"
                    h="auto"
                    bg="white"
                    borderRadius="5px"
                    borderLeft="5px solid"
                    borderLeftColor="rgb(136, 99, 251)"
                    padding="0.5rem"
                  >
                    <HStack spacing="10px" w="100%" padding="0.1rem">
                      <Flex
                        w="85%"
                        margin="auto"
                        borderRight="1px solid"
                        borderColor="#D9E1EA"
                      >
                        <Card>
                          <CardBody>
                            <Text
                              textAlign="left"
                              fontFamily="BegumSemiBold,Arial, sans-serif"
                              fontSize="1.2rem"
                              lineHeight="1rem"
                              color="rgb(136, 99, 251)"
                            >
                              Get ₹ 1844 xCLusive points on this order.
                            </Text>
                            <Text
                              textAlign="left"
                              fontFamily="MuliRegular,Helvetica, Arial, sans-serif"
                              fontSize="1rem"
                              lineHeight="1rem"
                              color="rgb(35, 21, 53)"
                            >
                              You can redeem these points on your next order
                            </Text>
                            <Text
                              textAlign="left"
                              fontFamily="MuliRegular,Helvetica, Arial, sans-serif"
                              fontSize="1rem"
                              lineHeight="1rem"
                              color="rgb(35, 21, 53)"
                            >
                              ( 1 Point = 1 rupee ) <a>Know More</a>
                            </Text>
                          </CardBody>
                        </Card>
                      </Flex>
                      <Flex w="15%" margin="auto">
                        <Image src="https://www.shutterstock.com/image-vector/rupee-line-icon-simple-outline-260nw-1927650245.jpg"></Image>
                      </Flex>
                    </HStack>
                  </Flex>
                  <Flex w="100%">
                    <Text
                      w="75%"
                      fontFamily="MuliSemiBold,Helvetica, Arial, sans-serif"
                      fontSize="1.1rem"
                    >
                      {/* Total Items ({items}) : ₹{amount} */}
                    </Text>
                    <Text
                      w="25%"
                      textAlign="right"
                      color="rgb(222, 87, 229)"
                      textfamily="InterRegular, Helvetica Neue, Helvetica, Arial, sans-serif"
                      fontSize="inherit"
                    >
                      Save Cart
                    </Text>
                  </Flex>
                  <VStack>
                    {/* {cart?.map((el) => (
                        <SingleCartCard key={el.id} product={el} />
                      ))} */}
                  </VStack>
                  {/*  */}
                </VStack>
              </Flex>
            </Flex>
            <Flex w="30%" h="auto">
              <VStack w="100%">
                <Box
                  w="100%"
                  borderRadius="0.2rem"
                  bg="rgb(246, 239, 246)"
                  border="rgb(233, 233, 233)"
                >
                  <Button
                    onClick={onOpen}
                    borderColor="blue"
                    w="100%"
                    h="auto"
                    bg="teal.200"
                    borderRadius="0.5rem"
                    padding="0.5rem"
                  >
                    Apply Coupan
                  </Button>
                </Box>
                <Box
                  border="1px solid"
                  borderColor="#D9E1EA"
                  w="100%"
                  h="auto"
                  bg="white"
                  borderRadius="0.2rem"
                >
                  <HStack w="100%">
                    <Image
                      padding="0.2rem"
                      src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-outline-truck-delivery-icon-png-image_5196485.jpg"
                      maxW="10%"
                    ></Image>
                    <Text padding="0.2rem">
                      Deliver to <Text as="b">421101</Text>
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem">Change</Text>
                  </HStack>
                </Box>
                <Box w="100%">
                  <Text textAlign="left">Order Summary:</Text>
                </Box>
                <Box w="100%" h="auto" bg="white" borderRadius="0.2rem">
                  <HStack w="100%">
                    <Text textAlign="left" fontWeight={"light"} fontSize="14px">
                      Subtotal
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{amount} */}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text padding="0.2rem" textAlign="left">
                      You Saved
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{discount} */}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text padding="0.2rem" textAlign="left">
                      Coupon Discount
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{discount} */}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text padding="0.2rem" textAlign="left">
                      Delivery Charges (Standard)
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      ₹0
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text
                      padding="0.2rem"
                      fontSize="1.2rem"
                      textAlign="left"
                      as="b"
                    >
                      Total Cost
                    </Text>
                    <Spacer></Spacer>
                    <Text
                      padding="0.2rem"
                      fontSize="1.2rem"
                      textAlign="right"
                      as="b"
                    >
                      {/* ₹{amount - discount} */}
                    </Text>
                  </HStack>
                </Box>
                <Link to="/checkout">
                  <Button
                    color="white"
                    variant="solid"
                    w="100%"
                    padding="0.5rem"
                    border="none"
                    bg="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
                    borderRadius="0.3rem"
                    fontFamily="MuliSemiBold, Helvetica Neue, Helvetica, Arial, sans-serif"
                    fontSize="1.2rem"
                  >
                    Checkout Securely
                  </Button>
                </Link>
              </VStack>
            </Flex>
          </HStack>
        </Box>
        <Box>
          {/* {discount === 0 ? ( */}
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Coupon Code</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  placeholder="Enter Coupon Code"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                ></Input>
                {/* <Button onClick={handleCouponCode}>Apply</Button> */}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* ) : ( "" )} */}
        </Box>
      </Box>
      <br></br>

      <Footer></Footer>
    </Box>
  );
};

export default Cart;
