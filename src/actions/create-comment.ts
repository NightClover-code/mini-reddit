'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';
import { CreateCommentFormState } from '@/interfaces';
import { createCommentSchema } from '@/validations/commentSchema';

export async function createComment(
  { postId, parentId }: { postId: string; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const session = await auth();

  const validatedComment = createCommentSchema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedComment.success) {
    return {
      errors: validatedComment.error.flatten().fieldErrors,
    };
  }

  try {
    await db.comment.create({
      data: {
        content: validatedComment.data.content,
        postId: postId,
        parentId: parentId,
        //@ts-ignore
        userId: session.user.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ['Something went wrong.'] } };
    }
  }

  const topic = await db.topic.findFirst({
    where: { posts: { some: { id: postId } } },
  });

  if (!topic) return { errors: { _form: ['Failed to revalidate topic'] } };

  revalidatePath(paths.postShow(topic.slug, postId));

  return {
    errors: {},
    success: true,
  };
}
