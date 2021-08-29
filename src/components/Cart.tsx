import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Icon } from "@chakra-ui/react";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { Box, Image, Text, Button} from "@chakra-ui/react";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import Receipt from "./Receipt";
const Cart = (props: any) => {
  //to remove the item completely
  const handleRemove = (id: any) => {
    props.removeItem(id);
  };
  //to add the quantity
  const handleAddQuantity = (id: any) => {
    props.addQuantity(id);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (id: any) => {
    props.subtractQuantity(id);
  };

  let addedItems: any = props.items.length ? (
    props.items.map((item: any) => {
      return (
        <Box className="cardContainer" key={item.id}>
          <Box>
            <Image src={item.img} alt={item.title} boxSize="250px" w="235px"
              h="200px"/>
          </Box>

          <Box as="p" className="titleText" lineHeight="tight">
            Title: {item.title}
          </Box>
          <Box display="flex" justifyContent="space-between" paddingLeft='5px' paddingRight='5px'>
            <Link to="/cart">
              <Icon
                onClick={() => {
                  handleAddQuantity(item.id);
                }}
                as={MdAddShoppingCart}
                cursor="pointer"
              />
            </Link>
            <Link to="/cart">
              <Icon
                onClick={() => {
                  handleSubtractQuantity(item.id);
                }}
                as={MdRemoveShoppingCart}
                cursor="pointer"
              />
            </Link>
          </Box>
          <Box className='cartText'>
            <Text>
              Price: {item.price}$
            </Text>
            <Text>
              Quantity: {item.quantity}
            </Text>
          </Box>
          <Button className='cartRemoveBtn'cursor='pointer'
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            Remove
          </Button>
        </Box>
      );
    })
  ) : (
    <p> Cart is Empty 😔</p>
  );
  return (
      <Box>
        <Text fontSize="15px" fontWeight="600">SHOPPING CART</Text>
        <Box
        display="flex"
        flexWrap="wrap"
      >
        {addedItems}
      </Box>
      <Receipt />
      </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    removeItem: (id: any) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id: any) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id: any) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
