/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Icon } from "@makerdao/dai-ui-icons";

import { useNavigation } from "@modules/navigation/context";
import { getLinkIcon, Link } from "@modules/navigation";

const Footer = () => {


  return (
    <Box
      as="footer"
      sx={{
        width: "100%",
        bg: "backgroundAlt",
      }}
    >
      <Flex
        sx={{
          px: ["26px", "26px", "52px"],
          pt: ["40px", "40px", "54px"],
          pb: ["119px", "119px", "54px"],
          flexDirection: ["column", "column", "unset"],
          maxWidth: "1364px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            color: "onBackgroundAlt",
            display: "inline-block",
            width: "217px",
            "& > *, & svg": { color: "onBackgroundAlt" },
          }}
        >
        </Box>
        <Box
          sx={{
            ml: ["unset", "unset", "5vw"],
            mt: ["56px", "56px", "unset"],
            display: "inline-block",
            width: ["100%", "100%", "calc(100% - 106px - 217px)"],
            verticalAlign: "top",
            "& > * > ul": {
              m: 0,
              p: 0,
              color: "text",
              listStyleType: "none",
              display: "flex",
              flexWrap: ["wrap", "wrap", "unset"],
              "& > li:not(:last-of-type)": {
                mr: ["unset", "unset", "5vw"],
              },
              "& > li": {
                fontWeight: "500",
                fontSize: "1rem",
                flexShrink: 0,
                flex: ["0 50%", "0 50%", 1],
                width: ["calc(50% - 66px)", "calc(50% - 66px)", "unset"],
                pr: ["66px", "66px", "unset"],
                mb: ["64px", "64px", "unset"],
                color: "onBackgroundAlt",
                "& > *:nth-of-type(1):not(ul)": {
                  mb: "8px",
                },
                "& > ul": {
                  fontSize: "1rem",
                  p: 0,
                  listStyleType: "none",
                  "& li:not(:last-of-type)": {
                    mb: "10px",
                  },
                  "& a": {
                    color: "onBackgroundAlt",
                    fontWeight: "normal",
                    textDecoration: "none",
                    "& svg": {
                      display: "none",
                    },
                    "&:hover": {
                      textDecoration: "none",
                    },
                  },
                },
              },
            },
          }}
        >
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
