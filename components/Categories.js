import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10}}
    >
        {/* Category Card @TODO replace with dynamic props */}
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 4' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 5' />
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 6' />
        <Text>Categories</Text>
    </ScrollView>
  )
};

export default Categories;