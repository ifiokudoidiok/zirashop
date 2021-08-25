import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";

const NavBar = ({ to = "/" }) => {
 
    return (
        <Flex
        direction='row'
          as="nav"
          p={4}
          bg="grey"
          top={0}
          w="100"
          justify="space-between"
        >
         
            <Link to="/">
              HOME{" "}
            </Link>
            <Link to="/favorite">MY FAVORITE</Link>
            <Link to="#">Search bar placeholder </Link>
            <Link to="/cart">Cart ICON </Link>
          
        </Flex>
      );
};


export default NavBar;

