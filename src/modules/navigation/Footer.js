/** @jsx jsx */
import { Box, jsx } from "theme-ui";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        width: "100%",
        borderTop: '1px solid',
        borderColor:'gray',
        p: 4
      }}
    >
      MDX Maxed out with love by <a href="rejontaylor.com">Réjon Taylor-Foster</a>
    </Box>
  );
};

export default Footer;
