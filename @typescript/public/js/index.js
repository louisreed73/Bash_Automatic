
// const cookieParser=require("cookie-parser")



const {log:l}=console;



l("Holas!!!!")
var Person = (function () {
  var protectedMembers;

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function PersonConstructor(name, surname, protected) {
    protectedMembers = protected || {};

    protectedMembers.capitalize = capitalize;
    this.name = capitalize(name);
    this.surname = capitalize(surname);
    
        Object.preventExtensions(this); 
        Object.freeze(this); 

  }

  return PersonConstructor;
})(); 

function Developer(name, surname, knownLanguage) {
  var parentProtected = {};

  Person.call(this, name, surname, parentProtected);

  this.knownLanguage = parentProtected.capitalize(knownLanguage);
} 

const luis=new Developer(
    "luis",
    "sanchez",
    "typeScript"
);

/* l(luis.name)
l(luis.surname)
l(luis.knownLanguage); */



var person = { name: "John", surname: "Smith"}; 
 
// Object.preventExtensions(person); 
 
person.age = 32; 
 
// console.log(person.age);    //result: undefined 



var person = new Person("John", "Smith"); 
 
// Object.freeze(person); 
 
person.age = 32; 
console.log(person.age);      //result: undefined 
 
person.name = "Mario"; 
console.log(person.name);    //result: "John" 
 
delete person.name;       

person.name="Sofia"//result:  false 
console.log(`Puedes cambiar el nombre? ${person.name}`);    //result: "John" 
 
/* Object.defineProperty( 
      person, 
      "name", 
      { get: function() { return "Mario"; } 
      });  */
                            //result: exception 
















