import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // @TODO finish FETCH Sanity command 1.38
    useEffect(() => {
        sanityClient.fetch(`
        `).then(data => {
            setFeaturedCategories(data)
        })
    }, []);
    // @TODO delete console log
    console.log('featuredCategories', featuredCategories);

  return (
    <SafeAreaView className='bg-white pt-5'>
        {/* Header @TODO delete */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
            <Image
                source={{uri: 'https://links.papareact.com/wru'}}
                className='h-7 w-7 bg-gray-300 rounded-full'
            />
            {/* Image @TODO delete */}
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>
                    Deliver Now!
                </Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                </Text>
            </View>
            <UserIcon size={35} color='#00CCBB'/>
        </View>
        {/* Search @TODO delete */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                <MagnifyingGlassIcon color='gray' size={20}/>
                <TextInput placeholder='Restaurants & Cuisines' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon color='#00CCBB' />
        </View>
        {/* Body @TODO delete */}
        <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom: 100}}>
            {/* Categories @TODO delete */}
            <Categories />

            {/* Featured Categories @TODO delete  */}

            {/* {featuredCategories?.map(category => (
                <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.shortDescription}
                />
            ))} */}

            {/* Featured Rows @TODO replace with dynamic props */}
            <FeaturedRow
                id={1}
                title='Featured'
                description='Paid placement from our partners'
            />
            <FeaturedRow
                id={2}
                title='Tasty Discounts'
                description="Everyone's been enjoying these juicy discounts"
            />
            <FeaturedRow
                id={3}
                title='Featured'
                description='Paid placement from our partners'
            />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;