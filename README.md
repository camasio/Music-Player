# Music Player

A minimal web-based music player built with HTML, CSS and vanilla JavaScript. This small project demonstrates playing audio with the HTML5 <audio> element, a custom progress slider, and a play/pause control using Font Awesome icons.

## Features

- Play and pause audio
- Progress bar that updates as the song plays
- Uses Font Awesome for controls

## Files

- `index.html` — the page markup and audio element
- `style.css` — styles for the player UI
- `script.js` — JavaScript logic for play/pause and progress tracking
- `lorenzo.jpg` and `lionel richie - i call it love.mp3` — example media (not bundled in repo)

## How to run

1. Open `index.html` directly in your browser by double-clicking it, or start a simple local static server.

If you prefer a quick local server (recommended to avoid some browser audio restrictions), run this from the project folder in PowerShell:

```powershell
# Start a simple static server using Python 3 (if installed)
python -m http.server 8000

# Or (if you have Node.js installed) using npx serve
npx serve -p 8000
```

Then open http://localhost:8000 in your browser.

## Usage

- Click the center control button to toggle play/pause.
- The progress slider will move as the audio plays.
- You can use the range input to seek (click/drag) if implemented.

## Known issues and notes

- Some browsers impose autoplay restrictions—user interaction is usually required to start playback.
- The example media files are referenced by filename; make sure `lorenzo.jpg` and the MP3 file are present in the project directory, or update the paths in `index.html`.
- There is a small ID naming mismatch fixed in `script.js` (`crtl-icon` in HTML vs `ctrl-icon` in JS). The current `script.js` expects the icon ID `crtl-icon` to match the HTML.

## Troubleshooting

- If the play button doesn't work, open the browser console (F12) and check for errors. Common problems:
  - Wrong element IDs in `index.html` vs `script.js`.
  - File not found errors for the MP3 or image file.

## Next steps / Enhancements

- Add click-to-seek functionality on the progress bar (update audio.currentTime on change).
- Add volume control and mute/unmute button.
- Support playlists and next/previous track logic.
- Show current time / duration text
- Improve accessibility (keyboard controls, ARIA labels).

## License

This project is provided as-is for learning and demo purposes.
