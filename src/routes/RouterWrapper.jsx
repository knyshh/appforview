import React from "react";
import { Route } from "react-router";

export default ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout {...rest} {...props}>
                <Component {...props} />
            </Layout>
        )}
    />
);
