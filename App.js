import React, {useState, useRef} from 'react';
import {ScrollView, StatusBar, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import LinearButton from './src/components/LinearButton';

import background from './src/assets/background.png';
import facebookIcon from './src/assets/facebook.png';
import googleIcon from './src/assets/google.png';

const App = () => {
  const scrollViewRef = useRef();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <BackgroundOverlay source={background}>
        <Container>
          <ScrollView ref={scrollViewRef}>
            <SignIn>
              <SignInHeader>conectar jogador</SignInHeader>
              <Input label="Usuário" />
              <Input label="Senha" secureTextEntry />
              <RecoveryMessage>Esqueci a senha!</RecoveryMessage>
              <LinearButton title="Entrar" style={{marginTop: 20}} />

              <FaceBookIcon source={facebookIcon} />
              <GoogleIcon source={googleIcon} />
            </SignIn>
            <SignUp>
              <SignUpHeader
                onPress={() =>
                  scrollViewRef.current.scrollToEnd({animated: true})
                }>
                sou novo
              </SignUpHeader>
              <Input label="Nome" />
              <Input label="Email" />
              <Input label="Telefone" />
              <Input secureTextEntry label="Senha" />
              <LinearButton title="Criar" style={{marginTop: 30}} />
            </SignUp>
          </ScrollView>
        </Container>
      </BackgroundOverlay>
    </>
  );
};

export const BackgroundOverlay = styled.ImageBackground`
  flex: 1;
`;

const Container = styled.SafeAreaView`
  padding-top: 10px;
  margin: 0 15px;
  /*background: #c3c3c3;
  flex: 1; */
`;

export const SignInHeader = styled.Text`
  font-weight: bold;
  font-size: 46px;
  line-height: 54px;
  text-transform: uppercase;
  padding-left: 45px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.9);
`;

export const SignUpHeader = styled.Text`
  font-weight: bold;
  font-size: 46px;
  line-height: 54px;
  text-transform: uppercase;
  right: 0;
  align-self: flex-end;
  margin-top: 80px;
  margin-bottom: 30px;
  width: 200px;
  text-align: center;
  color: rgba(0, 0, 0, 0.9);
`;

export const Input = styled(TextInput).attrs({
  underlineColor: 'rgba(0, 0, 0, 0.44)',

  theme: {
    colors: {
      primary: 'rgba(0, 0, 0, 0.44)',
      text: 'rgba(0, 0, 0, 0.44)',
      placeholder: 'rgba(0, 0, 0, 0.44)',
      background: 'transparent',
    },
  },
})`
  font-size: 14px;
  width: 90%;
`;

export const RecoveryMessage = styled.Text`
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.44);
`;

export const FaceBookIcon = styled.Image`
  position: absolute;
  bottom: -5%;
  left: 25%;
`;

export const GoogleIcon = styled.Image`
  position: absolute;
  bottom: 5%;
  right: 34%;
`;

export default App;
