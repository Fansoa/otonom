import { ReactNode } from "react";

export type TableLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  renderFeedingFormButton: ReactNode;
  renderHarvestFormButton: ReactNode;
  renderTransferFormButton: ReactNode;
};
