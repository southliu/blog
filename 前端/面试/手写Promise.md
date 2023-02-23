```js
class myPromise {
  constructor(func) {
    this.state = 'padding'
    this.result = null
    this.onResolveCallback = []
    this.onRejectCallback = []

    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch(err) {
      this.reject(err)
    }
  }
  resolve(result) {
    if (this.state === 'padding') {
      this.state = 'fulfilled'
      this.result = result
      this.onResolveCallback.forEach(callback => {
        callback(result)
      })
    }
  }
  reject(result) {
    if (this.state === 'padding') {
      this.state = 'rejected'
      this.result = result
      this.onRejectCallback.forEach(callback => {
        callback(result)
      })
    }
  }
  then(onResolve, onReject) {
    return new myPromise((resolve, reject) => {
      onResolve = typeof onResolve === 'function' ? onResolve : () => {}
      onReject = typeof onReject === 'function' ? onReject : () => {}

      switch (this.state) {
        case 'fulfilled':
          setTimeout(() => {
            onResolve(this.result)
            resolve(this.result)
          })
          break

        case 'rejected':
          setTimeout(() => {
            onReject(this.result)
            reject(this.result)
          })
          break

        case 'padding':
          this.onResolveCallback.push(() => {
            resolve(onResolve(this.result))
          })
          this.onRejectCallback.push(() => {
            reject(onReject(this.result))
          })
          break

        default:
          break
      }
    })
  }
}

const test = new myPromise((resolve, reject) => {
  resolve('456')
}).then(
  (data) => console.log('onResolve:', data),
  (data) => console.log('onReject:', data)
).then(
  (data) => console.log('onResolve:', data),
  (data) => console.log('onReject:', data)
)
```