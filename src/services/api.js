const API_BASE_URL = 'http://localhost:5000/api';

export const fetchBatchDetails = async (batchId) => {
  const res = await fetch(`${API_BASE_URL}/verify/${batchId}`);
  if (!res.ok) throw new Error('Batch not found');
  return res.json();
};

export const submitHarvest = async (harvestData) => {
  const res = await fetch(`${API_BASE_URL}/harvest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(harvestData)
  });
  return res.json();
};

export const submitLabTest = async (labData) => {
  const res = await fetch(`${API_BASE_URL}/lab-test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(labData)
  });
  return res.json();
};

export const submitBlend = async (blendData) => {
  const res = await fetch(`${API_BASE_URL}/blend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blendData)
  });
  return res.json();
};

export const fetchLiveIoT = async () => {
  const res = await fetch(`${API_BASE_URL}/iot/live`);
  return res.json();
};