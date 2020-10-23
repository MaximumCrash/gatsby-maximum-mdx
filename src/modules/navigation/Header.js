/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";

import { useNavigation } from "@modules/navigation/context";

const Header = () => {
  const {headerDataLinks} = useNavigation();
  console.log(headerDataLinks);

  return (
    <Flex
      as="header"
      sx={{
        position: "relative",
        width: "100%",
        height: '50px',
        p: 4,
        borderBottom: '1px solid',
        borderColor: 'grey',
        alignItems: "center",
        margin: 'auto'
      }}
    >
      {headerDataLinks.map(({ url, title }, index) => (
        <Link
          to={url}
          sx={{mr: 4}}
          key={`header-link-${index}`}
        >
          {title}
        </Link>
      ))}
    </Flex>
  );
};

export default Header;
