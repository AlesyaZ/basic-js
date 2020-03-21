module.exports = function transform(/*arr*/) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
       let transformArr = [];
   
   for ( let i=0; i < arr.legth; i++) {
       if (arr[i] == '--discard-next') {
           if ( i < arr.length - 1 ) {
             i++;;
           }
   }   else if (arr[i] == '--discard-prev') {
           if (i > 0) {
            transformArray.push(arr[i - 1]);
       }
   }   else if (arr[i] == '--double-next') {
           if (i < arr.length - 1){
           transformArr.push(arr[i + 1]);
           }
   }   else if(arr[i] == '--double-prev') {
           if (i > 0) {
           transformArr.pop();
       }
   }
       else {
           transformArr.push(arr[i]);
       }
       
   }
    return transformArr;
   };
 
