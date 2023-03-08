/* 
    * ref<Thai> -> https://www.monosor.dev/courses/typescript-101
    * interface or type -> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
    * basic types -> https://www.typescriptlang.org/docs/handbook/basic-types.html
    ? arrow function generic if you want to use -> https://timmousk.com/blog/typescript-arrow-function-generic
*/

// any, unknow, never -> ไม่ดี
const isActive: boolean = false // boolean -> true / false
const isUnActive: string = "false"
const price: number = 1.5 // float -> 0.0 , int -> 0
const thb: number = 30.5
const cardName: string = "Son Heung-Min"
// const cardNameList: string[] = ["Kevin", "Ronaldo"]
const cardNameList: Array<string> = ["Kevin", "Ronaldo"]
// const randomValue: (string | number)[] = ["Van", 109, "Milner", "", 1234]
const randomValue: Array<string | number> = ["Van", 109, "Milner", "", 1234]
const date1: string = "2022-11-29T09:21:02.967Z"
const date2: string = "Tue Nov 29 2022 16:21:02 GMT+0700"
const date3: Date = new Date()
const date4: Date = new Date(date1)
const date5: Date = new Date(date2)
const cardType: null = null
const cardTier: undefined = undefined
const _unk: unknown = "Kaoru"

type Role = "user" | "admin"

const x: Role = "admin"

// () => void
// () => number

const setFakeMock = () => {
  let fake: number = 10
  if (price > thb) {
    fake = 20
  }
  return fake
}

const getCardName = (): Array<string> => {
  //   return _unk;
  return [""]
}

// Tips: you can check variable is null | undefinded | "" | 0 | false with if(<variable>)
const checkTopTier = () => {
  if (cardTier) {
    // or if(cardType)
    return true
  } else {
    return false
  }
}

interface IProps {
  _price: number
  // 10 field
}

const calsPriceToTHB = (props: IProps): string => {
  return (props._price * thb).toString()
}

function getAge(x: number): number {
  return 60
}

export interface IPosition {
  position: { short: string; full: string }
}

export interface ICardData extends Partial<IPosition> {
  cardName: string
  price: number
  power: number
  isActive: boolean
  club: string
}

const CardData: ICardData = {
  cardName: "Tony",
  price: 500,
  power: 300,
  isActive: true,
  position: {
    short: "mf",
    full: "midfielder"
  },
  club: "New York City F.C."
}

export const CardMockData: ICardData[] = [
  {
    cardName: "Tony",
    price: 500,
    power: 300,
    isActive: true,
    position: {
      short: "mf",
      full: "midfielder"
    },
    club: "New York City F.C."
  },
  {
    cardName: "Simon",
    price: 60,
    power: 120,
    isActive: true,
    position: {
      short: "gk",
      full: "goalkeeper"
    },
    club: "A.C. Milan"
  }
]
