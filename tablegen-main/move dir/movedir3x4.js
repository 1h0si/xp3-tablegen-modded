var config=require("./config.js").config;
var movefile=config.movefile;
var move=require(movefile).move;
var pair=require(movefile).pair;
var moveleft=function(board){
return move(board,[0,1,2])|move(board,[3,4,5])|move(board,[6,7,8]|move(board,[9,10,11]);
};
var moveright=function(board){
return move(board,[2,1,0])|move(board,[5,4,3])|move(board,[8,7,6]|move(board,[11,10,9]);
};
var moveup=function(board){
return move(board,[0,3,6,9])|move(board,[1,4,7,10])|move(board,[2,5,8,11]);
};
var movedown=function(board){
return move(board,[9,6,3,0])|move(board,[10,7,4,1])|move(board,[11,8,5,2]);
};
exports.moveleft=moveleft;
exports.moveright=moveright;
exports.moveup=moveup;
exports.movedown=movedown;

// 0  1  2
// 3  4  5
// 6  7  8
// 9  10 11
