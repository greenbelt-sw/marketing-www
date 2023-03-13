import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import theme from "./theme/index";
import "./theme/styles.css";

export const App = () => {
  const [hashtag, setHashtag] = useState(window.location.hash);
  const darkNav = window.location.hash === "#contact";
  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash.split("?")[0];
      setHashtag(hash);
    };
    window.onhashchange = handleHashChange;
    return () => {
      window.onhashchange = null;
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Header dark={darkNav} />
      {(hashtag === "" || hashtag === "#") && <Home />}
      {hashtag === "#contact" && <Contact />}
      <Footer />
    </ChakraProvider>
  );
};
