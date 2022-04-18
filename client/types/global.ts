interface TEXT_TYPE {
    content: string;
    link: {
        url: string;
    };
}

type ANNOTATIONS = {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: 'default' | '';
};

type RICH_TEXT = {
    type: string; // text
    text: TEXT_TYPE;
    annotations: ANNOTATIONS;
    plain_text: string;
    href: string;
};

type ICON = {
    type: 'emoji' | '';
    emoji: string;
};

export type { TEXT_TYPE, ANNOTATIONS, RICH_TEXT, ICON };
