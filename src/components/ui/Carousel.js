import React, { PureComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../ui/Movie-card';

type CarouselProps = {};
type CarouselState = {};

class CarouselHelper extends PureComponent<CarouselProps, CarouselState> {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, genre, ratings } = this.props;
    return (
      <Carousel>
        <MovieCard
          image={image}
          title={title}
          genre={genre}
          ratings={ratings}
        />
        <MovieCard
          image={image}
          title={title}
          genre={genre}
          ratings={ratings}
        />
        <MovieCard
          image={image}
          title={title}
          genre={genre}
          ratings={ratings}
        />
        <MovieCard
          image={image}
          title={title}
          genre={genre}
          ratings={ratings}
        />
      </Carousel>
    );
  }
}

export default CarouselHelper;
