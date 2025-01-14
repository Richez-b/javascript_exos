let l = console.log;

class CompteBancaire {
    constructor(person, solde = 0) {
        this.person = person;
        this.solde = solde;
    }

    crediter(montant) {
        this.solde += montant;
        l(`Ajout de : ${montant}€ pour ${this.person}`);
    }

    retirer(montant) {
        if (this.solde < montant){
        this.solde -= montant;
        l(`Retrait de : ${montant}€ pour ${this.person}`);
        } else {
            l(`Retrait de ${this.person} de ${montant}€ refusé, solde insuffisant (${this.solde}€)`);
        }
    }

    virer(montant, destinataire) {
        if (this.solde >= montant) {
            this.retirer(montant);
            destinataire.crediter(montant);
            l(`Virement de ${montant}€ de ${this.person} pour ${destinataire.person}`);
        } else {
            l(`Virement de ${montant}€ refusé pour ${this.person}, solde insuffisant (${this.solde}€)`);
        }
    }

    decrire() {
        l(`Titulaire: ${this.person}, Solde: ${this.solde}€`);
    }
}

// Création et gestion des comptes
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco")
};

// Actions sur les comptes
Object.values(lesComptes).forEach(compte => compte.crediter(1000)); // Crédite chaque compte
lesComptes.Alex.retirer(100); // Alex retire 100
lesComptes.Marco.virer(300, lesComptes.Clovis); // Marco vire 300 à Clovis
lesComptes.Alex.retirer(1200); // Tentative de retrait incorrect par Alex

// Description finale des comptes
Object.values(lesComptes).forEach(compte => compte.decrire());