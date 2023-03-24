import React from 'react'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Container, TaskBox, CheckBox, TaskTitle } from './styles'

interface Props {
  id: string
  title: string
  isCompleted: boolean
  onCheck: (taskId: string) => void
  onRemove: (taskId: string) => void
}

export function Task({ id, title, isCompleted, onCheck, onRemove }: Props) {
  const theme = useTheme()

  function handleCheck() {
    onCheck(id)
  }

  function handleRemove() {
    onRemove(id)
  }

  return (
    <Container>
      <TaskBox onPress={handleCheck}>
        <CheckBox
          value={isCompleted}
          color={isCompleted ? theme.colors.purple_dark : undefined}
        />
        <TaskTitle value={isCompleted}>{title}</TaskTitle>
        <Feather
          name="trash-2"
          size={17}
          color={theme.colors.gray_300}
          onPress={handleRemove}
        />
      </TaskBox>
    </Container>
  )
}
