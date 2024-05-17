export type TicketId = "tier-silver" | "tier-gold"

export interface Ticket {
  name: string
  type: string
  price: string
}

type Tickets = {
  [key: string]: Ticket
}

const tickets: Tickets = {
  "tier-silver": {
    name: 'Ingresso Silver',
    type: "silver",
    price: 'R$ 49,99',
  },
  "tier-gold": {
    name: 'Ingresso Gold',
    type: "gold",
    price: 'R$ 99,99',
  }
}

export interface TicketTier {
  name: Ticket["name"]
  id: TicketId
  priceMonthly: Ticket["price"]
  description: string
  features: string[]
  featured: boolean
}

const ticketTiers = [
  {
    name: 'Silver',
    id: 'tier-silver',
    priceMonthly: 'R$ 19,99',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique non suscipit nec, ultricies a nunc.",
    features: [
      'Crachá Personalizado', 
      'Brinde Padrão', 
      'Acesso as Cadeiras', 
      'Acesso as palestras e painéis'
    ],
    featured: false,
  },
  {
    name: 'Gold',
    id: 'tier-gold',
    priceMonthly: 'R$ 49,99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique non suscipit nec, ultricies a nunc.',
    features: [
      'Crachá Personalizado',
      'Brinde Exclusivo Caderno e Caneta',
      'Acesso às palestras e painéis',
      'Acesso Privilegiado com Mesa',
      'Grupo exclusivo para networking',
      'Espaço lounge com palestrantes',
      'Jantar de networking incluso'
    ],
    featured: true,
  },
  // {
  //   name: 'Gold Duplo',
  //   id: 'tier-gold',
  //   priceMonthly: 'R$ 49,99',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique non suscipit nec, ultricies a nunc.',
  //   features: [
  //     'Crachá Personalizado',
  //     'Brinde Exclusivo Caderno e Caneta',
  //     'Acesso às palestras e painéis',
  //     'Acesso Privilegiado com Mesa',
  //     'Grupo exclusivo para networking',
  //     'Espaço lounge com palestrantes',
  //     'Jantar de networking incluso'
  //   ],
  //   featured: true,
  // }
]

export { tickets, ticketTiers }
