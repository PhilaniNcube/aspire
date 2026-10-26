import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectId = "0m4fu2cd";
const dataset = "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "Missing SANITY_API_WRITE_TOKEN. Add it to .env.local, then run `pnpm seed:content`.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const root = fileURLToPath(new URL("..", import.meta.url));

const contentTypes = {
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
};

async function uploadAsset(type, relativePath) {
  const filePath = path.join(root, relativePath);
  const filename = path.basename(filePath);
  const contentType = contentTypes[path.extname(filename).toLowerCase()];

  return client.assets.upload(type, await readFile(filePath), {
    filename,
    contentType,
  });
}

const publications = [
  {
    _id: "publication-news-flash-december-edition",
    title: "News Flash: December Edition",
    slug: "news-flash-december-edition",
    publishedAt: "2023-12-01",
    image: "public/images/dec-2023.webp",
    imageAlt: "News Flash December Edition cover",
    document: "public/documents/dec-2023.pdf",
  },
  {
    _id: "publication-news-flash-issue-one",
    title: "News Flash: Issue One",
    slug: "news-flash-issue-one",
    image: "public/images/newsflash.png",
    imageAlt: "News Flash Issue One cover",
    document: "public/documents/newsflash.pdf",
  },
];

const investments = [
  {
    _id: "investment-amathole-investment-opportunities",
    title: "Amathole District Municipality Investment Opportunities",
    slug: "amathole-district-municipality-investment-opportunities",
    summary:
      "An investment booklet profiling opportunities across agriculture and agro-processing, tourism, the ocean economy, green economy, property development, manufacturing, and enabling economic infrastructure.",
    sector: "Cross-sector",
    image: "public/images/amathole-investment-opportunities.webp",
    imageAlt: "Cover of the Amathole District Municipality investment booklet",
    document:
      "public/documents/amathole-district-municipality-investment-opportunities.pdf",
  },
];

const investmentsPage = {
  _id: "investmentsPage",
  _type: "investmentsPage",
  heading: "Investments",
  intro:
    "Explore investment opportunities across the Amathole District Municipality's priority economic sectors, from agriculture and tourism to the ocean and green economy.",
};

const ids = [
  ...publications.map((publication) => publication._id),
  ...investments.map((investment) => investment._id),
  investmentsPage._id,
];
const existingIds = new Set(
  await client.fetch(`*[_id in $ids]._id`, { ids }),
);

for (const publication of publications) {
  if (existingIds.has(publication._id)) {
    console.log(`Skipping ${publication._id} (already exists)`);
    continue;
  }

  const [imageAsset, fileAsset] = await Promise.all([
    uploadAsset("image", publication.image),
    uploadAsset("file", publication.document),
  ]);

  await client.create({
    _id: publication._id,
    _type: "publication",
    title: publication.title,
    slug: { _type: "slug", current: publication.slug },
    ...(publication.publishedAt
      ? { publishedAt: publication.publishedAt }
      : {}),
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: imageAsset._id },
      alt: publication.imageAlt,
    },
    document: {
      _type: "file",
      asset: { _type: "reference", _ref: fileAsset._id },
    },
  });

  console.log(`Created ${publication._id}`);
}

if (existingIds.has(investmentsPage._id)) {
  await client.createOrReplace(investmentsPage);
  console.log(`Updated ${investmentsPage._id}`);
} else {
  await client.create(investmentsPage);
  console.log(`Created ${investmentsPage._id}`);
}

for (const investment of investments) {
  if (existingIds.has(investment._id)) {
    console.log(`Skipping ${investment._id} (already exists)`);
    continue;
  }

  const [imageAsset, fileAsset] = await Promise.all([
    uploadAsset("image", investment.image),
    uploadAsset("file", investment.document),
  ]);

  await client.create({
    _id: investment._id,
    _type: "investment",
    title: investment.title,
    slug: { _type: "slug", current: investment.slug },
    summary: investment.summary,
    sector: investment.sector,
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: imageAsset._id },
      alt: investment.imageAlt,
    },
    document: {
      _type: "file",
      asset: { _type: "reference", _ref: fileAsset._id },
    },
  });

  console.log(`Created ${investment._id}`);
}

console.log("Done.");
