import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancake.kiemtienonline360.com/#/add/BNB/0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      },
      {
        label: 'Liquidity',
        href: 'https://pancake.kiemtienonline360.com/#/add/BNB/0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  
]

export default config
