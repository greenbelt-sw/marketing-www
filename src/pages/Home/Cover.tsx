import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BounceBox, LeftBox } from "../../components/MotionBox";

export default function Cover() {
  return (
    <Box bgGradient="linear(to-r, gray.100, gray.300)">
      <Container maxW={"container.lg"} minH={"80vh"} pt={10}>
        <Flex flexDir={"column"} justifyContent={"space-around"} h={"80vh"}>
          <SimpleGrid columns={7}>
            <GridItem colSpan={4}>
              <Stack>
                <LeftBox>
                  <Heading color={"gray.700"}>
                    <Text display={"inline-block"} color={"green.500"}>
                      greenbelt
                    </Text>{" "}
                    is rethinking consumer returns
                  </Heading>
                </LeftBox>
                <BounceBox>
                  <Text color={"gray.700"}>
                    greenbelt is a socially responsible organization that
                    redirects retail return volume to local charities, unlocking
                    new value for retailers while reducing environmental impacts
                    and providing goods to those in need. Our innovative
                    approach benefits both businesses and communities.
                  </Text>
                </BounceBox>
              </Stack>
            </GridItem>
            <GridItem colSpan={3}>
              <BounceBox>
                <Image
                  src={process.env.PUBLIC_URL + "/img/vehicle.png"}
                  alt={"package"}
                />
              </BounceBox>
            </GridItem>
          </SimpleGrid>

          <Flex>
            <Button
              as={"a"}
              rounded={"full"}
              color={"gray.100"}
              backgroundColor={"green.500"}
              _hover={{
                bg: "green.400",
              }}
              href={"#learn-more"}
            >
              learn more
            </Button>
            <Button
              as={"a"}
              rounded={"full"}
              color={"gray.100"}
              backgroundColor={"green.500"}
              _hover={{
                bg: "green.400",
              }}
              ml={2}
              href={"#contact"}
            >
              contact today
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
