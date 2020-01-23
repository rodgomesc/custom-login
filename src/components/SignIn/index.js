import React from 'react';
import signInBackgroung from '../../assets/signIn.png';

import {Container} from './styles';

export default function SvgSignin({children}) {
  return (
    <Container resizeMode="stretch" source={signInBackgroung}>
      {children}
    </Container>
  );
}
