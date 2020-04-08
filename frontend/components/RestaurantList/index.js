/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import RestaurantCard from "../RestaurantCard/RestaurantCard";

const RestaurantList = (
  { data: { loading, error, restaurants }, search },
  req
) => {
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (restaurants && restaurants.length) {
    //searchQuery
    const searchQuery = restaurants.filter(query =>
      query.name.toLowerCase().includes(search)
    );
    if (searchQuery.length != 0) {
      return (
        <div>
          <div className="h-100">
            {searchQuery.map(res => (
              <RestaurantCard
                id={res.id}
                imageURL={res.image.url}
                description={res.description}
                name={res.name}
                width="30"
              ></RestaurantCard>
            ))}
          </div>

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </div>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;
// RestaurantList.getInitialProps = async ({ req }) => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(RestaurantList);
