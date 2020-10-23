//Takes an MDX Page Node and pulls out some parameters based on our Title Rule.
//Returns a title based on the data. 
export const TitleConverter = ({
  frontmatter,
  title,
  headings,
  headerLabel,
  fileAbsolutePath,
}) => {
  const splitPath = fileAbsolutePath.split("/");
  let fileName = splitPath.pop().replace(/(.mdx|.md)$/gm, "");

  //If the filename is index.mdx, use the name of it's directory instead.
  if (fileName === "index") {
    fileName = splitPath[splitPath.length - 1];
  }

  const frontMatterTitle =
    frontmatter && frontmatter.title ? frontmatter.title : null;
  const headingsTitle =
    headings && headings.length > 0 ? headings[0].value : null;

  //Classic title rule.
  return headerLabel || frontMatterTitle || headingsTitle || fileName;
};

//Since our routes are our file's path this method converts the file path into a URL
export const UrlConverter = ({ fileAbsolutePath }) => {
  return fileAbsolutePath
    .slice(fileAbsolutePath.indexOf("/content/") + 8, fileAbsolutePath.length)
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "");
};

// Capitalize each word in a string
export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// helper-function to insert comma as separators every 3 digits
export const formatNumber = (num) => {
  return Math.round(num)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
