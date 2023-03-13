import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcConferenceCall, FcDonate, FcMoneyTransfer } from "react-icons/fc";
import { BounceBoxDelay } from "../../components/MotionBox";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  delay: number;
}

const Card = ({ heading, description, icon, href, delay }: CardProps) => {
  return (
    <BounceBoxDelay noOfLines={delay} shadow={"xl"} h={"max-content"}>
      <Box
        w={{ base: "full", md: "275px" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        bgColor={"gray.100"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Stack align={"start"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={"gray.200"}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="lg">{heading}</Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
        </Stack>
        <Button
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
          as={"a"}
          href={href}
          pt={2}
        >
          Learn more
        </Button>
      </Box>
    </BounceBoxDelay>
  );
};

export default function PartnerFeatures() {
  return (
    <Box p={4}>
      <Container maxW={"container.lg"}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"210th"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={
              "in the Chronicle of Philanthropy’s current annual ranking of the top 400 charities in the United States."
            }
            href={"https://www.delivering-good.org/corporate-partnerships/"}
            delay={0.1}
          />
          <Card
            heading={"$2 Billion"}
            icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            description={
              "of donated products have been distributed through our network of community partners, serving individuals and families affected by poverty and disaster worldwide."
            }
            href={"https://www.delivering-good.org/about-us/"}
            delay={0.2}
          />
          <Card
            heading={"98%"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "of revenue dedicated to its charitable program of distributing apparel, accessories, shoes, books and other useful items."
            }
            href={"https://www.delivering-good.org/about-us/"}
            delay={0.3}
          />
        </Flex>
      </Container>
    </Box>
  );
}
