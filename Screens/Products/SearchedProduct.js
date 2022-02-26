import { View , TouchableOpacity ,Dimensions } from 'react-native'
import {Content , Left , Body ,ListItem , Thumbnail ,Text} from 'native-base'
import React from 'react'

var {width} = Dimensions.get("window")

const SearchedProduct = (props) => {

    const { productsFiltered } = props ;

  return (
    <Content style={{width:width}}>
        {productsFiltered.length > 0 ?(
            productsFiltered.map((item) => (
                <ListItem
                    onPress={()=> 
                        props.navigation.navigate("Product Details",{item:item})
                    }
                    key={item._id}
                    avatar
                >
                    <Left>
                        <Thumbnail 
                            source={{uri: item.image ? item.image : 'https://e7.pngegg.com/pngimages/21/284/png-clipart-brown-box-illustration-cardboard-box-icon-cardboard-box-miscellaneous-angle-thumbnail.png' }}
                        />
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                </ListItem>
            ))
        ):(
            <View>
                <Text style={{alignSelf:'center'}}>
                    No Products Match The Selected criteria
                </Text>
            </View>
        )
    }
    </Content>
  )
}

export default SearchedProduct