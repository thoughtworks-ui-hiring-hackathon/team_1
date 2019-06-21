import React, { PureComponent } from 'react';
import { Image } from 'pure-react-carousel';
import StarRatings from 'react-star-ratings';
import '../../scss/ui/_carousel.scss';

type MovieCardProps = {
  image: string,
  title: string,
  genre: Array<string>,
  ratings: number,
  genreMap: Array<Object>
};
type MovieCardState = {};

class MovieCard extends PureComponent<MovieCardProps, MovieCardState> {
  renderGenre(genre) {
    return genre.map(genre => {
      return this.props.genreMap.genres.map(element =>
        element.id === genre ? element.name + ', ' : null
      );
    });
  }

  ratingsChange = () => {};

  renderRatings(ratings) {
    return (
      <StarRatings
        rating={ratings}
        starDimensions={'20px'}
        starSpacing={'5px'}
      />
    );
  }

  renderSeeMore(id) {
    return (
      <a href={'/movie/' + id} style={{ color: 'blue' }}>
        Show More
      </a>
    );
  }

  render() {
    const { image, title, genre, ratings, id } = this.props;

    return (
      <div style={{ padding: 20 }}>
        <Image src={image} alt={'poster'} width={'320'} height={'170'} />
        <p className="movie-card-title">{title}</p>
        {this.renderGenre(genre)}
        {this.renderRatings(ratings)}
        {this.renderSeeMore(id)}
      </div>
    );
  }
}

export default MovieCard;
