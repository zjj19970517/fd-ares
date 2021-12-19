/**
 * 判断当前数据是否为对象
 * @param target 函数 或 object
 */
export default function isObject(target: unknown): boolean {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}
