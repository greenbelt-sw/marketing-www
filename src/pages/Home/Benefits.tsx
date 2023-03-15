import { ReactElement, ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Icon,
} from "@chakra-ui/react";
import {
  FcBusinessman,
  FcChargeBattery,
  FcPodiumWithSpeaker,
} from "react-icons/fc";
import { BounceBoxDelay } from "../../components/MotionBox";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box w={300}>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={"white"}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "white",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      mx={2}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={"gray.600"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  icon,
  name,
}: {
  icon: ReactElement;
  name: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
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
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

export default function Benefits() {
  const getDelay = (delay: number): number => {
    console.log(delay);
    if (window.innerWidth < 768) return 0;
    return delay;
  };
  return (
    <Box>
      <Container
        maxW={"container.lg"}
        as={Stack}
        spacing={12}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        flexDir={"row"}
      >
        <BounceBoxDelay noOfLines={getDelay(0.1)} w={"fit-content"} m={0}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cost Friendly</TestimonialHeading>
              <TestimonialText>
                greenbelt's latest engagement targeted a <b>23% reduction</b> in
                quarterly return costs for an apparel retailer
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon={<Icon as={FcBusinessman} w={10} h={10} />}
              name={"Benefitting the Company"}
            />
          </Testimonial>
        </BounceBoxDelay>
        <BounceBoxDelay noOfLines={getDelay(0.3)} w={"fit-content"} m={"auto"}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Eco Friendly</TestimonialHeading>
              <TestimonialText>
                Around <b>17% of retail orders</b> were returned in 2022,
                causing notable financial & environmental impacts.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon={<Icon as={FcChargeBattery} w={10} h={10} />}
              name={"Benefitting the Environment"}
            />
          </Testimonial>
        </BounceBoxDelay>
        <BounceBoxDelay noOfLines={getDelay(0.2)} w={"fit-content"} m={"auto"}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Resource Friendly</TestimonialHeading>
              <TestimonialText>
                Around <b>$200 billion</b> worth of merchandise are destroyed
                each year. greenbelt is helping to reduce this number.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon={<Icon as={FcPodiumWithSpeaker} w={10} h={10} />}
              name={"Benefitting the Community"}
            />
          </Testimonial>
        </BounceBoxDelay>
      </Container>
    </Box>
  );
}
