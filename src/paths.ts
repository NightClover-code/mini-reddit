const paths = {
  homePath() {
    return '/';
  },
  topicShow(topicId: string) {
    return `/topics/${topicId}`;
  },
  postCreate(topicId: string) {
    return `/topics/${topicId}/post/new`;
  },
  postShow(topicId: string, postId: string) {
    return `/topics/${topicId}/post/${postId}`;
  },
};

export default paths;
