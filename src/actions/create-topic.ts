'use server';

import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { CreateTopicFormState } from '@/interfaces';
import { createTopicSchema } from '@/validations';
import { db } from '@/db';
import paths from '@/paths';
import toast from 'react-hot-toast';
import { revalidatePath } from 'next/cache';

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const validatedTopic = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!validatedTopic.success) {
    return { errors: validatedTopic.error.flatten().fieldErrors };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: validatedTopic.data.name,
        description: validatedTopic.data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
      return { errors: { _form: [error.message] } };
    } else {
      toast.error('Something went wrong.');
      return { errors: { _form: ['Something went wrong.'] } };
    }
  }

  revalidatePath('/');
  redirect(paths.topicShow(topic.slug));
}
