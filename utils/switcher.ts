import { expect, Locator } from "@playwright/test";

export async function assertSwitcherState(
  switcher: Locator,
  state: "on" | "off",
) {
  const expectedAttr = state === "on" ? "checked" : "unchecked";
  await expect(switcher).toHaveAttribute("data-state", expectedAttr);
}
