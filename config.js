/*
 * DEINE PROFIL-EINSTELLUNGEN
 * Hier nur die Werte ändern. Nicht benötigte Social-Links einfach leer lassen.
 */
window.SOCIAL_PROFILE = {
  // Profil
  username: "m1chill",
  displayName: "M1chill",
  avatar: "", // z. B. "https://..." oder "./avatar.png"
  status: "online", // online | idle | dnd | offline
  role: "Socials",
  roleColor: "#818cf8",
  bio: ".",

  // Darstellung: gunslol | glass | minimal
  cardStyle: "gunslol",
  themeColor: "#818cf8",

  // Hintergrund-Einstellungen
  // Das Bild/Video wird automatisch anhand des Dateinamens erkannt:
  // background.mp4 / background.gif / background.png / background.webp usw.
  backgroundBlur: 0,          // 0 bis ca. 20 Pixel
  backgroundOverlayOpacity: 0.4, // 0 = transparent, 1 = komplett schwarz

  // Musik-Einstellungen
  musicEnabled: true,
  musicTitle: "Mein Song",
  musicVolume: 50, // 0 bis 100

  // Social-Media-Links (URL eintragen; leer = Button wird nicht angezeigt)
  // Verfügbare Plattformen: discord, twitch, youtube, tiktok, instagram,
  // x, spotify, steam, github, kick, soundcloud
  links: {
    discord:    { url: "", handle: "" },
    twitch:     { url: "", handle: "" },
    youtube:    { url: "", handle: "" },
    tiktok:     { url: "", handle: "https://www.tiktok.com/@m1chill_" },
    instagram:  { url: "", handle: "https://www.instagram.com/m1chill_/" },
    x:          { url: "", handle: "" },
    spotify:    { url: "", handle: "https://open.spotify.com/intl-de/artist/5bJbYpIOmxvMxjIvc2gOBp?si=BUB0GdwHSum48WEFPmhGTw" },
    steam:      { url: "", handle: "https://steamcommunity.com/profiles/76561199509607824/" },
    github:     { url: "", handle: "" },
    kick:       { url: "", handle: "" },
    soundcloud: { url: "", handle: "" }
  },

  // Zusätzliche eigene Links bei Bedarf ergänzen
  customLinks: [
    // { title: "Meine Website", url: "https://example.com", handle: "example.com" }
  ],

  // Optionaler kleiner Text ganz unten in der Profilkarte
  footerText: "",
  footerUrl: ""
};
