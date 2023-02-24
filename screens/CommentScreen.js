import React, { useLayoutEffect, useState } from 'react';
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';


const CommentScreen = () => {
    const navigation = useNavigation();
    const [comment, setComment] = useState('');

    // @NOTE hiding the header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className='flex-1 items-center justify-center'>
            <TouchableOpacity
                    className='absolute top-14 left-5 p-2 bg-gray-200 rounded-full'
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon size={20} color='#00CCBB' />
            </TouchableOpacity>
            <View className='border p-4 items-center'>
                <Text className='font-bold text-lg pb-2 text-gray-600'>Food Allergies</Text>
                <TextInput
                    keyboardType='default'
                    multiline={true}
                    placeholder='Let us know of any food allergies...'
                    className='border text-xs text-gray-400 items-center space-x-2 p-4 border-y border-gray-500'
                    maxLength={200}
                    spellCheck={true}
                />
                <Button
                    title='Submit'
                    color='gray'
                />
            </View>
        </SafeAreaView>
    )
};

export default CommentScreen;