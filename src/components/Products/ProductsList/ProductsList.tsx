import ProductDetail from "@components/ProductDetail";
import { useProducts } from "@hooks";
import {
  ProductDataListType,
  ProductDataType,
  RouterAndQueryPropsType,
} from "@@types/products";
import * as S from "./ProductsList.style";

const ProductsList = ({ query }: RouterAndQueryPropsType) => {
  const data: ProductDataListType = useProducts(query);

  return (
    <S.ProductsListContainer>
      {data?.map((productData: ProductDataType, idx: number) => (
        <ProductDetail key={idx} data={productData} />
      ))}
    </S.ProductsListContainer>
  );
};

export default ProductsList;
