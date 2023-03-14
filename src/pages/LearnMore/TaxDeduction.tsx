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
    <Box py={20} bgColor={"gray.100"}>
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
          <GridItem colSpan={5} mx={5}>
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
              ></Box>
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
          <GridItem colSpan={5} mx={5}>
            <BounceBoxDelay noOfLines={0.2}>
              <Box
                w={100}
                h={200}
                rounded={"lg"}
                border={"4px solid #c7c7c7"}
                background={
                  "linear-gradient(to bottom, #ffffff 30%, #48BB78 30%, #48BB78 35%, #718096 35%, #718096 40%, #E2E8F0 40%)"
                }
                m={"auto"}
              ></Box>
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
  );
}
