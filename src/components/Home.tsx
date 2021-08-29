import React from "react";
import { connect } from "react-redux";
import { addToCart, addFave, removeFave } from "./actions/cartActions";
import { Box, Image, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite, MdAddShoppingCart } from "react-icons/md";

const Home = (props: any) => {
  const handleClick = (id: any) => {
    props.addToCart(id);
  };
  const addToFave = (id: any) => {
    props.addFave(id);
  };

  const removeFromFave = (id: any) => {
    props.removeFave(id);
  };

  React.useEffect(() => {
    const results: any = props.items.filter((item: any) =>
      item.title.toLowerCase().includes(props.searchTerm)
    );
    props.setSearchResults(results);
  }, [props.searchTerm]);

  let itemList = props.items.map((item: any) => {
    return (
      <Box>
        <Box className="cardContainer" key={item.id}>
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
          <Box
            display="flex"
            justifyContent="space-between"
            paddingLeft="5px"
            paddingRight="5px"
          >
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

  let searchList = props.searchResults.map((item: any) => {
    return (
      <Box key={item.id} margin="20px">
        <Box>
          <Image
            src={item.img}
            alt={item.title}
            boxSize="250px"
            w="235px"
            h="200px"
          />
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
    );
  });

  return (
    <Box>
      <Text font-size="16px" font-weight="600">
        ITEMS
      </Text>
      <Box display="flex" bg="#fafafa" flexWrap="wrap">
        {props.searchTerm ? searchList : itemList}
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
