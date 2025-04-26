export type BotCard = {
  name: string;
  mode: "Single" | "Multi" | "Voice";
  status: "Draft" | "Published";
  lastEdited: string;
  description?: string;
};
