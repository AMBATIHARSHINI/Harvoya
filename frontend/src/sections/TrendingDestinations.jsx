import "./TrendingDestinations.css";

import DestinationCard from "../components/DestinationCard/DestinationCard";

import destinations from "../data/destinations";

function TrendingDestinations(){

    return(

        <section className="trending">

           <h2>Discover Your Next Adventure</h2>

<p>
Handpicked destinations chosen to inspire unforgettable journeys around the world.
</p>
            <div className="destination-grid">

                {destinations.map((place)=>(
                    <DestinationCard
                        key={place.id}
                        image={place.image}
                        country={place.country}
                        tagline={place.tagline}
                        rating={place.rating}
                        price={place.price}
                    />
                ))}

            </div>

        </section>

    );

}

export default TrendingDestinations;