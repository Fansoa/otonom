export const getFormattedAction = ({ crate, action }) => ({
  id: action.id,
  name: crate.name,
  action: action.actionType.name,
  weight: action.weight,
  created_at: action.created_at,
});

export const getFormattedCrateActions = (crate) => {
  return crate?.action.map((action) => getFormattedAction({ crate, action }));
};

export const getAllFormattedRackActions = (rack) => {
  return rack.crate.map((crate) => getFormattedCrateActions(crate));
};

export const getSelectedItemType = (selectedItem) => {
  if (selectedItem?.rackId && !selectedItem?.crateId) return "rack";
  if (selectedItem?.crateId) return "crate";
  return null;
};

export const findRackById = ({ rackList, rackId }) => {
  return rackList.find((rack) => rack.id === rackId);
};

export const findCrateById = ({ crateList, crateId }) => {
  return crateList.find((crate) => crate.id === crateId);
};
