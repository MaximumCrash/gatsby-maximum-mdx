/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx, Text, Flex } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

import { Link } from "gatsby";
import {titleCase} from '@utils';

const Breadcrumbs = ({ children, data, pathDirs }) => {

  return (
    <Flex
      sx={{
        alignItems: "center",
        width: '100%',
        mb: "28px",
        flexWrap: "wrap",
        fontSize: 3,
        pr: [0, 0, "1.5rem"],
      }}
    >
      <Link
        to={`/`}
        sx={{
          textDecoration: "none",
          color: "textMuted",
          fontWeight: "normal",
          "&:hover": {
            textDecoration: "none",
          },
        }}
        partiallyActive={false}
      >
        Home
      </Link>
      <Icon
        name="chevron_right"
        size={3}
        sx={{ mx: ["10px", "10px", "13px"] }}
      />
      {pathDirs.map((p, index) => {
        const _data = data.find((n) => n.part === p);

        if (!_data) {
          if (index === pathDirs.length - 1) {
            return (
              <Text
                sx={{
                  display: "inline-block",
                  fontWeight: "500",
                  color: "textMuted",
                }}
                key={`breadcrumb-${index}`}
              >
                {titleCase(p.replace(/-|_|\./g, ' '))}

              </Text>
            )
          }

          return (
            <Fragment key={`breadcrumb-${index}`}>
            <Text
              sx={{
                display: "inline-block",
                color: "textMuted",
              }}
              key={`breadcrumb-${index}`}
            >
              {titleCase(p.replace(/-|_|\./g, ' '))}
            </Text>
            <Icon name="chevron_right" size={3} sx={{ mx: "13px" }} />
            </Fragment>
          );
        }

        const { title, url } = _data;


        //If this is the last crumb, then just render its name.
        if (index === pathDirs.length - 1) {
          return (
            <Text
              sx={{
                display: "inline-block",
                fontWeight: "500",
                color: "textMuted",
              }}
              key={`breadcrumb-${index}`}
            >
              {`${title}`}
            </Text>
          );
        }

        return (
          <Fragment key={`breadcrumb-${index}`}>
            {url ? (
              <Link
                to={url}
                sx={{
                  textDecoration: "none",
                  color: "textMuted",
                  fontWeight: "normal",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  lineHeight: "normal",
                }}
                partiallyActive={false}
                activeClassName="breadcrumb-no-active"
              >
                {index >= 2 ? (
                  <>{`...`}</>
                ) : (
                  <>
                    <span
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "250px",
                      }}
                    >
                      {title}
                    </span>
                    
                  </>
                )}
              </Link>
            ) : (
              <>
                {index >= 2 ? (
                  <>{`...`}</>
                ) : (
                  `${title}`
                )}
              </>
            )}
            <Icon name="chevron_right" size={3} sx={{ mx: "13px" }} />
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default Breadcrumbs;
