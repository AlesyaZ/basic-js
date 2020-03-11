module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  
  let seasons = date.getMonth();

 if (seasons >= 8 && seasons < 11) {
  return 'autumn';
 }
 else if (seasons >= 2 && seasons < 5){ 
  return 'spring';
 }
 else if (seasons >= 5 && seasons < 8) {
   return 'summer';
 }
 else {
   return 'winter';
 }
};
