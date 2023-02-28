import {
  Box,
  Input,
  Button,
  Flex,
  Text,
  
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const Checkout = () => {
  // const [paymentDetails, setPaymentDetails] = useState({
  //   fullName: "",
  //   address: "",
  //   city: "",
  //   cardNumber: "",
  //   expirationDate: "",
  //   cvv: "",
  // });

  const navigate = useNavigate();

  const hanleCheckout = () => {
    swal({
        title: "Order Placed!",
        text: "Thanks for Purchasing from us. Your Order will be delievered within 4-5 Days.",
        icon: "success",
        button: "OK",
      });
      
      navigate("/")
}

  const [data, setData] = useState([]);

  const getProduct = () => {
    axios
      .get(`https://calm-cyan-octopus-wear.cyclic.app/carts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
  };

  const Total = () => {
    let sum = data
      ? data.reduce((sum, el) => (sum = el.productId.price * el.qty + sum), 0)
      : " ";
    return sum;
  };

  let output = Total();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Box 
      display={"flex"}
      flexDirection = {["column","column","column","column","row"]}
      alignItems = "center"

      gap = {8}
      width={["90%","90%","90%","90%","60%"]}
      m={"auto"}
     
      fontFamily = "sans-serif"
      justifyContent="space-between"
    >
      <Box border="1px solid gainsboro" w={["90%","90%","90%","90%","50%"]} p = {8} borderRadius = "7px"  mt = {12} mb = {8} h = "530px">
        <Box>
          <Text fontWeight={"semibold"} fontSize = "14px">CONTACT DETAILS</Text>
          <Input mt={4} type={"text"} placeholder = "Name" variant = "none" border={"1px solid gainsboro"}/>
          <Input mt={4} type={"text"} placeholder = "Mobile No" variant = "none"  border={"1px solid gainsboro"}/>
          <Input mt={4} type={"text"} placeholder = "Address" variant = "none"  border={"1px solid gainsboro"}/>
        </Box>

        <Box>
          <Text fontWeight={"semibold"} fontSize = "14px" mt={8}>CARD DETAILS</Text>
          <Input mt={4} type={"number"} placeholder = "Card Number" variant = "none"  border={"1px solid gainsboro"}/>
          <Input mt={4} type={"date"} placeholder = "Exp. Date" variant = "none"  border={"1px solid gainsboro"}/>
          <Input mt={4} type={"text"} placeholder = "CVV" variant = "none" border={"1px solid gainsboro"}/>
        </Box>
        <Button w={"100%"} mt = {4} bg = {"#FF3E6C"} color = "white" _hover={{
          bg: "#FF3E6C",
        }} onClick = {hanleCheckout}>PLACE ORDER</Button>
      </Box>
      <Box border="1px solid gainsboro" w={["90%","90%","90%","90%","50%"]} borderRadius = "7px"  mt = {12} h = "530px" mb={8}>
        <Box p={8}>
          <Text fontWeight={"semibold"} fontSize = "15px">PRICE DETAILS ({data.length} Items)</Text>
          <Flex justifyContent={"space-between"} alignItems = "center" mt={4}>
            <Text color={"gray"} fontSize = "15px">Total MRP</Text>
            <Text  fontSize = "15px">₹ {output}</Text>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems = "center" mt={4}>
            <Text color={"gray"} fontSize = "15px">Discount on MRP</Text>
            <Text  fontSize = "15px" color={"green.400"}>₹ 0</Text>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems = "center" mt={4} pb = {8} borderBottom = {"1px solid gainsboro"}>
              <Flex direction={["column","column","row"]} gap={2}><Text color={"gray"} fontSize = "15px">Convenience Fees</Text><Text fontWeight={"bold"} color={"#FF3E6C"} fontSize = "15px">Know More</Text></Flex>
            <Text  fontSize = "15px" color={"green.400"}>FREE</Text>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems = "center" mt={4}>
            <Text fontSize = "16px" fontWeight={"semibold"}>Total Amount</Text>
            <Text  fontSize = "16px" fontWeight={"semibold"}>₹ {output}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
