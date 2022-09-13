import { useMemo } from "react";
import { shallowRouting, fillInitialQuery } from "utils";
import { RouterAndQueryPropsType } from "@@types/products";
import OverPageAlert from "./OverPageAlert/OverPageAlert";
import * as S from "./Pagination.style";

const Pagination = ({ router, query }: RouterAndQueryPropsType) => {
  const page = Number(query?.page) || 1;
  const listSize = query?.listSize || 12;

  const MAXDATALENGTH = 38; // 현재는 총 data 길이를 반환해주는 api가 존재하지 않음
  const numPages = Math.ceil(MAXDATALENGTH / listSize);

  const isOverPage = useMemo(() => page > numPages, [page, numPages]);

  const changePage = (page: number) => {
    if (router.query.sorter)
      // sorter이 있다는 조건은 fillInitialQuery가 되었다는 뜻 (listSize가 있다는 조건으로 사용해도됨)
      shallowRouting(router, fillInitialQuery({ ...query, page: page }));
    else shallowRouting(router, { page: page });
    // url에 query가 존재하지 않은 경우, page만 반영된 경우 fillInitialQuery를 배제한다.
  };

  return (
    <S.PaginationContainer>
      {isOverPage ? (
        <OverPageAlert />
      ) : (
        <>
          <button
            onClick={() => console.log("10페이지 감소")}
            disabled={page < 11}
          >
            &lt;
          </button>
          {Array(numPages)
            .fill(undefined)
            .map((_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  changePage(i + 1);
                }}
                style={{
                  backgroundColor: page === i + 1 ? "#0073e9" : "white",
                }}
              >
                {i + 1}
              </button>
            ))}
          <button
            onClick={() => console.log("10페이지 증가")}
            disabled={page > Math.floor(numPages / 10) * 10}
          >
            &gt;
          </button>
        </>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
