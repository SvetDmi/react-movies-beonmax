function Movie({ title, poster, year, type }) {
  return (
    // <li className="cardContainer">
    //   <div className="row">
    //     <div className="card">
    //       <div className="card-image">
    //         <img src={poster} alt={title} />
    //       </div>
    //       <h3 className="card-title card__title">{title}</h3>
    //       <div className="card-content card__bottom">
    //         <p>{year}</p>
    //         <p>{type}</p>
    //       </div>
    //     </div>
    //   </div>
    // </li>

    <li className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt={title}
          />
        ) : (
          <img className="activator" src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title movie__title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </li>
  );
}

export { Movie };
