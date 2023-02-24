import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import CategoryCard from './CategoryCard';
import client from '../sanity';
import { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // @TODO finish FETCH Sanity command 1.49
  useEffect(() => {
    client.fetch(`
      *[_type == 'category]
    `).then(data => {
      setCategories(data?.categories)
    })
  }, []);
  // @TODO delete console log
  console.log('categories', categories);

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10}}
    >
      {/* Category Card @TODO replace with dynamic props */}
      {/* {categories?.map(category => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}; */}
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 4' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 5' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 6' />
    </ScrollView>
  )
};

export default Categories;