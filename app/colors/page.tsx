"use client";

import { colors } from "@/utils/customTheme";
import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

// import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import copy from "clipboard-copy";
const ColorsPage: NextPage = () => {
  const colorEntries = Object.entries(colors);

  console.log(colors);

  return (
    <>
      <VStack spacing={5} align="flex-start" p={6}>
        {Object.entries(colors).map(([colorType, colorVariants], key) => (
          <Box key={key}>
            <Heading fontSize="16px">{colorType}</Heading>
            <HStack>
              {Object.entries(colorVariants).map(([variant, hex], key) => (
                <Color
                  key={key}
                  type={colorType}
                  variant={`.${variant}`}
                  hex={hex}
                />
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </>
  );
};

function Color({ type, variant, hex }: any) {
  const bgColor = `${type}${variant}`;
  const textColor =
    variant.length > 3 && variant >= 0.5 ? "dark.100" : "initial";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(type + variant)
      .then(() => {
        toast(`Copied (${type}${variant})!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          //   transition: Bounce,
        });
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };
  return (
    <Flex
      align="center"
      justify="center"
      fontSize="10px"
      fontWeight="700"
      p={2}
      borderRadius={4}
      borderWidth={1}
      borderColor={type + ".200"}
      bgColor={type + variant}
      color={variant.length > 3 && variant >= 0.5 ? "dark.100" : "initial"}
      cursor="pointer"
      transition="all 200ms ease-out"
      _hover={{ transform: "scale(1.05)" }}
      onClick={handleCopy}
    >
      {variant}
      <br />({hex.toUpperCase()})
    </Flex>
  );
}

export default ColorsPage;
