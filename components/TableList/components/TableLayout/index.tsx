import { TableLayoutProps } from "@/components/TableList/components/TableLayout/types.ts";

const TableLayout = ({
  title,
  description,
  renderFeedingFormButton,
  renderHarvestFormButton,
  renderTransferFormButton,
  children,
}: TableLayoutProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        <div className="flex gap-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {renderFeedingFormButton && renderFeedingFormButton}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
