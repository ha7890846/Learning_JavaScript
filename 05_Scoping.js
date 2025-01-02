//var Scoping is the basically field in which it is accessible.
// Scoping type : Global, functional and block.

// Global var
let globalVar = "this is global var.";
console.log(globalVar); // this is global var.
// Global var is accessible from any where in the program.



function functionalVar(){
    console.log("\n\n****************we are in Function block *********")
    let var2 = "this is functional var.";
    console.log(var2); // this is local var.
    // functional var is accessible only in the function block where it is declared.  
    
    if(true){
        let var3 = "this is local var.";
        console.log(var3); // this is local var.   
        // block var is accessible only in the block where it is declared.
    }
    
    
    console.log(var2);
}
functionalVar();
console.log("\n\n****************we are in Function block *********");

console.log(globalVar);       //this is accesible anywhere in code.. 
// console.log(var3);       //this is not accesible out of the block.. 
// console.log(var2)          // this is not accesible out of functional area.