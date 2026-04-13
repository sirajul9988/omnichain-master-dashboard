# The Master Dashboard (Phase 2: The Forge)

This repository serves as the command center for the **Alex000115** protocol ecosystem. It provides a professional UI/UX layer for interacting with the repositories developed in Phase 1. By centralizing disparate functions—such as claiming escrow payments, trading on private dark pools, and managing ZK-identities—it creates a seamless user experience for decentralized finance.

## Core Features
* **Protocol Integration:** Pre-built hooks for interacting with the `FreelanceEscrow`, `ZK-DarkPool`, and `LensReputation` contracts.
* **Multi-Chain Connectivity:** Powered by Wagmi and RainbowKit for instant switching between Base, Arbitrum, and Ethereum.
* **Real-time Analytics:** WebSocket-based tracking for trade volumes and escrow status updates.
* **Flat Architecture:** All logic, styles, and components reside in the root directory for maximum portability.

[Image of a professional Web3 dashboard showing multi-protocol integration and asset tracking]

## Logic Flow
1. **Connect:** User authenticates via WalletConnect or MetaMask.
2. **Fetch:** The dashboard queries the `IdentityState` contract to load the user's ZK-Reputation.
3. **Interact:** User can release a milestone in the `FreelanceEscrow` or submit a private order to the `DarkPool`.
4. **Sync:** Subgraph integration ensures the UI reflects on-chain changes within seconds.

## Setup
1. `npm install`
2. Configure `.env.local` with your RPC provider keys.
3. `npm run dev`
