# Content notes

Checked on 25 November 2026 (Europe/Istanbul) against fresh clones of the repositories. `Rn` = README of the repository named in each section.

## Please confirm (wording written for this site)

- **About, closing line:** "Curiosity asks the question. Making something tangible is a way to test the answer." The brief asked for a short personal philosophy but supplied none. This is new copy, not a quote. Edit or remove it.
- **Contact invitation, section introductions, 404 copy, diagram captions:** new editorial copy with no new biographical facts.
- **"Building & exploring" / "Beyond the screen":** the supplied About text, split across the two headings.
- **Screenshots** show phone status bars and the PC name `DESKTOP-GNPSCIB`. They are already public in the repository and were left unaltered. Replace them at the source if you prefer.

## Owner data
Name, handles, GitHub and identity line: the build brief. Email: brief and the GitHub profile README. The nickname is stored in config but not displayed. No city, school, age, phone or other social links are on the site. External pages you link to (such as the Google Play listing) have their own developer details.

## PcHWmonitor
| Claim | Source |
|---|---|
| Purpose, metrics, app and server stack, features, one-hour history | R, build config |
| Port 8765, one status message per second, `ws`/`wss`, optional TLS, self-signed certificate dialog, QR/manual setup | R §1, §4, §6; `server/cli.py` |
| Tunnel quick/named, same Wi-Fi by default | R §5b, §8 |
| Token generated if not supplied | commit 2026-08-21 |
| Origin rejection, backup exclusion, keystore removal, network restriction | commits 2026-08-13 |
| Timing-safe comparison, connection limits, rate limiting, TLS pinning fixes | ROADMAP v1.6; commit 2026-09-16 (not independently audited) |
| One-time plaintext-token consent | commits 2026-11-24; `strings.xml` |
| No ads, analytics, developer servers | `docs/privacy.html` (the project's own statement) |
| Timeline | tags and commit dates; version numbers deliberately omitted |
| F-Droid | package page fetched: listed |
| Google Play | page fetched (snapshot showed an Install button); ROADMAP/TODO record production on 2026-11-23 |
| Android Weekly #739 | issue page fetched: listed |
| Linux server | ROADMAP: planned, not released |

Screenshots copied from `docs/images/`: `main_ember`, `main_light`, `main_landscape`, `settings_light`, `hero_left`. `hero_right.jpg` is **not used**: it shows an older settings screen (radio-button palettes, server fields).

Conflicts: ROADMAP and TODO still call the plaintext-consent release "Next" although it is tagged. ROADMAP's shipped list says 14 languages in one place and 15 later (no count on the site). The Turkish README architecture and feature list lag the English one. The README no longer carries the pending F-Droid line mentioned in the brief. The public history starts at a "v2" commit, so earlier work is undocumented.

Not found: a stated motivation or personal lessons. Those sections are omitted.

## Screen Control (computer-use-for-all-agents)
- Features, safety model, ports, MCP transports, platform matrix: R, AGENT_GUIDE, ROADMAP. Journey: commit history.
- **Linux:** the brief's snapshot listed Windows only. The current README documents X11 as supported with limits (tested on Linux Mint Cinnamon), Wayland unsupported and macOS a stub. The site says exactly that. Live behaviour was not run here.
- **Naming:** the README title is "Computer use for all agents", its body says "Screen Control", and a 2026-10-08 commit renamed the project. The site uses "Screen Control" (as the brief does) and shows the repository name.
- README says no data ever leaves the machine. **Not repeated**: a connected cloud model can receive what the agent reads.
- The focus guard applies when the caller passes `expect_hwnd`; the site words it that way.
- The LICENSE copyright line reads "screen-control contributors".
- Demo: `docs/images/demo-typing.gif`, converted to MP4/WebM, with its last frame as poster. The Notepad UI in it is Turkish.
- Logo copied to `src/assets/screen/` but not displayed.

## AeroVision CFD
- Solver, features, GPU paths, hybrid CPU models: R. Journey: commit history.
- **Conflict:** the README gives the NACA 0012 reference lift at 8° as Cl = 0.5 in one section and 0.90 in another. No validation figures, parity claims or benchmark speedups are published. "Professional" is not repeated.
- No screenshots in the repository. **Owner-provided assets wanted** (real application captures).
- Not found: motivation, lessons, roadmap. Omitted. The code was not run, so the streamline option is described only as a "toggle".

## NexaDesk
- README, `docs/index.html`, NOTICE, `core/`, tags, history. **MIT license verified.**
- **Brief vs. sources:** the brief says it is known from the profile README, but the current profile README does not list NexaDesk.
- Providers: Ollama, Groq, NVIDIA, Google, OpenAI-compatible; GitHub Copilot marked experimental and unofficial.
- The MCP client was committed after the latest tag reviewed, so it is described as in source only.
- Permission behaviour is attributed to the project's documentation; the app was not run.
- Image-generation code exists but is not described in the README, so it is not claimed.
- Screenshots from `docs/`; their conversation content may be staged. Latest commit seen: 30 October 2026. No "active development" claim. No documented roadmap.

## DLSS NR Pre-Upscale
- README and THIRD_PARTY_NOTICES. Labelled work in progress. Performance tables and timings omitted. No NVIDIA binaries are hosted or linked. FINDINGS.md material about rebuilding NVIDIA's runtime is not mentioned.
- **Unverified link:** the `video2dlssnr` URL in the README (`github.com/TeamGPU/video2dlssnr`) could not be reached with git (it asked for credentials) and the page fetch was rate limited. The credit is shown **without a link**. If the URL works for you, add `href` back in the experiment's `index.md`.
- A tag `v1.0.0` exists while the documentation still lists work-in-progress areas.

## Hosting
Published from the `Xeakaes.github.io` repository as the user site. The repository was empty before the first push.
