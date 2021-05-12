import React from 'react';
import { Carousel } from 'react-bootstrap';
import useStyles from './styles';
import './Carousel.css';

const CarouselContainer = ({ products }) => {
   const classes = useStyles();

   console.log(products);
   return (
      <div>
         <div className={classes.toolbar} />
         <Carousel>
            {products?.map((product) => (
               <Carousel.Item interval={5000}>
                  <img
                     className="d-block w-80 carousel-img"
                     src={product.media.source}
                     alt={product.name}
                  />
                  <Carousel.Caption>
                     <h3>{product.name}</h3>
                  </Carousel.Caption>
               </Carousel.Item>
            ))}
         </Carousel>
      </div>
   );
};

export default CarouselContainer;
