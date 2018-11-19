# koa-validate-json

[![NPM version][npm-image]][npm-url] [![license](https://img.shields.io/github/license/mono-js/mono-utils.svg)](https://github.com/AlfieriChou/koa-validate-json/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/AlfieriChou/koa-validate-json.svg)](https://greenkeeper.io/)

* koa拦截校验字段

#### 使用

```javascript
const schema = require('koa-validate-json')

router.post('/article', schema({
  type: 'object',
  properties: {
    title: { type: 'string', maxLength: 100 },
    content: { type: 'string' },
    tags: {
      type: 'array',
      items: { type: 'string', maxLength: 20 }
    },
    public: { type: 'boolean' }
  },
  required: [ 'title', 'content', 'tags' ],
  additionalProperties: false
}), async () => { 
  //controller function
})
```

* 通常这个schema中的json校验可以通过Joi和jsonschema来生成

[npm-image]: https://img.shields.io/npm/v/koa-validate-json.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/koa-validate-json
