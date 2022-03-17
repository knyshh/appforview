import { matchPath } from "react-router";

export const isUrlMatch = ({ location: { pathname } }, path) =>
  !!matchPath(pathname, { path });
