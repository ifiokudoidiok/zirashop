import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, addFave, removeFave } from "./actions/cartActions";
import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";
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
  return (
    <Box>
      <Text>Items</Text>
      <Box
        display="flex"
        justifyContent="space-between"
        padding={2}
        flexWrap="wrap"
      >
        {itemList}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
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
