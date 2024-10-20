import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './Dropdown.styles';
import { Filter, filterDefaultOption } from '@/types/filters';
import { ThemedView } from '../ThemedView';
import { View } from 'react-native';

interface Props {
  options: Filter[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  getMapping: (optionName: string) => string;
  style?: Record<string, unknown>;
  addDefaultOption?: boolean;
}

const Dropdown = ({
  options,
  value,
  setValue,
  style,
  getMapping,
  addDefaultOption = false,
}: Props) => {
  const [open, setOpen] = useState(false);
  const formattedOptions = options.map((option) => ({
    label: getMapping(option.name),
    value: option.name,
  }));

  if (addDefaultOption) {
    formattedOptions.unshift(filterDefaultOption);
  }

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value ? value : formattedOptions[0].value}
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
