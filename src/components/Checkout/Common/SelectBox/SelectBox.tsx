import * as S from "./SelectBox.style";

export type OptionType = { value: string; name: string };

interface PropsType {
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
}

const SelectBox = ({ options, onChange, defaultValue }: PropsType) => {
  return (
    <S.Select onChange={onChange} defaultValue={defaultValue}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </S.Select>
  );
};
export default SelectBox;
