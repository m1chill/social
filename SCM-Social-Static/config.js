/*
 * DEINE PROFIL-EINSTELLUNGEN
 * Hier nur die Werte ändern. Nicht benötigte Social-Links einfach leer lassen.
 */
window.SOCIAL_PROFILE = {
  // Profil
  username: "deinname",
  displayName: "Dein Name",
  avatar: "", // z. B. "https://..." oder "./avatar.png"
  status: "online", // online | idle | dnd | offline
  role: "SCM Teammitglied",
  roleColor: "#818cf8",
  bio: "Hier kannst du deine Beschreibung eintragen.\nAuch ein Zeilenumbruch ist möglich.",

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
    tiktok:     { url: "", handle: "" },
    instagram:  { url: "", handle: "" },
    x:          { url: "", handle: "" },
    spotify:    { url: "", handle: "" },
    steam:      { url: "", handle: "" },
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
