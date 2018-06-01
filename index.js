const Validator = require('jsonschema').Validator
const v = new Validator()

module.exports = function schema (schemaObj) {
  return async (ctx, next) => {
    const result = v.validate(ctx.request.body, schemaObj)
    if (result.errors.length) {
      const error = result.errors[0]
      ctx.body = {
        message: 'schema not match',
        errors: error.message
      }
      return
    }
    await next()
  }
}
