module.exports = strapi => {
  return {
    /**
     * Initialize the hook
     */
    initialize: function(next) {
      strapi.app.use(async (ctx, next) =>
        strapi.koaMiddlewares.kcors({
          origin: strapi.config.middleware.settings.cors.origin,
          exposeHeaders: strapi.config.middleware.settings.cors.expose,
          maxAge: strapi.config.middleware.settings.cors.maxAge,
          credentials: strapi.config.middleware.settings.cors.credentials,
          allowMethods: strapi.config.middleware.settings.cors.methods,
          allowHeaders: strapi.config.middleware.settings.cors.headers,
          keepHeadersOnError:
            strapi.config.middleware.settings.cors.keepHeadersOnError
        })(ctx, next)
      );
      next();
    }
  };
};
