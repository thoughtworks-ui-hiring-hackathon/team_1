import React, { PureComponent } from 'react';
import ReactStars from 'react-stars';

type MovieCardProps = {
  image: string,
  title: string,
  genre: Array<string>,
  ratings: number
};
type MovieCardState = {};

class MovieCard extends PureComponent<MovieCardProps, MovieCardState> {
  renderGenre(genre) {
    return genre.map(genre => <span>genre</span>);
  }

  ratingsChange = () => {};

  renderRatings(ratings) {
    return <ReactStars count={ratings} size={24} color2={'black'} />;
  }

  render() {
    const { image, title, genre, ratings } = this.props;
    return (
      <div>
        <image />
        <p className="movie-card-title">{title}</p>
        {this.renderGenre(genre)}
        {this.renderRatings(ratings)}
      </div>
    );
  }
}

export default MovieCard;
