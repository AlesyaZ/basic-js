module.exports = function countCats(matrix) {
  let Cats = 0;
  for (let i=0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      Cats += (matrix[i][j] === "^^");
     }
   }
   return Cats;
  // remove line with error and write your code here
};
