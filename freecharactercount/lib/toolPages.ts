import { LIMITS_VERIFIED_ON } from "@/lib/site";

export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolPage = {
  slug: string;
  navLabel: string;
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  primaryKeyword: string;
  focusLimitId?: string;
  focusMode?:
    | "no-spaces"
    | "words"
    | "sentences"
    | "paragraphs"
    | "reading-time"
    | "case"
    | "limits-hub";
  limitLabel?: string;
  limitValue?: number;
  showLimitsTable?: boolean;
  intro: string;
  tips: string[];
  examples: string[];
  faq: ToolFaq[];
  relatedSlugs: string[];
};

export const TOOL_PAGES: ToolPage[] = [
  {
    slug: "twitter-character-counter",
    navLabel: "Twitter / X counter",
    title: "Twitter Character Counter — Free X Post Limit Checker",
    metaDescription:
      "Free Twitter character counter for the 280-character X limit. Count characters as you type, see remaining space, and stay under the post cap.",
    h1: "Twitter Character Counter",
    lead: "Check your X / Twitter post against the 280-character limit while you write.",
    primaryKeyword: "twitter character counter",
    focusLimitId: "x",
    limitLabel: "X / Twitter post",
    limitValue: 280,
    intro:
      "X (formerly Twitter) still caps most posts at 280 characters. This twitter character counter shows your live count, remaining characters, and a progress bar so you can trim before you publish. Links and media can affect how X displays a post; use this tool to keep the typed text within the hard limit.",
    tips: [
      "Draft long thoughts as a thread: keep each post under 280 characters.",
      "URLs often display shortened; still check the final text length before posting.",
      "Emojis count as characters in this counter the same way JavaScript string length does—verify edge cases in the X composer if you rely on complex emoji sequences.",
    ],
    examples: [
      "A clear CTA under 280 characters beats a cut-off half sentence.",
      "If you are over, cut filler words first, then hashtags you do not need.",
    ],
    faq: [
      {
        question: "How many characters is a tweet on X?",
        answer:
          "Most standard X posts allow up to 280 characters. Higher limits may apply on some paid tiers; verify in the X composer for your account.",
      },
      {
        question: "Do spaces count toward the Twitter character limit?",
        answer:
          "Yes. Spaces, punctuation, and letters all count toward the 280-character cap.",
      },
      {
        question: "Does this tool upload my draft?",
        answer:
          "No. Counting runs entirely in your browser. Your text never leaves your device.",
      },
    ],
    relatedSlugs: [
      "instagram-bio-character-counter",
      "linkedin-character-counter",
      "sms-character-counter",
    ],
  },
  {
    slug: "instagram-bio-character-counter",
    navLabel: "Instagram bio counter",
    title: "Instagram Bio Character Counter — 150 Limit Checker",
    metaDescription:
      "Free Instagram bio character counter for the 150-character limit. See remaining characters and craft a clear bio without guessing.",
    h1: "Instagram Bio Character Counter",
    lead: "Stay inside Instagram’s 150-character bio limit with a live count and progress bar.",
    primaryKeyword: "instagram bio character counter",
    focusLimitId: "ig-bio",
    limitLabel: "Instagram bio",
    limitValue: 150,
    intro:
      "Instagram bios are short by design. This instagram bio character counter tracks the 150-character limit so you can fit a name, role, and link tease without truncation. Line breaks still consume characters, so draft here first, then paste into Instagram.",
    tips: [
      "Lead with who you are, then what you offer, then a clear next step.",
      "Use line breaks sparingly—they cost characters and can look uneven on mobile.",
      "Keep one primary keyword people associate with you; save the rest for the caption or Highlights.",
    ],
    examples: [
      "Product designer · NYC · Tips on clean UI — link below",
      "Coffee shop · Open daily 7–3 · Order ahead ↓",
    ],
    faq: [
      {
        question: "What is the Instagram bio character limit?",
        answer: `Instagram bios allow up to 150 characters. Limit verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Do line breaks count in an Instagram bio?",
        answer:
          "Yes. Each line break uses characters in the bio field, so keep formatting tight.",
      },
      {
        question: "Can I check my bio without posting?",
        answer:
          "Yes. Paste your draft here, adjust until you have characters remaining, then update Instagram.",
      },
    ],
    relatedSlugs: [
      "instagram-caption-character-counter",
      "twitter-character-counter",
      "seo-title-length-checker",
    ],
  },
  {
    slug: "instagram-caption-character-counter",
    navLabel: "Instagram caption counter",
    title: "Instagram Caption Character Counter — 2,200 Limit",
    metaDescription:
      "Free Instagram caption character counter for the 2,200-character limit. Track length, plan hashtags, and avoid cut-off captions.",
    h1: "Instagram Caption Character Counter",
    lead: "Measure Instagram captions against the 2,200-character limit before you post.",
    primaryKeyword: "instagram caption character limit",
    focusLimitId: "ig-caption",
    limitLabel: "Instagram caption",
    limitValue: 2200,
    intro:
      "Instagram captions can run long, but they still hit a hard 2,200-character ceiling. Use this counter to balance storytelling, CTAs, and hashtags without discovering the cut-off after publishing. Put the most important sentence first—many feeds show a short preview before “more.”",
    tips: [
      "Front-load the hook; place hashtags after the main message.",
      "Leave a small buffer under 2,200 so last-minute edits do not push you over.",
      "If you need more detail, move deep links or long lists into a carousel slide or bio link.",
    ],
    examples: [
      "Short caption: one benefit + one CTA under 300 characters.",
      "Long caption: story, proof, CTA, then a compact hashtag block.",
    ],
    faq: [
      {
        question: "What is the Instagram caption character limit?",
        answer: `Instagram captions allow up to 2,200 characters. Limit verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Do hashtags count toward the caption limit?",
        answer:
          "Yes. Hashtags and spaces in the caption count toward the 2,200-character total.",
      },
      {
        question: "Is there a separate limit for hashtags?",
        answer:
          "Instagram also limits how many hashtags you can attach; keep captions readable even when you are under 2,200 characters.",
      },
    ],
    relatedSlugs: [
      "instagram-bio-character-counter",
      "linkedin-character-counter",
      "meta-description-length-checker",
    ],
  },
  {
    slug: "linkedin-character-counter",
    navLabel: "LinkedIn counter",
    title: "LinkedIn Character Counter — Post Limit Checker",
    metaDescription:
      "Free LinkedIn character counter for the 3,000-character post limit. See remaining characters and plan where “see more” cuts your text.",
    h1: "LinkedIn Character Counter",
    lead: "Check LinkedIn posts against the 3,000-character limit and write for the “see more” preview.",
    primaryKeyword: "linkedin post character limit",
    focusLimitId: "linkedin",
    limitLabel: "LinkedIn post",
    limitValue: 3000,
    intro:
      "LinkedIn posts allow up to about 3,000 characters. Readers often only see the opening lines before tapping “see more,” so this linkedin character counter helps you stay under the cap while keeping the first lines strong. Draft here, then paste into LinkedIn when the count looks right.",
    tips: [
      "Treat the first two lines as the headline—interest must land before the fold.",
      "Use short paragraphs; walls of text get skipped even when under 3,000 characters.",
      "Save the CTA for after the key insight so the preview still teaches something.",
    ],
    examples: [
      "Hook in line 1, proof in lines 2–4, ask or CTA at the end.",
      "If you are near 3,000, cut repeated phrases before cutting examples.",
    ],
    faq: [
      {
        question: "What is the LinkedIn post character limit?",
        answer: `LinkedIn posts are commonly limited to 3,000 characters. Limit verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Where does LinkedIn cut the preview?",
        answer:
          "The “see more” cutoff varies by device. Keep the opening lines self-contained so the preview still makes sense.",
      },
      {
        question: "Does this count LinkedIn article length?",
        answer:
          "This page targets post length. Articles have a different writing surface; use the general character counter for longer drafts.",
      },
    ],
    relatedSlugs: [
      "twitter-character-counter",
      "instagram-caption-character-counter",
      "meta-description-length-checker",
    ],
  },
  {
    slug: "sms-character-counter",
    navLabel: "SMS counter",
    title: "SMS Character Counter — 160 Limit & Segments",
    metaDescription:
      "Free SMS character counter for the 160-character GSM limit. Spot when Unicode shortens segments and keep messages concise.",
    h1: "SMS Character Counter",
    lead: "Track SMS length against the classic 160-character segment before you send.",
    primaryKeyword: "sms character counter",
    focusLimitId: "sms",
    limitLabel: "SMS (GSM)",
    limitValue: 160,
    intro:
      "Standard GSM SMS messages fit 160 characters per segment. If your text includes characters outside the basic GSM set, carriers often switch to Unicode and the practical per-segment limit drops (commonly to 70). This sms character counter highlights the 160 baseline so you can tighten copy for one-segment sends.",
    tips: [
      "Prefer plain letters and numbers when you need a single 160-character segment.",
      "Smart quotes, emojis, and some accents can trigger Unicode segmentation.",
      "For multi-segment campaigns, write the core offer in the first 160 characters.",
    ],
    examples: [
      "Flash sale today 20% off — reply YES to claim. Ends 9pm.",
      "Appointment reminder: Tue 3pm. Reply C to cancel.",
    ],
    faq: [
      {
        question: "How many characters is one SMS?",
        answer: `A standard GSM SMS segment is 160 characters. Unicode messages often use 70-character segments. Baseline verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Do spaces count in SMS?",
        answer:
          "Yes. Every space and punctuation mark counts toward the segment length.",
      },
      {
        question: "Why did my carrier split a short message?",
        answer:
          "Special characters can switch encoding. Simplify the text and re-check the count before resending.",
      },
    ],
    relatedSlugs: [
      "twitter-character-counter",
      "character-count-no-spaces",
      "meta-description-length-checker",
    ],
  },
  {
    slug: "meta-description-length-checker",
    navLabel: "Meta description checker",
    title: "Meta Description Length Checker — ~155–160 Characters",
    metaDescription:
      "Free meta description length checker. Aim for about 155–160 characters, preview fit, and write clearer SERP snippets.",
    h1: "Meta Description Length Checker",
    lead: "Tune meta descriptions to roughly 155–160 characters so search snippets stay readable.",
    primaryKeyword: "meta description length checker",
    focusLimitId: "meta-desc",
    limitLabel: "Meta description",
    limitValue: 160,
    intro:
      "Search engines may rewrite snippets, but a tight meta description still helps. This meta description length checker uses a practical ~160-character guide so you can include the primary benefit and a soft CTA without relying on guesswork. Pixel width varies by device; character count is a reliable drafting rule.",
    tips: [
      "Put the main benefit early; Google may truncate the end on mobile.",
      "Match the page’s real promise—misleading snippets hurt trust and CTR over time.",
      "Write unique descriptions per URL; duplicates waste the SERP opportunity.",
    ],
    examples: [
      "Free character counter: count characters and words instantly. Check social and SEO limits in your browser.",
      "SMS length checker for 160-character segments—draft clearer texts before you send.",
    ],
    faq: [
      {
        question: "How long should a meta description be?",
        answer: `A common drafting range is about 155–160 characters. Guidance verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Will Google always show my meta description?",
        answer:
          "No. Google may generate an alternate snippet from page content. A clear description still improves your odds.",
      },
      {
        question: "Is 160 characters a hard limit?",
        answer:
          "It is a practical drafting limit, not a guarantee. Longer text may be truncated in results.",
      },
    ],
    relatedSlugs: [
      "seo-title-length-checker",
      "instagram-bio-character-counter",
      "character-count-no-spaces",
    ],
  },
  {
    slug: "seo-title-length-checker",
    navLabel: "SEO title checker",
    title: "SEO Title Length Checker — ~60 Character Guide",
    metaDescription:
      "Free SEO title length checker. Draft titles around 60 characters, keep the primary keyword early, and avoid ugly SERP truncation.",
    h1: "SEO Title Length Checker",
    lead: "Check SEO titles against a ~60-character guide before you publish.",
    primaryKeyword: "seo title length checker",
    focusLimitId: "seo-title",
    limitLabel: "SEO title",
    limitValue: 60,
    intro:
      "Title tags influence clicks and relevance. Pixel width differs by result, so this seo title length checker uses a practical ~60-character rule of thumb. Lead with the primary keyword when it still reads naturally, and keep branding short enough that the meaningful part survives truncation.",
    tips: [
      "Front-load the query you want to rank for when it sounds human.",
      "Avoid stuffing every synonym into one title—clarity wins CTR.",
      "Re-check after adding a brand suffix; the extra characters often push you over.",
    ],
    examples: [
      "Character Counter - Free Online Character & Word Count",
      "Twitter Character Counter — Free X Post Limit Checker",
    ],
    faq: [
      {
        question: "How long should an SEO title be?",
        answer: `About 60 characters is a widely used drafting guide. Guidance verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Does Google truncate titles by characters or pixels?",
        answer:
          "Display is closer to pixel width, which varies. Character count remains a simple, useful drafting proxy.",
      },
      {
        question: "Should every page have a unique title?",
        answer:
          "Yes. Unique titles reduce cannibalization confusion and help people recognize the right result.",
      },
    ],
    relatedSlugs: [
      "meta-description-length-checker",
      "twitter-character-counter",
      "instagram-bio-character-counter",
    ],
  },
  {
    slug: "character-count-no-spaces",
    navLabel: "Count without spaces",
    title: "Character Count No Spaces — With & Without Spaces",
    metaDescription:
      "Free character count without spaces. Compare characters with spaces and without side by side while you type or paste.",
    h1: "Character Count No Spaces",
    lead: "See characters with spaces and characters without spaces update live as you type.",
    primaryKeyword: "characters without spaces",
    focusMode: "no-spaces",
    intro:
      "Some forms, contests, and school assignments ask for a character count without spaces. This page highlights both totals at once so you do not have to delete spaces manually or guess. Paste your draft, read the “No spaces” figure, and keep the with-spaces count nearby for platforms that include whitespace.",
    tips: [
      "Confirm whether your assignment wants spaces excluded before you submit.",
      "Line breaks are whitespace—removing spaces alone may not match every rule set.",
      "For SEO or social caps, use the matching platform tool; those limits usually include spaces.",
    ],
    examples: [
      "“Hello world” is 11 characters with spaces and 10 without.",
      "Long essays: check the no-spaces total after your final proofread, not before.",
    ],
    faq: [
      {
        question: "How do you count characters without spaces?",
        answer:
          "Take the full character length and subtract whitespace characters (spaces, tabs, and similar). This tool does that live.",
      },
      {
        question: "Do punctuation marks count when spaces are excluded?",
        answer:
          "Yes. Letters, numbers, and punctuation still count; only whitespace is removed from the no-spaces total.",
      },
      {
        question: "Is this the same as a word count?",
        answer:
          "No. Word count groups tokens. Characters without spaces is still a character total, just without whitespace.",
      },
    ],
    relatedSlugs: [
      "sms-character-counter",
      "seo-title-length-checker",
      "meta-description-length-checker",
      "word-counter",
    ],
  },
  {
    slug: "facebook-character-counter",
    navLabel: "Facebook counter",
    title: "Facebook Character Counter — Post Limit Checker",
    metaDescription:
      "Free Facebook character counter for long posts. Track length against Facebook’s high post cap and keep the opening lines strong.",
    h1: "Facebook Character Counter",
    lead: "Measure Facebook post length live so long updates stay readable before you publish.",
    primaryKeyword: "facebook character counter",
    focusLimitId: "facebook",
    limitLabel: "Facebook post",
    limitValue: 63206,
    intro:
      "Facebook allows very long posts, but readers still decide in the first lines. This facebook character counter tracks your draft against the platform’s high character ceiling so you know you are within the technical limit while you focus on a sharp opening and a clear CTA.",
    tips: [
      "Write the first two lines as if they are the whole post—many people never expand.",
      "Break long updates into short paragraphs for mobile scanning.",
      "If the post is mostly a link share, keep the caption focused on one benefit.",
    ],
    examples: [
      "Story + proof + question works better than a wall of unbroken text.",
      "Near the cap, cut repeated asides before cutting the main point.",
    ],
    faq: [
      {
        question: "What is the Facebook post character limit?",
        answer: `Facebook posts allow a very high character count (about 63,206). Limit verified on ${LIMITS_VERIFIED_ON}.`,
      },
      {
        question: "Do spaces count on Facebook posts?",
        answer:
          "Yes. Spaces and punctuation count toward the total character length.",
      },
      {
        question: "Should I write to the maximum limit?",
        answer:
          "Usually no. Engagement often favors clearer, shorter posts even when the hard limit is high.",
      },
    ],
    relatedSlugs: [
      "linkedin-character-counter",
      "instagram-caption-character-counter",
      "character-limits",
    ],
  },
  {
    slug: "word-counter",
    navLabel: "Word counter",
    title: "Word Counter — Free Online Word Count Tool",
    metaDescription:
      "Free word counter with live word, character, sentence, and paragraph stats. Paste text and see counts update instantly in your browser.",
    h1: "Word Counter",
    lead: "Count words instantly while you draft—characters, sentences, and paragraphs update beside them.",
    primaryKeyword: "word counter",
    focusMode: "words",
    intro:
      "This word counter is for quick drafting checks: essays, captions, scripts, and briefs. Paste your text and read the live word total first, then use characters and readability stats when a platform or assignment needs more than a word count alone. Everything runs in your browser.",
    tips: [
      "Confirm whether your brief counts hyphenated terms as one word or two.",
      "Edit for clarity first; word count targets are easier after the argument is solid.",
      "Pair this page with the sentence or paragraph counters when structure matters more than length.",
    ],
    examples: [
      "A 500-word blog intro often lands near 3–4 short paragraphs.",
      "Social captions may be 20–60 words even when character limits still have room.",
    ],
    faq: [
      {
        question: "How does this word counter count words?",
        answer:
          "It groups letters and numbers into word tokens, including common contractions and hyphenated forms where they match the tokenizer.",
      },
      {
        question: "Are characters counted too?",
        answer:
          "Yes. Characters with and without spaces appear alongside the word total.",
      },
      {
        question: "Is my draft uploaded?",
        answer:
          "No. Counting stays on your device. Closing the tab clears the text from this tool.",
      },
    ],
    relatedSlugs: [
      "sentence-counter",
      "paragraph-counter",
      "reading-time-calculator",
      "character-count-no-spaces",
    ],
  },
  {
    slug: "sentence-counter",
    navLabel: "Sentence counter",
    title: "Sentence Counter — Count Sentences Online Free",
    metaDescription:
      "Free sentence counter. Paste text to count sentences live, plus words and average sentence length for clearer editing.",
    h1: "Sentence Counter",
    lead: "See how many sentences are in your draft and tighten long ones as you edit.",
    primaryKeyword: "sentence counter",
    focusMode: "sentences",
    intro:
      "A sentence counter helps you spot dense passages before readers bounce. Use the live sentence total with average sentence length from the stats panel to break up run-ons, vary rhythm, and keep instructions easy to scan.",
    tips: [
      "If average sentence length climbs past ~20–25 words, split a few long lines.",
      "Questions and short claims can reset attention in marketing copy.",
      "After cutting sentences, re-check word count so the piece still hits any required length.",
    ],
    examples: [
      "Three short sentences often read clearer than one long compound sentence.",
      "List-heavy drafts may show fewer sentences—that can still be fine if each line is clear.",
    ],
    faq: [
      {
        question: "How are sentences detected?",
        answer:
          "The tool splits on common end punctuation patterns. Unusual abbreviations can occasionally affect the split.",
      },
      {
        question: "Does a heading count as a sentence?",
        answer:
          "If a line has no end punctuation, it may be treated as a single sentence-like unit depending on surrounding text.",
      },
      {
        question: "Can I count paragraphs here too?",
        answer:
          "Yes—paragraph totals appear in the stats, and there is a dedicated paragraph counter page.",
      },
    ],
    relatedSlugs: [
      "paragraph-counter",
      "word-counter",
      "reading-time-calculator",
    ],
  },
  {
    slug: "paragraph-counter",
    navLabel: "Paragraph counter",
    title: "Paragraph Counter — Count Paragraphs Online",
    metaDescription:
      "Free paragraph counter. Paste your draft to count paragraphs live and keep structure readable on mobile and desktop.",
    h1: "Paragraph Counter",
    lead: "Count paragraphs as you write so long drafts stay scannable.",
    primaryKeyword: "paragraph counter",
    focusMode: "paragraphs",
    intro:
      "Paragraph structure shapes how fast someone can skim. This paragraph counter updates as you paste or type, helping you avoid walls of text in blogs, emails, and LinkedIn-style posts. Blank-line separated blocks are treated as paragraphs.",
    tips: [
      "On mobile, prefer shorter paragraphs—often 1–3 sentences.",
      "One idea per paragraph keeps editing and linking easier later.",
      "If paragraph count is high but word count is low, you may be over-breaking lines.",
    ],
    examples: [
      "A 800-word article might use 8–14 paragraphs depending on style.",
      "Email tips often work as 3–5 short paragraphs plus a CTA.",
    ],
    faq: [
      {
        question: "How does paragraph counting work?",
        answer:
          "Text split by blank lines (empty line separators) counts as separate paragraphs when those blocks contain content.",
      },
      {
        question: "Do single line breaks create new paragraphs?",
        answer:
          "A single line break inside a block usually stays one paragraph. Use a blank line to separate paragraphs.",
      },
      {
        question: "Should every paragraph be the same length?",
        answer:
          "No. Vary length for rhythm, but keep most paragraphs short enough to skim.",
      },
    ],
    relatedSlugs: [
      "sentence-counter",
      "word-counter",
      "linkedin-character-counter",
    ],
  },
  {
    slug: "reading-time-calculator",
    navLabel: "Reading time calculator",
    title: "Reading Time Calculator — Estimate Minutes to Read",
    metaDescription:
      "Free reading time calculator. Paste text to estimate reading and speaking time from live word count—runs in your browser.",
    h1: "Reading Time Calculator",
    lead: "Estimate how long your draft takes to read or speak before you publish.",
    primaryKeyword: "reading time calculator",
    focusMode: "reading-time",
    intro:
      "Reading time helps set expectations on blogs, newsletters, and scripts. This reading time calculator derives estimates from your live word count using straightforward words-per-minute assumptions, then shows speaking time too so you can plan recordings or presentations.",
    tips: [
      "Treat the number as an estimate—complex topics read slower than light posts.",
      "If the piece is mostly bullet lists, actual reading time may be shorter than prose.",
      "Use speaking time when rehearsing videos or talks based on the same script.",
    ],
    examples: [
      "Around 275 words is roughly one minute of silent reading on this calculator.",
      "The same text takes longer to speak aloud than to read silently.",
    ],
    faq: [
      {
        question: "What reading speed does this use?",
        answer:
          "It estimates silent reading around 275 words per minute and speaking around 180 words per minute.",
      },
      {
        question: "Is reading time the same as word count?",
        answer:
          "No. Word count is the raw total; reading time converts that total into an estimated duration.",
      },
      {
        question: "Does formatting change the estimate?",
        answer:
          "Only through word count. Images and embeds are not timed—add buffer for media-heavy pages.",
      },
    ],
    relatedSlugs: [
      "word-counter",
      "sentence-counter",
      "paragraph-counter",
    ],
  },
  {
    slug: "case-converter",
    navLabel: "Case converter",
    title: "Case Converter — UPPERCASE, lowercase, Title Case",
    metaDescription:
      "Free case converter for UPPERCASE, lowercase, Title Case, and Sentence case. Paste text, convert instantly, then copy—private and browser-based.",
    h1: "Case Converter",
    lead: "Convert text to UPPERCASE, lowercase, Title Case, or Sentence case in one click.",
    primaryKeyword: "case converter",
    focusMode: "case",
    intro:
      "A case converter is handy for headlines, bios, and cleanup after pasting from messy sources. Type or paste below, use the text tools to switch case, then copy the result. Character and word counts stay visible so you can fix casing without losing length checks.",
    tips: [
      "Title Case is useful for headings; Sentence case often reads more naturally in body copy.",
      "After converting, skim proper nouns—automatic casing can miss brand spellings.",
      "Convert first, then run a final character-limit check for the destination platform.",
    ],
    examples: [
      "UPPERCASE for short labels; avoid long all-caps paragraphs.",
      "Sentence case for captions: only the first word and names need capitals.",
    ],
    faq: [
      {
        question: "What case options are included?",
        answer:
          "UPPERCASE, lowercase, Title Case, and Sentence case, plus copy and clear actions.",
      },
      {
        question: "Does conversion change character count?",
        answer:
          "Usually no for Latin letters. Count can change if you also edit or remove characters afterward.",
      },
      {
        question: "Is pasted text stored?",
        answer:
          "No. Conversion runs locally in your browser.",
      },
    ],
    relatedSlugs: [
      "word-counter",
      "seo-title-length-checker",
      "instagram-bio-character-counter",
    ],
  },
  {
    slug: "character-limits",
    navLabel: "Character limits cheat sheet",
    title: "Social Media Character Limits 2026 — Free Cheat Sheet",
    metaDescription:
      "Social media character limits cheat sheet for X, Instagram, LinkedIn, Facebook, SMS, and SEO titles. Verified dates plus free limit checkers.",
    h1: "Social Media Character Limits",
    lead: "A practical cheat sheet of common social, messaging, and SEO character limits—with free checkers for each.",
    primaryKeyword: "social media character limits",
    focusMode: "limits-hub",
    showLimitsTable: true,
    intro:
      "Character limits change, and truncated posts waste reach. This hub lists common caps for social posts, SMS, and SEO snippets, then links to dedicated checkers so you can draft against the exact limit. Re-verify numbers periodically—the date on each limit page is part of the product.",
    tips: [
      "Bookmark the specific platform checker you use weekly, not only this hub.",
      "Draft to a soft buffer under the hard limit so last edits do not overflow.",
      "SEO titles and meta descriptions are display guides, not guarantees Google will show them unchanged.",
    ],
    examples: [
      "X ~280, Instagram bio 150, Instagram caption 2,200, LinkedIn post ~3,000, SMS 160 GSM.",
      "SEO drafting guide: title ~60 characters, meta description ~155–160.",
    ],
    faq: [
      {
        question: "Are these limits exact forever?",
        answer: `No. Platforms change rules. We show a verified-on date (currently ${LIMITS_VERIFIED_ON}) and update when limits shift.`,
      },
      {
        question: "Which limit should I use for Instagram?",
        answer:
          "Bios and captions have different caps. Use the bio checker for profile text and the caption checker for posts.",
      },
      {
        question: "Do SEO limits work like social caps?",
        answer:
          "SEO lengths are practical drafting guides for SERP display. Social apps usually enforce a hard character ceiling.",
      },
    ],
    relatedSlugs: [
      "twitter-character-counter",
      "instagram-bio-character-counter",
      "instagram-caption-character-counter",
      "linkedin-character-counter",
      "facebook-character-counter",
      "sms-character-counter",
      "seo-title-length-checker",
      "meta-description-length-checker",
    ],
  },
];

export const LIMIT_PAGE_BY_PLATFORM_ID: Record<string, string> = {
  x: "twitter-character-counter",
  "ig-bio": "instagram-bio-character-counter",
  "ig-caption": "instagram-caption-character-counter",
  linkedin: "linkedin-character-counter",
  facebook: "facebook-character-counter",
  sms: "sms-character-counter",
  "seo-title": "seo-title-length-checker",
  "meta-desc": "meta-description-length-checker",
};

export function getToolPage(slug: string): ToolPage | undefined {
  return TOOL_PAGES.find((page) => page.slug === slug);
}

export function getRelatedTools(slugs: string[]): ToolPage[] {
  return slugs
    .map((slug) => getToolPage(slug))
    .filter((page): page is ToolPage => Boolean(page));
}
