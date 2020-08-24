import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Loading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({
  loading,
  icon: Icon,
  children,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? (
      <Loading />
    ) : (
      <>
        {Icon && <Icon size={20} />}
        {children}
      </>
    )}
  </Container>
);

export default Button;
