import { useId } from "react";
import { TableListProps } from "@/components/TableList/types.ts";

import TableHeaderElement from "@/components/TableList/components/TableHeaderElement/index.tsx";
import TableDataCellElement from "@/components/TableList/components/TableDataCellElement/index.tsx";
import TableLayout from "@/components/TableList/components/TableLayout/index.tsx";
import TableRowSkeleton from "@/components/TableList/components/skeleton/TableRowSkeleton.tsx";

export default function TableList({
  itemList,
  tableHeaderList,
  title,
  description,
  messageIfItemListIsEmpty,
  renderFeedingFormButton,
  renderHarvestFormButton,
  renderTransferFormButton,
}: TableListProps) {
  const componentId = useId();

  return (
    <TableLayout
      title={title}
      description={description}
      renderFeedingFormButton={renderFeedingFormButton}
      renderHarvestFormButton={renderHarvestFormButton}
      renderTransferFormButton={renderTransferFormButton}
    >
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            {tableHeaderList.map((tableHeaderElement, i) => (
              <TableHeaderElement
                key={`th-${componentId}-${i}`}
                label={tableHeaderElement}
              />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {itemList ? (
            itemList.map((item, i) => (
              <tr key={`tr-${componentId}-${i}`}>
                {Object.values(item).map((attribute, i) => (
                  <TableDataCellElement
                    key={`td-${componentId}-${i}`}
                    label={attribute}
                  />
                ))}
              </tr>
            ))
          ) : (
            <TableRowSkeleton rowNumber={3} columnNumber={5} />
          )}
        </tbody>
      </table>
      {Array.isArray(itemList) && itemList.length === 0 && (
        <p className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {messageIfItemListIsEmpty}
        </p>
      )}
    </TableLayout>
  );
}
