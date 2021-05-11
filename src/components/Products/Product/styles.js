import { makeStyles } from '@material-ui/core/styles';
import { ScannerOutlined } from '@material-ui/icons';

export default makeStyles(() => ({
   root: {
      maxWidth: '100%',
      minHeight: '500px',
      transition: 'all 0.2s ease',
      '&:hover': { transform: 'scale(1.02)' },
   },
   media: {
      height: 0,
      width: '100%',
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain',
   },
   cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
   },
   cardContent: {
      textAlign: 'center',
      paddingBottom: '10px',
      minHeight: '110px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
   },
   description: {
      minHeight: '60px',
      maxHeight: '61px',
   },
}));
