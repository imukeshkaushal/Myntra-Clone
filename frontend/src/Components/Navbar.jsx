import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

import DropDown from "./DropDown";
import "./dropdown.css";
import MobileNavbar from "./MobileNavbar";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  let name = localStorage.getItem("name");
  return (
    <Box
      backgroundColor="white"
      position={"fixed"}
      top="0"
      left={"0"}
      right="0"
      width="100%"
      zIndex={99}
    >
      <Box
        id="desktop_nav"
        boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
        display="flex"
        alignItems={"center"}
        justifyContent="space-between"
        paddingRight={"50px"}
      >
        <Flex alignItems="center" gap={"30px"} w="55%">
          <Box ml={10}>
            <Image
              w={"70px"}
              h={"70px"}
              src="https://i.ibb.co/9cYY9dd/sss.png"
              alt="Logo"
            />
          </Box>
          <DropDown />
        </Flex>
        <Box width={"32%"}>
          <InputGroup width={"450px"}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search for products, brands and more"
              fontSize={"14px"}
              variant="none"
              border={"1px solid gainsboro"}
            />
          </InputGroup>
        </Box>
        <Flex gap={"30px"}>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="center"
            gap={"5px"}
            id="profile_dropdown"
            backgroundColor="white"
            mb={0}
            pb={0}
          >
            <CiUser size={"25px"} />
            <Text fontSize={"13px"} fontWeight="semibold">
              Profile
            </Text>
            <Box id="dropdown_content_profile">
              {
                authState.isAuth ? <Text fontWeight={"semibold"} mt={4} fontSize = {"18px"}>
                Welcome {name}
              </Text> :
              <Text fontWeight={"semibold"} mt={4}>
                Welcome
              </Text>
              }
              <Text>To access account and manage or...</Text>
              <button className="account_login" >
              {
                authState.isAuth ? <Text onClick={logoutUser}>LOG OUT</Text> : <Link to="/login"> <Text>SIGNUP / LOGIN</Text></Link>
              }
              </button>
              <hr />

              <Box mt={4} mb={4}>
                <Text>Orders</Text>
                <Text>Wishlist</Text>
                <Text>Gift Cards</Text>
                <Text>Contact Us</Text>
                <Text>Myntra Insiders</Text>
              </Box>
              <hr />

              <Box mt={4} mb={4}>
                <Text>Myntra Credit</Text>
                <Text>Coupon</Text>
                <Text>Saved Cards</Text>
                <Text>Saved VPN</Text>
                <Text>Saved Addresses</Text>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="center"
            gap={"5px"}
          >
            <AiOutlineHeart size={"25px"} />
            <Text fontSize={"13px"} fontWeight="semibold">
              Wishlist
            </Text>
          </Box>

          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="center"
            gap={"5px"}
          >
            <div className="cart">
              <span className="count">0</span>
              <Box id="cart-icon">
                <HiOutlineShoppingBag size={"25px"} />
              </Box>
            </div>
            <Text fontSize={"13px"} fontWeight="semibold">
              Bag
            </Text>
          </Box>
        </Flex>
      </Box>
      <MobileNavbar />
    </Box>
  );
};

export default Navbar;
