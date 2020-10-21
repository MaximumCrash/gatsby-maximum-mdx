import React from "react";

import Layout from "@modules/layouts/site_layout";
import { NavigationProvider } from "@modules/navigation";


export const wrapPageElement = ({element, props}) => (
  <NavigationProvider>
    <Layout {...props}>
      {element}
    </Layout>
  </NavigationProvider>
)

