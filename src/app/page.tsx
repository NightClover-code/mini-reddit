import PostList from '@/components/posts/post-list';
import TopicCreateForm from '@/components/topics/topic-create-form';
import TopicList from '@/components/topics/topic-list';
import { fetchTopPosts } from '@/db/queries/posts';

export default async function Home() {
  return (
    <div className="flex gap-4 p-4 mt-10 justify-between">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={() => fetchTopPosts()} />
      </div>
      <div>
        <TopicCreateForm />
        <TopicList />
      </div>
    </div>
  );
}
