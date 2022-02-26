import { View, Dimensions,TouchableOpacity,Button, StyleSheet } from 'react-native'
import React from 'react' ; 
import {Content , Left , Body ,ListItem ,  H1 , Thumbnail ,Text, Container, Right, CardItem} from 'native-base'

import { connect } from 'react-redux' ; 
var {width} = Dimensions.get("window")
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as actions from '../../Redux/Actions/cartActions'
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from './CartItem';
const Cart = (props) => {
    var total = 0 ;

    props.cartItems.forEach(cart => {
        return(
            total += cart.product.price 
        )
    })

  return (
    <>
        {props.cartItems.length ? (
            <Container>
                <H1 style={{alignSelf:'center'}}>Cart</H1>
                <SwipeListView
               data={props.cartItems}
               renderItem={(data) => (
                <CartItem item={data} />
               )}
               renderHiddenItem={(data) => (
                 <View style={styles.hiddenContainer}>
                   <TouchableOpacity 
                   style={styles.hiddenButton}
                    onPress={() => props.removeFromCart(data.item)}
                   >
                     <Icon name="trash" color={"white"} size={30} />
                   </TouchableOpacity>
                 </View>
               )}
               disableRightSwipe={true}
               previewOpenDelay={3000}
               friction={1000}
               tension={40}
               leftOpenValue={75}
               stopLeftSwipe={75}
               rightOpenValue={-75}
             /> 

                <View style={styles.bottomContainer}>
                    <Left>
                        <Text style={styles.totalPrice}> Rs {total}</Text>
                    </Left>
                    <Right>
                        <Button title="Clear" onPress={() => {
                            props.clearCart()
                        }} 
                        color="grey" />
                    </Right>
                    <Right>
                        <Button title="Checkout" onPress={()=> { props.navigation.navigate("Checkout", {item : props} ) } } />
                    </Right>
                </View>
            </Container>
        ): (
            <Container style={styles.empty_cart}>
                <Text>Looks Like Your Cart Is Empty</Text>
                <Text>Add Products To Your Cart To Get Started</Text>
            </Container>
        ) 
        }
    </>
  )
}

const styles = StyleSheet.create({
    listItem:{
        alignContent:'center',
        justifyContent:'center'
    },
    body:{
        alignContent:'center',
        justifyContent:'center',    
        flexDirection:'row'
    },
    empty_cart:{
        justifyContent:'center',
        alignItems:'center',
    },
    productPrice:{
        marginRight:10
    },
    bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        elevation:20,
        left: 0 , 
        padding:12,
        backgroundColor:'white',
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      hiddenButton: {
        backgroundColor: '#960018',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
      }
})

const mapDispatchToProps = (dispatch) => {
    return { 
        clearCart : () => dispatch(actions.clearCart()),
        removeFromCart : (item) => dispatch(actions.removeFromCart(item))
    }
}

const mapStateToProps = (state) => {
    const { cartItems } = state ; 
    console.log(state) ;
    return {
        cartItems : cartItems 
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart) ; 
