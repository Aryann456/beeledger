export const mockBatches = [
  {
    id: "BATCH-2026-8891",
    hiveId: "HIVE-ALPHA-04",
    beekeeper: "Ramesh Patel",
    location: "Anand, Gujarat (22.5645° N, 72.9289° E)",
    harvestDate: "2026-09-15",
    floraSource: "Mustard Flower",
    telemetry: {
      temp: "34.2 °C",
      humidity: "58%",
      weight: "14.5 kg"
    },
    labResult: {
      status: "PASSED",
      purityScore: "99.4%",
      moistureContent: "17.2%",
      certificateHash: "0x7f8a...9c1e"
    },
    genealogy: {
      parentBatches: ["BATCH-2026-8891-A", "BATCH-2026-8891-B"],
      mixingRatio: "60% Floral / 40% Raw"
    },
    blockchainTx: "0x3a2b...4f89"
  }
];