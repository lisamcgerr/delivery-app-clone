import { SafeAreaView, View, Text } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useRoute } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const { params: { restaurant }} = useRoute();
    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require('../assets/deliveryman.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-96 w-96'
            />
            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className='text-lg my-10 text-white font-bold text-center'
            >
                Waiting for {restaurant.title} to accept your order
            </Animatable.Text>
        </SafeAreaView>
    )
};

export default PreparingOrderScreen;