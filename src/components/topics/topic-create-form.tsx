'use client';

import { createTopic } from '@/actions';
import { CreateTopicFormState } from '@/interfaces';
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

export default function TopicCreateForm() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = useState<backdropType>('blur');
  const session = useSession();

  const [formState, action] = useFormState(createTopic, {
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
      toast.error('You must be logged in to create a topic.');
      return null;
    }

    setBackdrop(backdrop);
    onOpen();
  }

  return (
    <>
      <Button onPress={() => handleOpen(backdrop)} color="primary">
        Create Topic
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
                Create a topic
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  name="name"
                  label="Name"
                  placeholder="Enter a topic name"
                  variant="bordered"
                  isInvalid={!!formState.errors.name}
                  errorMessage={formState.errors.name?.join(', ')}
                />
                <Input
                  label="Description"
                  name="description"
                  placeholder="Describe your topic"
                  variant="bordered"
                  isInvalid={!!formState.errors.description}
                  errorMessage={formState.errors.description?.join(', ')}
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
