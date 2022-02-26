import { View, Text,StyleSheet } from 'react-native'
import React, {useState} from 'react'
import FormContainer from '../../partials/Form/FormContainer';
import Input from '../../partials/Form/Input';
import { Button } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import axios from 'axios';
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        if (email === "" || name === "" || phone === "" || password === "") {
          setError("Please fill in the form correctly");
        }
    
        let user = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          isAdmin: false,
        };
        axios
          .post(`https://a7a4-116-74-46-159.ngrok.io/users`, user)
          .then((res) => {
            if (res.status == 200) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Registration Succeeded",
                text2: "Please Login into your account",
              });
              setTimeout(() => {
                props.navigation.navigate("Login");
              }, 500);
            }
          })
          .catch((error) => {
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong",
              text2: "Please try again",
            });
          });
      };
  return (
    <FormContainer title={"Register"}>
    <Input
      placeholder={"Email"}
      name={"email"}
      id={"email"}
      onChangeText={(text) => setEmail(text.toLowerCase())}
    />
    <Input
      placeholder={"Name"}
      name={"name"}
      id={"name"}
      onChangeText={(text) => setName(text)}
    />
    <Input
      placeholder={"Phone Number"}
      name={"phone"}
      id={"phone"}
      keyboardType={"numeric"}
      onChangeText={(text) => setPhone(text)}
    />
    <Input
      placeholder={"Password"}
      name={"password"}
      id={"password"}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
    <View style={styles.buttonGroup}>
    </View>
    <View>
      <Button onPress={() => register()} >
        <Text style={{ color: "white" }}>Register</Text>
      </Button>
    </View>
    <View>
      <Button
        large
        color='grey'
        secondary
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{ color: "white" }}>Back to Login</Text>
      </Button>
    </View>
  </FormContainer>
  )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        margin: 10,
        alignItems: "center",
      },
})
export default Register


