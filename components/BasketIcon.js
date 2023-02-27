import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity
                onPress={() => navigation.navigate('Basket')}
                className='bg-[#00CCBB] p-4 flex-row rounded-lg mx-5 items-center space-x-1'
            >
                <Text
                    className='text-white font-extrabold text-lg py-1 px-2 bg-[#01A296]'
                >{items.length}</Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={basketTotal} currency='USD'/>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default BasketIcon;