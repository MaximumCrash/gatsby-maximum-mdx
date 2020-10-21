import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { jsx, InitializeColorMode, ThemeProvider } from "theme-ui";

import { ThemeUIConfig } from "@modules/utility";
import Layout from "@modules/layouts/site_layout";
import { NavigationProvider } from "@modules/navigation";
import { getInitialLocale } from "@utils";

export const wrapPageElement = ({element, props}) => (
  <NavigationProvider>
    <Layout {...props}>
      {element}
    </Layout>
  </NavigationProvider>
)

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
