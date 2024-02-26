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
      <Flex
        align={"center"}
        justify={"center"}
        fontSize={10}
        fontWeight={700}
        p={2}
        borderRadius={4}
        borderWidth={1}
        borderColor={type + 0.2}
        bgColor={type + variant}
        color={variant.length > 3 && variant >= 0.5 ? "dark.100" : "initial"}
        cursor={"pointer"}
        transition="all 200ms ease-out"
        _hover={{ transform: "scale(1.05)" }}
      >
        {variant}
        <br />({hex.toUpperCase()})
      </Flex>
    </CopyToClipboard>
  );
};

export default Color;
