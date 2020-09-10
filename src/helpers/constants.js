const X = 'X';
const O = 'O';
const EMPTY = ' ';

const HORIZONTAL_TOP_ROW = [0, 1, 2];
const HORIZONTAL_MIDDLE_ROW = [3, 4, 5];
const HORIZONTAL_BOTTOM_ROW = [6, 7, 8];
const VERTICAL_LEFT_COLUMN = [0, 3, 6];
const VERTICAL_MIDDLE_COLUMN = [1, 4, 7];
const VERTICAL_RIGHT_COLUMNS = [2, 5, 8];
const TOP_LEFT_TO_BOTTOM_RIGHT_DIAGONAL = [0, 4, 8];
const TOP_RIGHT_TO_BOTTOM_LEFT_DIAGONAL = [2, 4, 6];

const WINNING_COMBINATIONS = [
  HORIZONTAL_TOP_ROW,
  HORIZONTAL_MIDDLE_ROW,
  HORIZONTAL_BOTTOM_ROW,
  VERTICAL_LEFT_COLUMN,
  VERTICAL_MIDDLE_COLUMN,
  VERTICAL_RIGHT_COLUMNS,
  TOP_LEFT_TO_BOTTOM_RIGHT_DIAGONAL,
  TOP_RIGHT_TO_BOTTOM_LEFT_DIAGONAL,
];

module.exports = {
  X,
  O,
  EMPTY,
  WINNING_COMBINATIONS,
};
