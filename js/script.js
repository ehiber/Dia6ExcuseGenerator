let quien = [ 'el perro ' , 'la gata ', 'su tortuga ', 'mi león']

let que = [ 'se comió ', 'mordió ', 'aplastó ', 'rompió ']
        
let cuando = [ 'antes de la clase ', 'ayer ', 'mientras dormía ', 'en la mañana ']
    
document.getElementById("excusa").innerHTML = 'No hay nada porque ' + quien[Math.floor(Math.random()*3)] 
+ que[Math.floor(Math.random()*3)] + 'la laptop ' + cuando[Math.floor(Math.random()*3)];
        