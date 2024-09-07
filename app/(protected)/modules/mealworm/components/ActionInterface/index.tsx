"use client";

import TableList from "@/components/TableList/index.tsx";

import {
  getFormattedCrateActions,
  getSelectedItemType,
} from "@/app/(protected)/modules/mealworm/utils/methods/index.ts";
import { useMealwormStore } from "@/providers/mealworm-store-provider.tsx";

const ActionInterface = () => {
  const { rackList, selectedItem } = useMealwormStore((state) => state);

  const selectedItemType = getSelectedItemType(selectedItem);

  if (selectedItem) {
    const rack = rackList.find((rack) => rack.id === selectedItem.rackId);

    if (selectedItemType === "rack") {
      const formattedCrateActionsOfRack = rack?.crate
        ? rack.crate.map(
            (crate) => (crate.action && getFormattedCrateActions(crate)) || [],
          )
        : [[]];

      const rackActionList = formattedCrateActionsOfRack.flat();

      return (
        <TableList
          itemList={rackActionList}
          title="Action list"
          description={`A list of all actions carried out on crates of rack: ${rack.name}`}
          messageIfItemListIsEmpty={`${rack.name} does not contain any actions`}
        />
      );
    }

    if (selectedItemType === "crate") {
      const crate = rack.crate.find(
        (crate) => crate.id === selectedItem.crateId,
      );
      const crateActionList = crate.action
        ? getFormattedCrateActions(crate)
        : [];
      return (
        <TableList
          itemList={crateActionList}
          title="Action list"
          description={`A list of all actions carried out on the crate: ${crate.name}`}
          messageIfItemListIsEmpty="The selected element does not contain any actions"
        />
      );
    }
  }

  const actionList = rackList
    ?.map((rack) =>
      rack.crate
        ? rack.crate
            .map(
              (crate) =>
                (crate.action && getFormattedCrateActions(crate)) || [],
            )
            .flat()
        : [],
    )
    .flat();

  return (
    <TableList
      itemList={actionList}
      title="Action list"
      description="A list of all actions carried out"
      messageIfItemListIsEmpty="The selected element does not contain any actions"
    />
  );
};

export default ActionInterface;
