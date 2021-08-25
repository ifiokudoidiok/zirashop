import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";

import imageTest from "./../images/image.jpg";

const Home = (props: any) => {
  const [list, setList] = useState([]);
 
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
      <Stack wrap='wrap'>
        <Box 
        display='flex'  p={2} wrap='wrap' flexDirection='column'alignItems='center'
          key={item.id}
        >
          <Box>
            <Image src={imageTest} alt={item.title} boxSize="150px" />
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            Title: {item.title}
          </Box>
          <Stack spacing={10} direction="row" 
          align="center"
          >
            <Button colorScheme="teal" size="xs">
              Fave
            </Button>
            <Button
              colorScheme="teal"
              size="xs"
              onClick={() => {
                handleClick(item.id);
              }}
            >
              Add to cart
            </Button>
          </Stack>
          <br />
        </Box>
      </Stack>
    );
  });
  return (
    <Box>
      <Text>Items</Text>
      <Box>{itemList}</Box>
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
