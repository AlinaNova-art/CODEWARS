function distanceBetweenPoints(a, b) {
    var distance = Math.sqrt(Math.pow(a.x -b.x, 2) + Math.pow(a.y -b.y, 2));
    return distance;
  }