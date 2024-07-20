'use client';

import { createPost } from '@/actions';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import FormButton from '../common/form-button';

type backdropType = 'blur' | 'opaque' | 'transparent';

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = useState<backdropType>('blur');
  const session = useSession();

  const createPostBound = createPost.bind(null, slug);

  const [formState, action] = useFormState(createPostBound, {
    errors: {},
  });

  const formErrors = formState.errors._form;

  useEffect(() => {
    if (formErrors) {
      toast.error(formErrors.join(', '));
    }
  }, [formErrors]);

  async function handleOpen(backdrop: backdropType) {
    if (!session.data?.user) {
      toast.error('You must be logged in to create a post.');
      return null;
    }

    setBackdrop(backdrop);
    onOpen();
  }

  return (
    <>
      <Button onPress={() => handleOpen(backdrop)} color="primary">
        Create Post
      </Button>

      <Modal
        backdrop={backdrop}
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {onClose => (
            <form action={action}>
              <ModalHeader className="flex flex-col gap-1">
                Create a post
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="title"
                  label="Title"
                  placeholder="Enter a post title"
                  variant="bordered"
                  isInvalid={!!formState.errors.title}
                  errorMessage={formState.errors.title?.join(', ')}
                />
                <Input
                  label="Content"
                  name="content"
                  placeholder="Write content for your post"
                  variant="bordered"
                  isInvalid={!!formState.errors.content}
                  errorMessage={formState.errors.content?.join(', ')}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <FormButton>Create</FormButton>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
