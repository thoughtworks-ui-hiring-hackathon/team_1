import React, { PureComponent } from 'react';
import ReactStars from 'react-stars';
import { Image } from 'pure-react-carousel';

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
    return <ReactStars count={ratings} size={24} color2={'black'} />;
  }

  render() {
    const { image, title, genre, ratings } = this.props;

    return (
      <div style={{ padding: 20 }}>
        <Image src={image} alt={'poster'} width={'320'} height={'170'} />
        <p className="movie-card-title">{title}</p>
        {this.renderGenre(genre)}
        {this.renderRatings(ratings)}
      </div>
    );
  }
}

export default MovieCard;
