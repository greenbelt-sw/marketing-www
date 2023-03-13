import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Box>
      <Container
        maxW={"container.sm"}
        boxShadow={"lg"}
        rounded={"md"}
        p={10}
        my={4}
        bgColor={"white"}
      >
        <Stack spacing={4}>
          <Flex justifyContent={"space-between"}>
            <Avatar
              src={process.env.PUBLIC_URL + "/img/aaron.jpeg"}
              size={"xl"}
              border={"4px solid #e9e9e9"}
            />
            <Stack alignItems={"center"}>
              <Heading>Chat with Aaron 👋</Heading>
              <Flex>
                <Text
                  fontFamily={"mono"}
                  p={1}
                  px={3}
                  bgColor={"gray.100"}
                  rounded={"full"}
                  w={"fit-content"}
                  fontSize={"xs"}
                  mr={1}
                >
                  <PhoneIcon /> 585-451-8105
                </Text>
                <Text
                  fontFamily={"mono"}
                  p={1}
                  px={3}
                  bgColor={"gray.100"}
                  rounded={"full"}
                  w={"fit-content"}
                  fontSize={"xs"}
                >
                  <EmailIcon /> aaron@greenbelt.com
                </Text>
              </Flex>
            </Stack>
            <Avatar opacity={0} size={"xl"} />
          </Flex>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
