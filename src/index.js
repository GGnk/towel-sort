
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result=[];
  if(!matrix) return result;
  let iter=0;
  matrix.forEach((elem) => {
      iter+=1;
      if (iter%2 !== 0) result = [].concat(...result ,...elem); 
      else result = [].concat(...result, ...elem.reverse());
  });
  return result;
}
