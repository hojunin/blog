interface TEXT_TYPE {
  content: string;
  link: {
    url: string;
  };
}

type ANNOTATION = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: "default" | "";
};

type RICH_TEXT = {
  type: string; // text
  text: TEXT_TYPE;
  annotation: ANNOTATION;
  plain_text: string;
  href: string;
};

type ICON = {
  type: "emoji" | "";
  emoji: string;
};

export type { TEXT_TYPE, ANNOTATION, RICH_TEXT, ICON };
