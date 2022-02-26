import { View, Text, StyleSheet , Dimensions , TextInput, Button} from 'react-native'
import React from 'react'

var {width} = Dimensions.get('window')

const AddRequest = (props) => {
  return (
    <View>
      <TextInput 
        style={styles.product_name} 
        placeholder='  Enter The Product Name' 
      />
       <TextInput 
        style={styles.product_description} 
        placeholder='  Enter The Product Description' 
      />
      <Button 
        title='Camera'
        style={styles.product_image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  product_name:{
    backgroundColor:'white',
    height:75,
    margin:20,
    borderRadius:25,
    padding:10
  },
  product_description:{
    backgroundColor:'white',
    height:155,
    margin:20,
    borderRadius:25,
    padding:10
  },
  product_image:{
    width:width -10,
  }
})


export default AddRequest