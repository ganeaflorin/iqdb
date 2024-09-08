import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './Dropdown.styles';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: Record<string, unknown>;
}

const Dropdown = ({ value, setValue, style }: Props) => {
  const [items, setItems] = useState([
    { label: 'Flo', value: 'FLO' },
    { label: 'Pub Quiz Iasi', value: 'PUB_QUIZ_IASI' },
    { label: 'Planet Quiz', value: 'PLANET_QUIZ' },
    { label: 'CMJI', value: 'CMJI' },
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
      style={[styles.dropdown, style]}
      textStyle={styles.text}
      dropDownContainerStyle={styles.container}
      listMode='SCROLLVIEW'
    />
  );
};

export default Dropdown;
