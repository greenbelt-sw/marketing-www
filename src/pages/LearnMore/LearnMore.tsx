import { Box, Heading, Stack, Container } from "@chakra-ui/react";

export default function LearnMore() {
  return (
    <Box bg={"green.500"} boxShadow={"inner"}>
      <Container
        maxW={"7xl"}
        pt={40}
        as={Stack}
        spacing={12}
        alignItems={"center"}
        h={"90vh"}
      >
        <Stack spacing={0} align={"center"} color={"gray.100"}>
          <Heading>learn more soon...</Heading>
        </Stack>
      </Container>
    </Box>
  );
}
