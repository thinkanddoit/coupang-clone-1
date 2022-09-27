import { useEffect, useState } from "react";
import reactDom from "react-dom";
import * as S from "./Mordal.style";

const Mordal = ({ children }: any) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  if (!element) {
    return <></>;
  }

  const mordal = <S.Container>{children}</S.Container>;
  return reactDom.createPortal(mordal, element);
};

export default Mordal;
