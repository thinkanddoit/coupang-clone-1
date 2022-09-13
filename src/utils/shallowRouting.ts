import { QueryTypeForGetProductDataList } from "@@types/products";
import { NextRouter } from "next/router";

export const shallowRouting = (
  router: NextRouter,
  query: Partial<QueryTypeForGetProductDataList>
) => router.push({ query: { ...query } }, undefined, { shallow: true });
