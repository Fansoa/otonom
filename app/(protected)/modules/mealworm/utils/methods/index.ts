export const getFormattedAction = ({ crate, action }) => {
  let date;
  try {
    date = new Date(action.created_at).toLocaleString();
  } catch (error) {
    date = "invalid format";
  }
  return {
    id: action.id,
    name: crate.name,
    action: action.actionType.name,
    weight: action.weight,
    created_at: date,
  };
};

export const getFormattedCrateActions = (crate) => {
  return crate.action.map((action) => getFormattedAction({ crate, action }));
};

export const getSelectedItemType = (selectedItem) => {
  if (selectedItem?.rackId && !selectedItem?.crateId) return "rack";
  if (selectedItem?.crateId) return "crate";
  return null;
};
