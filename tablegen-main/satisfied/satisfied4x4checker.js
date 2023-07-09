var satisfied=function(board){
  if((board[0]===2&&board[1]===4&&board[2]===2&&board[3]===4&&board[4]===2&&board[5]===4&&board[6]===2&&board[7]===4&&board[8]===2&&board[9]===4&&board[10]===2&&board[11]===4&&board[12]===2&&board[13]===4&&board[14]===2&&board[15]===4)||(board[0]===4&&board[1]===2&&board[2]===4&&board[3]===2&&board[4]===4&&board[5]===2&&board[6]===4&&board[7]===2&&board[8]===4&&board[9]===2&&board[10]===4&&board[11]===2&&board[12]===4&&board[13]===2&&board[14]===4&&board[15]===2)){return true;};

return false;
};
exports.satisfied=satisfied;