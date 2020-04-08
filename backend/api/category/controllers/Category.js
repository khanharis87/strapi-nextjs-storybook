'use strict';

/**
 * Category.js controller
 *
 * @description: A set of functions called "actions" for managing `Category`.
 */

module.exports = {

  /**
   * Retrieve category records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.category.search(ctx.query);
    } else {
      return strapi.services.category.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a category record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.category.fetch(ctx.params);
  },

  /**
   * Count category records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.category.count(ctx.query, populate);
  },

  /**
   * Create a/an category record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.category.add(ctx.request.body);
  },

  /**
   * Update a/an category record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.category.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an category record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.category.remove(ctx.params);
  }
};
