function theBeatlesPlay(m, i) {
  var t=[];
  for (var x=0;m.length>x;x++) {
    t.push(m[x]+" plays "+i[x]);
  }
  return t;
}
function johnLennonFacts(f) {
  var a=[];
  var i=0;
  while (f[i]) {
    a.push(f[i]+"!!!");
    i++;
  }
  return a;
}
function iLoveTheBeatles(n) {
  var o=[];
  do {
    o.push("I love the Beatles!");
    n++;
  } while (n<15);
<<<<<<< HEAD
  return o;
=======
>>>>>>> e033d934e8aba312150908c160aae3d4d5242bc6
}