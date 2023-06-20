
export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


export function adToDemoData(array, key, value, nestedKey = null) {
    array.forEach((object) => {
      if (nestedKey) {
        object[nestedKey][key] = value
      } else {
        object[key] = value
      }
    })
  }