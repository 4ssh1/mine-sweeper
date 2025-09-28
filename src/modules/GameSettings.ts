export const GameLevels = ["Begineer", "Intermediate", "Expert"] as const

export type LevelNames = typeof GameLevels[number]

export type Settings = [number, number];

export const GameSettings: Record<LevelNames, Settings> = {
    Begineer: [9, 10],
    Intermediate: [16, 44],
    Expert: [22, 99]
}

