import { View, Text , Image , ScrollView , StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper' ; 

var { width } = Dimensions.get("window") ; 

const ElectronicBanner = () => {
    const [bannerData , setBannerData] = useState([]) ; 

    useEffect(() => {
        setBannerData([
            'https://st3.depositphotos.com/17449018/35131/v/1600/depositphotos_351314566-stock-illustration-set-garbage-cans-waste-garbage.jpg',
            'https://media.istockphoto.com/vectors/ewaste-in-recycling-sign-symbol-vector-id984719158?k=20&m=984719158&s=612x612&w=0&h=PL84HFG9HQmdTmjdwMlGIIoTAKyquc259JGp2ADMBuo=',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LVkay5V05N26EKiYQaCj6BFWCMfTBqu0iQ&usqp=CAU'
        ])

        return() => {
            setBannerData([]) ; 
        }
    } , [])

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            style={{height : width/2}}
          >
              {bannerData.map((item) => {
                  return(
                      <Image 
                        key={item} 
                        resizeMode="contain"
                        source={{uri : item}}
                        style={styles.imageBanner}
                      />
                  )
              }) }
          </Swiper>
          <View style={{height:20}} ></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    swiper:{
        width:width , 
        alignItems : 'center' , 
        marginTop: 10 , 
    }, 
    imageBanner:{
        height : width/2 , 
        width : width - 40 , 
        borderRadius : 10 , 
        marginHorizontal : 20
    }
})

export default ElectronicBanner