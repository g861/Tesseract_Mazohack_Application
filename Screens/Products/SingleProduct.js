import { View, Text ,Image , ScrollView , StyleSheet , Button } from 'react-native'
import React , { useState , useEffect } from 'react'
import { Left ,Right , Container , H1 } from 'native-base'
import * as actions from '../../Redux/Actions/cartActions' ; 
import { connect } from 'react-redux';

const SingleProduct = (props) => {
    const [item,setItem] = useState(props.route.params.item) ; 
    const [availability , setAvailability] = useState('') ; 

    return (
        <Container style={styles.container}>
            <ScrollView>
                <View>
                    <Image 
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri :item.image ? item.image : 'https://e7.pngegg.com/pngimages/21/284/png-clipart-brown-box-illustration-cardboard-box-icon-cardboard-box-miscellaneous-angle-thumbnail.png' }}
                    />
                    <View>
                        <Text style={styles.heading}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <Button 
                            title="Add"
                            onPress={() => {
                                props.addItemToCart(item)
                            }}
                        />


     
                    </View>
                </View>
                <View></View>
            </ScrollView>
        </Container>
  )
}

const styles = StyleSheet.create({
    container:{
        position : 'relative', 
        height: '100%'
    },
    image:{
        height:250,
        width:'100%',
        margin:'auto'
    },
    heading:{
        fontWeight:'700',
        fontSize:25,
        textAlign:'center',
        marginTop:15,
        fontFamily: 'sans-serif'
    },
    description:{
        textAlign:'center',
        fontSize:15
    }
})

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart:(product) => 
            dispatch(actions.addToCart({quantity:1 , product}))
    }
}

export default connect(null,mapDispatchToProps)(SingleProduct)