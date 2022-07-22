import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';

import { addMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries'
import { graphql } from 'react-apollo';
import {directorQuery} from './queries'

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addDirector: movie => mutate({
            variables: movie,
            refetchQueries:[{query: moviesQuery}]
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorQuery));
