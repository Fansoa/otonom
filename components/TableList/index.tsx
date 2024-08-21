import { useId } from "react";
import { TableListProps } from "@/components/TableList/types.ts";

import TableHeaderElement from "@/components/TableList/components/TableHeaderElement/index.tsx";
import TableDataCellElement from "@/components/TableList/components/TableDataCellElement/index.tsx";
import TableLayout from "@/components/TableList/components/TableLayout/index.tsx";

export default function TableList({
  itemList,
  title,
  description,
  messageIfItemListIsEmpty,
}: TableListProps) {
  const componentId = useId();

  if (!itemList) {
    return (
      <TableLayout title={title} description={description}>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              {["id", "name", "action", "weight", "created_at"].map(
                (tableHeaderElement, i) => (
                  <TableHeaderElement
                    key={`th-${componentId}-${i}`}
                    label={tableHeaderElement}
                  />
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map((_, i) => (
              <tr key={`tr-${componentId}-${i}`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <td
                    key={`td-${componentId}-${i}`}
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                  >
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-300 animate-pulse">
                      {" "}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableLayout>
    );
  }

  if (Array.isArray(itemList) && itemList.length === 0) {
    return (
      <TableLayout title={title} description={description}>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              {["id", "name", "action", "weight", "created_at"].map(
                (tableHeaderElement, i) => (
                  <TableHeaderElement
                    key={`th-${componentId}-${i}`}
                    label={tableHeaderElement}
                  />
                ),
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {messageIfItemListIsEmpty}
              </td>
            </tr>
          </tbody>
        </table>
      </TableLayout>
    );
  }

  return (
    <TableLayout title={title} description={description}>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            {Object.keys(itemList[0]).map((tableHeaderElement, i) => (
              <TableHeaderElement
                key={`th-${componentId}-${i}`}
                label={tableHeaderElement}
              />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {itemList.map((item, i) => (
            <tr key={`tr-${componentId}-${i}`}>
              {Object.values(item).map((attribute, i) => (
                <TableDataCellElement
                  key={`td-${componentId}-${i}`}
                  label={attribute}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableLayout>
  );
}
