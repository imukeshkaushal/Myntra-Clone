import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import "../Components/dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, authState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);

    fetch("https://calm-cyan-octopus-wear.cyclic.app//users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.token){
        loginUser(res.token);
        localStorage.setItem("token",res.token);
        console.log(res.token)
        
        navigate("/")
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <Box
        width={["90%", "70%", "60%", "30%"]}
        m="auto"
        height={"auto"}
        mt={["130px", "130px", "130px", "170px"]}
        border="1px solid gainsboro"
        borderRadius="15px"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      >
        <Text
          fontSize={"18px"}
          fontFamily={"sans-serif"}
          pt={4}
          borderBottom={"1px solid gainsboro"}
          pl={8}
          pb={4}
          fontWeight="semibold"
        >
          {" "}
          Login Now
        </Text>
        <Box pl={8} pr={8} pb={8} pt={4}>
          <FormControl mt={4} isRequired>
            <FormLabel fontWeight={"normal"}>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter Email Address"
              variant="none"
              border={"1px solid gainsboro"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={8} isRequired>
            <FormLabel fontWeight={"normal"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              variant="none"
              border={"1px solid gainsboro"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Text mt={4} fontFamily="sans-serif">
            Not Have any Account{" "}
            <Link to="/register">
              {" "}
              <span
                style={{
                  color: "#FF3E6C",
                  fontWeight: "semibold",
                  marginLeft: "10px",
                }}
              >
                {" "}
                Register Now
              </span>
            </Link>
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            width={"100%"}
            bg="#FF3E6C"
            color="white"
            _hover={{
              bg: "#FF3E6C",
            }}
            isFullWidth
            onClick={handleSubmit}
          >
            LOGIN NOW
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
