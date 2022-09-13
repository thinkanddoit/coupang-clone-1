import axios from "axios";
import { QueryTypeForGetProductDataList } from "types/products";

class ProductsService {
  async getProducts({
    page = 1,
    listSize = 12,
    sorter = "bestAsc",
  }: Partial<QueryTypeForGetProductDataList>) {
    const offset = (page - 1) * listSize;
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST +
        `/products?offset=${offset}&limit=${listSize}&sorter=${sorter}`
    );
    return data;
  }
}

export default new ProductsService();
