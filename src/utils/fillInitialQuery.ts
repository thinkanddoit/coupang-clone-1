import { QueryTypeForGetProductDataList } from "@customTypes/products";

export const fillInitialQuery = (
  query: Partial<QueryTypeForGetProductDataList>
): QueryTypeForGetProductDataList => {
  const result = {
    page: query.page || 1,
    listSize: query.listSize || 12,
    sorter: query.sorter || "bestAsc",
  };
  return result;
};
