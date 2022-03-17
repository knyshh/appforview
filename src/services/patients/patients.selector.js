import { createMatchSelector } from "connected-react-router";
import find from "lodash/find";
import get from "lodash/get";

import { urlLocations } from "routes/urlLocations";

export const patientsSelector = state =>
  state.patients.list && Object.values(state.patients.list);
export const requestedPatientSelector = state => state.patients.patient;

export const patientsCountSelector = state => state.patients.count;

export const patientSelector = state => {
  const getMatch = createMatchSelector(urlLocations.patientInfo);
  const pathId = get(getMatch(state), "params.id");
  const patients = Object.values(state.patients.data);
  return find(patients, patient => patient.id?.toString() === pathId);
};
