import React, { useState, useMemo } from 'react';
import { SafeAreaView, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    // @NOTE group logic for multiple items of same kind aka dish
    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    // @TODO delete
    console.log('groupedItemsInBasket', groupedItemsInBasket);
    console.log('restaurant', restaurant)

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant?.title}</Text>
                    </View>
                    <TouchableOpacity
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                        onPress={navigation.goBack}
                    >
                        <XCircleIcon color='#00CCBB' height={50} width={50} />

                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                    <Image
                        source={{uri: restaurant?.imgUrl}}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <Text className='flex-1'>Deliver in 1 hour or less</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className='divide-y divide-gray-200'>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className='flex-row items-center space-x-3 bg-white py-2 px-5'
                        >
                            <Text className=' text-[#00CCBB]'>{items.length} x</Text>
                            {/* @TODO possible urlFor */}
                            <Image
                                source={{uri: items[0]?.image}}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.name}</Text>
                            <Text className='text-gray-600'>
                                <Currency quantity={items[0]?.price} currency='USD' />
                            </Text>
                            <TouchableOpacity>
                                {/* @TODO look at key not working from Object.entries */}
                                <Text
                                    className='text-[#00CCBB] text-xs'
                                    onPress={() => dispatch(removeFromBasket({id: items[0].id}))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export default BasketScreen;