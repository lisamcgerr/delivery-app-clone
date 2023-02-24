import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const [dishQuantity, setDishQuantity] = useState(0);
    return (
        <>
            <TouchableOpacity
                className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
                onPress={() => setIsPressed(!isPressed)}
            >
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>
                            <Currency quantity={price} currency='USD' />
                        </Text>
                    </View>
                    <View>
                        {/* @TODO image */}
                        {/* <Image
                            style-={{borderWidth: 1, borderColor: '#F3F3F4'}}
                            source={{uri: urlFor(image).url()}}
                            className='h-20 w-20 bg-gray-300 p-4'
                        /> */}
                        <Image
                            source={{uri: image}}
                            style-={{borderWidth: 1, borderColor: '#F3F3F4'}}
                            className='h-20 w-20 bg-gray-300 p-4'
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className='bg-white px-4'>
                    <View  className='flex-row items-center space-x-2 pb-3'>
                        {/* @TODO handle negative quantity */}
                        <TouchableOpacity
                            className=''
                            onPress={() => setDishQuantity(dishQuantity - 1)}
                        >
                            <MinusCircleIcon color='#00CCBB' size={40} />
                        </TouchableOpacity>
                        <Text className=''>{dishQuantity}</Text>
                        <TouchableOpacity
                            className=''
                            onPress={() => setDishQuantity(dishQuantity + 1)}
                        >
                            <PlusCircleIcon color='#00CCBB' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
};

export default DishRow;