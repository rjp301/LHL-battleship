const tileLabel = (x, y) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return alpha[y].toUpperCase() + String(x + 1);
};

const xyFromIndex = (index, dim = 10) => {
  return (index % (dim + 1), Math.floor(index / (dim + 1)));
};

module.exports = { tileLabel, xyFromIndex };
