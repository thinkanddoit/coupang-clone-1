import { QueryTypeForGetProductDataList } from "@customTypes/products";
import { NextRouter } from "next/router";

const shallowRouting = (
  router: NextRouter,
  query: Partial<QueryTypeForGetProductDataList>
) => router.push({ query: { ...query } }, undefined, { shallow: true });

export default shallowRouting;
