import type { ExecutionAdapter } from "@daozidan/execution-core";
import type { TradeOrder } from "@daozidan/shared-types";

export class SimulatedExecutor implements ExecutionAdapter {
  async prepare(_order: TradeOrder) {}

  async execute(order: TradeOrder) {
    return {
      status: `simulated_${order.side.toLowerCase()}_filled`
    };
  }
}
