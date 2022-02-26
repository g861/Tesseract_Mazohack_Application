import { View,  StyleSheet } from 'react-native' ; 
import React from 'react';
import { Badge , Text } from 'native-base' ; 
import { connect } from 'react-redux';

const CartIcon = (props) => {

  return (
    <View>
        { props.cartItems.length ? (
            <Badge style={styles.badge}>
                <Text style={styles.text}>{props.cartItems.length}</Text>
            </Badge>
        ) : null 
        }
    </View>
  )
}

const styles = StyleSheet.create({
    badge:{
        width:25,
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        top:-35,
        right:-15
    }
})

const mapStateToProps = (state) => {

    const { cartItems } = state ; 
    return{
        cartItems: cartItems
    }
}

export default connect(mapStateToProps)(CartIcon) ;