const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const n = (0.693 / HALF_LIFE_PERIOD);
  let number = parseFloat(sampleActivity);
  if(typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(number)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / number) / n);
};