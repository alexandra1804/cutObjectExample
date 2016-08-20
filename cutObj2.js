//Решение второй задачи, также тут по звёздочке удаляем весь объект, 10+ будет :) .

function cutObj(object, keysArray) {
    if (object === null) {
      console.error("Error: you've entered null instead of object");
      return null;
    }
    if (object === undefined) {
      console.error("Error: you've entered null instead of object");
      return;
    }
    if (typeof object !== 'object') {
      return object;
    }
    if (keysArray.indexOf('*') > -1) {
      object = {};
      return object;
    }
    if (keysArray.indexOf('null') > -1 || keysArray.indexOf('undefined') > -1) {
      console.error("Error: you've entered forbidden key name");
    }  
    for (var property in object) {
      if (keysArray.indexOf(property) === -1) { 
        delete object[property];
      } else { 
        console.log(typeof property);   //это string, а потому ниже не пойдет
        if (typeof property === 'object') {
          for (var subProp in property) {
            console.log(subProp);
            var subObj = {};
            if (keysArray.indexOf(subProp) > -1) {
              subObj[subProp] = property[subProp];
            }
            property[subProp] = subObj; 
          }
        }
      }
    }
    return object;
}