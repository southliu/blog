```js
const PromiseAll = (array) => {
  return new Promise((resolve, reject) => {
    const promises = Array.from(array)
    const len = promises.length
    const result = []
    let index = 0

    for (let i = 0; i < len; i++) {
      promises[i].then(res => {
        index++
        result[i] = res
        if (index === len) {
          resolve(result)
        }
      })
      .catch(err => {
        reject(err)
      })
    }
  })
}


const promise1 = Promise.resolve('promise1')
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'promise2')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'promise3')
})

PromiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values)
})
```