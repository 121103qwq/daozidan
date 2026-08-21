# 刀子弹 (DaoZiDan)

Delta Force market quantitative assistant.

## Vision

Build a quantitative analysis platform for Delta Force ammunition trading:

- Market data collection
- Price analysis
- Trading signals
- Risk management
- Paper trading / simulation
- Manual execution workflow

## Architecture

```
market-data
    ↓
strategy-engine
    ↓
risk-engine
    ↓
order-engine
    ↓
execution-core
    ↓
simulation / manual confirmation
```

## Safety boundary

This project does not implement game input automation, memory reading, packet interception, or anti-cheat bypass.

## Roadmap

- [ ] Monorepo setup
- [ ] Shared TypeScript types
- [ ] Mock market simulator
- [ ] Strategy engine
- [ ] Backtesting
- [ ] Dashboard
- [ ] API service
