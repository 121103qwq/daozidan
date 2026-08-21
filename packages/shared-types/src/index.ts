export type TradeSide = "BUY" | "SELL";

export interface TradeOrder {
  id: string;
  itemId: string;
  side: TradeSide;
  quantity: number;
  limitPrice: number;
  createdAt: Date;
}

export interface TradingSignal {
  itemId: string;
  action: TradeSide | "HOLD";
  confidence: number;
  reasons: string[];
}
