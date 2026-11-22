# Living Portrait

A portfolio website whose hero is a face that follows your mouse, blinks, and reacts when you poke it.

It looks like 3D, but it isn't. It is **14 pictures of the same head**, made with an AI image tool, and a small script that picks the right one at the right moment. Swap in your own 14 pictures and it becomes your face. Or a lion. Or a robot.

Live example: [ahmadalghawi.com](https://www.ahmadalghawi.com) · Full guide with every prompt: **[GUIDE LINK]**

## Run it

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Put your own face on it

1. Make 14 pictures of your head with Gemini or ChatGPT: a resting face, eight eye directions, eyes closed, a wink, surprised, annoyed, and one with sunglasses. The guide has a ready-made prompt for each one.
2. Make every picture a **1024 × 1024 PNG with a transparent background**, with the head the same size and in the same place in all of them.
3. Copy them into `public/` with exactly these names, replacing the ones there:

| File | What the face does |
|---|---|
| `user-face.png` | Resting, looking straight ahead |
| `user-face-up.png` / `-down.png` / `-left.png` / `-right.png` | Eyes look up, down, left, right |
| `user-face-upleft.png` / `-upright.png` / `-downleft.png` / `-downright.png` | Eyes look diagonally |
| `user-face-closed.png` | Eyes closed (blinking) |
| `user-face-wink.png` | A wink |
| `user-face-shock.png` | Surprised |
| `user-face-angry.png` | Annoyed |
| `user-face-sunglasses.png` | Sunglasses (shown when you hover Contact) |

4. Change the name, text and links in `src/components/` to your own, and replace `public/Ahmad-Alghawi-CV.pdf` with your CV.

## How it works

- `index.html` holds the face script. It draws the current picture on a WebGL canvas that bends slightly, so the skin seems to move instead of jumping between photos.
- `CUSTOM_EXPRESSIONS` at the top of that script maps each expression name to a picture. The script knows more expressions than there are pictures (a kiss, a yawn, laughing and more), and any without its own picture reuses the closest one. Add a picture to `public/` and point an expression at it to give it its own.
- The transparent area of the resting picture tells the script where the head is, so clicks on the background don't count as pokes.
- The rest of the site is React, Vite, Tailwind CSS and Framer Motion.

## Please

Only use your own face, or the face of someone who has said yes.

## Built by

[Ahmad Alghawi](https://www.ahmadalghawi.com) · [LinkedIn](https://www.linkedin.com/in/ahmadalghawi/) · with [Tech360](https://www.tech-360.ai)

## Licence

MIT, see [LICENSE](LICENSE). The code is free to reuse. The face pictures in `public/` are of Ahmad Alghawi: replace them with your own.
