import express from 'express';
import dotenv from 'dotenv';
import { getDB, getPage, searchPost } from './notion.js';
import { scheduler } from './scheduler.js';
import cors from 'cors';

dotenv.config();
const app = express();
scheduler();

app.use(cors());

app.listen(process.env.PORT, () => console.log(`Server is Running at PORT : ${process.env.PORT}`));

app.get('/', (_, res) => res.send('HOME'));
app.get('/other', (_, res) => res.send('OTHER'));

app.get('/page', (req, res) => {
    getPage(req.query.page_id).then((data) => res.json(data));
});

// 현재 DB를 가져옵니다.
app.get('/db', (_, res) => {
    getDB()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
});

app.post('/publish', (req, res) => {});

app.get('/search', (req, res) => {
    searchPost(req.query.keyword).then((data) => res.json(res));
});

// 게시글 삭제
app.delete('/post', (req, res) => {});

// 게시글 비활성화 (status 'published' => 'canceled')
app.post('/post', (req, res) => {});
