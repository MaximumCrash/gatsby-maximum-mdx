/** @jsx jsx */
import { useEffect, useRef } from "react";
import { jsx, Box, Flex, useColorMode } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "gatsby";

const Header = () => {

  return (
    <Box
      as="header"
      sx={{
        bg: "backgroundAlt",
        position: ["fixed", "fixed", "relative"],
        width: "100%",
        zIndex: "1000",
        transition: "all .32s ease-in-out",
        transform: "translateY(0px)",
        top: 0,
        "&.hide-nav": {
          transform: "translateY(-190px)",
        },
      }}
    >
      <Flex
        sx={{
          maxWidth: "1364px",
          height: ["90px", "90px", "unset"],
          zIndex: 2,
          position: "relative",
          margin: "auto",
          px: [3, "30px", "22px"],
          py: "19px",
          alignItems: "center",
          "& a": { color: "onBackgroundAlt", textDecoration: "none" },
          "& a.external-link > svg": { display: "none" },
          "& a:hover": {
            textDecoration: "none",
          },
          "& > ul": {
            p: 0,
            m: 0,
            listStyleType: "none",
            display: "inline-flex",
          },
          "& > ul > li > a": {
            textDecoration: "none",
          },
        }}
      >
        <Flex
          sx={{
            display: ["none", "none", "flex"],
            flex: "auto",
            ml: [3,3,'56px'],
            alignItems: "center",
            justifyContent: "center",
            "& > a": { fontSize: "16px", p: 2, textAlign: "center" },
            "& > a:not(:last-child)": { mr: "1.4vw" },
          }}
        >
          <Link
            to={`/`}
            variant="nav"
            sx={{
              textDecoration: "none",
              fontWeight: "normal",
              letterSpacing: ".03px",
              color: "onBackgroundAlt",
            }}
          >
            Home
          </Link>
          {/* {headerLinks.map(({ url, title }, index) => (
            <Link
              to={url}
              hideExternalIcon
              key={`header-link-${index}`}
              sx={{
                fontWeight: "normal",
                flexShrink: 0
              }}
            >
              {title}
            </Link>
          ))} */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
