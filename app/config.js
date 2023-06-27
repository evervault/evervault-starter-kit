const org = process.env.NEXT_PUBLIC_GITHUB_ORG;
const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;

export const sourceUrls = {
  sdks: `https://github.com/${org}/${repo}/blob/main/app/sdks/page.js`,
  inboundRelay: `https://github.com/${org}/${repo}/blob/main/app/inbound-relay/page.js`,
  outboundRelay: `https://github.com/${org}/${repo}/blob/main/app/outbound-relay/page.js`,
  functions: `https://github.com/${org}/${repo}/blob/main/app/functions/page.js`,
  inputs: `https://github.com/${org}/${repo}/blob/main/app/inputs/page.js`,
};
