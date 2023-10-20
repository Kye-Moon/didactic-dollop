import * as React from "react";
import ComboBox, { ComboBoxOption } from "src/components/ComboBox/ComboBox";

/**
 * CustomerSelect Props
 */
interface CustomerSelectProps {
  /**
   * Value of the ComboBox (the selected customer)
   */
  value: string;
  /**
   * Function to set the value of the ComboBox (the selected customer)
   * @param value
   */
  setValue: (value: string) => void;
}

/**
 * A ComboBox component that allows the user to select a customer from a list of customers in a dropdown with a search input
 * TODO: Replace with real data using a cell to fetch the data
 * @param value
 * @param setValue
 * @constructor
 */
const CustomerSelect = ({ value, setValue }: CustomerSelectProps) => {
  const frameworks: ComboBoxOption[] = [
    {
      value: "customer 1",
      label: "Customer 1",
    },
    {
      value: "customer 2",
      label: "Customer 2",
    },
    {
      value: "customer 3",
      label: "Customer 3",
    },
    {
      value: "customer 4",
      label: "Customer 4",
    },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <ComboBox
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      options={frameworks}
    />
  );
};

export default CustomerSelect;
