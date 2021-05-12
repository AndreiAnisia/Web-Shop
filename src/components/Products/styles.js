import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   toolbar: theme.mixins.toolbar,
   content: {
      [theme.breakpoints.up('sm')]: {
         paddingRight: '100px',
         paddingLeft: '100px',
      },
      [theme.breakpoints.down('sm')]: {
         paddingRight: '25px',
         paddingLeft: '25px',
      },
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
   },
   root: {
      flexGrow: 1,
      paddingRight: '50px',
      paddingLeft: '50px',
   },
}));
