import { TableRowSkeletonProps } from "@/components/TableList/components/skeleton/types.ts";
import { useId } from "react";

const TableRowSkeleton = ({
  rowNumber,
  columnNumber,
}: TableRowSkeletonProps) => {
  const componentId = useId();
  return Array.from({ length: rowNumber }).map((_, i) => (
    <tr key={`tr-${componentId}-${i}`}>
      {Array.from({ length: columnNumber }).map((_, i) => (
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
  ));
};

export default TableRowSkeleton;
