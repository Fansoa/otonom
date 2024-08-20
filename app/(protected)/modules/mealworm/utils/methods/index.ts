export const getFormattedAction = ({ crate, action }) => ({
  id: action.id,
  name: crate.name,
  action: action.actionType.name,
  weight: action.weight,
  created_at: new Date(action.created_at).toLocaleString(),
});

export const getFormattedCrateActions = (crate) => {
  if (!crate.action) {
    return [];
  }
  return crate?.action.map((action) => getFormattedAction({ crate, action }));
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
