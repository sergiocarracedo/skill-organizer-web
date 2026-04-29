export type InstallMethod = {
  id: string;
  label: string;
  command?: string;
  secondaryText?: string;
  note: string;
  href: string;
  hrefLabel: string;
  linkOnly?: boolean;
};

export type TerminalBlock = {
  title: string;
  command: string;
  output: string[];
  accent: "cyan" | "violet" | "amber";
};

export const heroInstallMethods: InstallMethod[] = [
  {
    id: "npm",
    label: "npm",
    command: "npm i -g skill-organizer",
    secondaryText: "Then run skill-organizer --version",
    note: "Installs the CLI through npm and fetches the matching prebuilt binary for your platform.",
    href: "https://www.npmjs.com/package/skill-organizer",
    hrefLabel: "View npm package",
  },
  {
    id: "brew",
    label: "brew",
    command: "brew install sergiocarracedo/tap/skill-organizer",
    secondaryText: "Homebrew tap available if needed",
    note: "Best fit when your dev tooling already lives in Homebrew.",
    href: "https://github.com/sergiocarracedo/homebrew-tap",
    hrefLabel: "Open tap",
  },
  {
    id: "binary",
    label: "binary",
    linkOnly: true,
    note: "Use the release page when you want a direct archive instead of a package manager.",
    href: "https://github.com/sergiocarracedo/skill-organizer/releases",
    hrefLabel: "GitHub Releases",
  },
];

export const installOnboardBlocks: TerminalBlock[] = [
  {
    title: "Install and verify",
    command: "npm i -g skill-organizer && skill-organizer --version",
    accent: "cyan",
    output: [
      "+ skill-organizer@0.0.3",
      "installed package and platform binary",
      "",
      "$ skill-organizer --version",
      "0.0.3",
      "commit unknown, built unknown",
    ],
  },
  {
    title: "Run onboarding",
    command: "skill-organizer onboard",
    accent: "violet",
    output: [
      "? Select the tool to onboard  Generic (.agents) -> ~/.agents/skills",
      "? Select the source skills-organized folder  ~/.agents/skills-organized",
      "Configured Generic (.agents) project at: ~/.agents/.skill-organizer.yml",
      "Source: ~/.agents/skills-organized",
      "Target: ~/.agents/skills",
    ],
  },
  {
    title: "Inspect the managed state",
    command: "skill-organizer status --config ~/.agents/.skill-organizer.yml",
    accent: "amber",
    output: [
      "# Summary",
      "Managed skills:   39",
      "Disabled skills:  2",
      "Unmanaged skills: 0",
      "Synced:           39",
    ],
  },
];

export const installOnboardNotes = [
  {
    step: "01",
    title: "Install once",
    body: "Get the CLI through npm, Homebrew, or a release binary and verify it before touching your skills folder.",
  },
  {
    step: "02",
    title: "Onboard the target",
    body: "Let the guided flow create the project config, choose the target, and set up the sibling skills-organized source tree.",
  },
  {
    step: "03",
    title: "Operate from source",
    body: "Once onboarded, edit the nested source tree and let sync, watch mode, or the background service keep the flat target current.",
  },
];

export const featureCards = [
  {
    title: "Skills in folders",
    copy: "Keep real skills under nested source paths like personal/frontend or thirdparty/asciinema while exposing a flat compatibility layer to your tools.",
  },
  {
    title: "Disable skills",
    copy: "Hide a skill from the generated target without deleting the source folder, frontmatter, or curated structure.",
  },
  {
    title: "Sync service",
    copy: "Use foreground watch while iterating or install the background service so the target updates itself automatically.",
  },
  {
    title: "Skill overlap check",
    copy: "Ask an installed agent CLI to detect duplicate or overlapping skills, then generate a plan prompt to clean them up safely.",
  },
  {
    title: "Move unmanaged entries",
    copy: "Adopt loose target directories into a real source hierarchy instead of hand-renaming or copying folders around.",
  },
  {
    title: "Non-destructive sync",
    copy: "Managed links are repaired and stale managed entries are removed without deleting unrelated unmanaged files.",
  },
];

export const advantageItems = [
  "One source of truth for human editing",
  "Flat output that existing agent tools already understand",
  "Safer cleanup than editing generated target folders by hand",
  "Works for personal skills, third-party imports, and company packs",
  "Supports day-one setup and long-running background sync",
];

export const compatibilityItems = [
  { id: "claude", name: "Claude Code" },
  { id: "opencode", name: "OpenCode" },
  { id: "codex", name: "Codex" },
  { id: "cursor", name: "Cursor" },
  { id: "antigravity", name: "Antigravity" },
  { id: "agents", name: ".agents tools" },
];

export const docsEntryCards = [
  {
    title: "Install guide",
    copy: "Start from npm, Homebrew, or direct binaries and verify the CLI before your first project.",
    href: "/docs/guides/install-and-verify",
  },
  {
    title: "Onboard a tool",
    copy: "Follow the guided flow for generic .agents targets or tool-specific layouts like Claude Code and Codex.",
    href: "/docs/guides/onboard-a-tool",
  },
  {
    title: "Command reference",
    copy: "Jump to exact syntax for sync, watch, service, skill commands, overlap analysis, and completion output.",
    href: "/docs/reference/onboard",
  },
];

export const faqItems = [
  {
    question: "Why not edit the flat target folder directly?",
    answer:
      "Because the target is generated. Editing the source tree keeps structure, naming, and metadata consistent while sync rebuilds the tool-facing layout safely.",
  },
  {
    question: "Which agent tools work with skill-organizer?",
    answer:
      "Use the generic .agents target for tools that read ~/.agents/skills, or pick tool-specific targets for Claude Code, Codex, and Antigravity. The overlap checker can also invoke installed agent CLIs such as Claude Code, OpenCode, Codex, Cursor, and Antigravity.",
  },
  {
    question: "Can I hide a skill without deleting it?",
    answer:
      "Yes. skill-organizer skill disable marks the source skill as disabled and removes it from the generated target on the next sync.",
  },
  {
    question: "Do I have to run sync manually every time?",
    answer:
      "No. You can run sync on demand, use the foreground watcher, or install the background service to keep targets fresh automatically.",
  },
  {
    question: "What does the overlap check do?",
    answer:
      "It asks an installed agent CLI to analyze your managed skills for duplication or overlap, renders a grouped report, and can open a plan-only flow or save a remediation prompt under plans/ for tools without verified interactive plan mode.",
  },
];

export const servicePanels = [
  {
    eyebrow: "Registry",
    title: "Feed the watcher with project configs",
    commands: [
      "skill-organizer watched add ~/.agents/.skill-organizer.yml",
      "skill-organizer watched list",
    ],
    note: "The watched registry is the handoff between one-off setup and continuous sync.",
  },
  {
    eyebrow: "Background sync",
    title: "Install, start, and inspect the service",
    commands: [
      "skill-organizer service install",
      "skill-organizer service start",
      "skill-organizer service status",
      "skill-organizer service log-level set debug",
    ],
    note: "Once enabled, the source tree becomes the real editing surface while the target stays fresh automatically.",
  },
];
