import React from "react";
import { connect } from "react-redux";
import { Box, Image, Text } from "@chakra-ui/react";
import { removeFave } from "./actions/cartActions";

import { Icon } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";

const Fave = (props: any) => {
  const handleRemove = (id: any) => {
    props.removeFave(id);
  };

  React.useEffect(() => {
    const results: any = props.items.faveItems.filter((item: any) =>
      item.title.toLowerCase().includes(props.searchTerm)
    );
    props.setSearchResults(results);
  }, [props.searchTerm]);

  let showFaveItems: any = props.items.faveItems.length ? (
    props.items.faveItems.map((item: any) => {
      console.log(props, "Props");
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
          <Icon
            cursor="pointer"
            onClick={() => {
              handleRemove(item.id);
            }}
            as={MdFavorite}
          />
        </Box>
      );
    })
  ) : (
    <Text>Nothing in Fave</Text>
  );

  let searchList = props.searchResults.map((item: any) => {
    return (
      <Box key={item.id} className="cardContainer">
        <Box>
          <Image
            src={item.img}
            alt={item.title}
            boxSize="250px"
            w="235px"
            h="200px"
          />
        </Box>
        <Box as="p" className="titleText" lineHeight="tight">
          Title: {item.title}
        </Box>
        <Box display="flex" justifyContent="space-between" paddingLeft='5px' paddingRight='5px'>
          <Box
            key={item.id}
            cursor="pointer"
            onClick={() => handleRemove(item.id)}
          >
            <Icon as={MdFavorite} />
          </Box>
        </Box>
        <br />
      </Box>
    );
  });

  return (
    <Box>
      <Text font-size="16px" font-weight="600">
        FAVE ITEMS
      </Text>
      <Box display="flex" bg="#fafafa" flexWrap="wrap">
        {props.searchTerm ? searchList : showFaveItems}
      </Box>
    </Box>
  );
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
