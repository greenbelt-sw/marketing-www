import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BounceBoxDelay } from "../../components/MotionBox";

export default function TaxDeduction() {
  return (
    <Box
      bgColor={"gray.100"}
      bgImg={process.env.PUBLIC_URL + "/img/pattern-3.svg"}
    >
      <Box
        bgGradient={
          "linear(to-r, rgba(226, 232, 240, .4), rgba(237, 242, 247, .9), rgba(226, 232, 240, .4))"
        }
        py={20}
      >
        <Container
          maxW={"container.lg"}
          alignItems={"center"}
          display={"flex"}
          flexDir={"column"}
        >
          <Heading textAlign={"center"} pb={10}>
            <Text fontSize={"6xl"} color={"green.500"}>
              <Flex display={"inline-flex"}>23%</Flex>
            </Text>{" "}
            return cost reduction over 3 months with our latest engagement
          </Heading>
          <SimpleGrid columns={11}>
            <GridItem
              colSpan={5}
              mx={5}
              display={"flex"}
              alignItems={"flex-end"}
            >
              <BounceBoxDelay noOfLines={0.1}>
                <Box
                  w={100}
                  h={200}
                  rounded={"lg"}
                  border={"4px solid #c7c7c7"}
                  bg={"gray.100"}
                  m={"auto"}
                  background={
                    "linear-gradient(to bottom, #48BB78 5%, #E2E8F0 5%)"
                  }
                  textAlign={"center"}
                >
                  <Text py={5}>$xxxk</Text>
                </Box>
                <Heading fontSize={"lg"} textAlign={"center"}>
                  standard returns process
                </Heading>
              </BounceBoxDelay>
            </GridItem>
            <GridItem
              colSpan={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <BounceBoxDelay noOfLines={0.2}>
                <Heading>→</Heading>
              </BounceBoxDelay>
            </GridItem>
            <GridItem
              colSpan={5}
              mx={5}
              display={"flex"}
              alignItems={"flex-end"}
            >
              <BounceBoxDelay noOfLines={0.2}>
                <Box
                  w={100}
                  h={160}
                  rounded={"lg"}
                  border={"4px solid #c7c7c7"}
                  background={
                    "linear-gradient(to bottom, #48BB78 0%, #48BB78 8%, #718096 8%, #718096 15%, #E2E8F0 10%)"
                  }
                  m={"auto"}
                  mb={0}
                  textAlign={"center"}
                >
                  <Text py={8}>$xxxk</Text>
                </Box>
                <Heading fontSize={"lg"} textAlign={"center"}>
                  greenbelt return process
                </Heading>
              </BounceBoxDelay>
            </GridItem>
            <GridItem colSpan={11} mx={5} mt={10}>
              <Heading fontSize={"lg"} textAlign={"center"}>
                <Text color={"green.500"} display={"inline-flex"}>
                  ▣
                </Text>{" "}
                return shipping
              </Heading>
              <Heading fontSize={"lg"} textAlign={"center"}>
                <Text color={"gray.500"} display={"inline-flex"}>
                  ▣
                </Text>{" "}
                greenbelt fee
              </Heading>
              <Heading fontSize={"lg"} textAlign={"center"}>
                <Text color={"gray.300"} display={"inline-flex"}>
                  ▣
                </Text>{" "}
                retail value loss
              </Heading>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
