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
      bgGradient="linear(to-b, gray.100, green.100)"
      boxShadow={"inner"}
      id={"about-us"}
    >
      <Container maxW={"container.lg"} py={20} justifyItems={"center"}>
        <SimpleGrid columns={5} rowGap={20}>
          <GridItem colSpan={3} alignItems={"center"} display={"flex"}>
            <LeftBox>
              <Heading size={"lg"} lineHeight={10}>
                for one reason or another, goods are returned to retailers
              </Heading>
            </LeftBox>
          </GridItem>
          <GridItem colSpan={2}>
            <RightBox>
              <Image
                src={process.env.PUBLIC_URL + "/img/notreceived.png"}
                alt={"package"}
                width={"50%"}
                m={"auto"}
              />
            </RightBox>
          </GridItem>
          <GridItem colSpan={2}>
            <LeftBox>
              <Image
                src={process.env.PUBLIC_URL + "/img/vehicle.png"}
                alt={"vehicle"}
                width={"50%"}
                m={"auto"}
              />
            </LeftBox>
          </GridItem>
          <GridItem colSpan={3} alignItems={"center"} display={"flex"}>
            <RightBox>
              <Heading size={"lg"} lineHeight={10}>
                <Text display={"inline-block"} color={"green.500"}>
                  greenbelt
                </Text>{" "}
                redirects damaged and designated goods to local charities
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
  );
}
