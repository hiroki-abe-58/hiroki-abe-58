// Renders the profile trophies with github-profile-trophy's own classes, pinned to one upstream commit
// through the "trophy/" import in deno.json. Upstream's render_svg.ts has no rank filter and renders one
// theme per API request. This script hides the unearned "?" trophies and writes a light and a dark SVG
// from a single request.
//
// Usage: GITHUB_TOKEN1=<token> deno run --config .github/scripts/deno.json --allow-net --allow-env \
//          --allow-write .github/scripts/render-trophies.ts USERNAME [OUT_DIR]

import { GithubApiService } from "trophy/Services/GithubApiService.ts";
import { UserInfo } from "trophy/user_info.ts";
import { Card } from "trophy/card.ts";
import { COLORS } from "trophy/theme.ts";

// Light and dark themes whose backgrounds match GitHub's own (#ffffff and #0d1117).
const THEMES: Record<string, string> = { light: "default", dark: "darkhub" };

const [username, outDir = "out"] = Deno.args;
if (!username) {
  console.error("Usage: render-trophies.ts USERNAME [OUT_DIR]");
  Deno.exit(1);
}

const userInfo = await new GithubApiService().requestUserInfo(username);
if (!(userInfo instanceof UserInfo)) {
  console.error(`Failed to fetch user info for ${username}: ${userInfo.message}`);
  Deno.exit(2);
}

await Deno.mkdir(outDir, { recursive: true });
for (const [scheme, theme] of Object.entries(THEMES)) {
  // Same layout as render_svg.ts (one adaptive row, 115 px panels, 10 px margins), minus rank "?".
  const card = new Card([], ["-?"], -1, 10, 115, 10, 10, false, false);
  await Deno.writeTextFile(`${outDir}/trophy-${scheme}.svg`, card.render(userInfo, COLORS[theme]));
}
