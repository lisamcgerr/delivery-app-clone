import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
    const navigation = useNavigation();

    // @NOTE grabbing the params that were passed from RestaurantCard onPress
    const {
        params: {
            id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat
        }
    } = useRoute();

    // @NOTE hiding the header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className='relative'>
                {/* @TODO image */}
                {/* <Image
                    source={{uri: urlFor(imgUrl).url()}}
                    className='w-full h-56 bg-gray-300 p-4'
                /> */}
                <Image
                    source={{uri: imgUrl}}
                    className='w-full h-56 bg-gray-300 p-4'
                />
                <TouchableOpacity
                    className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon size={20} color='#00CCBB' />
                </TouchableOpacity>
            </View>
            <View className='bg-white' >
                <View className='px-4 pt-4' >
                    <Text className='text-3xl font-bold' >{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-500'>{rating}</Text> | {genre}
                            </Text>
                        </View>
                        <View className='flex-row items-center space-x-1'>
                            <MapPinIcon color='gray' opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'>Nearby | {address}</Text>
                        </View>
                    </View>
                    <Text className='text-gray-500 mt-2 pb-4'>{shortDescription}</Text>
                </View>
                <TouchableOpacity
                    className='flex-row items-center space-x-2 p-4 border-y border-gray-300'
                    onPress={() => {
                        navigation.navigate('Comment')
                    }}
                >
                    <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                    <Text className='pl-2 flex-1 text-md font-bold'>
                        Have a food allergy?
                    </Text>
                    {/* @TODO onPress add screen for input */}
                    <ChevronRightIcon color='#00CCBB' />
                </TouchableOpacity>
            </View>
            <View>
                <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
                {/* Dish Rows @TODO delete */}
                {/* {dishes?.map(dish => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.shortDescription}
                        price={dish.price}
                        image={dish.image}
                    />
                ))} */}
                <DishRow
                    key={1}
                    id={1}
                    name='Dish Name'
                    description='short description here'
                    price={11.27}
                    image='https://links.papareact.com/gn7'
                />
                <DishRow
                    key={2}
                    id={2}
                    name='Dish Name 2'
                    description='short description here'
                    price={21}
                    image='https://links.papareact.com/gn7'
                />
                <DishRow
                    key={3}
                    id={3}
                    name='Dish Name 3'
                    description='short description here'
                    price={15.27}
                    image='https://links.papareact.com/gn7'
                />
            </View>
        </ScrollView>
    )
};

export default RestaurantScreen;