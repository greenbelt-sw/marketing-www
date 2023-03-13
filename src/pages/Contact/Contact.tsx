import { Box, Container } from "@chakra-ui/react";
import Form from "./Form";
import Profile from "./Profile";

export default function Contact() {
  return (
    <Box bgColor={"gray.100"} bgGradient="linear(to-b, gray.100, gray.200)">
      <Container maxW={"container.lg"} py={20} px={{ base: 1, sm: 3 }}>
        <Profile />
        <Form />
      </Container>
    </Box>
  );
}
