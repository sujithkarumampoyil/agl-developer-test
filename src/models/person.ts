interface Pet {
    name: string;
    type: string;
}

export class Person {
    name: string;
    gender: string;
    age: number;
    pets: Pet[] | [];

    constructor(props: any) {
        props.name ? this.name = props.name : this.name = '';
        props.gender ? this.gender = props.gender : this.gender = '';
        props.age ? this.age = props.age : this.age = -1;
        props.pets ? this.pets = props.pets : this.pets = [];
    }
}
