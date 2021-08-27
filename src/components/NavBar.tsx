import React from "react";
import { Link } from "react-router-dom";
import { Flex, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";

const NavBar = (props: any) => {
  return (
    <Flex
      direction="row"
      as="nav"
      p={4}
      bg="#fafafa"
      top={0}
      w="100"
      justify="space-between"
      marginBottom="20px"
    >
      <Link to="/" className="navbar">
        HOME{" "}
      </Link>
      <Link to="/favorite" className="navbar">
        MY FAVORITE
      </Link>
      <Input
        className="searchInput"
        borderRadius={2}
        value={props.searchTerm}
        onChange={props.handleChange}
        placeholder="Search Bar"
      ></Input>
      <Link to="/cart">
        {" "}
        <Icon as={GrCart} cursor="pointer" />
      </Link>
    </Flex>
  );
};

export default NavBar;
