export const getDataFromGraphql = `
query MyQuery {
  dev_Registration {
    Email
    Name
    Password
    id
  }
}
`;
export const getdataitem = async ( client ) =>
{
   try {
        const { data } = await client.request( {
        query:getDataFromGraphql
        } )
       return data
   } catch (error) {
       console.log("Error",error);
       
   }
}