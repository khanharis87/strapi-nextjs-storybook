module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/signin": { page: "/signin" },
      "/signup": { page: "/signup" }
    };
  }
};
