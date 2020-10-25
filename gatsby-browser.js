import React from "react";

import Layout from "@modules/layouts/site_layout";

export const wrapPageElement = ({element, props}) => (
    <Layout {...props}>
      {element}
    </Layout>
)

