'use server';

import { createTopicSchema } from '@/validations';

export async function createTopic(formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  console.log(result.error);

  //todo: revalidate homepage
}
