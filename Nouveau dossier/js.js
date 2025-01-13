l = console.log
class UserProfile {

    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="connected")
        return this.phoneUser;
    }
    getProfileInfo() {
    // console.log('this ',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
// console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


// console.log(exampleUser2.nameUser);
// exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
// exampleUser3.getProfileInfo();


class Imc {
    constructor(pName,pWeight,pHeight) {
        this.name = pName;
        this.weight = pWeight;
        this.height = pHeight;
        this.result = this.calc();
    }
    calc(){
        return Number.parseFloat((this.weight/this.height**2)).toFixed(2);
    }
    showImc(){
        return console.log(`${this.name} (${this.weight},${this.height}) a un IMC de ${this.result}`);
    }   
}
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
];
// list.forEach((uneInstanceImc) => uneInstanceImc.showImc());


class person {
    constructor(pName,pSurname,pAge,pMonthSalary){
        this.name = pName;
        this.surname = pSurname;
        this.age = pAge;
        this.monthSalary = pMonthSalary;
        this.yearSalary = this.monthSalary * 12;
        this.totalCout = this.calcCount();
    }
    getCout(){
        return this.totalCout;
    }
    calcCount(){
       return (this.yearSalary +(this.yearSalary * .9));
    }
}

class Pme {
    constructor(pName,pTeam,pSales,pFixeCout,pBuy){
        this.name = pName;
        this.team = pTeam;
        this.sales = pSales;
        this.fixeCout = pFixeCout;
        this.buy = pBuy;
        this.totalCoutTeam = this.calcTeam()
    }
    calcTeam(){
        let total=0;
        this.team.forEach(element => {
            total += element.getCout();
        });
        return total;
    }
    calcBilan(){
        console.log(`
            ${this.name} : Cout initial : ${this.fixeCout+this.buy}
            ${this.name} : Cout total équipe : ${this.totalCoutTeam}
            ${this.name} : VENTES : ${this.sales}
            ${this.name} : BILAN : ${this.sales-this.fixeCout-this.buy-this.totalCoutTeam}
            ` );
    }
}


const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new person("Duval", "Paul", 30, 2000),
    new person("Durand", "Alain", 40, 3000),
    new person("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.calcBilan();