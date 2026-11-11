export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

export function toTitleCase(text: string): string {
  return text.replace(
    /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
}

export function toSentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower
    .replace(/(^\s*[a-z])|([.!?…]\s+[a-z])/g, (m) => m.toUpperCase())
    .replace(/\bi\b/g, "I");
}
