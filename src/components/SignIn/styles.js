import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// container height is device height - 25%
export const Container = styled.ImageBackground`
  align-items: center;
  height: ${parseInt(
    Dimensions.get('window').height -
      (Dimensions.get('window').height * 25) / 100,
  )}px;
  margin-top: 15px;
  flex: 1;
  z-index: 99;
`;
