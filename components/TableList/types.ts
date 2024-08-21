export type TableListProps = {
  itemList?: { [key: string]: any }[] | undefined;
  title: string;
  description: string;
  messageIfItemListIsEmpty: string;
};
