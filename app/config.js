const baseUrl = process.env.NEXT_PUBLIC_GITHUB_REPO;

export const sourceUrls = {
  sdks: `${baseUrl}/blob/main/app/sdks/page.js`,
  inboundRelay: `${baseUrl}/blob/main/app/inbound-relay/page.js`,
  outboundRelay: `${baseUrl}/blob/main/app/outbound-relay/page.js`,
  functions: `${baseUrl}/blob/main/app/functions/page.js`,
  inputs: `${baseUrl}/blob/main/app/inputs/page.js`,
};
