import { Box, Heading, Text, Stack, Container, Image } from "@chakra-ui/react";
import PartnerFeatures from "./PartnerFeatures";

export default function Partners() {
  return (
    <Box bg={"green.500"} boxShadow={"inner"}>
      <Container
        maxW={"7xl"}
        py={16}
        as={Stack}
        spacing={12}
        alignItems={"center"}
      >
        <Stack spacing={0} align={"center"} color={"gray.100"}>
          <Heading>proud partners with</Heading>
          <Container maxW={"container.sm"} px={"100"} py={"10"}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/deliveringgood.png`}
              alt="Delivering Good"
              width={"100%"}
            />
          </Container>
          <Text w={{ base: "90%", md: "50%" }} textAlign={"center"}>
            greenbelt is partnered with Delivering Good and their network of
            charities to find the right home for consumer returns
          </Text>
        </Stack>
        <PartnerFeatures />
      </Container>
    </Box>
  );
}
