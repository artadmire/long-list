export function testA() {
  console.log('testA')
}

export function testB() {
  console.log('testA')
}

export const TEXT = '这里是自定义公共内容'



  /**
   * 将数组拆分成每 num 个 为一组
   * @param arr | Array
   * @param num | Int
   * @return Array
   */
  export const splitArray = (arr, num) => {
    const len = arr.length;
    let result = []; // eslint-disable-line
    for (let i = 0; i < len; i += num) {
      result.push(arr.slice(i, i + num));
    }
    return result;
  };