const QUEUE_KEY = 'beeledger_offline_harvests';

// Save harvest locally when offline
export function saveHarvestOffline(harvestData) {
  const existing = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
  existing.push({ ...harvestData, timestamp: new Date().toISOString() });
  localStorage.setItem(QUEUE_KEY, JSON.stringify(existing));
}

// Retrieve pending offline harvests
export function getPendingHarvests() {
  return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
}

// Sync offline queue to backend/blockchain when connectivity returns
export async function syncOfflineData(syncApiCallback) {
  const pending = getPendingHarvests();
  if (pending.length === 0) return;

  for (const item of pending) {
    await syncApiCallback(item);
  }

  localStorage.removeItem(QUEUE_KEY);
}