//In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
//La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
//marca
//anno
//colore
//porte
//carburante

class Veicolo {
    
    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }


//Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.

const miaVettura = new Veicolo("Fiat", 2019, "blu", 5, "benzina");

//Otteniamo le informazioni della vettura utilizzando il metodo informazioni()

informazioni() {
    return `Marca: ${this.marca}, Anno: ${this.anno}, Colore: ${this.colore}, Porte: ${this.porte}, Carburante: ${this.carburante}`;
}
//Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()

    calcolaEta() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }
}

console.log(miaVettura.informazioni());

console.log(`Età della vettura: ${miaVettura.calcolaEta()} anni`);