import axios from 'axios';
import { config } from '../../../config/env';
import { UserPreferences } from './types';

const baseUrl = config.jusfyBackend.apiUrl;
const url = `${baseUrl}/user-preferences`;

export async function getUserPreferences(
  key?: keyof UserPreferences,
): Promise<UserPreferences> {
  const params = key ? { key } : undefined;
  const { data } = await axios.get<UserPreferences>(url, { params });
  return data;
}

export async function updateUserPreferences(
  patch: Partial<UserPreferences>,
): Promise<void> {
  await axios.patch<void>(url, patch);
}
