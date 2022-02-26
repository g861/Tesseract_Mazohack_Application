import { View } from 'react-native'
import React , { useState  } from 'react'

import { 
  Container , 
  Header , 
  Content , 
  Text ,
  ListItem , 
  Radio , 
  Right , 
  Left , 
  Picker , 
  Icon , 
  Body , 
  Title, 
  List
} from 'native-base' ; 

const methods = [
  { name:' Cash On Delivery' , value: 1 },
  { name:'Bank Transfer' , value:2 },
  { name:'Card Payment' , value:3 } ,
  {name:'Redeem Coins' , value:4}
]

const paymentCards = [
  {name:'UPI Wallets' , value:1 },
  {name:'Visa' , value:2},
  {name:'MasterCard' , value:3},
  {name:'Rupay' , value:4}, 
  
]

const Payment = (props) => {

  const order = props.route.params ; 

  const [selected , setSelected] = useState() ; 
  const [card,setCard] = useState() ; 

  return (
    <Container>
      <Header>
        <Body>
          <Title style={{alignContent:'center'}}>Choose Your Payment Method</Title>
        </Body>
      </Header>
      <Content>
        { methods.map((item,index) => {
          return(
            <ListItem onPress={()=>getSelected(item.value)}>
                <Left>
                  <Text>{item.name} </Text>
                </Left>
                <Right>
                  <Radio selected={selected==item.value} />
                </Right>
            </ListItem>
          )
        }) }
      </Content>
    </Container>
    
  )
}

export default Payment