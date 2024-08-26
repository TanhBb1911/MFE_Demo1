import Hero from "@/components/hero";
import dynamic from 'next/dynamic';
import GridLayout from "./girdLayout";
import Settings from "@/pages/setting"
import { ChakraProvider } from "@chakra-ui/react";

const CampComponent = dynamic(() => import('mfeApp2/Camp'), { ssr: false });
const Guide1Component = dynamic(() => import('mfeApp3/Guide1'), { ssr: false });
const Guide2Component = dynamic(() => import('mfeApp4/Guide2'), { ssr: false });
const Guide3Component = dynamic(() => import('mfeApp5/Guide3'), { ssr: false });
const Feture1Component = dynamic(() => import('mfeApp6/Feture1'), { ssr: false });
const Feture2Component = dynamic(() => import('mfeApp7/Feture2'), { ssr: false });
const Feture3Component = dynamic(() => import('mfeApp8/Feture3'), { ssr: false });
const GetAppComponent = dynamic(() => import('mfeApp9/GetApp'), { ssr: false });
const HeroCompnent1 = dynamic(() => import('mfeApp10/Hero1'), { ssr: false });
const HeroCompnent2 = dynamic(() => import('mfeApp11/Hero2'), { ssr: false });

const HomePage = () => {
  const components = {
    HeroCompnent1: <HeroCompnent1 />,
    HeroCompnent2: <HeroCompnent2 />,

    CampComponent: <CampComponent />,

    Guide1Component: <Guide1Component />,
    Guide2Component: <Guide2Component />,
    Guide3Component: <Guide3Component />,

    Feture1Component: <Feture1Component />,
    Feture2Component: <Feture2Component />,
    Feture3Component: <Feture3Component />,

    GetAppComponent: <GetAppComponent />,
  };


  return (
    <ChakraProvider>
      <GridLayout positions={Settings} components={components} />
    </ChakraProvider>
  );
};

export default HomePage;
