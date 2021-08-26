import React from "react";
import { connect } from "react-redux";
import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";
import { removeFave } from "./actions/cartActions";

import { Icon } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";

const Fave = (props: any) => {
    const handleRemove = (id: any) => {
      props.removeFave(id);
    };

  let faveItems: any = props.items.length
    ? props.items.map((item: any) => {
        return (
          <Box>
            <Box key={item.id}>
              <Box>
                <Image src={item.img} alt={item.title} boxSize="250px" />
              </Box>

              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                Title: {item.title}
              </Box>
              <Box display="flex" justifyContent="space-around"></Box>
            </Box>
             <Icon onClick={() => {
                handleRemove(item.id);
              }}  as={MdFavorite} /> 
          </Box>
        );
      })
    : (<Text>Nothing in Fave</Text>);
  return <>{faveItems}</>;
};

const mapStateToProps = (state: any) => {
  return {
    items: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFave: (id: any) => {
      dispatch(removeFave(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fave);
