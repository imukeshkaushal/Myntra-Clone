import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Stack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
  Spacer,
  Input
} from "@chakra-ui/react";
import axios from "axios";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState("");
  console.log(data);
  const [coupon, setCoupon] = useState("");
  const [delivery, setDelivery] = useState("");

  const getProduct = () => {
    axios
      .get(`https://calm-cyan-octopus-wear.cyclic.app/carts`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => setData(res.data));
  };

  const Total = () => {
    let sum = data ? data.reduce((sum, el) => (sum = el.productId.price * el.qty + sum), 0) : " ";
    return sum;
  };
  const PlusQuant = _id => {
    setData(data.map(el => (el._id === _id ? { ...el, qty: el.qty + 1 } : el)));
  };
  const MinusQuant = _id => {
    setData(data.map(el => (el._id === _id ? { ...el, qty: el.qty - 1 } : el)));
  };

  //   const removeItem = productId => {
  //     axios
  //       .delete(`https://calm-cyan-octopus-wear.cyclic.app/carts/${productId}`, {
  //         headers: {
  //           Authorization: localStorage.getItem("token")
  //         }
  //       })
  //       .then(res => {
  //         // handle success response
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         // handle error response
  //         console.log(err);
  //       });
  //   };

  //   let couponDis = 0;
  //   const handleCouponCode = () => {
  //     if (coupon === "masai") {
  //       couponDis = Total() - 200;
  //     } else {
  //       couponDis = Total() - 0;
  //     }
  //   };

  const totalMRP = Total() - 300;

  useEffect(() => {
    getProduct();
    const date = new Date();
    const x = date.getDate() + 4;
    date.setDate(x);
    let s = date.toString().split(" ");
    let a = s[2] + " " + s[1] + " " + s[3];
    setDelivery(a);
  }, []);

  return (
    <Box border="1px solid white" margin="auto" w="90%">
      <Spacer />
      {/* cart page data */}
      <Box mt="2rem" h="auto">
        <Box w="100%">
          <HStack spacing="24px" w="100%">
            <SimpleGrid
              gap={10}
              columns={{
                base: 1,
                sm: 1,
                md: 2
              }}
            >
              <Box w="100%">
                <Box>
                  <Flex borderRight="1px solid" borderRightColor="rgb(233, 233, 233)">
                    <SimpleGrid w="95%">
                      <SimpleGrid
                        border="1px solid"
                        borderColor="#D9E1EA"
                        bg="white"
                        borderRadius="5px"
                        borderLeft="5px solid"
                        borderLeftColor="rgb(136, 99, 251)"
                        padding="0.5rem"
                      >
                        <HStack spacing="10px" w="100%" padding="0.1rem">
                          <Flex w="85%" margin="auto" borderRight="1px solid" borderColor="#D9E1EA">
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
                            <Image src="https://www.shutterstock.com/image-vector/rupee-line-icon-simple-outline-260nw-1927650245.jpg" />
                          </Flex>
                        </HStack>
                      </SimpleGrid>
                      <Flex w="100%">
                        <Text w="75%" mt="10px" fontFamily="MuliSemiBold,Helvetica, Arial, sans-serif" fontSize="1.1rem">
                          Total Items {data.length} : ₹{totalMRP}{" "}
                        </Text>
                        <Text
                          w="25%"
                          padding={"10px"}
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
                        {data
                          ? data.map(el => (
                              <div key={el._id}>
                                <Flex
                                  border="1px solid"
                                  borderColor="#D9E1EA"
                                  w="100%"
                                  h="auto"
                                  bg="white"
                                  borderRadius="5px"
                                  padding="0.5rem"
                                >
                                  <HStack w="100%">
                                    <Flex margin="auto" w="25%" border="1px solid" borderColor="#D9E1EA" borderRadius="5px">
                                      <Image maxW="100%" bg="white" maxWidth="100%" src={el.productId.imageSrc} />
                                    </Flex>
                                    <Flex margin="auto" h="100%" w="50%">
                                      <Card margin="auto" w="95%">
                                        <CardBody w="100%">
                                          <Text
                                            textAlign="left"
                                            textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif"
                                            lineHeight="1rem"
                                            color="rgb(35, 21, 53)"
                                          >
                                            {el.productId.brand}{" "}
                                          </Text>
                                          <Text
                                            textAlign="left"
                                            textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif"
                                            lineHeight="1rem"
                                            mt="10px"
                                            color="rgb(35, 21, 53)"
                                          >
                                            {el.productId.description}{" "}
                                          </Text>
                                          <HStack mt="10px">
                                            <Text as="b">Size: {el.productId.size} </Text>
                                            <Spacer />
                                            <Text as="b">Qty:</Text>
                                            <Flex alignItems={"center"} gap={{ base: 1, sm: 1, md: 3 }}>
                                              <Button
                                                size={"sm"}
                                                variant="outline"
                                                fontSize={"10px"}
                                                onClick={() => PlusQuant(el._id)}
                                              >
                                                {" "}
                                                <AddIcon />
                                              </Button>
                                              <Text as={"span"}>{el.qty}</Text>
                                              <Button
                                                size={"sm"}
                                                variant="outline"
                                                fontSize={"10px"}
                                                isDisabled={el.qty === 1}
                                                onClick={() => MinusQuant(el._id)}
                                              >
                                                <MinusIcon />
                                              </Button>
                                            </Flex>
                                          </HStack>
                                          <br />
                                          <br />
                                          <Text
                                            textAlign="left"
                                            textfamily="MuliSemiBold,Helvetica Neue,Helvetica,Arial, sans-serif"
                                            lineHeight="1rem"
                                            color="rgb(136, 99, 251)"
                                          >
                                            Delivery by {delivery}
                                          </Text>
                                          <HStack w="100%">
                                            <Text
                                              textAlign="left"
                                              textfamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif"
                                              lineHeight="1rem"
                                              mt="10px"
                                            >
                                              ₹{el.productId.price}{" "}
                                            </Text>
                                          </HStack>
                                        </CardBody>
                                      </Card>
                                    </Flex>
                                    <Flex margin="auto" w="30%">
                                      <Stack
                                        alignSelf="end"
                                        direction="column"
                                        spacing={6}
                                        align="center"
                                        width={{
                                          base: "60%",
                                          sm: "60%",
                                          md: "100%"
                                        }}
                                      >
                                        <Button
                                          textfamily="MuliRegular,Helvetica, Arial, sans-serif"
                                          padding={{ sm: "0.1rem", md: "0.7rem" }}
                                          border="1px solid"
                                          borderColor="rgb(136, 99, 251)"
                                          bg="transparent"
                                          fontSize={{
                                            base: "10px",
                                            sm: "10px",
                                            md: "15px"
                                          }}
                                          w={{
                                            base: "80%",
                                            sm: "80%",
                                            md: "100%"
                                          }}
                                          borderRadius="0.2rem"
                                          //   onClick={removeItem}
                                        >
                                          Remove
                                        </Button>
                                        <Button
                                          textfamily="MuliRegular,Helvetica, Arial, sans-serif"
                                          padding={{
                                            sm: "0.1rem",
                                            md: "0.7rem"
                                          }}
                                          fontSize={{
                                            base: "10px",
                                            sm: "10px",
                                            md: "15px"
                                          }}
                                          border="1px solid"
                                          borderColor="rgb(136, 99, 251)"
                                          bg="transparent"
                                          w={{
                                            base: "100%",
                                            sm: "100%",
                                            md: "100%"
                                          }}
                                          borderRadius="0.2rem"
                                        >
                                          Move to Wishlist
                                        </Button>
                                      </Stack>
                                    </Flex>
                                  </HStack>
                                </Flex>
                              </div>
                            ))
                          : ""}{" "}
                      </VStack>
                    </SimpleGrid>
                  </Flex>
                </Box>
              </Box>
              <Box w="70%" ml={"50px"}>
                <Box>
                  <Box>
                    <Button
                      onClick={onOpen}
                      borderColor="#E39D67"
                      w="100%"
                      h="auto"
                      bg="#E93D67"
                      _hover={{ bg: "#E93D67" }}
                      borderRadius="0.5rem"
                      padding="0.5rem"
                    >
                      Apply Coupan
                    </Button>
                  </Box>
                  <Box borderColor="#D9E1EA" w="100%" h="auto" bg="white">
                    <HStack w="100%" mt="10px">
                      <Image
                        padding="0.2rem"
                        src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-outline-truck-delivery-icon-png-image_5196485.jpg"
                        maxW="10%"
                      />
                      <Text padding="0.2rem">
                        Deliver to : <Text as="b">421101</Text>
                      </Text>
                      <Spacer />
                      <Text padding="0.2rem">Change</Text>
                    </HStack>
                  </Box>
                  <Box w="100%" mt="10px">
                    <Text textAlign="left">Order Summary:</Text>
                  </Box>
                  <Box w="100%" h="auto" bg="white" borderRadius="0.2rem">
                    <HStack w="100%">
                      <Text mt="10px" textAlign="left" fontWeight={"normal"} fontSize="16px" lineHeight="20px">
                        Total MRP
                      </Text>
                      <Spacer />
                      <Text padding="0.2rem" textAlign="right">
                        ₹{Total()}{" "}
                      </Text>
                    </HStack>
                    <HStack w="100%">
                      <Text mt="10px" textAlign="left" fontWeight={"normal"} fontSize="16px" lineHeight="20px">
                        Discount on MRP
                      </Text>
                      <Spacer />
                      <Text padding="0.2rem" textAlign="right">
                        ₹{100}{" "}
                      </Text>
                    </HStack>
                    <HStack w="100%">
                      <Text mt="10px" textAlign="left" fontWeight={"normal"} fontSize="16px" lineHeight="20px">
                        Coupon Discount
                      </Text>
                      <Spacer />
                      <Text padding="0.2rem" textAlign="right">
                        ₹{200}{" "}
                      </Text>
                    </HStack>
                    <HStack w="100%">
                      <Text mt="10px" textAlign="left" fontWeight={"normal"} fontSize="16px" lineHeight="20px">
                        Convenience Fee
                      </Text>
                      <Spacer />
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
                      <Text mt="10px" padding="0.2rem" fontSize="1.2rem" textAlign="left" as="b">
                        Total Cost
                      </Text>
                      <Spacer />
                      <Text padding="0.2rem" fontSize="1.2rem" textAlign="right" as="b">
                        ₹{totalMRP}{" "}
                      </Text>
                    </HStack>
                  </Box>
                  <Link to="/checkout">
                    <Button
                      color="white"
                      variant="outline"
                      w={"100%"}
                      padding="0.5rem"
                      border="none"
                      bg="#E93D67"
                      _hover={{ bg: "#E93D67" }}
                      borderRadius="0.3rem"
                      fontSize="1.2rem"
                    >
                      Place Order
                    </Button>
                  </Link>
                </Box>
              </Box>
            </SimpleGrid>
          </HStack>
        </Box>
        <Box>
          {" "}
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter Coupon Code</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input placeholder="Enter Coupon Code" value={coupon} onChange={e => setCoupon(e.target.value)} />
                <Button>Apply</Button>{" "}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
      <br />
    </Box>
  );
};

export default Cart;
