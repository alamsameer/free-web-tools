export type PlatformLimit = {
  id: string;
  label: string;
  limit: number;
  group: "social" | "seo" | "messaging";
};

export const PLATFORM_LIMITS: PlatformLimit[] = [
  { id: "x", label: "X / Twitter", limit: 280, group: "social" },
  { id: "ig-bio", label: "Instagram bio", limit: 150, group: "social" },
  { id: "ig-caption", label: "Instagram caption", limit: 2200, group: "social" },
  { id: "linkedin", label: "LinkedIn post", limit: 3000, group: "social" },
  { id: "facebook", label: "Facebook post", limit: 63206, group: "social" },
  { id: "sms", label: "SMS", limit: 160, group: "messaging" },
  { id: "seo-title", label: "SEO title", limit: 60, group: "seo" },
  { id: "meta-desc", label: "Meta description", limit: 160, group: "seo" },
];

export type LimitStatus = PlatformLimit & {
  used: number;
  remaining: number;
  percent: number;
  over: boolean;
};

export function getLimitStatuses(characterCount: number): LimitStatus[] {
  return PLATFORM_LIMITS.map((platform) => {
    const percent = Math.min(100, (characterCount / platform.limit) * 100);
    return {
      ...platform,
      used: characterCount,
      remaining: platform.limit - characterCount,
      percent,
      over: characterCount > platform.limit,
    };
  });
}
