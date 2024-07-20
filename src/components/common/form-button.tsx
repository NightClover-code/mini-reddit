'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '@nextui-org/react';

type FormButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export default function FormButton({ children, ...props }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button color="primary" type="submit" isLoading={pending} {...props}>
      {children}
    </Button>
  );
}
