import {
  Box,
  FormControl,
  Input,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Spacer,
  StackDivider,
  VStack,
  Flex,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";

import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addCustomerData } from "../Redux/AppReducer/PaymentDetails/action";
// import SinglePaymentCard from "../Components/Cart/SinglePaymentCard";
import { Link } from "react-router-dom";

const Checkout = () => {
  //   const cart = useSelector((store) => store.cartReducer.cart);
  //   const amount = useSelector((store) => store.cartReducer.totalCartAmount);
  //   const items = useSelector((store) => store.cartReducer.totalItems);
  //   const discount = useSelector((store) => store.cartReducer.discount);
  //   const dispatch = useDispatch();

  const [paymentDetails, setPaymentDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      ...paymentDetails,
      //   orderAmount: amount - discount,
      //   numOfItems: items,
      //   cartDetails: cart,
    };
    console.log(newItem);
    // dispatch(addCustomerData(newItem));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid w="100%" columns={{ base: 1, sm: 1, md: 1 }}>
      <VStack
        divider={<StackDivider borderColor="white" />}
        spacing={10}
        align="stretch"
      >
        {/* Form */}
        <Box border="1px" w="100%">
          <SimpleGrid
            w="85%"
            margin="auto"
            padding="0.5rem"
            // templateColumns="repeat(2, 2fr)"
            columns={{ base: 1, sm: 1, md: 2 }}
            gap={6}
          >
            <GridItem
              w="100%"
              border="1px solid"
              borderColor="rgb(233,233,233)"
              padding="1.2rem"
            >
              <form padding="4rem" onSubmit={handleSubmit}>
                <FormControl width="70%" margin="auto">
                  <FormLabel
                    mt="15px"
                    htmlFor="fullName"
                    fontFamily={"sans-serif"}
                    fontWeight="normal"
                  >
                    Full Name
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="fullName"
                    size="sm"
                    placeholder="Enter Your Name"
                    name="fullName"
                    value={paymentDetails.fullName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel mt="15px" htmlFor="address">
                    Address
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    size="sm"
                    id="address"
                    name="address"
                    placeholder="Your Address"
                    value={paymentDetails.address}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel mt="15px" htmlFor="city">
                    City
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="city"
                    size="sm"
                    placeholder="Your City"
                    name="city"
                    value={paymentDetails.city}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel mt="15px" htmlFor="cardNumber">
                    Card Number
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    size="sm"
                    placeholder="Your Card Number"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel mt="15px" htmlFor="expirationDate">
                    Expiration Date
                  </FormLabel>
                  <Input
                    //   placeholder="Select Date and Time"
                    //   size="md"
                    type="month"
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    // type="text"
                    placeholder="Expiration Date"
                    id="expirationDate"
                    size="sm"
                    name="expirationDate"
                    value={paymentDetails.expirationDate}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel mt="10px" htmlFor="cvv">
                    CVV
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="CVV"
                    size="sm"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                  />
                </FormControl>
                <Spacer></Spacer>
                <Flex margin="auto" w="70%" padding="0.5rem">
                  <Button
                    borderColor="rgb(150, 150, 150)"
                    bg="#FF527B"
                    w="60%"
                    _hover={{ bg: "#FF527B" }}
                    margin="auto"
                    mt="10px"
                    type="submit"
                    border="none"
                    onClick={onOpen}
                  >
                    Place Order
                  </Button>
                </Flex>
              </form>
            </GridItem>
            <GridItem
              w="100%"
              border="1px solid"
              borderColor="rgb(233,233,233)"
              padding="1.2rem"
            >
              {/* Order Details */}
              <Box w="100%" padding="0.5rem" borderColor="gray.200">
                <Text w="100%" fontSize="18px" fontFamily="begummedium">
                  Order Summary
                </Text>
                <VStack divider={<StackDivider />} spacing={4} w="100%">
                  <VStack>
                    {/* {cart?.map((el) => (
                      <SinglePaymentCard key={el.id} product={el} />
                    ))} */}
                  </VStack>
                  <Box w="100%">
                    <VStack>
                      <HStack w={{ sm: "300px", md: "495px" }}>
                        <Text
                          mt="10px"
                          textAlign="left"
                          fontWeight={"normal"}
                          fontSize="16px"
                          lineHeight="20px"
                        >
                          SUBTOTAL
                        </Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹{5000}</Text>
                        {/* <Text textAlign="right">₹{amount}</Text> */}
                      </HStack>
                    </VStack>
                    <VStack>
                      <HStack w={{ sm: "300px", md: "495px" }}>
                        <Text
                          textAlign="left"
                          mt="10px"
                          fontWeight={"normal"}
                          fontSize="16px"
                          lineHeight="20px"
                        >
                          CART DISCOUNT
                        </Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹{-6000}</Text>
                        {/* <Text textAlign="right">₹{discount}</Text> */}
                      </HStack>
                    </VStack>
                    <VStack>
                      <HStack w={{ sm: "300px", md: "495px" }}>
                        <Text
                          mt="10px"
                          textAlign="left"
                          fontWeight={"normal"}
                          fontSize="16px"
                          lineHeight="20px"
                        >
                          SHIPPING CHARGES
                        </Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹0</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <HStack w={{ sm: "300px", md: "495px" }}>
                      <Text
                        mt="10px"
                        textAlign="left"
                        fontWeight={"normal"}
                        fontSize="16px"
                        lineHeight="20px"
                      >
                        TOTAL COST
                      </Text>
                      <Spacer></Spacer>
                      <Text textAlign="right" fontSize="16px" color={"#FF527B"}>
                        ₹{5000 - 600}
                        {/* ₹{amount - discount} */}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack>
                <Box>
                  <p>Contact Details :</p>
                  <p>
                    <Text as="b">{paymentDetails.fullName}</Text>
                  </p>
                  <p>
                    <Text as="cite">{paymentDetails.address}</Text>
                  </p>
                  <p>
                    <Text as="cite">{paymentDetails.city}</Text>
                  </p>
                </Box>
                <Spacer></Spacer>
                <Box>
                  <p>Payment Details:</p>
                  <p>
                    <Text>{paymentDetails.cardNumber}</Text>
                  </p>
                  <p>
                    <Text>{paymentDetails.expirationDate}</Text>
                  </p>
                  <p>
                    <Text>{paymentDetails.cvv}</Text>
                  </p>
                </Box>
              </HStack>
              <br></br>
              <p>
                Congratulations your order with order id #201216 is successfully
                placed
              </p>
            </ModalBody>
            <ModalFooter>
              <Link to="/">
                <Button colorScheme="blue" mr={1} onClick={onClose}>
                  Confirm
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </SimpleGrid>
  );
};

export default Checkout;
