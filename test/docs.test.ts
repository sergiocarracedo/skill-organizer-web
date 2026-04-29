import { describe, expect, it } from "vitest";

import { getCommandBySlug, trimCollectionSlug } from "@/lib/docs";

describe("docs helpers", () => {
  it("returns the correct command metadata", () => {
    expect(getCommandBySlug("skill")?.command).toBe(
      "skill-organizer skill <subcommand>",
    );
  });

  it("trims collection ids to route slugs", () => {
    expect(trimCollectionSlug("reference/service")).toBe("service");
  });
});
