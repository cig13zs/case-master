const assert = require('assert');
const CaseMaster = require('./core');

const input = 'helloWorld_example-test';
const res = CaseMaster.convertAll(input);
assert.strictEqual(res.camelCase, 'helloWorldExampleTest');
assert.strictEqual(res.PascalCase, 'HelloWorldExampleTest');
assert.strictEqual(res.snake_case, 'hello_world_example_test');
assert.strictEqual(res['kebab-case'], 'hello-world-example-test');
assert.strictEqual(res.CONSTANT_CASE, 'HELLO_WORLD_EXAMPLE_TEST');
assert.strictEqual(res['Title Case'], 'Hello World Example Test');
assert.strictEqual(res['dot.case'], 'hello.world.example.test');

console.log('ok, all CaseMaster assertions passed');
