import { View, Text,StyleSheet,Button } from 'react-native'
import React,{useState} from 'react'
import FormContainer from '../../partials/Form/FormContainer'
import Input from '../../partials/Form/Input'
const Login = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState("")
    const handleSubmit = () => {
        const user = {
            email,
            password
        }
        if(email==="" || password===""){
            setError("PLease fill in your credentials")
        }
    }   

  return (
    <FormContainer title={"Login"}>
        <Input 
            placeholder={"Enter Email"}
            name={"email"}
            id={"email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <Input 
            placeholder={"Enter Email"}
            name={"password"}
            id={"password"}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.buttonGroup}>
            <Button title="Login" />

        </View>
        <View style={[{marginTop:40} , styles.buttonGroup]}>
                <Text style={styles.middleText} >Don't Have An Account Yet</Text>
                <Button title='Register' onPress={() => props.navigation.navigate("Register")} />
        </View>
    </FormContainer>
  )
}
const styles = StyleSheet.create({
    buttonGroup:{
        width:'80%',
        alignItems:'center'
    },
    middleText:{
        marginBottom:20,
        alignSelf:'center'
    }
})
export default Login