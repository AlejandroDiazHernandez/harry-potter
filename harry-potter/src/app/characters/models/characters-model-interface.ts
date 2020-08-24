/*---------------Characters Details-------------*/
export interface CharactersDetails {
    id: number;
    name: string;
    image: string;
    dateOfBirth: string;
    ancestry: string;
    wand: Wand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
}

/*--------------Characters------------*/

export interface Characters {
    name: string;
    image: string;
}

/*--------------API response----------*/

export interface ApiResponseCharacters {
    name: string;
    species: Species;
    gender: Gender;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number | string;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: Wand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
}
 
export enum Gender {
    Female = 'female',
    Male = 'male',
}
 
export enum Species {
    Cat = 'cat',
    HalfGiant = 'half-giant',
    Human = 'human',
    Werewolf = 'werewolf',
}
 
export interface Wand {
    wood: string;
    core: string;
    length: number | string;
}