import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';

interface TopicShowPageProps {
  params: {
    topicId: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { topicId } = params;

  return (
    <div className="flex gap-6 p-4 mt-10 justify-between">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-xl m-2 font-bold">{topicId}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(topicId)} />
      </div>
      {/* <h1 className="text-2xl mb-4">{topic.slug}</h1>
      <p className="mb-6">{topic.description}</p> */}

      <div>
        <PostCreateForm slug={topicId} />
      </div>
    </div>
  );
}
