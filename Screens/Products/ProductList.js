import { View, Text , TouchableOpacity ,Dimensions } from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
// To set the width and height 

var { width } = Dimensions.get('window') ; 

const ProductList = (props) => {
  
    const { item } = props ;
        
    return (

    <TouchableOpacity 
        onPress={() => {
            props.navigation.navigate("Product Details" , {item : item })
        }}
        style={{width:width/2 , alignItems: 'space-between' }}>
        <View style={{padding : 4}}>
            <ProductCard {...item } />
        </View>
    </TouchableOpacity>
  );
};

export default ProductList;
