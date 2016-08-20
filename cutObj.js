//Решение первой задачи, также тут по звёздочке копируем все ключи в новый объект, 10+ будет :) .

function cutObj(object, keysArray) {
    var result = {};
    if (object === null) {
      console.error("Error: you've entered null instead of object");
      return null;
    }
    if (object === undefined) {
      console.error("Error: you've entered null instead of object");
      return;
    }
    if (keysArray.indexOf('*') > -1 || typeof object !== 'object') {
      result = object;
      return result;
    }
    if (keysArray.indexOf('null') > -1 || keysArray.indexOf('undefined') > -1) {
      console.error("Error: you've entered forbidden key name");
    }  
    for (var property in object) {
      if (keysArray.indexOf(property) > -1) { 
        console.log(typeof property);   //это string, а потому ниже не пойдет
        result[property] = object[property];
        if (typeof result[property] === 'object') {
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
    return result;
}