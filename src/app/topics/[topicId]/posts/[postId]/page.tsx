import Link from 'next/link';
import PostShow from '@/components/posts/post-show';
import CommentList from '@/components/comments/comment-list';
import CommentCreateForm from '@/components/comments/comment-create-form';
import paths from '@/paths';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import { Suspense } from 'react';
import { PostShowLoading } from '@/components/posts/post-show-loading';

interface PostShowPageProps {
  params: {
    topicId: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { topicId, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(topicId)}
      >
        {'< '}Back to {topicId}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}
