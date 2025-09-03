import type { CellType } from "../interfaces"

const transparent = 'rgba(0,0,0,0)'

export const colors: {[key in CellType]: string } = { //google why
    0: '#000',
    1: '#2a48ec',
    2: '#2bb13d',
    3: '#ec6561',
    4: '#233db7',
    5: '#233db7',
    6: '#e400af',
    7: '#906a02',
    8: '#fa0707',
    9: transparent,
    10: transparent,
    11: transparent,
    12: transparent,
}