"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */


 

let a="klaus"; //declaration de la variable a qui est égal à klaus
let b="jon";  //declaration de la variable b qui est égal à jon
let result=checkName(a,b)   //declaration de la variable result qui utilise la fonction checkName avec en parametre les variables a et b

function checkName(name1, name2){ //déclaration de la fonction checkname qui test le parametre 1 (a) et le parametre 2 (b)
    if(name1===name2){  //si la variable a égal b alors on affiche true si non on affiche false
        return true
    }else{
        return false
    }
}
console.log(result);  //sa affiche la reponse true ou false

