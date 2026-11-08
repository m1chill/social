/* SCM Social – statische Profilseite (ohne Server / API) */

const PLATFORM_ICON_PATHS = {"discord":"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z","twitch":"M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z","youtube":"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z","tiktok":"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z","instagram":"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z","x":"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z","spotify":"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z","steam":"M11.979 0C5.642 0 .467 4.908.031 11.131l6.732 2.778a3.57 3.57 0 0 1 2.05-.639c.22 0 .434.02.641.059l3.056-4.434a3.57 3.57 0 0 1-.035-.494c0-1.977 1.602-3.58 3.58-3.58s3.58 1.603 3.58 3.58c0 1.977-1.602 3.58-3.58 3.58-.22 0-.434-.02-.64-.059l-3.056 4.433c.018.16.035.324.035.495 0 1.977-1.603 3.58-3.58 3.58a3.576 3.576 0 0 1-3.541-3.097L.552 16.539C2.08 20.916 6.643 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm-4.32 17.653c-.31.127-.648.196-.995.196-.757 0-1.442-.323-1.928-.84l2.923 1.205v-.561zm7.902-7.25c1.19 0 2.155-.965 2.155-2.155s-.965-2.155-2.155-2.155-2.155.965-2.155 2.155.965 2.155 2.155 2.155zm-7.902 4.79c1.19 0 2.155-.965 2.155-2.155s-.965-2.155-2.155-2.155c-.247 0-.482.043-.704.12l1.644.679a1.43 1.43 0 0 1 .485 1.971 1.435 1.435 0 0 1-1.971.485l-1.644-.679c.08.725.688 1.289 1.43 1.289z","github":"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z","kick":"M19.34 2.25H4.66C3.33 2.25 2.25 3.33 2.25 4.66v14.68c0 1.33 1.08 2.41 2.41 2.41h14.68c1.33 0 2.41-1.08 2.41-2.41V4.66c0-1.33-1.08-2.41-2.41-2.41zm-9.8 14.54H7.28V7.21h2.26v9.58zm7.18 0h-2.58l-2.9-4.2 2.72-3.88h2.52l-2.67 3.75 2.91 4.33z","soundcloud":"M1.175 12.225c-.051 0-.094.045-.101.1l-.278 2.434.278 2.378c.007.056.05.098.101.098.056 0 .101-.042.108-.098l.307-2.378-.307-2.434c-.007-.055-.052-.1-.108-.1zm1.189-.884c-.063 0-.116.05-.122.113l-.337 3.318.337 3.217c.006.063.059.113.122.113.064 0 .118-.05.124-.113l.373-3.217-.373-3.318c-.006-.063-.06-.113-.124-.113zm1.205-.285c-.074 0-.134.058-.14.133l-.336 3.603.336 3.475c.006.074.066.133.14.133.076 0 .136-.059.143-.133l.374-3.475-.374-3.603c-.007-.075-.067-.133-.143-.133zm1.218-.84c-.085 0-.154.068-.161.153l-.335 4.443.335 4.315c.007.085.076.153.161.153.086 0 .157-.068.163-.153l.374-4.315-.374-4.443c-.006-.085-.077-.153-.163-.153zm1.23-.385c-.097 0-.175.078-.182.176l-.335 4.828.335 4.7c.007.098.085.176.182.176.097 0 .176-.078.183-.176l.373-4.7-.373-4.828c-.007-.098-.086-.176-.183-.176zm1.242-1.01c-.108 0-.196.088-.203.197l-.335 5.838.335 5.71c.007.109.095.197.203.197.108 0 .197-.088.204-.197l.373-5.71-.373-5.838c-.007-.109-.096-.197-.204-.197zm1.253.308c-.12 0-.216.097-.224.218l-.335 5.53.335 5.402c.008.121.104.218.224.218.12 0 .216-.097.225-.218l.372-5.402-.372-5.53c-.009-.121-.105-.218-.225-.218zm1.266-.827c-.131 0-.237.106-.245.238l-.335 6.357.335 6.23c.008.132.114.238.245.238.131 0 .237-.106.245-.238l.373-6.23-.373-6.357c-.008-.132-.114-.238-.245-.238zm1.278-.504c-.142 0-.257.116-.266.259l-.335 6.861.335 6.734c.009.143.124.259.266.259.142 0 .257-.116.266-.259l.373-6.734-.373-6.861c-.009-.143-.124-.259-.266-.259zm1.289-.14c-.154 0-.278.125-.287.28l-.334 7.001.334 6.874c.009.155.133.28.287.28.154 0 .278-.125.287-.28l.373-6.874-.373-7.001c-.009-.155-.133-.28-.287-.28zm1.488-2.613c-.159 0-.288.13-.298.291l-.334 9.613.334 9.486c.01.161.139.291.298.291.159 0 .288-.13.297-.291l.374-9.486-.374-9.613c-.009-.161-.138-.291-.297-.291zm7.424 5.344c-.496 0-.965.115-1.393.315-.333-2.684-2.585-4.767-5.35-4.767-.348 0-.687.034-1.018.098-.204.04-.371.182-.416.386l-.286 1.306v11.838l.348.069c.437.086.892.133 1.372.133h6.743c2.408 0 4.368-1.96 4.368-4.368s-1.96-4.368-4.368-4.368z"};

const PLATFORM_META = [
  { id: "discord", name: "Discord" },
  { id: "twitch", name: "Twitch" },
  { id: "youtube", name: "YouTube" },
  { id: "tiktok", name: "TikTok" },
  { id: "instagram", name: "Instagram" },
  { id: "x", name: "X / Twitter" },
  { id: "spotify", name: "Spotify" },
  { id: "steam", name: "Steam" },
  { id: "github", name: "GitHub" },
  { id: "kick", name: "Kick" },
  { id: "soundcloud", name: "SoundCloud" }
];

const BACKGROUND_VIDEO_EXTENSIONS = ["mp4", "webm", "ogv", "mov", "m4v"];
const BACKGROUND_IMAGE_EXTENSIONS = ["gif", "png", "jpg", "jpeg", "webp", "avif", "svg", "bmp"];
const MUSIC_EXTENSIONS = ["mp3", "ogg", "oga", "opus", "wav", "m4a", "aac", "flac", "weba"];
const PROFILE_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "gif", "avif", "apng", "svg", "bmp"];

const DEFAULT_AVATAR = "https://cdn.discordapp.com/embed/avatars/0.png";
const byId = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function safeColor(value, fallback = "#818cf8") {
  const color = String(value || "").trim();
  // Die Profil-Styles verwenden Hex-Farbwerte auch mit Alpha-Suffixen.
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  if (/^#[0-9a-f]{3}$/i.test(color)) return `#${color.slice(1).split("").map((part) => part + part).join("")}`;
  return fallback;
}

function safeUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const parsed = new URL(raw, window.location.href);
    if (!["http:", "https:"].includes(parsed.protocol)) return "";
    return parsed.href;
  } catch {
    return "";
  }
}

async function assetExists(fileName) {
  try {
    const response = await fetch(`./${fileName}`, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function findAsset(baseName, extensions) {
  // Die Prüfungen laufen parallel; die Reihenfolge der Liste entscheidet bei mehreren Treffern.
  const found = await Promise.all(extensions.map(async (extension) => {
    const fileName = `${baseName}.${extension}`;
    return (await assetExists(fileName)) ? fileName : null;
  }));
  return found.find(Boolean) || "";
}

function platformIcon(platform, color) {
  const path = PLATFORM_ICON_PATHS[platform] || "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 3v6l5 3 1-1.7-4-2.3V7Z";
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="${escapeHtml(color)}" aria-hidden="true"><path d="${path}"/></svg>`;
}

function normalizedHandle(platform, handle) {
  const value = String(handle || "").trim();
  if (!value) return "";
  const supportsAt = ["discord", "twitch", "x", "tiktok", "instagram", "youtube", "github"];
  return supportsAt.includes(platform) && !value.startsWith("@") ? `@${value}` : value;
}

function buildSocialLink(link, platform, title, themeColor) {
  const url = safeUrl(link?.url);
  if (!url) return "";
  const handle = normalizedHandle(platform, link?.handle);
  const displayTitle = link?.title || title || "Link öffnen";
  return `
    <a class="social-link-btn" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
      <span class="social-btn-left">
        ${platformIcon(platform, themeColor)}
        <span class="social-btn-titles">
          <span class="social-btn-title">${escapeHtml(displayTitle)}</span>
          ${handle ? `<span class="social-btn-handle">${escapeHtml(handle)}</span>` : ""}
        </span>
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
    </a>`;
}

function updateAudioState(audio, playing) {
  byId("audioEqualizer").classList.toggle("playing", playing);
  byId("audioIcon").textContent = playing ? "Ⅱ" : "♫";
  byId("audioButton").setAttribute("aria-label", playing ? "Musik pausieren" : "Musik abspielen");
}

function updateVideoSoundState(video, muted) {
  byId("videoEqualizer").classList.toggle("playing", !muted);
  byId("videoSoundTitle").textContent = muted ? "Video-Ton stumm" : "Video-Audio aktiv";
  byId("videoSoundIcon").textContent = muted ? "♫" : "Ⅱ";
  byId("videoSoundButton").setAttribute("aria-label", muted ? "Video-Ton einschalten" : "Video-Ton stummschalten");
}

async function initializeSocialPage() {
  const profile = window.SOCIAL_PROFILE || {};
  const themeColor = safeColor(profile.themeColor || profile.roleColor);
  const roleColor = safeColor(profile.roleColor || themeColor, themeColor);
  const cardStyle = ["gunslol", "glass", "minimal"].includes(profile.cardStyle) ? profile.cardStyle : "gunslol";
  const blur = Math.max(0, Math.min(30, Number(profile.backgroundBlur) || 0));
  const overlayOpacity = Math.max(0, Math.min(1, Number(profile.backgroundOverlayOpacity ?? 0.4)));
  const musicVolume = Math.max(0, Math.min(100, Number(profile.musicVolume ?? 50))) / 100;

  document.title = profile.displayName ? `${profile.displayName} – Socials` : "Social-Profil";
  document.documentElement.style.setProperty("--social-theme", themeColor);

  // Profilinformationen. pb.* im Repository-Hauptverzeichnis hat Vorrang vor dem optionalen config.js-Fallback.
  byId("displayName").textContent = profile.displayName || "m1chill";
  byId("username").textContent = `@${String(profile.username || "m1chill").replace(/^@/, "")}`;
  const detectedAvatar = await findAsset("pb", PROFILE_IMAGE_EXTENSIONS);
  const avatarSource = detectedAvatar ? `./${detectedAvatar}` : (safeUrl(profile.avatar) || DEFAULT_AVATAR);
  byId("avatar").src = avatarSource;
  byId("avatar").alt = profile.displayName ? `Profilbild von ${profile.displayName}` : "Profilbild";
  byId("avatar").addEventListener("error", () => {
    if (byId("avatar").src !== DEFAULT_AVATAR) byId("avatar").src = DEFAULT_AVATAR;
  }, { once: true });

  const status = String(profile.status || "online").toLowerCase();
  const statusColors = { online: "#22c55e", idle: "#f59e0b", dnd: "#ef4444", offline: "#71717a" };
  byId("statusIndicator").style.background = statusColors[status] || statusColors.online;
  byId("statusIndicator").title = `Status: ${status}`;

  const card = byId("profileCard");
  card.classList.remove("card-style-gunslol", "card-style-glass", "card-style-minimal");
  card.classList.add(`card-style-${cardStyle}`);
  card.style.borderColor = `${themeColor}66`;
  card.style.boxShadow = `0 25px 60px rgba(0,0,0,0.7), 0 0 35px ${themeColor}22`;
  byId("avatar").style.border = `3px solid ${themeColor}`;
  byId("avatar").style.boxShadow = `0 0 25px ${themeColor}66`;

  const role = String(profile.role || "").trim();
  byId("rolePill").hidden = !role;
  byId("rolePill").textContent = role ? `🛡️ ${role}` : "";
  byId("rolePill").style.color = roleColor;
  byId("rolePill").style.background = `${roleColor}22`;
  byId("rolePill").style.border = `1px solid ${roleColor}55`;

  const bio = String(profile.bio || "").trim();
  byId("bioText").hidden = !bio;
  byId("bioText").textContent = bio;

  // Social-Links in der Reihenfolge der Plattformliste
  const links = profile.links || {};
  const socialMarkup = PLATFORM_META.map((platform) =>
    buildSocialLink(links[platform.id], platform.id, platform.name, themeColor)
  );
  (Array.isArray(profile.customLinks) ? profile.customLinks : []).forEach((custom) => {
    socialMarkup.push(buildSocialLink(custom, "custom", custom?.title || "Eigener Link", themeColor));
  });
  byId("socialLinks").innerHTML = socialMarkup.filter(Boolean).join("");
  byId("socialLinks").hidden = !socialMarkup.some(Boolean);

  const footerText = String(profile.footerText || "").trim();
  const footerUrl = safeUrl(profile.footerUrl);
  if (footerText) {
    byId("profileFooter").hidden = false;
    byId("profileFooter").innerHTML = footerUrl
      ? `<a href="${escapeHtml(footerUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(footerText)}</a>`
      : escapeHtml(footerText);
  }

  // Dateien mit festen Namen im Repository-Hauptverzeichnis finden.
  const [videoFile, imageFile, musicFile] = await Promise.all([
    findAsset("background", BACKGROUND_VIDEO_EXTENSIONS),
    findAsset("background", BACKGROUND_IMAGE_EXTENSIONS),
    findAsset("backgroundmusic", MUSIC_EXTENSIONS)
  ]);

  const backgroundLayer = byId("backgroundLayer");
  backgroundLayer.innerHTML = "";
  let backgroundVideo = null;

  if (videoFile) {
    backgroundVideo = document.createElement("video");
    backgroundVideo.className = "social-bg-video";
    backgroundVideo.src = `./${videoFile}`;
    backgroundVideo.autoplay = true;
    backgroundVideo.loop = true;
    backgroundVideo.playsInline = true;
    backgroundVideo.muted = true; // Autoplay ist in Browsern normalerweise nur stumm erlaubt.
    backgroundVideo.preload = "auto";
    backgroundVideo.style.filter = `blur(${blur}px)`;
    backgroundLayer.appendChild(backgroundVideo);
    backgroundVideo.play().catch(() => {});
  } else if (imageFile) {
    const backgroundImage = document.createElement("img");
    backgroundImage.className = "social-bg-image";
    backgroundImage.src = `./${imageFile}`;
    backgroundImage.alt = "";
    backgroundImage.style.filter = `blur(${blur}px)`;
    backgroundLayer.appendChild(backgroundImage);
  } else {
    const gradient = document.createElement("div");
    gradient.className = "social-bg-gradient";
    backgroundLayer.appendChild(gradient);
  }

  byId("backgroundOverlay").style.backgroundColor = `rgba(0, 0, 0, ${overlayOpacity})`;
  byId("backgroundOverlay").style.backdropFilter = blur ? `blur(${blur}px)` : "none";
  byId("backgroundOverlay").style.webkitBackdropFilter = blur ? `blur(${blur}px)` : "none";

  // Separate Musikdatei: backgroundmusic.<Endung>
  let audio = null;
  if (profile.musicEnabled !== false && musicFile) {
    audio = document.createElement("audio");
    audio.src = `./${musicFile}`;
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = musicVolume;
    document.body.appendChild(audio);

    byId("audioTitle").textContent = profile.musicTitle || "Hintergrundmusik";
    byId("audioButton").hidden = false;
    byId("audioButton").addEventListener("click", async () => {
      if (audio.paused) {
        try { await audio.play(); } catch { /* Browser kann Wiedergabe blockieren. */ }
      } else {
        audio.pause();
      }
      updateAudioState(audio, !audio.paused);
    });
    audio.addEventListener("play", () => updateAudioState(audio, true));
    audio.addEventListener("pause", () => updateAudioState(audio, false));

    // Autoplay versuchen; falls der Browser blockiert, startet die Musik bei der ersten Interaktion.
    audio.play().catch(() => {});
    const startMusicAfterGesture = () => {
      if (audio.paused) audio.play().catch(() => {});
      window.removeEventListener("pointerdown", startMusicAfterGesture);
      window.removeEventListener("keydown", startMusicAfterGesture);
    };
    window.addEventListener("pointerdown", startMusicAfterGesture, { once: true, passive: true });
    window.addEventListener("keydown", startMusicAfterGesture, { once: true });
  } else if (backgroundVideo) {
    // Wenn keine eigene Musikdatei existiert, kann stattdessen der Videoton genutzt werden.
    byId("videoSoundButton").hidden = false;
    updateVideoSoundState(backgroundVideo, true);
    byId("videoSoundButton").addEventListener("click", () => {
      backgroundVideo.muted = !backgroundVideo.muted;
      if (!backgroundVideo.muted) {
        backgroundVideo.volume = musicVolume || 0.5;
        backgroundVideo.play().catch(() => {});
      }
      updateVideoSoundState(backgroundVideo, backgroundVideo.muted);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSocialPage().catch((error) => {
    console.error("SCM Social konnte nicht initialisiert werden:", error);
    byId("displayName").textContent = "Profil konnte nicht geladen werden";
    byId("bioText").hidden = false;
    byId("bioText").textContent = "Bitte prüfe die config.js-Datei.";
  });
});
