import { Box, Container } from "@chakra-ui/react";
import Form from "./Form";
import Profile from "./Profile";

export default function Contact() {
  return (
    <Box bgColor={"gray.100"}>
      <Container maxW={"container.lg"} py={20}>
        <Form />
        <Profile />
      </Container>
    </Box>
  );
}
