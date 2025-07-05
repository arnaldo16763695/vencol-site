type SocialId = "x" | "facebook" | "instagram" | "github" | "youtube" | "twitch" | "tiktok" | "kick";

type SocialName = "X" | "Facebook" | "Instagram" | "GitHub" | "Youtube" | "Twitch" | "TikTok" | "Kick";

export interface Social {
  id: SocialId;
  name: SocialName;
  url: string;
  label: string;
  followers?: string;
  image: {
    logo: any;
    width: number;
    height: number;
  };
}
