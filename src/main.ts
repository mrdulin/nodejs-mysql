// import { resolver } from './modules/a/resolver';
import { resolver, schema } from './modules';

// console.log(resolver);
console.log('schema: ', schema);
console.log('resolver: ', resolver);

resolver.Query.sendMessage().then(msg => {
  console.log('msg: ', msg);
});
