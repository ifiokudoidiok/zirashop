import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrFavorite, GrCart } from "react-icons/gr";
import { MdFavorite, MdAddShoppingCart } from "react-icons/md";

import imageTest from "./../images/image.jpg";

const Home = (props: any) => {
  const [list, setList] = useState([]);
  const [isFave, setIsFave] = useState(false);

  useEffect(() => {
    fetch("https://www.heimkaup.is/api/v1/")
      .then((data) => data.json())
      .then((items) => {
        setList(items);
      });
    console.log(list);
  }, []);
  const handleClick = (id: any) => {
    props.addToCart(id);
  };

  let itemList = props.items.map((item: any) => {
    return (
      <Box>
        <Box key={item.id}>
          <Box>
            <Image src={imageTest} alt={item.title} boxSize="250px" />
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Title: {item.title}
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Box
              key={item.id}
              cursor="pointer"
              isFave={isFave}
              onClick={() => setIsFave(!isFave)}
            >
              {isFave ? <Icon as={MdFavorite} /> : <Icon as={GrFavorite} />}
            </Box>
            <Icon onClick={() => {
                handleClick(item.id);
              }} as={MdAddShoppingCart} cursor="pointer" />
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
        border="1px pink solid"
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
