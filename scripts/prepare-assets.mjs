// Crops and compresses real screenshots into public/projects.
// Sources: ./assets-src (copied from the projects) and the sibling project folders.
// Run with: npm run assets
import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const projects = path.resolve(root, "..");
const out = path.join(root, "public", "projects");
const src = path.join(root, "assets-src");

const gym = path.join(projects, "weGym", "assets", "screenshots");

await mkdir(out, { recursive: true });

async function write(pipeline, name) {
  await pipeline.webp({ quality: 82 }).toFile(path.join(out, `${name}.webp`));
  console.log("wrote", name);
}

// Phone screenshots come from a plain browser viewport, so they have no safe area: the app's own bar
// starts at the very top edge and its bottom nav sits on the bottom edge. writePhone() adds a status-bar
// zone on top and a home-indicator zone at the bottom, filled with the app's own edge colours, and records
// what the <PhoneFrame> overlay needs (new size, and whether each edge is dark so icons stay readable).
// Starts from the current file so a run without the sibling weGym folder keeps the weGym entries.
const metaPath = path.join(root, "src", "lib", "phone-meta.json");
const phoneMeta = existsSync(metaPath) ? JSON.parse(await readFile(metaPath, "utf8")) : {};

async function edgeColor(buf, top, width, height) {
  const px = await sharp(buf)
    .extract({ left: 0, top, width, height })
    .resize(1, 1, { fit: "cover" })
    .removeAlpha()
    .raw()
    .toBuffer();
  const [r, g, b] = px;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return { background: { r, g, b, alpha: 1 }, dark: luminance < 0.5 };
}

async function writePhone(input, name, resizeWidth) {
  let image = sharp(input);
  if (resizeWidth) image = image.resize({ width: resizeWidth });
  const buf = await image.png().toBuffer();
  const { width, height } = await sharp(buf).metadata();
  const padTop = Math.round(width * 0.12);
  const padBottom = Math.round(width * 0.085);
  const top = await edgeColor(buf, 0, width, 3);
  const bottom = await edgeColor(buf, height - 3, width, 3);
  const withTop = await sharp(buf).extend({ top: padTop, background: top.background }).png().toBuffer();
  await sharp(withTop)
    .extend({ bottom: padBottom, background: bottom.background })
    .webp({ quality: 84 })
    .toFile(path.join(out, `${name}.webp`));
  phoneMeta[`/projects/${name}.webp`] = {
    width,
    height: height + padTop + padBottom,
    padTop,
    padBottom,
    topDark: top.dark,
    bottomDark: bottom.dark,
  };
  console.log("wrote", name, "(phone, safe area added)");
}

// weGym phone screenshots (skipped when the sibling folder is not on this machine).
if (existsSync(gym)) {
  for (const name of ["home", "workout", "stats", "plan"]) {
    await writePhone(path.join(gym, `${name}.png`), `gym-${name}`, 640);
  }
} else {
  console.log("skipped weGym: ../weGym not found, keeping the images already in public/projects");
}

// ConstraOps: captured from the running label prototype (web app and Flutter field app, demo data).
for (const name of [
  "dashboard",
  "tenders",
  "tender-wizard",
  "equipment",
  "equipment-planning",
  "equipment-dashboard",
  "equipment-cockpit",
  "staff",
]) {
  await write(sharp(path.join(src, "constraops", `web-${name}.png`)), `cops-${name}`);
}
for (const name of ["home", "site", "tasks", "equipment"]) {
  await writePhone(path.join(src, "constraops", `mobile-${name}.png`), `cops-m-${name}`);
}

// ConstraOps OCR flows: the two modal dialogs, cropped from full-window captures.
await write(
  sharp(path.join(src, "constraops", "ocr-employee.png")).extract({ left: 316, top: 121, width: 757, height: 646 }),
  "cops-ocr-employee",
);
await write(
  sharp(path.join(src, "constraops", "ocr-dqe.png")).extract({ left: 193, top: 97, width: 1003, height: 693 }),
  "cops-ocr-dqe",
);

// TRG: captured from the running demo build (web ERP and Flutter driver app, seeded demo data).
for (const name of [
  "dashboard",
  "deliveries",
  "fuel",
  "fleet",
  "vehicle",
  "inventory",
  "hse",
  "treasury",
  "arabic",
]) {
  await write(sharp(path.join(src, "trg", `web-${name}.png`)), `trg-${name}`);
}
for (const name of ["incident", "notifications"]) {
  await writePhone(path.join(src, "trg", `mobile-${name}.png`), `trg-m-${name}`);
}

// Mamba-TransUNet: figures from the dissertation (NIT, 2024-2025), CAMUS dataset.
await write(sharp(path.join(src, "mamba", "architecture.png")).resize({ width: 1800 }), "mamba-architecture");

// Attendify desktop admin app.
await write(sharp(path.join(src, "attendify", "rooms.jpg")).resize({ width: 1600 }), "attendify-rooms");
await write(sharp(path.join(src, "attendify", "add-person.jpg")).resize({ width: 1600 }), "attendify-add-person");

// Sizes and edge colours of every phone image, read by <PhoneFrame>.
await writeFile(metaPath, JSON.stringify(phoneMeta, null, 2) + "\n");
console.log("wrote src/lib/phone-meta.json");
