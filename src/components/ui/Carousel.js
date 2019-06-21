import React, { PureComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../ui/Movie-card';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

type CarouselProps = { data: Array<Object>, genreMap: Array<Object> };
type CarouselState = {};

class CarouselHelper extends PureComponent<CarouselProps, CarouselState> {
  renderFourMovieCards(data) {
    return data.map(movie => {
      return (
        <MovieCard
          image={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          title={movie.title}
          genre={movie.genre_ids}
          ratings={movie.vote_average}
          genreMap={this.props.genreMap}
          id={movie.id}
        />
      );
    });
  }

  getCarouselCards() {
    const { data } = this.props;
    const carouselElements = data.map((movie, index) => {
      if (index % 4 === 0) {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {this.renderFourMovieCards(data.slice(index, index + 4))}
          </div>
        );
      }
    });
    let carouselArray = [];
    carouselElements.map(ele => {
      if (ele !== undefined) {
        carouselArray.push(ele);
      }
    });
    return carouselArray;
  }

  getSlides(carouselElements) {
    console.log(carouselElements.length);
    let slides = [];
    for (let i = 0; i < carouselElements.length; i++) {
      slides = <Slide>{carouselElements[i]} </Slide>;
    }
    return slides;
  }

  render() {
    const { data } = this.props;
    const carouselElements = this.getCarouselCards();
    return (
      <CarouselProvider totalSlides={data.length / 4}>
        <ButtonBack>Back</ButtonBack>
        <Slider>{this.getSlides(carouselElements)}</Slider>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default CarouselHelper;
