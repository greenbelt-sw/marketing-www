import { Box } from "@chakra-ui/react";
import BasicAbout from "./BasicAbout";
import Cover from "./Cover";
import Partners from "./Partners";

export default function Home() {
  return (
    <Box>
      <Cover />
      <Partners />
      <BasicAbout />
    </Box>
  );
}
