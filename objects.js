function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object) //make a copy

  delete newObj[key] //delete the key from copy

  return newObj //return the copy
}
