import "./FilterBar.css";

function FilterBar({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
  rating,
  setRating,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  clearFilters,
}) {
  return (
    <div className="filter-bar">

      <h2>🔍 Search & Filters</h2>

      {/* Search */}

      <div className="filter-group">

        <label>Search Hotel</label>

        <input
          type="text"
          placeholder="Search by hotel name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Location */}

      <div className="filter-group">

        <label>Location</label>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Maldives">Maldives</option>
          <option value="Bali">Bali</option>
          <option value="France">France</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
        </select>

      </div>

      {/* Hotel Type */}

      <div className="filter-group">

        <label>Hotel Type</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Luxury Resort">Luxury Resort</option>
          <option value="Nature Resort">Nature Resort</option>
          <option value="City Hotel">City Hotel</option>
        </select>

      </div>

      {/* Rating */}

      <div className="filter-group">

        <label>Minimum Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All</option>
          <option value="4">4+</option>
          <option value="4.5">4.5+</option>
          <option value="4.8">4.8+</option>
        </select>

      </div>

      {/* Price */}

      <div className="filter-group">

        <label>Maximum Price (${maxPrice})</label>

        <input
          type="range"
          min="100"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      {/* Sort */}

      <div className="filter-group">

        <label>Sort By</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Default</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="rating">Highest Rating</option>
          <option value="name">Hotel Name</option>
        </select>

      </div>

      <button
        className="clear-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>

    </div>
  );
}

export default FilterBar;