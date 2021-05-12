import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   toolbar: theme.mixins.toolbar,
   title: {
      marginTop: '5%',
   },
   emptyButton: {
      minWidth: '150px',
      [theme.breakpoints.up('xs')]: {
         marginRight: '20px',
      },
      [theme.breakpoints.down('xs')]: {
         marginBottom: '5px',
         marginRight: '0px',
      },
   },
   checkoutButton: {
      minWidth: '150px',
      color: 'white !important',
   },
   link: {
      textDecoration: 'none',
   },
   cardDetails: {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '24px',
   },
}));
