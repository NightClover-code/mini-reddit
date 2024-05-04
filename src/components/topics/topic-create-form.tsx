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
  Checkbox,
  Link,
  Input,
} from '@nextui-org/react';
import { useState } from 'react';

type backdropType = 'blur' | 'opaque' | 'transparent';

export default function TopicCreateForm() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = useState<backdropType>('blur');

  const handleOpen = (backdrop: backdropType) => {
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
            <form action={createTopic}>
              <ModalHeader className="flex flex-col gap-1">
                Create a topic
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter a topic name"
                  variant="bordered"
                />
                <Input
                  label="Topic"
                  placeholder="Describe your topic"
                  variant="bordered"
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
