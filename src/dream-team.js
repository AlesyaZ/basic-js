module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
   let secretName = []
   
   for (let i = 0; i < members.length; i ++){
      if (typeof members[i] === "string"){
        let secretNameUpper = members[i].match(/[A-Z]/i)[0];
        secretName.push(secretNameUpper.toUpperCase(''));
      }
    }
      return secretName.sort().join('');
}