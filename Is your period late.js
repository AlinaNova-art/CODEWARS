function periodIsLate(last, today, cycleLength) {
 const diffInDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));
  return  cycleLength < diffInDays;                           
}