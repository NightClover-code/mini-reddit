import { db } from '@/db';
import paths from '@/paths';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map(({ id, slug }) => (
    <div key={id}>
      <Link href={paths.topicShow(slug)}>
        <Chip color="primary">{slug}</Chip>
      </Link>
    </div>
  ));

  return <div>{renderedTopics}</div>;
}
