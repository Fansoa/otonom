import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import { useSelectedItemContext } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";

import TableList from "@/components/TableList/index.tsx";

import {
  findCrateById,
  findRackById,
  getFormattedCrateActions,
  getSelectedItemType,
} from "@/app/(protected)/modules/mealworm/utils/methods/index.ts";

const DataDisplay = () => {
  const { rackList } = useRackListContext();
  const selectedItem = useSelectedItemContext();
  let itemList;

  const selectedItemType = getSelectedItemType(selectedItem);

  if (selectedItem) {
    const rack = findRackById({ rackList, rackId: selectedItem.rackId });

    if (selectedItemType === "rack") {
      const formattedCrateActionsOfRack = rack.crate
        ? rack.crate.map((crate) => getFormattedCrateActions(crate))
        : [[]];

      const rackIsNotEmpty = formattedCrateActionsOfRack.length > 0;

      let unifiedActionsList;

      if (rackIsNotEmpty) {
        unifiedActionsList = formattedCrateActionsOfRack.reduce((acc, curr) => [
          ...acc,
          ...curr,
        ]);
      } else {
        unifiedActionsList = formattedCrateActionsOfRack;
      }
      return (
        <TableList
          itemList={unifiedActionsList}
          title="Action list"
          description={`A list of all actions carried out on crates of rack: ${rack.name}`}
          messageIfNoItems={`${rack.name} does not contain any actions`}
        />
      );
    }
    if (selectedItemType === "crate") {
      const crate = findCrateById({
        crateList: rack.crate,
        crateId: selectedItem.crateId,
      });
      itemList = getFormattedCrateActions(crate);
      return (
        <TableList
          itemList={itemList}
          title="Action list"
          description={`A list of all actions carried out on the crate: ${crate.name}`}
          messageIfNoItems="The selected element does not contain any actions"
        />
      );
    }
  }
  itemList = rackList
    ?.map((rack) =>
      rack.crate
        ? rack.crate.map((crate) => getFormattedCrateActions(crate))
        : [[]],
    )
    .reduce((acc, curr) => [...acc, ...curr])
    .reduce((acc, curr) => [...acc, ...curr]);

  return (
    <TableList
      itemList={itemList}
      title="Action list"
      description="A list of all actions carried out"
      messageIfNoItems="The selected element does not contain any actions"
    />
  );
};

export default DataDisplay;
