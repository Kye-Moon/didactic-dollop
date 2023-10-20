import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/primatives/Select";

/**
 * The option type for the DropSelect component
 */
export interface DropSelectOption {
  value: string;
  label: string;
}

/**
 * DropSelect Props for the DropSelect component
 */
interface DropSelectProps {
  placeholder: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  options?: DropSelectOption[];
}

/**
 * A Select component that allows the user to select an option from a list of options in a dropdown
 * @param placeholder the placeholder text of the Select
 * @param defaultValue the default value of the Select
 * @param onChange function to set the value of the Select
 * @param options the options of the Select
 * @constructor
 */
const DropSelect = ({
  placeholder,
  defaultValue,
  onChange,
  options,
}: DropSelectProps) => {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropSelect;
