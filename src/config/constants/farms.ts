import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'GIRL-BUSD LP',
    lpAddresses: {
      97: '0x98c07519193604126d6593059e6933b1a6e5d36b',
      56: '',
    },
    tokenSymbol: 'GIRL',
    tokenAddresses: {
      97: '0x3b8EC572e56Cf7Ad299494f28488d1dFA4F0B933',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  

]

export default farms
