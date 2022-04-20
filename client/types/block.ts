import { ICON, RICH_TEXT } from './global';
import { USER } from './user';

export type BLOCK_TYPE = 'callout' | 'paragraph' | 'toggle' | 'divider' | 'table' | 'image' | 'column_list' | 'code';
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
export type IMAGE = {
    image: {
        caption: any[];
    };
    type: 'file' | '';
    file: {
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
}
