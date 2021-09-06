import React from "react";

function Search({ onSearch }) {
  const [search, setSearch] = React.useState("");
  const [datatype, setDatatype] = React.useState("all");

  function handlekey(e) {
    if (e.key === "Enter") {
      onSearch(search, datatype);
    }
  }

  function handleFilter(e) {
    let newType = e.target.dataset.type;
    setDatatype(newType);
    onSearch(search, newType);
  }

  console.log(datatype);

  // React.useEffect(() => {
  //   onSearch(search, datatype);
  // }, [search, datatype, onSearch]);

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handlekey}
        />
        <button
          className="btn search__btn"
          onClick={() => onSearch(search, datatype)}
        >
          Поиск
        </button>
      </div>
      <div className="search__radios">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={datatype === "all"}
          />
          <span>Все</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={datatype === "movie"}
          />
          <span>Только фильмы</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={datatype === "series"}
          />
          <span>Только сериалы</span>
        </label>
      </div>
    </div>
  );
}

export { Search };
