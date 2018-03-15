class craworkflow {
    public idPers: number;
    public idCRA: number;
    public mois: number;
    public annee: number;
    public workflow:workflow[];
}

class workflow{
    public acteur:string;
    public date:Date;
    public description:string;
    public status:string;
    public commentaire: string;
    public afficheCommentaire:boolean;
    public ordre:number;
}