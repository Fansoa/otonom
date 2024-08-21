const TableDataCellElement = ({ label }: { label: string }) => {
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
      {label}
    </td>
  );
};

export default TableDataCellElement;
