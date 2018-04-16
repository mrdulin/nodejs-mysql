import * as glue from 'schemaglue';

console.log('glue: ', glue);

const { schema, resolver } = glue('src/modules');

export { schema, resolver };
