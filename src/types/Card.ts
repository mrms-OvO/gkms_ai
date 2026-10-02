export type Cardtype = "active"|"mental";
export type CardPlan = "sense"|"logic"|"anomaly"|"free";
export type CardEffect = 
{
    type:"score";
    value:number;
}|{
    type:"energy";
    value:number;
}
|{
    type:"changeState";
    state:"Strong"|"Conservation";
};

export interface Card {
    id:string;
    name:string;
    icon:string;
    cost:number;

    type:Cardtype;
    plan:CardPlan;

    oncePerLesson:boolean;
    oncePerDeck:boolean;

    effects:CardEffect[];
}