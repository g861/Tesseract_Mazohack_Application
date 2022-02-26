import { View, StyleSheet , Dimensions,Alert, Button ,Image , Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
var {width} = Dimensions.get("window")
import * as actions from '../../Redux/Actions/cartActions';

const ProductCard = (props) => {

  const { name , price , image , countInStock } = props ; 
  
  return (    
    <View style={styles.container}>

      <View  style={styles.card}>
      <Image 
            style={styles.image} 
            resizeMode="contain"
            source={{uri : image ? image : 'https://e7.pngegg.com/pngimages/21/284/png-clipart-brown-box-illustration-cardboard-box-icon-cardboard-box-miscellaneous-angle-thumbnail.png'}}
      />
      <Text  style={styles.title}>
        {
          name.length>15 ? name.substring(0,15 - 3) + '...' : name
        }
      </Text>
      <Text style={styles.price}>{price}</Text>
        {countInStock > 0 ? 
          <Button 
          title='Add To Cart' 
          onPress={() => {
            props.addItemToCart(props)
          }} 
          color={"#e1ad01"} 
          /> :
          <Button title='Not Available' color={'#b38b6d'} />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: width/2 -20 , 
    borderRadius:10,
    height:width/1.7,
    alignItems:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor : 'white',
    
  },
  image:{
    height:75,
    width : width/2-35,
    backgroundColor:'transparent',

  },
  card:{
    alignContent:'flex-start', 
    margin:2
  },
  title:{
    fontSize : 15,
    margin:'auto',
    textAlign:'center',
    color:'#696969',
    marginTop:25,

  },
  price:{
    textAlign:'center',
  }
})


const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart: (product) => 
      dispatch(actions.addToCart({quantity:1,product})) 
    
  }
}
  

export default connect(null, mapDispatchToProps)(ProductCard);