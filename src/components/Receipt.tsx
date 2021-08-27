import React from "react";
import { connect } from "react-redux";

import { Box, Text, Button } from "@chakra-ui/react";

const Receipt = (props: any): any => {
  let generatedList: any = props.addedItems.map((item: any) => {
    return {
      itemId: item.id,
      isFavorite: item.fave,
    };
  });

  let output = {
    items: generatedList,
    totalPrice: props.total,
  };

  const downloadJSON = () => {
    const temporaryExportEl = document.createElement("a");

    temporaryExportEl.href = "data:attachment/text," + JSON.stringify(output);
    temporaryExportEl.target = "_blank";
    temporaryExportEl.download = `export-checkout-${Date.now()}.json`;
    temporaryExportEl.click();
  };

  return (
    <Box>
      <Text>
        <b>Total: {props.total}</b>
      </Text>
      <Button
        cursor="pointer"
        onClick={() => {
          downloadJSON();
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
