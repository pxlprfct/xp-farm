const makeMove = () => {
  const row = Math.floor(Math.random() * 3);
  const column = Math.floor(Math.random() * 3);

  return [row, column];
};

module.exports = makeMove;
