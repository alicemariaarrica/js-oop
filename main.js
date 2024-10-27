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


    informazioni() {
        return `Marca: ${this.marca}, Anno: ${this.anno}, Colore: ${this.colore}, Porte: ${this.porte}, Carburante: ${this.carburante}`;
    }