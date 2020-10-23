/** @jsx jsx */
import { Box, Text,jsx } from "theme-ui";

const NotFoundPage = () => {
  return (
    <Box sx={{ fontSize: "1.5em" }}>
      <Text sx={{ fontSize: "2em", mt: "1em", mb: ".75em" }}>404</Text>
      <Box sx={{ mt: "1em", mb: "1em" }}>
        Uh oh, the page you're looking for doesn't exist.
      </Box>
    </Box>
  );
};
export default NotFoundPage;
