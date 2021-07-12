import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   
     sousId: 0,
     tokenName: 'GIRL',
     stakingTokenName: QuoteToken.GIRL,
     stakingTokenAddress: '0x3b8EC572e56Cf7Ad299494f28488d1dFA4F0B933',
     contractAddress: {
       97: '0xAF3C28885476Ea183cD2DB54d0F28d172d829bA1',
       56: '',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: '#',
     harvest: true,
     tokenPerBlock: '10000',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
   },
   
]

export default pools
