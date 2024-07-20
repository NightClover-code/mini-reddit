import PostCreateForm from '@/components/posts/post-create-form';

interface TopicShowPageProps {
  params: {
    topicId: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { topicId } = params;

  return (
    <div className="flex gap-4 p-4 mt-10 justify-between">
      <div className="col-span-3">
        <h1 className="text-xl m-2">{topicId}</h1>
      </div>
      {/* <h1 className="text-2xl mb-4">{topic.slug}</h1>
      <p className="mb-6">{topic.description}</p> */}

      <div className="border">
        <PostCreateForm slug={topicId} />
      </div>
      {/* <h2 className="text-xl mb-4">Posts</h2> */}
      {/* <div className="space-y-4">
        {topic.posts.length > 0 ? (
          topic.posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h3 className="text-lg">{post.title}</h3>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                {post.comments.length} comments
              </p>
            </div>
          ))
        ) : (
          <p>No posts available for this topic.</p>
        )}
      </div> */}
    </div>
  );
}
