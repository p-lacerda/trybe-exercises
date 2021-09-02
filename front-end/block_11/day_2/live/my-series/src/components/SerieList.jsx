import React from 'react';
import Serie from './Serie'

class SerieList extends React.Component {
  render() {
    const { catalog } = this.props

    return (
      <div className = "serie-list">
          { catalog.map((serie) => <Serie key={serie.id} serieInfo={ serie }/>) }
      </div>
    );
  }
}

// SerieList.propTypes = {
//   serieInfo: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     image: PropTypes.string,
//     genre: PropTypes.string,
//   })).isRequired,
// }


export default SerieList;