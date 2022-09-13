import React, { Suspense } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { Loading, Pagination } from "@components/Common";
import { SearchSortingBar } from "@components/Products";

import {
  QueryTypeForGetProductDataList,
  RouterAndQueryPropsType,
} from "@customTypes/products";

const ProductsList = dynamic(
  () => import("@components/Products/ProductsList/ProductsList"),
  { ssr: false }
);

export interface PreRenderingPropsType {
  query: Partial<QueryTypeForGetProductDataList>;
}
export default function ProductListPage({ query }: PreRenderingPropsType) {
  const router = useRouter();
  const props: RouterAndQueryPropsType = {
    query: { ...query, ...router.query },
    router: router,
  };

  return (
    <>
      <SearchSortingBar {...props} />
      <Suspense fallback={<Loading />}>
        <ProductsList {...props} />
      </Suspense>
      <Pagination {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { query: context.query } };
};
