import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   media: {
      height: 0,
      width: '100%',
      paddingTop: '56.25%',
      backgroundSize: 'contain',
   },
   cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      minHeight: '160px',
      [theme.breakpoints.down('xs')]: {
         minHeight: '60px',
      },
      [theme.breakpoints.up('lg')]: {
         minHeight: '95px',
      },
   },
   cartActions: {
      justifyContent: 'space-between',
   },
   buttons: {
      display: 'flex',
      alignItems: 'center',
   },
}));
