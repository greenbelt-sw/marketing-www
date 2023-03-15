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

export default function LMStats() {
  const getDelay = (delay: number): number => {
    if (window.innerWidth < 768) return 0;
    return delay;
  };
  return (
    <Box p={4}>
      <Container maxW={"container.lg"}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="center"
          alignItems={"flex-end"}
        >
          <Card
            heading={"$816 Billion"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={"returned retail merchandise"}
            href={
              "https://www.forbes.com/sites/joanverdon/2022/12/14/816-billion-in-returns-expected-this-year-retail-group-reports/?sh=4f5920b65674"
            }
            delay={getDelay(0.1)}
          />
          <Card
            heading={"25%"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={"of returns are destroyed"}
            href={
              "https://www.theatlantic.com/magazine/archive/2021/11/free-returns-online-shopping/620169/"
            }
            delay={getDelay(0.2)}
          />
        </Flex>
        <Flex mt={6} flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"6 Billion"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={"pounds of landfill waste"}
            href={
              "https://www.npr.org/2022/01/12/1072066943/from-living-rooms-to-landfills-some-holiday-shopping-returns-take-a-very-sad-pat/"
            }
            delay={getDelay(0.3)}
          />
          <Card
            heading={"16 Million"}
            icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            description={"tons of CO2 emissions"}
            href={
              "https://www.chargedretail.co.uk/2022/04/11/returns-are-costing-amazon-billions-of-dollars/"
            }
            delay={getDelay(0.4)}
          />
          <Card
            heading={"~$200 Billion"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={"in destroyed merchandised"}
            href={
              "https://www.cnbc.com/2016/12/16/a-260-billion-ticking-time-bomb-the-costly-business-of-retail-returns.html"
            }
            delay={getDelay(0.5)}
          />
        </Flex>
      </Container>
    </Box>
  );
}
