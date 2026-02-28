import https from "https";
https.get("https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/hero-video.mp4", (res) => {
  console.log(res.statusCode);
});
https.get("https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/hero-video-placeholder.mp4", (res) => {
  console.log(res.statusCode);
});
https.get("https://uimu1t8pgavlwwu9.public.blob.vercel-storage.com/video.mp4", (res) => {
  console.log(res.statusCode);
});
