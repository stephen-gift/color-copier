import { Flex } from "@chakra-ui/react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

type Props = {};

const Color = ({ type, variant, hex }: any) => {
  return (
    <CopyToClipboard
      text={type + variant}
      onCopy={() => toast.info(`Copied (${type + variant})!`)}
    >
      <Flex>
        {variant}
        <br />({hex.toUpperCase()})
      </Flex>
    </CopyToClipboard>
  );
};

export default Color;
