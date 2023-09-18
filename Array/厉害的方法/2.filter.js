/**
 * filter 不改变原数组，返回过滤之后的数组
 * 
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);