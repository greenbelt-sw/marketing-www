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
import { RightBox } from "../../components/MotionBox";

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
          <Flex justifyContent={"center"}>
            <Stack alignItems={"center"}>
              <Avatar
                src={process.env.PUBLIC_URL + "/img/aaron.jpeg"}
                size={"xl"}
                border={"2px solid #e9e9e9"}
                shadow={"lg"}
              />
              <Heading>
                <Text display={"inline-block"} opacity={0}>
                  👋
                </Text>{" "}
                Chat with Aaron{" "}
                <Text display={"inline-block"}>
                  <RightBox>👋</RightBox>
                </Text>
              </Heading>
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
          </Flex>
          <Text>
            Hi, I'm Aaron! If you're interested in learning more about greenbelt
            or want to discuss potential collaboration opportunities, I'd love
            to chat!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
