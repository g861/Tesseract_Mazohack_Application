import { Platform } from 'react-native' ; 

let baseUrl = '' ; 


{Platform.OS=='android'
? baseUrl=  'http://10.0.2.2:3000/' : baseUrl = 'http://localhost:3000'
}

export default baseUrl ; 