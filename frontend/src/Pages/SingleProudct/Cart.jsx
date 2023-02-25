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
  Text,
  useDisclosure,
  VStack,
  Spacer,
  UnorderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";

import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {
// getCartData,
// handleCouponDiscount,
// handleTotalAmount,
// } from "../Redux/AppReducer/Cart/action";
// import SingleCartCard from "../Components/Cart/SingleCartCard";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState("");
  // const dispatch = useDispatch();
  // const cart = useSelector((store) => store.cartReducer.cart);
  // const amount = useSelector((store) => store.cartReducer.totalCartAmount);
  // const items = useSelector((store) => store.cartReducer.totalItems);
  // const discount = useSelector((store) => store.cartReducer.discount);

  // useEffect(() => {
  //     dispatch(getCartData);
  // }, []);

  // const handleCouponCode = () => {
  //     // console.log(data);
  //     dispatch(handleCouponDiscount(data, amount));
  // };

  return (
    <Box border="1px solid white" w="100%">
      {/* navbar */}
      <Flex w="100%" position="fixed" bg="white">
        <Flex position="fixed" w="100%" padding="0.5rem" bg="white"></Flex>
      </Flex>
      <Spacer></Spacer>
      {/* cart page data */}
      <Box mt="5rem" h="auto" ml="10rem">
        <Box w="90%">
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
                              {/* ( 1 Point = 1 rupee ) <a>Know More</a> */}{" "}
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
                      {/* Total Items ({items}) : ₹{amount} */}{" "}
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
                    {" "}
                    {/* {cart?.map((el) => (
                        <SingleCartCard key={el.id} product={el} />
                      ))} */}{" "}
                  </VStack>
                  {/*  */}{" "}
                </VStack>
              </Flex>
            </Flex>
            <Flex w="30%" h="auto">
              <VStack w="100%">
                <Box w="100%">
                  <Button
                    onClick={onOpen}
                    borderColor="#E39D67"
                    w="100%"
                    h="auto"
                    bg="#E93D67"
                    borderRadius="0.5rem"
                    padding="0.5rem"
                  >
                    Apply Coupan
                  </Button>
                </Box>
                <Box
                  mt="1000px"
                  borderColor="#D9E1EA"
                  w="100%"
                  h="auto"
                  bg="white"
                >
                  <HStack w="100%" mt="10px">
                    <Image
                      padding="0.2rem"
                      src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-outline-truck-delivery-icon-png-image_5196485.jpg"
                      maxW="10%"
                    ></Image>
                    <Text padding="0.2rem">
                      Deliver to
                      <Text as="b">421101</Text>
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem">Change</Text>
                  </HStack>
                </Box>
                <Box w="100%" mt="10px">
                  <Text textAlign="left">Order Summary:</Text>
                </Box>
                <Box w="100%" h="auto" bg="white" borderRadius="0.2rem">
                  <HStack w="100%">
                    <Text
                      mt="10px"
                      textAlign="left"
                      fontWeight={"normal"}
                      fontSize="16px"
                      lineHeight="20px"
                    >
                      Total MRP
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{amount} */}{" "}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text
                      mt="10px"
                      textAlign="left"
                      fontWeight={"normal"}
                      fontSize="16px"
                      lineHeight="20px"
                    >
                      Discount on MRP
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{discount} */}{" "}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text
                      mt="10px"
                      textAlign="left"
                      fontWeight={"normal"}
                      fontSize="16px"
                      lineHeight="20px"
                    >
                      Coupon Discount
                    </Text>
                    <Spacer></Spacer>
                    <Text padding="0.2rem" textAlign="right">
                      {/* ₹{discount} */}{" "}
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text
                      mt="10px"
                      textAlign="left"
                      fontWeight={"normal"}
                      fontSize="16px"
                      lineHeight="20px"
                    >
                      Convenience Fee
                    </Text>
                    <Spacer></Spacer>
                    <Text
                      mt="10px"
                      padding="0.2rem"
                      textAlign="left"
                      fontWeight={"normal"}
                      fontSize="16px"
                      lineHeight="20px"
                      color="#03A685"
                    >
                      FREE
                    </Text>
                  </HStack>
                  <HStack w="100%">
                    <Text
                      mt="10px"
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
                      {/* ₹{amount - discount} */}{" "}
                    </Text>
                  </HStack>
                </Box>
                <Link to="/checkout">
                  <Button
                    color="white"
                    variant="outline"
                    w="320px"
                    padding="0.5rem"
                    border="none"
                    bg="#E93D67"
                    borderRadius="0.3rem"
                    fontSize="1.2rem"
                  >
                    Place Order
                  </Button>
                </Link>
              </VStack>
            </Flex>
          </HStack>
        </Box>
        <Box>
          {" "}
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
                {/* <Button onClick={handleCouponCode}>Apply</Button> */}{" "}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* ) : ( "" )} */}{" "}
        </Box>
      </Box>
      <br></br>
      {/* <Footer></Footer> */}{" "}
    </Box>
  );
};

export default Cart;
