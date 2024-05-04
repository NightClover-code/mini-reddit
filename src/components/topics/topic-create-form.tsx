'use client';

import { createTopic } from '@/actions';
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
import { useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

type backdropType = 'blur' | 'opaque' | 'transparent';

export default function TopicCreateForm() {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = useState<backdropType>('blur');
  const session = useSession();

  const handleOpen = (backdrop: backdropType) => {
    if (!session.data?.user) {
      toast.error('You must be logged in to create a topic.');
      return null;
    }

    setBackdrop(backdrop);
    onOpen();
  };

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
                <Button color="primary" type="submit">
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
