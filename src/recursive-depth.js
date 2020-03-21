module.exports = class DepthCalculator {
    calculateDepth(arr) {
    if(arr.every(i => !Array.isArray(i))) {
         return 1;
        } 
     return 1 + this.calculateDepth(arr.flat());
    }
};