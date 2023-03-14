import { Box, Heading, Stack, Container, Text } from "@chakra-ui/react";
import LMStats from "./LMStats";
import TabsLearnMore from "./TabsLearnMore";
import TaxDeduction from "./TaxDeduction";

export default function LearnMore() {
  return (
    <>
      <Box
        bg={"green.500"}
        bgImage={process.env.PUBLIC_URL + "/img/pattern-2.svg"}
      >
        <Box bg={"rgba(56, 161, 105, .96)"}>
          <Container
            maxW={"container.lg"}
            py={40}
            as={Stack}
            spacing={12}
            alignItems={"center"}
            minH={"90vh"}
          >
            <Stack spacing={0} align={"center"} color={"gray.100"}>
              <Heading>
                In 2022, ~17% of retail orders were returned, causing notable
                financial & environmental impacts
              </Heading>
            </Stack>
            <LMStats />
          </Container>
        </Box>
        <TaxDeduction />
        <Box bg={"#fff"} boxShadow={"inner"}>
          <Container
            maxW={"container.lg"}
            py={40}
            as={Stack}
            spacing={12}
            alignItems={"center"}
            minH={"90vh"}
          >
            <Stack spacing={0} align={"center"} color={"gray.800"}>
              <Heading>
                <Text display={"inline-flex"} color={"green.500"}>
                  greenbelt
                </Text>{" "}
                redirects two significant segments of retail return volume to
                local charities
              </Heading>
            </Stack>
            <TabsLearnMore />
          </Container>
        </Box>
      </Box>
    </>
  );
}
