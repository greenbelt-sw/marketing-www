import {
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tabs,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BounceBoxRepeat } from "../../components/MotionBox";

export default function TabsLearnMore() {
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState(true);
  useEffect(() => {
    if (carousel) {
      const interval = setInterval(() => {
        setIndex((index + 1) % 3);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index, carousel]);

  const handleTabClick = (index: number) => {
    setIndex(index);
    setCarousel(false);
  };

  return (
    <Tabs variant="soft-rounded" colorScheme="green" index={index}>
      <TabList justifyContent={"center"}>
        <Tab onClick={() => handleTabClick(0)}>
          <Heading size={"md"}>Redirect Timeline</Heading>
        </Tab>
        <Tab onClick={() => handleTabClick(1)}>
          <Heading size={"md"}>Designated Goods</Heading>
        </Tab>
        <Tab onClick={() => handleTabClick(2)}>
          <Heading size={"md"}>Damaged Goods</Heading>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BounceBoxRepeat>
            <Image
              src={process.env.PUBLIC_URL + "/img/redirect.png"}
              alt={"designated learn more"}
            />
          </BounceBoxRepeat>
        </TabPanel>
        <TabPanel>
          <BounceBoxRepeat>
            <Image
              src={process.env.PUBLIC_URL + "/img/designated.png"}
              alt={"designated learn more"}
            />
          </BounceBoxRepeat>
        </TabPanel>
        <TabPanel>
          <BounceBoxRepeat>
            <Image
              src={process.env.PUBLIC_URL + "/img/damaged.png"}
              alt={"damaged learn more"}
            />
          </BounceBoxRepeat>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
