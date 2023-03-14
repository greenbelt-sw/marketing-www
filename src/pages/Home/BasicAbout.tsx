import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BounceBox, LeftBox, RightBox } from "../../components/MotionBox";
import Benefits from "./Benefits";

export default function BasicAbout() {
  return (
    <Box
      id={"about-us"}
      bgImage={process.env.PUBLIC_URL + "/img/pattern-1.png"}
      bgSize={"cover"}
      boxShadow={"inner"}
    >
      <Box bgGradient="linear(to-b, rgba(237, 242, 247, 1), rgba(154, 230, 180, .7))">
        <Container maxW={"container.lg"} py={20} justifyItems={"center"}>
          <SimpleGrid columns={5} rowGap={20}>
            <GridItem
              colSpan={{ base: 4, sm: 3 }}
              alignItems={"center"}
              display={"flex"}
            >
              <LeftBox>
                <Heading size={"lg"} lineHeight={10}>
                  e-commerce return rate is{" "}
                  <Text display={"inline-flex"} color={"red.600"}>
                    16%
                  </Text>
                  , costing companies billions of dollars each year
                </Heading>
              </LeftBox>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <RightBox>
                <Image
                  src={process.env.PUBLIC_URL + "/img/delivery-box.svg"}
                  alt={"package"}
                  width={"50%"}
                  m={"auto"}
                />
              </RightBox>
            </GridItem>
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <LeftBox>
                <Image
                  src={process.env.PUBLIC_URL + "/img/truck.svg"}
                  alt={"vehicle"}
                  width={"50%"}
                  m={"auto"}
                />
              </LeftBox>
            </GridItem>
            <GridItem
              colSpan={{ base: 4, sm: 3 }}
              alignItems={"center"}
              display={"flex"}
            >
              <RightBox>
                <Heading size={"lg"} lineHeight={10} textAlign={"right"}>
                  <Text display={"inline-block"} color={"green.500"}>
                    greenbelt
                  </Text>{" "}
                  redirects damaged and designated goods to local charities, a
                  solution to costly returns
                </Heading>
              </RightBox>
            </GridItem>
            <GridItem colSpan={5} alignItems={"center"} display={"flex"}>
              <BounceBox>
                <Heading size={"lg"} lineHeight={10} textAlign={"center"}>
                  redirecting returns to local charities unlocks new value for
                  retailers and the communities they serve
                </Heading>
              </BounceBox>
            </GridItem>
            <GridItem colSpan={5} justifyContent={"center"}>
              <Benefits />
            </GridItem>
            <GridItem colSpan={5} display={"flex"} justifyContent={"center"}>
              <Button
                bgColor={"green.500"}
                color={"white"}
                _hover={{ bgColor: "green.400" }}
                as={"a"}
                href={"#learn-more"}
                size={"lg"}
                shadow={"lg"}
              >
                learn more
              </Button>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
