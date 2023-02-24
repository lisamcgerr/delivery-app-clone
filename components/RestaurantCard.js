import { TouchableOpacity, Image, View, Text } from 'react-native';
import React from 'react';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';


const RestaurantCard = ({id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat}) => {
    const navigation = useNavigation();
    // @NOTE hiding onPress is navigating to the RestaurantScreen (see App.js)
    // also passing all the params with it
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', {id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat})
            }}
            className='bg-white mr-3 shadow'>
            {/* TODO look at urlFor Sanity */}
            {/* <Image
                source={{uri: urlFor(imgUrl).url()}}
                className='h-36 w-64 rounded-sm'
            /> */}
            <Image
                source={{uri: imgUrl}}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22} />
                    {/* @TODO look at removing - design choice */}
                    {/* <Text>{Array(Math.round(rating)).fill('⭐️').join('')}</Text> */}
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text> {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color='gray' opacity={0.4} size={22} />
                    <Text className=' text-xs text-gray-500'>Nearby {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RestaurantCard;
