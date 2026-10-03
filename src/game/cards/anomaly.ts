import{Card} from "../../types/Card";

export const anomalyCards: Card[] = [
    {
        id: "A_001",
        name: "魅せ方の基本",
        icon: "/cards/魅せ方の基本.jpg",
        cost: 4,
        type: "active",
        plan: "anomaly",
        oncePerLesson: true,
        oncePerDeck: false,
        effects: [
            {
                type: "changeState",
                state: "Strong"
            },
            {
                type: "score",
                value: 8
            },
        ]
    },
        {
        id: "A_002",
        name: "立ち回りの基本",
        icon: "/cards/立ち回りの基本.jpg",
        cost: 2,
        type: "mental",
        plan: "anomaly",
        oncePerLesson: true,
        oncePerDeck: false,
        effects: [
            {
                type: "energy",
                value: 5
            },
            {
                type: "changeState",
                state: "Conservation"
            },
        ]
    }

];