const personalProfile=
{
    firstname:'Leyla',
    lastName:'Agayeva',
    age:25,
    favoriteLanguage:'Spanish',
    contactInfo:{
    email:'leylaagayeva@gmail.com',
    phone:'0703761342'
   }
}

personalProfile['occupation']='Developer';
personalProfile.contactInfo['address']='Baku city'

console.log(personalProfile);

console.log(personalProfile.firstName);
console.log(personalProfile.lastName);
console.log(personalProfile.age);
console.log(personalProfile.favoriteLanguage);
console.log(personalProfile.occupation);


console.log(personalProfile['contactInfo'].email);
console.log(personalProfile['contactInfo'].phone);
console.log(personalProfile['contactInfo'].address);

