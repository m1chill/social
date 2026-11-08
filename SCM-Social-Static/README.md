# SCM Social – reine Profilseite für GitHub Pages

Dies ist ausschließlich die öffentliche Profilansicht aus dem SCM-Bot-Projekt. Der Editor, React, Node.js, Backend-API und Datenbank werden nicht benötigt.

## 1. Dateien ins Repository legen

Lade **alle Dateien aus diesem Ordner direkt in das Hauptverzeichnis** deines GitHub-Repositories hoch:

- `index.html`
- `style.css`
- `app.js`
- `config.js`
- optional `pb.png` (oder eine andere unterstützte `pb.*`-Bilddatei)
- optional `background.*` und `backgroundmusic.*`

Danach kannst du die Dateien und Medien wie unten beschrieben ergänzen. Die Webseite erkennt Medien automatisch anhand ihres Dateinamens.

## 2. Profil und Social-Links ändern

Öffne `config.js`. Dort kannst du Name, Benutzername, Status, Rolle, Beschreibung und deine Social-Links eintragen. Standardmäßig ist der angezeigte Name und Benutzername bereits auf **m1chill** gesetzt.

### Profilbild automatisch laden

Lege dein Profilbild direkt in das Repository-Hauptverzeichnis und nenne es `pb` plus Dateiendung. Die Seite erkennt es automatisch; du musst keinen Bildpfad in `config.js` eintragen. Unterstützt werden `pb.png`, `pb.jpg`, `pb.jpeg`, `pb.webp`, `pb.gif`, `pb.avif`, `pb.apng`, `pb.svg` und `pb.bmp`. Wenn mehrere `pb.*`-Dateien vorhanden sind, wird die erste passende Endung in dieser Reihenfolge verwendet. Am besten nur eine `pb.*`-Datei behalten.

Eine optionale Avatar-URL kann weiterhin in `config.js` unter `avatar` als Fallback eingetragen werden. Eine vorhandene `pb.*`-Datei hat immer Vorrang.

Beispiel:

```js
links: {
  discord: { url: "https://discord.gg/DEININVITE", handle: "deinname" },
  twitch:  { url: "https://twitch.tv/DEINNAME", handle: "DEINNAME" },
  youtube: { url: "https://youtube.com/@DEINKANAL", handle: "DEINKANAL" },
  // Nicht genutzte Plattformen einfach leer lassen.
}
```

Unterstützte Plattformen sind `discord`, `twitch`, `youtube`, `tiktok`, `instagram`, `x`, `spotify`, `steam`, `github`, `kick` und `soundcloud`. Ein Social-Button wird nur angezeigt, wenn eine gültige `http://`- oder `https://`-URL eingetragen ist.

Für eigene Links kannst du `customLinks` verwenden:

```js
customLinks: [
  { title: "Meine Website", url: "https://example.com", handle: "example.com" }
]
```

## 3. Hintergrund hochladen

Lege **eine** Hintergrunddatei direkt in das Hauptverzeichnis. Der Dateiname muss mit `background` beginnen:

**Videoformate:**

- `background.mp4`
- `background.webm`
- `background.ogv`
- `background.mov`
- `background.m4v`

**Bildformate:**

- `background.gif`
- `background.png`
- `background.jpg`
- `background.jpeg`
- `background.webp`
- `background.avif`
- `background.svg`
- `background.bmp`

Videos werden bevorzugt, wenn gleichzeitig eine Video- und eine Bilddatei mit dem Namen `background` vorhanden sind. Wenn du mehrere Dateien derselben Kategorie hochlädst, wird die erste gefundene Endung gemäß der Liste in `app.js` verwendet. Am besten also immer nur **eine** Datei `background.*` im Repository behalten.

Die Unschärfe und Abdunklung stellst du in `config.js` über `backgroundBlur` und `backgroundOverlayOpacity` ein.

## 4. Hintergrundmusik hochladen

Lege die Musikdatei ebenfalls direkt in das Hauptverzeichnis und nenne sie `backgroundmusic` plus Endung, zum Beispiel:

- `backgroundmusic.mp3`
- `backgroundmusic.ogg`
- `backgroundmusic.wav`
- `backgroundmusic.m4a`
- `backgroundmusic.aac`
- `backgroundmusic.flac`
- `backgroundmusic.opus`

Die Musik wird automatisch erkannt und in einer kleinen Player-Leiste im Profil angezeigt. `musicTitle` und `musicVolume` kannst du in `config.js` festlegen.

Browser unterstützen nicht jedes Audio-/Videoformat gleich. MP4 (mit H.264/AAC), WebM, MP3 und OGG sind meist die unkompliziertesten Formate. Autoplay mit Ton kann vom Browser blockiert werden: Dann startet die Musik bei der ersten Nutzerinteraktion. Der Play/Pause-Schalter bleibt immer verfügbar.

## 5. GitHub Pages aktivieren

1. Öffne dein GitHub-Repository.
2. Gehe zu **Settings → Pages**.
3. Wähle bei **Build and deployment** die Option **Deploy from a branch**.
4. Wähle den Branch `main` und als Ordner `/ (root)`.
5. Speichere die Einstellung.

Die Seite ist dann normalerweise unter folgender Adresse erreichbar:

`https://DEIN-NUTZERNAME.github.io/DEIN-REPOSITORY/`

Die Konfiguration und Medien müssen im selben Repository-Hauptverzeichnis wie `index.html` liegen, damit sie automatisch gefunden werden.

## 6. Lokal testen

Nicht per Doppelklick über `file://` öffnen, weil Browser dabei das automatische Prüfen der Medien-Dateien blockieren können. Starte stattdessen im Projektordner einen lokalen Webserver, zum Beispiel:

```bash
python -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen.

---

**Hinweis:** Die Social-Links öffnen externe Seiten in einem neuen Tab. Die Seite lädt keine SCM-Bot-API und überträgt oder speichert keine Profildaten auf einem Server. Änderungen werden direkt in `config.js` gemacht und mit GitHub veröffentlicht.
