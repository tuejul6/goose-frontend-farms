import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
    pid: 0,
    risk: 3,
    lpSymbol: 'HOMER',
    lpAddresses: {
      97: '0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      56: '',
    },
    tokenSymbol: 'HOMER',
    tokenAddresses: {
      97: '0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.HOMER,
    quoteTokenAdresses: contracts.HOMERToken,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HOMER-BNB',
    lpAddresses: {
      97: '0xbfb8357f3ccfa105968b1836823f5e144145ada5',
      56: '',
    },
    tokenSymbol: 'HOMER',
    tokenAddresses: {
      97: '0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'HOMER-BUSD',
    lpAddresses: {
      97: '0x897155a02e5a610d7dd035cf2620d6972d025d80',
      56: '',
    },
    tokenSymbol: 'HOMER',
    tokenAddresses: {
      97: '0xeaBdE99A1DD264849886ffF11A7fBe5637ed6Fa6',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
]

export default farms
