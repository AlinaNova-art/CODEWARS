/*function solution(frank, sam, tom) 
{
  var a = frank[2];
  var b = frank[3];
  return hasTwoLessThan(sam, a, b) && hasTwoLessThan(tom, a, b);
}
       
function hasTwoLessThan(guy, a, b){
  var count = 0;
  return guy[0] < a && guy[1] < b;
}
*/


function solution(frank, sam, tom) 
{
  var a = frank[2];
  var b = frank[3];
  return sam[0] < a && sam[1] < b &&
         tom[0] < a && tom[1] < b;
}