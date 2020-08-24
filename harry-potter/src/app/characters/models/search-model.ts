/*-------------My interface-------------*/
export interface Search {
  name: string;
  house?: 'Gryffindor' | 'Ravenclaw' | 'Slytheryn' | 'Hufflepuff';
  bloodStatus: BloodStatus;
}

/*---------------API response-----------*/
export interface ApiResponseSearch {
    _id: string;
    name: string;
    role?: string;
    house?: 'Gryffindor' | 'Ravenclaw' | 'Slytheryn' | 'Hufflepuff';
    school?: School;
    alias?: string;
    animagus?: string;
    wand?: string;
    patronus?: string;
    __v: number;
    ministryOfMagic: boolean;
    orderOfThePhoenix: boolean;
    dumbledoresArmy: boolean;
    deathEater: boolean;
    bloodStatus: BloodStatus;
    species: string;
    boggart: string;
    
  }
   
  export enum BloodStatus {
    HalfBlood = 'half-blood',
    HalfGiant = 'half-giant',
    Muggle = 'muggle',
    MuggleBorn = 'muggle-born',
    PureBlood = 'pure-blood',
    QuarterVilla = 'quarter-villa',
    Squib = 'squib',
    Unknown = 'unknown',
  }
   
  export enum School {
    BeauxbatonsAcademyOfMagic = 'Beauxbatons Academy of Magic',
    DurmstrangInstitute = 'Durmstrang Institute',
    HogwartsAcademyOfWitchcraftAndWizardry = 'Hogwarts Academy of Witchcraft and Wizardry',
    HogwartsSchoolOfWitchcraftAndWizardry = 'Hogwarts School of Witchcraft and Wizardry',
  }