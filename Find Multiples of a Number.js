findMultiples=(integer,limit)=>{
  let result = [];
  let a = integer;
  while(integer<=limit){
    result.push(integer);
    integer = integer + a;
  }
  return result;
}
