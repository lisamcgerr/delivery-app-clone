import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
        <Image className='h-20 w-20 rounded' source={{uri: imgUrl}} />
        <Text className='absolute bottom-1 text-white font-bold left-1'>{title}</Text>
    </TouchableOpacity>
  )
};

export default CategoryCard;