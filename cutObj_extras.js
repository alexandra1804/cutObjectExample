var obj = {
  a: [1,2],
  b: 'Hi',
  c: {
    d: 1,
    e: null
  }
};

cutObj(obj, ['a']) // { a: [1,2] }


function assert(val1, val2, message) {
  if(JSON.stringify(val1) === JSON.stringify(val2)) {
   console.log(message, 'PASSED !');
  } else {
   console.error(message, 'NOT PASSED ! Got: ', val1, 'expected', val2);
  }
 }

 assert( cutObj(obj, ['a']) , { a: [1,2] } , 'First test ');

 assert( cutObj(obj, ['a', 'c.d']), { a: [1,2],  c: { e: null } }, 'Test 10+');

 assert( cutObj(null, ['a']), null, 'Text null value');

 assert( cutObj(undefined, ['a']), undefined, 'Test undefined value');

 // assert( cutObj(1, ['a']), 1, 'Test primitive'); optional
 
 assert( cutObj({a: undefined, b: { a: 'Hi' } }, ['a']), {a: undefined}, 'Simple test 2');

 assert( cutObj({a: 1, b: { a: 'Hi' } }, ['a']), {a: 1} , 'Simple test 3');

 assert( cutObj({a: 1, b: { a: 'Hi' } }, []), {} , 'Test empty obj request');

 assert( cutObj({a: undefined, b: { a: 'Hi' } }, ['*']), {a: undefined, b: { a: 'Hi' } }, 'Test full obj request' );