import { useQuery } from "react-query";
import { ProductsService } from "@services";
import { QueryTypeForGetProductDataList } from "types/products";

export const useProducts = (
  queries: Partial<QueryTypeForGetProductDataList>
) => {
  return useQuery(
    ["products", queries],
    () => ProductsService.getProducts(queries),
    {
      enabled: !!queries,
      suspense: true,
      keepPreviousData: true,
    }
  ).data;
};
