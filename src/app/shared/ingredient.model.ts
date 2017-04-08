export class Ingredient {

    constructor(public name: string, public amount: number) {}

    // It is a very typical to receive arguments in the constructor and then instantly assign them, so Typescript offers a shortcut for this (as above).

    // public name: string;
    // public amount: number;
    //
    // constructor (name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }
}