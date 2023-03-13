import { Box, Flex, Text, Button, Stack, Link } from "@chakra-ui/react";

interface HeaderProps {
  dark?: boolean;
}

export default function Header({ dark }: HeaderProps) {
  return (
    <Box
      backgroundColor={dark ? "green.500" : "rgba(255,255,255,.8)"}
      backdropFilter={"blur(5px)"}
      w={"100vw"}
      position={"fixed"}
      zIndex={1000}
    >
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={"h1"}
            color={dark ? "gray.100" : "green.500"}
            fontFamily={"Poppins"}
            fontWeight={"700"}
            fontSize={"2xl"}
          >
            <a href={"/"}>greenbelt</a>
          </Text>
          <Stack
            direction={"row"}
            alignItems={"center"}
            ml={10}
            spacing={5}
            color={dark ? "gray.100" : "green.800"}
          >
            <Link href={"#about-us"}>about us</Link>
            <Link href={"#learn-more"}>learn more</Link>
          </Stack>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {dark ? undefined : (
            <Button
              as={"a"}
              rounded={"full"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={dark ? "gray.800" : "white"}
              bg={dark ? "gray.100" : "green.500"}
              href={"#contact"}
              _hover={{
                bg: "green.400",
              }}
            >
              contact today
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}
