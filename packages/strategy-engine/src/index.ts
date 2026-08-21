import type { TradingSignal } from "@daozidan/shared-types";

export function createSignal(): TradingSignal {
  return {
    itemId: "unknown",
    action: "HOLD",
    confidence: 0,
    reason: ["strategy_not_configured"]
  };
}
