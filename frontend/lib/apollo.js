import { HttpLink } from "apollo-boost";
import { withData } from "next-apollo";
import { STRAPI_URL } from "../lib/globals";

const config = {
  link: new HttpLink({
    uri: `${STRAPI_URL}/graphql`, // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }
  })
};

export default withData(config);
