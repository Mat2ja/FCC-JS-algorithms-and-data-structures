function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(o => {
    o.orbitalPeriod = calcOrbitalPeriod(o.avgAlt);
    delete o.avgAlt;
    return o;
  });

  function calcOrbitalPeriod(avgAlt) {
    const r = earthRadius + avgAlt;
    return Math.round(Math.PI * 2 * Math.sqrt((r ** 3) / GM));
  }
}

let a = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(a)