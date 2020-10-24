/** @jsx jsx */
import { 
  Image, 
  Divider, 
  Box, 
  Flex, 
  jsx 
} from "theme-ui";

import {
  Accordion,
  Button,
  Chocolate,
  Checklist,
  List,
} from "@modules/ui/";

import { 
  Aligner, 
  Video, 
  Indent 
} from "@modules/utility/";

//Markdown Component overrides
//Replace MDX html defaults with our custom implementation.

//For the complete available list see: https://www.gatsbyjs.org/docs/mdx/customizing-components/
const MD_Overrides = {
  img: Image,
  thematicBreak: (props) => <Divider sx={{ my: 4 }} />,
  hr: (props) => <Divider sx={{ my: 4 }} />,
};

//Custom component fragments to be used in MDX.
//If you want to use a component, but want it's MDX fragment name to be different
//provide a key: Component (ie: {Carousel: CarouselComponent})
const Custom_Components = {
  Button,
  Box,
  Flex,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  Indent,
  Accordion,
  Chocolate,
  Checklist,
  Video,
};

export default {
  ...MD_Overrides,
  ...Custom_Components,
};
