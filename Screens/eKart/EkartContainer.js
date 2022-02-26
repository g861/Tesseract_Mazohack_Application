import { View, Text ,Dimensions , StyleSheet , Button } from 'react-native'
import React from 'react'
import ElectronicBanner from '../../partials/ElectronicBanner'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-vector-icons/FontAwesome'

var {width} = Dimensions.get('window') ; 

const EkartContainer = (props) => {
  const {item} = props

  return (
    
    <ScrollView>
          <ElectronicBanner />
      <View style={styles.quote}>
        <Text style={styles.quoteText}>There Is No Such {"\n"} Thing As Away , {"\n"}  When We Throw {"\n"} Anything Away It {"\n"} Must Go Somewhere </Text>
      
      <View style={styles.ElectronicRequest}>
        <Text style={styles.requestText}>
          Want To Avial Excessive {"\n"}Discounts On Your Products{"\n"}By Getting Rid Of Your {"\n"}E-WASTE 😍😍
        </Text>
        <Button 
          style = {{height:8 , marginTop:15 }}
          onPress={()=> props.navigation.navigate("E-kart Request" , {item : item })}
          fontSize="15"

          title="Click Here"
        />

      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  quoteText:{
    fontSize:20,
    color:'grey',
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    marginTop:15,
    fontFamily:'CedarvilleCursive-Regular',
  },
  ElectronicRequest:{
    backgroundColor:'#b0e0e6',
    flexDirection:'row',
    width:width,
    height:120,
    fontSize:25,
    justifyContent:'center',
 
  },
  requestText:{
    fontSize:15,
    justifyContent:'center',
    marginTop:18,
    color:'grey',
    fontFamily:'CedarvilleCursive-Regular',
  },
  addRequestCamera:{
    height:12,

  }
})

export default EkartContainer