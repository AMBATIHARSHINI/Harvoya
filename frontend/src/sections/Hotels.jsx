import "./Hotels.css";
import { useState } from "react";

import hotels from "../data/hotels";

import HotelCard from "../components/HotelCard/HotelCard";
import FilterBar from "../components/Filters/FilterBar";

function Hotels() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [sortBy, setSortBy] = useState("");

  const clearFilters = () => {

    setSearch("");
    setLocation("");
    setType("");
    setRating("");
    setMaxPrice(500);
    setSortBy("");

  };

  let filteredHotels = hotels.filter((hotel) => {

    return (

      hotel.name
        .toLowerCase()
        .includes(search.toLowerCase())

      &&

      (location === "" ||
        hotel.location === location)

      &&

      (type === "" ||
        hotel.type === type)

      &&

      (rating === "" ||
        hotel.rating >= Number(rating))

      &&

      hotel.price <= maxPrice

    );

  });

  if (sortBy === "priceLow") {

    filteredHotels.sort((a, b) => a.price - b.price);

  }

  if (sortBy === "priceHigh") {

    filteredHotels.sort((a, b) => b.price - a.price);

  }

  if (sortBy === "rating") {

    filteredHotels.sort((a, b) => b.rating - a.rating);

  }

  if (sortBy === "name") {

    filteredHotels.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  }

  return (

    <section className="hotels">

      <div className="hotels-heading">

        <span className="hotels-tag">
          POPULAR HOTELS
        </span>

        <h2>
          Stay at the World's Best Hotels
        </h2>

        <p>
          Discover handpicked luxury hotels,
          beach resorts, mountain retreats,
          and unforgettable stays carefully
          selected for your next vacation.
        </p>

      </div>

      <FilterBar

        search={search}
        setSearch={setSearch}

        location={location}
        setLocation={setLocation}

        type={type}
        setType={setType}

        rating={rating}
        setRating={setRating}

        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}

        sortBy={sortBy}
        setSortBy={setSortBy}

        clearFilters={clearFilters}

      />

      <div className="hotels-grid">

        {filteredHotels.length > 0 ? (

          filteredHotels.map((hotel) => (

            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />

          ))

        ) : (

          <h2
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "40px",
            }}
          >
            😔 No hotels found
          </h2>

        )}

      </div>

    </section>

  );

}

export default Hotels;