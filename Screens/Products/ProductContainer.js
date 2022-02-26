import React , {useState , useEffect} from 'react';
import { View, FlatList ,ScrollView ,Dimensions, StyleSheet, ActivityIndicator , Text } from 'react-native';
import ProductList from './ProductList';
import {Container ,Item , Icon ,Input ,Header}from 'native-base';
import SearchedProduct from './SearchedProduct';
import Banner from '../../partials/Banner';
import PullToRefreshViewNativeComponent from 'react-native/Libraries/Components/RefreshControl/PullToRefreshViewNativeComponent';
import CategoryFilter from './CategoryFilter';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import axios from 'axios' ; 
import baseUrl from '../../assets/common/baseUrl';

const data = require('../../assets/products.json')
const CategoryData = require('../../assets/categories.json')

const axiosData = axios.get(`${baseUrl}products`)
                       .then((res) => {
                         console.log(res)
                       })
                       .catch((err)=>{
                         console.lof(err)
                       })

var { width } = Dimensions.get('window') ; 
var { height } = Dimensions.get('window')
const ProductContainer = (props) => {

    const [products , setProducts] = useState([]) ; 
    const [productsFiltered , setProductsFiltered] = useState([]) ; 
    const [focus,setFocus] = useState() ;
    const [categories , setCategories] =  useState([]) ;
    const [productsCtg , setProductsCtg] = useState([])
    const [active , setActive] = useState()
    const [initialState , setInitialState] = useState([]) 

    useEffect(() => {
       
        setFocus(false) ; 
 
        setActive(-1) ; 
      
        // To return a function again 
        axios.get(`https://a7a4-116-74-46-159.ngrok.io/products`)
              .then((res)=>{
                setProducts(res.data) ;
                setProductsFiltered(res.data) ; 
                setProductsCtg(res.data)
                setInitialState(res.data) ; 
              })

        axios.get('https://a7a4-116-74-46-159.ngrok.io/categories')
              .then((res)=>{
                setCategories(res.data) ; 
              }).catch((err)=>{
                console.log('Api call error')
              })
        console.log(axiosData) 
      

        return() => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
            console.log(axiosData);
        }
    }, [])
    const searchProduct = (text) => {
      console.log(text)
      setProductsFiltered(
        products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
      )
    }

    const openList = () => {
      setFocus(true) ; 
    }

    const onBlur = () => {
      setFocus(false) ;
    }

    const changeCtg = (ctg) => {
      {
        ctg === "all" ? 
        [setProductsCtg(initialState) , setActive(true)] : 
        [ setProductsCtg(products.filter((i) =>  i.category._id === ctg),
          setActive(true)
        ), ];
      };
    };

  return (

    <Container style={styles.container}>
      <ScrollView>
      <Header searchBar rounded style={{backgroundColor:'#f5f5f5'}}>
        <Item>
          <Input 
            variant="filled" 
            size="xs" 
            style={{backgroundColor:'Eaf4fc'}} 
            placeholder='Search' 
            onFocus={openList}
            onChangeText = {(text) => searchProduct(text)} 
            />
          
          {focus == true ? (
            <Icon onPress={onBlur} name="ios-close" />
          ): <Icon name='ios-search' />}
        </Item>
      </Header>
      {focus == true ?(
        <SearchedProduct 
          navigation = {props.navigation}
          productsFiltered = {productsFiltered}
        />
      ) : 
      <ScrollView 
        style={styles.containerMain}
      >
       
      <View>
      <Banner />
      <CategoryFilter 
        categories={CategoryData}
        categoryFilter = {changeCtg}
        productsCtg = {productsCtg}
        active={active}
        setActive={setActive}
      />
      <View>
        {productsCtg.length>0 ? (
          <View style={styles.listContainer}>
            {productsCtg.map((item) =>{
              return(
                <ProductList 
                  navigation = {props.navigation}
                  key={item._id.$oid} 
                  item={item}
                />
              )
            })}
          </View>
        ) : (
          <Text>Not Found</Text>
        ) }
    </View>
    </View>
    </ScrollView>
      }
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer:{
    height:height,
    flex:1,
    backgroundColor:'gainsboro',
    flexDirection:'row',
    flexWrap:'wrap'
  }
})

export default ProductContainer;