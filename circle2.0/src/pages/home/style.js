import styled from 'styled-components'
import { variable } from '../../assets/global-style'

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${variable['color-white']};
  box-shadow: ${variable['theme-shadow']};
  .btn {
    width: 60px;
    height: 60px;
  }
  .search-wrap {
    flex: 1;
    margin: 10px;
    .search-input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      border-radius: ${variable['theme-radius']};
      background-color: ${variable['color-gray-bg']};
    }
  }
`
