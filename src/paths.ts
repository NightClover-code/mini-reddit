const paths = {
  homePath() {
    return '/';
  },
  topicShow(topicId: string) {
    return `/topics/${topicId}`;
  },
  postCreate(topicId: string) {
    return `/topics/${topicId}/posts/new`;
  },
  postShow(topicId: string, postId: string) {
    return `/topics/${topicId}/posts/${postId}`;
  },
};

export default paths;
