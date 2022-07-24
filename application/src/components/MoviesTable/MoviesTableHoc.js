import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';
import {graphql} from 'react-apollo'
import {moviesQuery} from './queries'

const withGraphQL = graphql(moviesQuery, {
    options: ({name = ''}) => ({
        variables: {name}
    })
})


export default compose(withStyles(styles), withGraphQL);
