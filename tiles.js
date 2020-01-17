function kolkoPlochki([a,b,c,d,e]){
  squareArea = parseFloat(a*a);
  plochkaArea = parseFloat(b*c);
  peikaArea = parseFloat(d*e);
  areaPlochki = squareArea - peikaArea;
  obshtoPlochki = areaPlochki / plochkaArea;
  time = parseFloat(obshtoPlochki*0.2);
  console.log("Imate nujda ot " + obshtoPlochki.toFixed(2) + " plochki i " + time.toFixed(2) + " minuti za montaj");
}

kolkoPlochki([40,0.8,0.6,3,5]);
