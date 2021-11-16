// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  if (letters.length < msg.length) return false;

  const frequency = (str, obj = {}) => {
    str
      .split("")
      .forEach(s => (obj[s] === undefined ? (obj[s] = 1) : obj[s]++));
    return obj;
  };
  const msgFrequency = frequency(msg);
  const letterFrequency = frequency(letters);
  for (let [k, v] of Object.entries(msgFrequency)) {
    if (letterFrequency[k] < v || letterFrequency[k] === undefined)
      return false;
  }
  return true;
}

module.exports = {
  constructNote,
};
