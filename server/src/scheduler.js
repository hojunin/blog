import cron from "node-cron";

export const scheduler = () => {
  // 매일 오전 3시마다 publish인 게시글을 블로그에 업로드한다.
  cron.schedule("* * * * * 1", function () {});
};
