import type { TradeOrder } from "@daozidan/shared-types";

export interface ExecutionAdapter {
  prepare(order: TradeOrder): Promise<void>;
  execute(order: TradeOrder): Promise<{ status: string }>;
}
