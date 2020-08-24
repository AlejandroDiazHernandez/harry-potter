/*-------------My interface-------*/
export interface Houses {
    name:        string;
    mascot:      string;
    headOfHouse: string;
    houseGhost:  string;
    founder:     string;
    values:      Values[];
    img:         string;
}

export interface Values {
    gryffindor : ["courage", "bravery", "nerve", "chivalry"];
    ravenclaw : ["intelligence", "creativity", "learning", "wit"];
    slytheryn : ["ambition", "cunning", "leadership", "resourcefulness"];
    hufflepuff : ["hard work", "patience", "justice", "loyalty"];
}

/*-------------API Response--------*/
export interface ApiResponseHouses {
    _id:         string;
    name:        string;
    mascot:      string;
    headOfHouse: string;
    houseGhost:  string;
    founder:     string;
    __v:         number;
    school?:     string;
    members:     string[];
    values:      string[];
    colors:      string[];
}