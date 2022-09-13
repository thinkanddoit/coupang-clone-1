import * as S from "./ListSizeOptionItem.style";

interface ListSizeOptionItemProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

const ListSizeOptionItem = ({
  name,
  selected,
  onClick,
}: ListSizeOptionItemProps) => {
  return (
    <S.ListSizeOption selected={selected} onClick={onClick}>
      {name}
    </S.ListSizeOption>
  );
};

export default ListSizeOptionItem;
