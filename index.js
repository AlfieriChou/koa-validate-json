const Validator = require('jsonschema').Validator
const v = new Validator()

module.exports = function schema (schemaObj) {
  return async (ctx, next) => {
    if (ctx.request.query.schema - help !== undefined) {
      ctx.body = schemaObj
      return
    }

    const result = v.validate(ctx.request.body, schemaObj)

    if (result.errors.length) {
      console.log('errors:', result.errors)
      ctx.body = {
        message: 'schema not match',
        errors: result.errors
      }
      return
    }
    await next()
  }
}
