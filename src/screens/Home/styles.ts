import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Header = styled.View`
  height: 173px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.View`
  flex-direction: row;
  padding: 0 24px;
  margin-top: -30px;
`

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_500};
  color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 6px;
  border-width: 1px;

  padding: 16px;
  font-size: 16px;
  margin-right: 4px;
`

export const Button = styled(TouchableOpacity)`
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  border-radius: 6px;
`

export const TaskDetailsContainer = styled.View`
  margin: 32px 24px 0;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_400};

  flex-direction: row;
  justify-content: space-between;
`

export const TotalTask = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const TitleCreated = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.blue};
  font-size: 14px;
`

export const TitleCompleted = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.purple};
  font-size: 14px;
`

export const TitleNumberContainer = styled.View`
  padding: 2px 8px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.gray_400};

  border-radius: 999px;
`

export const TitleNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.gray_100};
`

export const TaskContent = styled.View`
  margin: 48px 24px 0;
  justify-content: baseline;
  align-items: center;
`

export const Title = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.gray_300};
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.gray_300};
`
