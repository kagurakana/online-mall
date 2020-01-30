
/**
 * 防抖函数
 * @param {function} func 
 * @param {Number} delay 
 * @param  {...any} args
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timer = null
  console.log(func);

  //下面的函数使用了上面的参数，会产生闭包，因此timer不会被销毁掉
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}