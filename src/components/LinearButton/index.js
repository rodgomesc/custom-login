import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {Container, Text} from './styles';

export default function LinearButton({title, ...rest}) {
  return (
    <Container {...rest}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          flex: 1,
          borderRadius: 22,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        colors={['#B88BFF', '#817FF2']}>
        <Text>{title}</Text>
      </LinearGradient>
    </Container>
  );
}
