import React from 'react';
import signUpBackgroung from '../../assets/signup.png';

import {Container} from './styles';

export default function SvgSignin({children}) {
  return (
    <Container resizeMode="stretch" source={signUpBackgroung}>
      {children}
    </Container>
  );
}
