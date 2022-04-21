import { COLOR_TYPE, ICON, RICH_TEXT } from './global';
import { USER } from './user';

export type BLOCK_TYPE =
    | 'callout'
    | 'paragraph'
    | 'toggle'
    | 'divider'
    | 'table'
    | 'image'
    | 'column_list'
    | 'code'
    | 'heading_3'
    | 'heading_2'
    | 'heading_1'
    | 'bulleted_list_item'
    | 'numbered_list_item';
export type CODE_LANGUAGE = 'javascript' | 'typescript ' | 'python' | 'java' | 'go';
export type CALLOUT = {
    rich_text: RICH_TEXT[];
    icon: ICON;
    color: string;
};

export type PARAGRAPH = {
    rich_text: RICH_TEXT[];
    color: string;
};
export type TOGGLE = {
    rich_text: RICH_TEXT[];
    color: string;
};
export type HEADING = {
    rich_text: RICH_TEXT[];
    color: string;
};
export type IMAGE = {
    image: {
        caption: any[];
    };
    type: 'file' | '';
    external?: {
        url: string;
    };
    file?: {
        url: string;
        expiry_time: string;
    };
};
export type TABLE = {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
};

export type CODE = {
    caption: any[];
    rich_text: RICH_TEXT[];
    language: CODE_LANGUAGE;
};

export type BULLETED_LIST_ITEM = {
    rich_text: RICH_TEXT[];
    color: COLOR_TYPE;
};

export type NUMBERED_LIST_ITEM = {
    rich_text: RICH_TEXT[];
    color: COLOR_TYPE;
};

export interface BLOCK {
    object: 'block';
    id: string;
    created_time: string;
    last_edited_time?: string;
    last_edited_by?: USER;
    created_by: USER;
    type: BLOCK_TYPE;
    has_children: boolean;
    archived: boolean;
    callout?: CALLOUT;
    toggle?: TOGGLE;
    paragraph?: PARAGRAPH;
    divider?: {};
    table: TABLE;
    image?: IMAGE;
    code?: CODE;
    table_row?: {
        cells: BLOCK[][];
    };
    childrens: BLOCK;
    heading_1?: HEADING;
    heading_2?: HEADING;
    heading_3?: HEADING;
    bulleted_list_item?: BULLETED_LIST_ITEM;
    numbered_list_item?: NUMBERED_LIST_ITEM;
    table_of_contents?: {
        color: 'grey' | '';
    };
}
