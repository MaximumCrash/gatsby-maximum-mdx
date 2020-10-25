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
      <br/>
      <span>Supported by the <a href="https://community-development.makerdao.com/">MakerDAO Community!</a> ❤️</span>
    </Box>
  );
};

export default Footer;
