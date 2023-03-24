import styled, { css } from 'styled-components/native'

import Checkbox from 'expo-checkbox'

interface Props {
  value: boolean
}

export const Container = styled.View`
  margin: 0 24px;
`

export const TaskBox = styled.TouchableOpacity`
  padding: 12px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.gray_500};
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-width: 1px;
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CheckBox = styled(Checkbox)`
  width: 17px;
  height: 17px;

  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.gray_100};
`

export const TaskTitle = styled.Text<Props>`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  color: ${({ theme, value }) =>
    value === true ? theme.colors.gray_300 : theme.colors.gray_100};
  font-size: 14px;

  margin: 0 8px;

  ${({ value }) =>
    value === true
      ? css`
          text-decoration-line: line-through;
        `
      : ''}
`
