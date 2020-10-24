/** @jsx jsx */
import { Button as ThemedButton, Text, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "gatsby";

const Button = ({
  to,
  href,
  variant,
  children,
  inline,
  sx,
  ...otherProps
}) => {

  return (
    <Link
      to={to || href}
      isButton={true}
      sx={{
        whiteSpace: "nowrap",
        display: "inline-block",
        cursor:'pointer',
        '&:not(:last-child)': {
          mb: 3
        },
        ...sx,
      }}
    >
        <ThemedButton
          className="button"
          sx={{
            "& > *": { display: "inline-block", mb: "0 !important" },
            cursor:'pointer' 
          }}
          {...otherProps}
        >
          <Text>
            {children}
          </Text>
        </ThemedButton>
    </Link>
  );
};
export default Button;
