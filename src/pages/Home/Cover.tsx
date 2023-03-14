import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BounceBoxDelay, LeftBox } from "../../components/MotionBox";

export default function Cover() {
  return (
    <Box
      bgImage={process.env.PUBLIC_URL + "/img/forest.webp"}
      bgSize={"contain"}
      backgroundPosition={"bottom"}
      bgRepeat={"no-repeat"}
    >
      <Box
        bgGradient="linear(to-r, rgba(237, 242, 247, .9), rgba(203, 213, 224, .9))"
        backdropFilter={"blur(5px)"}
      >
        <Container maxW={"container.lg"} minH={"80vh"} pt={10}>
          <Flex flexDir={"column"} justifyContent={"space-around"} h={"80vh"}>
            <SimpleGrid columns={7}>
              <GridItem colSpan={{ base: 7, md: 4 }}>
                <Stack>
                  <LeftBox>
                    <Heading color={"green.500"}>greenbelt</Heading>
                  </LeftBox>
                  <BounceBoxDelay noOfLines={0.1}>
                    <Heading color={"gray.700"}>
                      rethinking consumer returns
                    </Heading>
                  </BounceBoxDelay>
                  <BounceBoxDelay noOfLines={0.2}>
                    <Text color={"gray.700"}>
                      greenbelt is a socially responsible organization that
                      redirects retail return volume to local charities,
                      unlocking new value for retailers while reducing
                      environmental impacts and providing goods to those in
                      need. Our innovative approach benefits both businesses and
                      communities.
                    </Text>
                  </BounceBoxDelay>
                </Stack>
              </GridItem>
              <GridItem
                colSpan={3}
                display={{ base: "none", md: "block" }}
              ></GridItem>
            </SimpleGrid>

            <Flex>
              <BounceBoxDelay noOfLines={0.4}>
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
              </BounceBoxDelay>
              <BounceBoxDelay noOfLines={0.5}>
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
              </BounceBoxDelay>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
