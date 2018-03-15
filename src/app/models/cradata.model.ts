export class craData{
    public idPers:number;
    public idCRA:number;
    public mois:number;
    public annee:number;
    public rubriques:rubrique[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

class rubrique{
    public libelleRubrique:string;
    public afficheAjouter:boolean;
    public libelleSousRubrique:sousRubrique[];
    public lignes:ligne[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

class sousRubrique{
    public titre:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }    
}

class ligne{
    public composantsRubriques:composantsRubrique[];
    public afficheCompleter:boolean;
    public afficheVider:boolean;
    public afficheSupprimer:boolean;
    public saisieParListe:boolean;
    public jours: jour[];
    public sousLignes:sousLigne[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

class sousLigne{}

class composantsRubrique{
    public label:string;
    public tooltip:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
class jour{
    public total:number;
    public totalStyle:string;
    public joursAffectation:jourAffectation[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

class jourAffectation{
    public jourDuMois:number;
    public taux:number;
    public disabled:boolean;
    public styleClass:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }    
}