export interface Casino {
  id: number
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  badge?: string
  reviews: number
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    id: 1,
    rank: 1,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.8,
    bonus: "25 FreeSpins no Registo",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    badge: "MAIS POPULAR",
    isTopChoice: true,
    url: "https://www.lebull.pt/",
    reviews: 2285,
  },
  {
    id: 2,
    rank: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.6,
    bonus: "5€ Registo + Até 500€ Bónus",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    badge: "MELHOR ESCOLHA",
    url: "https://www.luckia.pt/",
    reviews: 1683,
  },
    {
    id: 3,
    rank: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.5,
    bonus: "20 Jogadas Grátis",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    badge: "TENDÊNCIA",
    url: "https://www.casinoportugal.pt/",
    reviews: 2047,
  },
  {
    id: 4,
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.3,
    bonus: "100% Até 20€",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    reviews: 1426,
  },
  {
    id: 5,
    rank: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.2,
    bonus: "Deposita 10€ e joga com 50€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    url: "https://www.betclic.pt/",
    reviews: 1574,
  },

]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
