const tileLabel = (x, y) => {
  // 0-indexed position from top left
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alpha = alphabet.charAt(y).toUpperCase();
  const num = String(x + 1);
  return  alpha + num;
};

const xyFromIndex = (index, dim = 10) => {
  return [index % (dim + 1), Math.floor(index / (dim + 1))];
};

module.exports = { tileLabel, xyFromIndex };
