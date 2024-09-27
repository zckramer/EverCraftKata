export type BattleType = {

};

export type CharacterSheetType = {
    name: string;
    alignment: "Good" | "Neutral" | "Evil";
    armorClass: number;
    hitPoints: number;
    isAlive: boolean;
    opponent?: boolean;
};