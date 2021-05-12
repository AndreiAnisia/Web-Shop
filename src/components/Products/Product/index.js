import React from 'react';
import {
   Card,
   CardMedia,
   CardContent,
   CardActions,
   Typography,
   IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
   const classes = useStyles();

   const maxLength = (someString) => {
      if (someString.length > 98) {
         return someString.slice(0, 98) + ' ...';
      } else {
         return someString;
      }
   };

   return (
      <Card className={classes.root}>
         <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
         />
         <div className={classes.color}>
            <CardContent>
               <div className={classes.cardContent}>
                  <Typography variant="h6" gutterBottom>
                     {product.name}
                  </Typography>
                  <Typography variant="h5">
                     {product.price.formatted_with_symbol}
                  </Typography>
               </div>
               <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.description}
               >
                  {maxLength(product.description.slice(3, -4))}
               </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
               <IconButton
                  aria-label="Add to Cart"
                  onClick={() => onAddToCart(product.id, 1)}
               >
                  <AddShoppingCart />
               </IconButton>
            </CardActions>
         </div>
      </Card>
   );
};

export default Product;
