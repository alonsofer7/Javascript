class Car {
    constructor(_make, _model, _year, _colour, _extras){ // la _ es para diferenciar que son parámetros o que no son parámetros
        this.make = _make;
        this.model = _model;
        this.year = _year;
        this.colour = _colour;
        this.extras = _extras;
    }

    getDetails(){
        return `
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}
        Colour: ${this.colour}
        Extras: ${this.extras}
        `;
    }
}

export default Car;