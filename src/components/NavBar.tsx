import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box as ='nav' d='flex' flexDirection='row' justifyContent='space-between'>
        {/** d='flex' */}
      <Box>
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to="favourite">Favourite</Link>
      </Box>
      <Link to="/cart">
        <Button>shopping cart</Button>
      </Link>
    </Box>
  );
};

export default NavBar;
