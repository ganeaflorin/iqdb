import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './Dropdown.styles';
import { Filter } from '@/types/filters';
import { ThemedView } from '../ThemedView';
import { View } from 'react-native';

interface Props {
  options: Filter[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  getMapping: (optionName: string) => string;
  style?: Record<string, unknown>;
}

const Dropdown = ({ options, value, setValue, style, getMapping }: Props) => {
  const formattedOptions = options.map((option) => ({
    label: getMapping(option.name),
    value: option.name,
  }));
  const [open, setOpen] = useState(false);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={formattedOptions}
        setOpen={setOpen}
        setValue={setValue}
        style={[styles.dropdown, style]}
        textStyle={styles.text}
        dropDownContainerStyle={styles.container}
        listMode='SCROLLVIEW'
      />
    </View>
  );
};

export default Dropdown;
