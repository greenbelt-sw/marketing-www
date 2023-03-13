import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LeftBox } from "../../components/MotionBox";

export default function Cover() {
  return (
    <Box backgroundColor={"gray.100"}>
      <Container maxW={"container.lg"} minH={"80vh"} pt={10}>
        <Flex flexDir={"column"} justifyContent={"space-around"} h={"80vh"}>
          <Stack w={"60%"}>
            <LeftBox>
              <Heading color={"gray.700"}>
                Greenbelt is rethinking consumer returns.
              </Heading>
            </LeftBox>
            <Text color={"gray.700"}>
              greenbelt is a socially responsible organization that redirects
              retail return volume to local charities, unlocking new value for
              retailers while reducing environmental impacts and providing goods
              to those in need. Our innovative approach benefits both businesses
              and communities.
            </Text>
          </Stack>

          <Flex>
            <Button
              rounded={"full"}
              color={"gray.100"}
              backgroundColor={"green.500"}
              _hover={{
                bg: "green.400",
              }}
            >
              learn more
            </Button>
            <Button
              rounded={"full"}
              color={"gray.100"}
              backgroundColor={"green.500"}
              _hover={{
                bg: "green.400",
              }}
              ml={2}
            >
              contact today
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
