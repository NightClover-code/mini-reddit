'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { CreatePostFormState } from '@/interfaces';
import paths from '@/paths';
import { createPostSchema } from '@/validations/postSchema';
import { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const session = await auth();

  const validatedPost = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedPost.success) {
    return { errors: validatedPost.error.flatten().fieldErrors };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic) return { errors: { _form: ['Topic not found.'] } };

  let post: Post;

  try {
    post = await db.post.create({
      data: {
        title: validatedPost.data.title,
        content: validatedPost.data.content,
        //@ts-ignore
        userId: session?.user.id,
        topicId: topic.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ['Something went wrong.'] } };
    }
  }

  console.log('post', post);
  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
}
