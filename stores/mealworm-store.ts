import { createStore } from "zustand/vanilla";

export const initMealwormStore = () => {
  return [];
};

export const defaultInitState = {
  count: 0,
};

export const createMealwormStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    rackList: null,
    selectedItem: null,
    fillMealwormStore: (state) => set({ rackList: state }),
    setSelectedItem: (state) => set({ selectedItem: state }),
    addCrate: (createdCrate) =>
      set(({ rackList }) => {
        const indexOfTheCrateOwnerRack = rackList.findIndex(
          (item) => item.id === createdCrate[0].rack_id,
        );
        const newCrateList =
          rackList[indexOfTheCrateOwnerRack].crate === undefined
            ? [...createdCrate]
            : [...rackList[indexOfTheCrateOwnerRack].crate, ...createdCrate];

        // Create a deep copy of rackList, I could use structuredClone global function,
        // but this solution is not compatible with old browser
        const newRackList = JSON.parse(JSON.stringify(rackList));
        newRackList[indexOfTheCrateOwnerRack].crate = newCrateList;
        return {
          rackList: newRackList,
        };
      }),
    addRack: (createdRack) =>
      set(({ rackList }) => ({ rackList: [...rackList, createdRack] })),
  }));
};
