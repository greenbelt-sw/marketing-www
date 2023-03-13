import { EmailIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <Box>
      <Container
        maxW={"container.sm"}
        boxShadow={"lg"}
        rounded={"md"}
        p={10}
        pt={5}
        bgColor={"white"}
      >
        <Heading fontSize={"lg"} color={"gray.600"} pb={2} textAlign={"center"}>
          We'd love to hear from you!
        </Heading>
        <Stack spacing={4}>
          <Flex>
            <InputGroup mr={1}>
              <InputLeftElement
                pointerEvents="none"
                children={<PlusSquareIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Name" />
            </InputGroup>

            <InputGroup ml={1}>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<EmailIcon color="gray.300" />}
              />
              <Input placeholder="Email" />
            </InputGroup>
          </Flex>
          <Textarea placeholder="Your message goes here" />
          <Button
            bgColor={"green.500"}
            color={"gray.100"}
            _hover={{
              bg: "green.400",
            }}
            w={"fit-content"}
          >
            Send
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
