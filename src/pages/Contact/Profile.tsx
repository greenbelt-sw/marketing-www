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
                <Text
                  display={{ base: "none", sm: "inline-block" }}
                  opacity={0}
                >
                  👋
                </Text>{" "}
                Chat with Aaron{" "}
                <Text display={"inline-block"}>
                  <RightBox
                    noOfLines={360}
                    display={{ base: "none", sm: "inline-block" }}
                  >
                    👋
                  </RightBox>
                </Text>
              </Heading>
              <Flex
                direction={{ base: "column", sm: "row" }}
                alignItems={"center"}
              >
                <Text
                  fontFamily={"mono"}
                  p={1}
                  px={3}
                  bgColor={"gray.100"}
                  rounded={"full"}
                  w={"fit-content"}
                  fontSize={"xs"}
                  mt={{ base: 1, sm: 0 }}
                  as={"a"}
                  href="mailto:aaron@greenbelt.com"
                  _hover={{
                    bgColor: "gray.200",
                  }}
                >
                  <EmailIcon /> aaron@greenbelt.com
                </Text>
                <Text
                  fontFamily={"mono"}
                  p={1}
                  px={3}
                  bgColor={"gray.100"}
                  rounded={"full"}
                  w={"fit-content"}
                  fontSize={"xs"}
                  ml={1}
                  as={"a"}
                  href="tel:+1(585)451-8105"
                  _hover={{
                    bgColor: "gray.200",
                  }}
                >
                  <PhoneIcon /> 123-456-7890
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
