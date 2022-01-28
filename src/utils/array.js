export const array = {

  chunks: function* (arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n)
    }
  }

}