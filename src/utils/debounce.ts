function debounce(func: Function, delay: number) {
  let timeout:number;
  return function (...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
export default debounce