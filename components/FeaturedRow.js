import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({id, title, description}) => {
    const [restaurants, setRestaurants] = useState([]);

    // @TODO finish FETCH Sanity command 1.44
    useEffect(() => {
        sanityClient.fetch(`
        `).then(data => {
            setRestaurants(data?.restaurants)
        })
    }, []);
    // @TODO delete console log
    console.log('restaurants', restaurants);

  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* @TODO @TODO replace with dynamic props */}
            {/* {restaurants?.map(restaurant => (
                <RestaurantCard
                    key={restaurant._id}
                    id={restaurant._id}
                    title={restaurant.name}
                    imgUrl={restaurant.image}
                    rating={restaurant.rating}
                    genre={restaurant.genre}
                    address={restaurant.address}
                    shortDescription={restaurant.shortDescription}
                    dishes={restaurant.dishes}
                    long={restaurant.long}
                    lat={restaurant.lat}
                />
            ))}; */}
            {/* Restaurant Cards @TODO delete hardcoded card below */}
            <RestaurantCard
                id={1}
                imgUrl='https://links.papareact.com/gn7'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='123 Main Street'
                shortDescription='This is a test description'
                dishes={[]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  )
};

export default FeaturedRow;