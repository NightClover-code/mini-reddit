const paths = {
  homePath() {
    return '/';
  },
  topicShow(topicId: string) {
    return `/topic/${topicId}`;
  },
  postCreate(topicId: string) {
    return `/topic/${topicId}/post/new`;
  },
  postShow(topicId: string, postId: string) {
    return `/topic/${topicId}/post/${postId}`;
  },
};

export default paths;
