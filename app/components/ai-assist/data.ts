export type InlineSegment =
  | { type: "text"; content: string }
  | { type: "name"; content: string } // person name — cyan highlight
  | { type: "value"; content: string } // numeric value — cyan
  | { type: "mono"; content: string }; // code-like — monospace

export type ResponseMetric = {
  label: string;
  value: string;
  sublabel: string;
};

export type SuggestedAction = {
  id: string;
  label: string;
};

export type UserMessage = {
  id: string;
  role: "user";
  text: string;
};

export type AssistantMessage = {
  id: string;
  role: "assistant";
  paragraphs: InlineSegment[][];
  metrics: ResponseMetric[];
  actions: SuggestedAction[];
};

export type AIMessage = UserMessage | AssistantMessage;

export type AIAssistData = {
  title: string;
  releaseLabel: string;
  subtitle: string;
  messages: AIMessage[];
  inputPlaceholder: string;
  statusLeft: string;
  queriesUsed: number;
  queriesTotal: number;
};

export const aiAssistData: AIAssistData = {
  title: "AI assistant",
  releaseLabel: "STABLE_REL",
  subtitle:
    "Ask questions about your team in plain English · Haiku 4.5 · streaming",
  messages: [
    {
      id: "msg-1",
      role: "user",
      text: "Who had the highest cycle time last sprint?",
    },
    {
      id: "msg-2",
      role: "assistant",
      paragraphs: [
        [
          { type: "text", content: "Based on the last 30 days, " },
          { type: "name", content: "James L." },
          {
            type: "text",
            content: " had the highest average cycle time at ",
          },
          { type: "value", content: "31.2 hours" },
          {
            type: "text",
            content: " — well above the team average of ",
          },
          { type: "mono", content: "18.4h" },
          { type: "text", content: "." },
        ],
        [
          { type: "text", content: "His 3 largest PRs each exceeded " },
          { type: "mono", content: "400 line changes" },
          {
            type: "text",
            content: ". Consider reviewing PR size norms with the team.",
          },
        ],
      ],
      metrics: [
        { label: "METRIC_VAR", value: "+69%", sublabel: "VS TEAM AVG" },
        { label: "PEAK_SIZE", value: "482", sublabel: "LOC COUNT" },
        { label: "SUCCESS_RT", value: "94%", sublabel: "PR MERGE" },
      ],
      actions: [
        { id: "action-1", label: "SHOW JAMES'S OPEN PRS" },
        { id: "action-2", label: "PRS OVER 400 LINES" },
        { id: "action-3", label: "COMPARE ALL AUTHORS" },
      ],
    },
  ],
  inputPlaceholder: "Ask about your team data...",
  statusLeft:
    "FR-AI-01 · STREAMS TOKEN-BY-TOKEN · 500MS TO FIRST TOKEN · HAIKU 4.5 MODEL",
  queriesUsed: 3,
  queriesTotal: 20,
};
