import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
query films($titre: String!){
  films(titre: $titre){

    
      titre
    
  }
}
`;


/* query films($titre: String!) {
     
  titre


} */