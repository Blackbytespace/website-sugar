import { g as getCollection } from './_astro_content_D3xlrY_A.mjs';

async function GET() {
  const allDoc = await getCollection("sugar");
  return new Response(JSON.stringify(allDoc));
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
