// component default props:
import StyledBox from '@jswork/styled-box';
import styled from 'styled-components';

Object.assign(StyledBox.defaultProps, {
  styled,
  mainClassName: 'sb-view',
  plugins: [
    require('@jswork/styled-plugin-absolute-center').default,
    require('@jswork/styled-plugin-em-justify-list').default,
    require('@jswork/styled-plugin-flexbox').default,
    require('@jswork/styled-plugin-radius-strip').default,
    require('@jswork/styled-plugin-scaleable-image').default,
    require('@jswork/styled-plugin-shadow').default,
    require('@jswork/styled-plugin-transform-center').default,
    require('@jswork/styled-plugin-line').default,
  ],
});
