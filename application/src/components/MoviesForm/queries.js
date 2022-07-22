import {gql} from 'apollo-boost'

export const directorQuery = gql`
    query directorsQuery{
        directors{
            id
            name
        }
    }
`

