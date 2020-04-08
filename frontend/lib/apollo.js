import { HttpLink } from "apollo-boost";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "http://165.22.192.233:1337/graphql", // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }
  })
};

export default withData(config);
