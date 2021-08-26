import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Flex, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";

const NavBar = (props: any) => {
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([] as Array<any>[]);
  //  const handleChange = (event: any) => {
  //    setSearchTerm(event.target.value);
  //  };
 
  //  React.useEffect(() => {
  //    console.log(props, 'Props')
  //    const results: any = props.items.filter((item: any)=>
  //      item.title.toLowerCase().includes(searchTerm)
  //    );
     
  //    setSearchResults(results);
  //    console.log(searchTerm, searchResults);
  //  }, [searchTerm]);

  return (
    <Flex
      direction="row"
      as="nav"
      p={4}
      bg="grey"
      top={0}
      w="100"
      justify="space-between"
    >
      <Link to="/">HOME </Link>
      <Link to="/favorite">MY FAVORITE</Link>
      {/* <Input
        borderRadius={2}
        value={searchTerm}
        onChange={handleChange}
      ></Input> */}
      <Link to="/cart">
        {" "}
        <Icon as={GrCart} cursor="pointer" />
      </Link>
    </Flex>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
    // searchTerm: state.searchTerm,
    // searchResults: state.searchResults
  };
};

export default connect(mapStateToProps)(NavBar);
