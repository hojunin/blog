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
    color: COLOR_TYPE;
};

type EQUATION = {
    expression: string;
};

type RICH_TEXT = {
    type: string; // text
    text: TEXT_TYPE;
    annotations: ANNOTATIONS;
    plain_text: string;
    href: string;
    equation?: EQUATION;
};

type ICON = {
    type: 'emoji' | '';
    emoji: string;
};

type COLOR_TYPE = 'default' | 'red' | 'purple' | 'blue' | 'yellow' | 'orange' | 'grey';

export type { TEXT_TYPE, ANNOTATIONS, RICH_TEXT, ICON, COLOR_TYPE };
