import React from 'react';
import * as NativeImagePicker from 'expo-image-picker';
import Button from '../Button/Button';
import { Image } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Props {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImagePicker = ({ image, setImage }: Props) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await NativeImagePicker.launchImageLibraryAsync({
      mediaTypes: NativeImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Button
        text='Deschide galeria'
        onPress={pickImage}
        style={{ alignSelf: 'center' }}
      />
      {image && <Image source={{ uri: image }} />}
    </>
  );
};

export default ImagePicker;
