export let sortBy = (fn) => (xs) => {
  return [...xs].sort((x1, x2) => {
    return fn(x2) > fn(x1) ? -1 : 1
  })
}

export let prop = (key) => (obj) => {
  return obj[key]
}

export let mapObjIndexed = (fn, obj) => {
  return Object.keys(obj).reduce((z, k, i) => {
    let v = obj[k]
    return {...z, [k]: fn(v, k, obj)}
  }, {})
}

export let sum = (xs) => xs.reduce((z, x) => z + x, 0)


