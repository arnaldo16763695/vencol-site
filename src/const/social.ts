import type { Social } from "../types/social";

import X from "../assets/svg/x.svg";
import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import Whatsapp from "../assets/svg/whatsapp.svg";

export const SOCIAL: Social[] = [
  {
    id: "x",
    name: "X",
    url: "https://x.com",
    label: "Visitar perfil de InfoLaVelada en X",
    image: {
      logo: X,
      width: 200,
      height: 200,
    },
  },

  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    label: "Visitar perfil de InfoLaVelada en Instagram",
    image: {
      logo: Instagram,
      width: 200,
      height: 200,
    },
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com",
    label: "Visitar perfil de InfoLaVelada en Facebook",
    image: {
      logo: Facebook,
      width: 200,
      height: 200,
    },
  },

  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/+573104932587",
    label: "Visitar perfil de InfoLaVelada en WhatsApp",
    image: {
      logo: Whatsapp,
      width: 200,
      height: 200,
    },
  },
];
