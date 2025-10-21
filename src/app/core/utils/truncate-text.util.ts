export function truncateText(text: string, max = 120): string {
  if (!text) return '';
  return text.length > max ? text.slice(0, max) + '…' : text;
}