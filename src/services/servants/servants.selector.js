import { createMatchSelector } from "connected-react-router";
import { urlLocations } from "routes/urlLocations";

import find from "lodash/find";
import get from "lodash/get";

export const servantsSelector = state => Object.values(state.servants.list);
export const requestedServantSelector = state => state.servants.servant;

export const servantsCountSelector = state => state.servants.count;

export const servantSelector = state => {
  const getMatch = createMatchSelector(urlLocations.servantInfo);
  const pathId = get(getMatch(state), "params.id");
  const servants = Object.values(state.servants.data);
  return find(servants, servant => servant.id.toString() === pathId);
};
