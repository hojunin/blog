import { COLOR_TYPE, DATE, ICON, ID, NULLABLE, RICH_TEXT } from './global';
import { USER } from './user';

type NUMBER_FORMAT = [
    'number',
    'number_with_commas',
    'percent',
    'dollar',
    'canadian_dollar',
    'euro',
    'pound',
    'yen',
    'ruble',
    'rupee',
    'won',
    'yuan',
    'real',
    'lira',
    'rupiah',
    'franc',
    'hong_kong_dollar',
    'new_zealand_dollar',
    'krona',
    'norwegian_krone',
    'mexican_peso',
    'rand',
    'new_taiwan_dollar',
    'danish_krone',
    'zloty',
    'baht',
    'forint',
    'koruna',
    'shekel',
    'chilean_peso',
    'philippine_peso',
    'dirham',
    'colombian_peso',
    'riyal',
    'ringgit',
    'leu',
    'argentine_peso',
    'uruguayan_peso',
];

type TIME = {
    id: ID;
    type: 'date' | '';
    date?: {
        start: DATE;
        end: NULLABLE<DATE>;
        time_zone: '' | null;
    };
};

type SINGLE_SELECT = {
    id: ID;
    type: 'select' | '';
    select?: {
        id: ID;
        name: string;
        color: COLOR_TYPE;
    };
};

type TITLE = {
    id: 'title' | '';
    type: 'title' | '';
    title?: RICH_TEXT[];
};

interface POST {
    object: 'page';
    id: ID;
    created_time: DATE;
    last_edited_time: DATE;
    created_by: USER;
    last_edited_by: USER;
    cover: NULLABLE<any>;
    icon: ICON;
    parent: {
        type: 'database_id' | '';
        database_id: ID;
    };
    archived: boolean;
    properties: {
        publishedAt: TIME;
        status: SINGLE_SELECT;
        name: TITLE;
    };
    url: URL;
}

interface POST_LIST {
    object: 'list';
    results: POST[];
}

export type { POST, POST_LIST };
