// Renders the profile trophies with github-profile-trophy's own classes, pinned to one upstream commit.
// Upstream's render_svg.ts has no rank filter and renders one theme per API request. This script hides
// the unearned "?" trophies and writes a light and a dark SVG from a single request.
//
// Usage: GITHUB_TOKEN1=<token> deno run --allow-net --allow-env --allow-write render-trophies.ts USERNAME [OUT_DIR]

const UPSTREAM =
  "https://raw.githubusercontent.com/ryo-ma/github-profile-trophy/e3c89df995e92e67cdd4b2acaab9d974583dc1f7/src";

const { GithubApiService } = await import(`${UPSTREAM}/Services/GithubApiService.ts`);
const { UserInfo } = await import(`${UPSTREAM}/user_info.ts`);
const { Card } = await import(`${UPSTREAM}/card.ts`);
const { COLORS } = await import(`${UPSTREAM}/theme.ts`);

// Light and dark themes whose backgrounds match GitHub's own (#ffffff and #0d1117).
const THEMES: Record<string, string> = { light: "default", dark: "darkhub" };

const [username, outDir = "out"] = Deno.args;
if (!username) {
  console.error("Usage: deno run --allow-net --allow-env --allow-write render-trophies.ts USERNAME [OUT_DIR]");
  Deno.exit(1);
}

const userInfo = await new GithubApiService().requestUserInfo(username);
if (!(userInfo instanceof UserInfo)) {
  console.error(`Failed to fetch user info for ${username}: ${userInfo}`);
  Deno.exit(2);
}

await Deno.mkdir(outDir, { recursive: true });
for (const [scheme, theme] of Object.entries(THEMES)) {
  // Same layout as render_svg.ts (one adaptive row, 115 px panels, 10 px margins), minus rank "?".
  const card = new Card([], ["-?"], -1, 10, 115, 10, 10, false, false);
  const path = `${outDir}/trophy-${scheme}.svg`;
  await Deno.writeTextFile(path, card.render(userInfo, COLORS[theme]));
  console.log(`Wrote ${path}`);
}
