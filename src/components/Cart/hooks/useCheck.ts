import { CartDataType } from "@customTypes/cart";
import { useState } from "react";

const useCheck = (cartData: CartDataType[]) => {
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const onChangeEach = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.checked) {
      setCheckedList([...checkedList, id]);
    } else {
      setCheckedList(checkedList.filter((checkedId) => checkedId !== id));
    }
  };

  const onChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedList(e.target.checked ? cartData.map((data) => data.id) : []);
  };

  const allChecked = checkedList.length === cartData?.length;

  return { checkedList, setCheckedList, onChangeEach, onChangeAll, allChecked };
};

export default useCheck;
