import type { ShadowId } from '@/data';
import { shadows } from '@/data';

export function getShadowValueById(shadowId: ShadowId) {
  const shadowData = shadows.find(({ id }) => id === shadowId);

  return shadowData ? shadowData.value : 'unset';
}
