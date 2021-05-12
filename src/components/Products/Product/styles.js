import { makeStyles } from '@material-ui/core/styles';
import { ScannerOutlined } from '@material-ui/icons';

export default makeStyles(() => ({
   root: {
      maxWidth: '100%',
      transition: 'all 0.2s ease',
      '&:hover': { transform: 'scale(1.02)' },
   },
   media: {
      height: 0,
      width: '100%',
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain',
      marginTop: '10px',
      marginBottom: '8px',
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
   color: {
      backgroundImage:
         'linear-gradient( 179.1deg,  rgba(247,238,238,1) -1.9%, rgba(247,202,201,1) 44.9%, rgba(145,168,208,1) 96.1% )',
   },
}));
