import React from 'react'
import BigNumber from 'bignumber.js'

export const status = {
  UPCOMING: "Upcoming",
  LIVE: "Live",
  SUCCESS: "Successed",
  FAILED: "Failed",
  CANCELLED: "Cancelled"
} as const;

export const saleType = {
  UTILITY: "Utility",
  TOKENIZATION: "Tokenization",
  GAME: "Game",
  MEME: "Meme"
} as const;

export type SaleType = typeof saleType[keyof typeof saleType];
export type Status = typeof status[keyof typeof status]

export interface SaleProps {
  icon: string;
  name: string;
  amountBNB: number;
  liquidity: number;
  lockup: number;
  startTime?: BigNumber;
  endTime?: BigNumber;
  isEnd: boolean;
  status: Status;
  saleType : SaleType;
}