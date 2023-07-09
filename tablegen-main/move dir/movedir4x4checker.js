var config=require("./config.js").config;
var movefile=config.movefile;
var move=require(movefile).move;
var pair=require(movefile).pair;
var moveleft=function(board){
    for(var i=0;i<16;i++){
    if(board[i]===8){
      return 0;
    }
  }
return move(board,[0,1,2,3])|move(board,[4,5,6,7])|move(board,[8,9,10,11])move(board,[12,13,14,15]);
};

var moveright=function(board){
    for(var i=0;i<16;i++){
    if(board[i]===8){
      return 0;
    }
  }
return move(board,[3,2,1,0])|move(board,[7,6,5,4])|move(board,[11,10,9,8])move(board,[15,14,13,12]);
};

var moveup=function(board){
    for(var i=0;i<16;i++){
    if(board[i]===8){
      return 0;
    }
  }
return move(board,[0,4,8,12])|move(board,[1,5,9,13])|move(board,[2,6,10,14])|move(board,[3,7,11,15]);
};
var movedown=function(board){
    for(var i=0;i<16;i++){
    if(board[i]===8){
      return 0;
    }
  }
return move(board,[12,8,4,0])|move(board,[13,9,5,1])|move(board,[14,10,6,2])|move(board,[15,11,7,3]);
};
exports.moveleft=moveleft;
exports.moveright=moveright;
exports.moveup=moveup;
exports.movedown=movedown;

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
