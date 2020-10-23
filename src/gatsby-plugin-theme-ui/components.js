/** @jsx jsx */
import { Image, Text, Divider, Box, Flex, jsx } from "theme-ui";
import { motion } from "framer-motion";

import {
  Accordion,
  Button,
  Categories,
  Callout,
  Chocolate,
  Checklist,
  Column,
  InfoBlock,
  List,
  Process,
  Table,
  Tout,
} from "@modules/ui/";

import { Aligner, Video, Indent } from "@modules/utility/";

//Markdown Component overrides
//Replace MDX html defaults with our custom implementation.

//For the complete available list see: https://www.gatsbyjs.org/docs/mdx/customizing-components/
const MD_Overrides = {
  img: Image,
  table: (props) => <Table {...props} />,
  thematicBreak: (props) => <Divider sx={{ my: 4 }} />,
  hr: (props) => <Divider sx={{ my: 4 }} />,
  blockquote: Callout,
};

//Custom component fragments to be used in MDX.
//If you want to use a component, but want it's MDX fragment name to be different
//provide a key: Component (ie: {Carousel: CarouselComponent})
const Custom_Components = {
  Text,
  Button,
  Callout,
  Box,
  Flex,
  CTA: Callout,
  Process,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  Indent,
  Accordion,
  InfoBlock,
  Chocolate,
  Checklist,
  Categories,
  Tout,
  Column,
  Video,
};

export default {
  ...MD_Overrides,
  ...Custom_Components,
};
