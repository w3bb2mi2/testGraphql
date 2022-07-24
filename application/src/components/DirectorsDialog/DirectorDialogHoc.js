import {compose} from "recompose"
import {graphql} from 'react-apollo'

import {deleteDirectorMotation} from './mutation'
import {directorQuery} from '../DirectorsTable/queries'


const withGraphqlDelete = graphql(deleteDirectorMotation, {
    props:({mutate}) =>({
       deleteDirector: id => mutate({
        variables: id, 
        refetchQueries: [{query: directorQuery}]
       })
    })
})

export default compose(withGraphqlDelete)