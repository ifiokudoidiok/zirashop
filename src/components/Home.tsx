import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, addFave, removeFave } from "./actions/cartActions";
import { Box, Image, Text, Button, Stack, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite, MdAddShoppingCart } from "react-icons/md";

const Home = (props: any) => {
  const [list, setList] = useState([]);
  const [isFave, setIsFave] = useState(false);

  const handleClick = (id: any) => {
    props.addToCart(id);
  };
  const addToFave = (id: any) => {
    props.addFave(id);
  };

  const removeFromFave = (id: any) => {
    props.removeFave(id);
  };


  // Search

const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([] as Array<any>[]);
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    console.log(props, 'Props')
    const results: any = props.items.filter((item: any)=>
      item.title.toLowerCase().includes(searchTerm)
    );
    
    setSearchResults(results);
    console.log(searchTerm, searchResults);
  }, [searchTerm]);


  let itemList = props.items.map((item: any) => {
    return (
      <Box>
        <Box key={item.id}>
          <Box>
            <Image src={item.img} alt={item.title} boxSize="250px" />
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Title: {item.title}
          </Box>
          <Box display="flex" justifyContent="space-around">
            {!item.fave ? (
              <Box
                key={item.id}
                cursor="pointer"
                onClick={() => addToFave(item.id)}
              >
                <Icon as={GrFavorite} />
              </Box>
            ) : (
              <Box
                key={item.id}
                cursor="pointer"
                onClick={() => removeFromFave(item.id)}
              >
                <Icon as={MdFavorite} />
              </Box>
            )}

            <Icon
              onClick={() => {
                handleClick(item.id);
              }}
              as={MdAddShoppingCart}
              cursor="pointer"
            />
          </Box>
          <br />
        </Box>
      </Box>
    );
  });

  let searchList = searchResults.map((item: any) => {
    return (
      <Box>   
        <Box key={item.id}>
          <Box>
            <Image src={item.img} alt={item.title} boxSize="250px" />
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Title: {item.title}
          </Box>
          <Box display="flex" justifyContent="space-around">
            {!item.fave ? (
              <Box
                key={item.id}
                cursor="pointer"
                onClick={() => addToFave(item.id)}
              >
                <Icon as={GrFavorite} />
              </Box>
            ) : (
              <Box
                key={item.id}
                cursor="pointer"
                onClick={() => removeFromFave(item.id)}
              >
                <Icon as={MdFavorite} />
              </Box>
            )}

            <Icon
              onClick={() => {
                handleClick(item.id);
              }}
              as={MdAddShoppingCart}
              cursor="pointer"
            />
          </Box>
          <br />
        </Box>
      </Box>
    );
  });


  return (
    <Box>
      <Input
        borderRadius={2}
        value={searchTerm}
        onChange={handleChange}
      ></Input>
      <Text>Items</Text>
      <Box
        display="flex"
        justifyContent="space-between"
        padding={2}
        flexWrap="wrap"
      >
        {searchTerm ? searchList : itemList}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
    // searchTerm: state.searchTerm,
    // searchResult: state.searchResult
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: any) => {
      dispatch(addToCart(id));
    },
    addFave: (id: any) => {
      dispatch(addFave(id));
    },
    removeFave: (id: any) => {
      dispatch(removeFave(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
