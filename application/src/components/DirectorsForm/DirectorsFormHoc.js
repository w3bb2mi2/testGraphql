import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';

import { graphql } from 'react-apollo'
import { addDirectorMutation, updatedDirectorMutation } from './mutations'
import { directorQuery } from '../DirectorsTable/queries'



const withGraphQL = compose(
    graphql(addDirectorMutation, {
        props: ({ mutate }) => ({
            addDirector: director => mutate({
                variables: director,
                refetchQueries: [{ query: directorQuery }]
            })
        })
    }),
    graphql(updatedDirectorMutation, {
        props: ({ mutate }) => ({
            updateDirector: director => mutate({
                variables: director,
                refetchQueries: [{ query: directorQuery }]
            })
        })
    })
)

export default compose(withStyles(styles), withGraphQL);
