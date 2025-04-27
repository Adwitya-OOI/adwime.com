// GPT Helper placeholder 
import { gptConfig } from '../config/config';

export const generateRecommendations = async (userPreferences) => {
  const response = await fetch(gptConfig.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gptConfig.apiKey}`,
    },
    body: JSON.stringify({ preferences: userPreferences }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate recommendations');
  }

  return response.json();
};