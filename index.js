// Write your solution here!
 let drivers = ["Milo", "Otis","Garfield"];
function destructivelyAppendDriver (addition){
    drivers.push(addition);
 }
 function destructivelyPrependDriver (addition){
     drivers.unshift(addition);
 }
 function destructivelyRemoveLastDriver (addition){
    drivers.pop(addition);
 }
 function destructivelyRemoveFirstDriver(addition){
     drivers.shift(addition)
 }
 function appendDriver (name) {
    return [...drivers, name];
  }
  
  function prependDriver (name) {
    return [name, ...drivers];
  }
  
  function removeFirstDriver () {
    return drivers.slice(1);
  }
  
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }