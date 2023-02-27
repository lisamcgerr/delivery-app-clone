import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId, selectBasketItems } from '../features/basketSlice';

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const basketLength = selectBasketItems.length;

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}));
    };

    const removeItemFromBasket = () => {
        if (items.length == 0) return;
        dispatch(removeFromBasket({id}))
    };

    console.log('items: ', items); // @TODO remove

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
                            onPress={removeItemFromBasket}
                        >
                            <MinusCircleIcon
                                color={items.length > 0 ? '#00CCBB' : 'gray'}
                                size={40} />
                        </TouchableOpacity>
                        <Text className=''>{items.length}</Text>
                        <TouchableOpacity
                            className=''
                            onPress={addItemToBasket}
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