import { Box, Flex, Text } from "@chakra-ui/react";
const FooterComponent = () => {
  return (
    <Box
      as="footer"
      py={6}
      color="color.fontColor.black"
      fontWeight={"hairline"}
    >
      <Flex align="center" justify="center">
        <Text>&copy; Ghaza Gymnastiar Solihin.</Text>
      </Flex>
    </Box>
  );
};

export default FooterComponent;
