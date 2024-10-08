export type BattleType = {

};

export type CharacterSheetType = {
    id?: number;
    name?: string;
    alignment?: "Good" | "Neutral" | "Evil";
    armorClass?: number;
    hitPoints?: number;
    isAlive?: boolean;
    opponent?: boolean;
};