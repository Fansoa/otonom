import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import { useSelectedItemContext } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";
import {
  findCrateById,
  findRackById,
  getFormattedCrateActions,
  getSelectedItemType,
} from "@/app/(protected)/modules/mealworm/utils/methods/index.ts";
import TableList from "@/components/TableList/index.tsx";

const DataDisplay = () => {
  const { rackList } = useRackListContext();
  const selectedItem = useSelectedItemContext();
  let itemList;

  const selectedItemType = getSelectedItemType(selectedItem);

  if (selectedItem) {
    const rack = findRackById({ rackList, rackId: selectedItem.rackId });

    if (selectedItemType === "rack") {
      const formattedCrateActionsOfRack = rack.crate.map((crate) =>
        getFormattedCrateActions(crate),
      );
      const unifiedActionsList = formattedCrateActionsOfRack.reduce(
        (acc, curr) => [...acc, ...curr],
      );
      return <TableList itemList={unifiedActionsList} />;
    }
    if (selectedItemType === "crate") {
      const crate = findCrateById({
        crateList: rack.crate,
        crateId: selectedItem.crateId,
      });
      itemList = getFormattedCrateActions(crate);
      return <TableList itemList={itemList} />;
    }
  }
  itemList = rackList
    ?.map((rack) => rack.crate.map((crate) => getFormattedCrateActions(crate)))
    .reduce((acc, curr) => [...acc, ...curr])
    .reduce((acc, curr) => [...acc, ...curr]);

  return <TableList itemList={itemList} />;
};

export default DataDisplay;
