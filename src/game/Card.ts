export type Cardtype = "active"|"mental";
export type CardPlan = "sense"|"logic"|"anomaly"|"free";
export interface Card {
    id:string;
    name:string;
    icon:string;
    cost:number;

    type:Cardtype;
    plan:CardPlan;

    oncePerLesson:boolean;
    oncePerDeck:boolean;

    effects:string[];
}