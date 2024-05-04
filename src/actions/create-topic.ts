'use server';

import { CreateTopicFormState } from '@/interfaces';
import { createTopicSchema } from '@/validations';

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  return { errors: {} };
  //todo: revalidate homepage
}
