export function switchToPage(page: string) {
  switch (page) {
    case "home":
      return "Home";
    case "settings":
      return "Settings";
    case "bots":
      return "Bots";
    case "account":
      return "Account";
    default:
      throw new Error(`Unknown page: ${page}`);
  }
}
