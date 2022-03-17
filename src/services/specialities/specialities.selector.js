export const specialitiesSelector = state => Object.values(state.specialities);

export const specialityByIdSelector = (state, id) => {
  const specialities = Object.values(state.specialities);
  return specialities.find(s => s.id?.toString() === id?.toString());
};
