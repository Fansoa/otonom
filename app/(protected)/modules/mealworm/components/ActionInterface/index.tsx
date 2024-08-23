import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import { useSelectedItemContext } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";

import TableList from "@/components/TableList/index.tsx";

import {
  getFormattedCrateActions,
  getSelectedItemType,
} from "@/app/(protected)/modules/mealworm/utils/methods/index.ts";
import DrawerForm from "@/components/DrawerForm/index.tsx";
import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Toto = ({ setIsOpen }) => {
  return (
    <button
      type="button"
      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      Add user
    </button>
  );
};

const ActionInterface = () => {
  const { rackList } = useRackListContext();
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm();

  const selectedItem = useSelectedItemContext();

  const selectedItemType = getSelectedItemType(selectedItem);

  let itemList;
  let description;
  let messageIfItemListIsEmpty;
  let renderFeedingFormButton;
  let renderHarvestFormButton;
  let renderTransferFormButton;

  if (selectedItem) {
    const rack = rackList.find((rack) => rack.id === selectedItem.rackId);

    if (selectedItemType === "rack") {
      const formattedCrateActionsOfRack = rack.crate
        ? rack.crate.map(
            (crate) => crate.action && getFormattedCrateActions(crate),
          )
        : [[]];

      itemList = formattedCrateActionsOfRack.flat();
      description = `A list of all actions carried out on crates of rack: ${rack.name}`;
      messageIfItemListIsEmpty = `${rack.name} does not contain any actions`;
    }

    if (selectedItemType === "crate") {
      const crate = rack.crate.find(
        (crate) => crate.id === selectedItem.crateId,
      );
      itemList = crate.action ? getFormattedCrateActions(crate) : [];

      description = `A list of all actions carried out on the crate: ${crate.name}`;
      messageIfItemListIsEmpty =
        "The selected element does not contain any actions";
      renderFeedingFormButton = <Toto setIsOpen={setIsOpen} />;
      // renderHarvestFormButton = () => <Toto />;
      // renderTransferFormButton = () => <Toto />;
    }
  }
  if (!selectedItem) {
    itemList = rackList
      ?.map((rack) =>
        rack?.crate
          .map((crate) => crate.action && getFormattedCrateActions(crate))
          .flat(),
      )
      .flat();

    description = "A list of all actions carried out";
    messageIfItemListIsEmpty =
      "The selected element does not contain any actions";
  }

  return (
    <>
      <TableList
        itemList={itemList}
        tableHeaderList={["id", "name", "action", "weight", "created_at"]}
        title="Action list"
        description={description}
        messageIfItemListIsEmpty={messageIfItemListIsEmpty}
        renderFeedingFormButton={renderFeedingFormButton}
        renderHarvestFormButton={renderHarvestFormButton}
        renderTransferFormButton={renderTransferFormButton}
      />
      <DrawerForm
        methods={{ ...methods }}
        panelTitle="FeedingForm"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <LabelInputControlled label="toto" name="toto" />
      </DrawerForm>
    </>
  );
};

export default ActionInterface;
