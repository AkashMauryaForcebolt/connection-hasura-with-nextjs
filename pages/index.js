import React,{useEffect} from 'react';
import View from './campaign-members/index';
import serverApolloClient from '../graphql/clients'
import {getdataitem} from '../graphql/query'
const Home = () =>
{
  useEffect(() => {
  try {
    getData();
    } catch ( error ){
    console.log("Error in index",error)
  }
  })
  
  const getData = async () =>
  {   
    try {
      const data = await getdataitem( serverApolloClient );
      console.log( "DATA", data );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View />
  )
}

export default  Home;

