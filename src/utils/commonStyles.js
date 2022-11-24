import styled from 'styled-components/native';
import { Color } from './color';
import { responsiveHeight, responsiveWidth } from './themeUtils';

export const Container = styled.View`
  flex: 1;
  background-color : ${Color.WHITE_SMOKE}; 
`;

export const SubContainer = styled.View`
  marginHorizontal : ${responsiveWidth(5)}px;
  marginTop : ${responsiveHeight(2)}px ;
  paddingBottom : ${responsiveHeight(2)}px ;
`;
