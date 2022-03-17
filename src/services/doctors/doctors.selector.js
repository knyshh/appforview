import { createMatchSelector } from "connected-react-router";
import find from "lodash/find";
import get from "lodash/get";

import { urlLocations } from "routes/urlLocations";

export const doctorsSelector = state =>
  state.doctors.list && Object.values(state.doctors.list);

export const requestedDoctorSelector = state => state.doctors.doctor;

export const doctorsCountSelector = state => state.doctors.count;

export const doctorSelector = state => {
  const getMatch = createMatchSelector(urlLocations.doctorInfo);
  const pathId = get(getMatch(state), "params.id");
  const doctors = Object.values(state.doctors.data);
  return find(doctors, doctor => doctor.id.toString() === pathId);
};

export const getDoctorByIdSelector = (state, id) => {
  const doctors = Object.values(state.doctors.data);
  return find(doctors, doctor => doctor.id.toString() === id.toString());
};
