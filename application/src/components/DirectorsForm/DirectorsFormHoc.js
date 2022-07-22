import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';

import {graphql} from 'react-apollo'
import {addDirectorMutation} from './mutations'

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({mutate})=>({
        addDirector: director => mutate({
            variables: director
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd);
