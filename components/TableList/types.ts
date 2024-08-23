import { ReactNode } from "react";

export type TableListProps = {
  itemList?: { [key: string]: any }[] | undefined;
  tableHeaderList: string[];
  title: string;
  description: string;
  messageIfItemListIsEmpty: string;
  renderFeedingFormButton: ReactNode;
  renderHarvestFormButton: ReactNode;
  renderTransferFormButton: ReactNode;
};
