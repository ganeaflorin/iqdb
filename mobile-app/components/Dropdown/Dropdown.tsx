import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './Dropdown.styles';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({ value, setValue }: Props) => {
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.dropdown}
      textStyle={styles.text}
      dropDownContainerStyle={styles.container}
      listMode='SCROLLVIEW'
    />
  );
};

export default Dropdown;
