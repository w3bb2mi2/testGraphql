import { gql } from 'apollo-boost'


export const deleteDirectorMotation = gql`
    mutation deleteDirector($id:ID){
        deleteDirector(id:$id){
            id
        }
    }
`