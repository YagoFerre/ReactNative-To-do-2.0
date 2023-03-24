import React, { useState } from 'react'
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import Logo from '../../assets/logo.svg'

import { Task } from '../../components/Task'

import uuid from 'react-native-uuid'

import {
  Button,
  Container,
  Header,
  Input,
  InputContainer,
  Subtitle,
  TaskContent,
  TaskDetailsContainer,
  Title,
  TitleCompleted,
  TitleCreated,
  TitleNumber,
  TitleNumberContainer,
  TotalTask,
} from './styles'

interface TaskProps {
  id: string
  title: string
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const totalTask = tasks.length

  const tasksCompleted = tasks.reduce((value, task) => {
    if (task.isCompleted === true) {
      return (value += 1)
    } else {
      return value
    }
  }, 0)

  const theme = useTheme()

  function handleCreateNewTask() {
    const newTask = {
      id: String(uuid.v4()),
      title: newTaskTitle,
      isCompleted: false,
    }

    setTasks((prevState) => [...prevState, newTask])
    setNewTaskTitle('')
  }

  function handleCheckTask(taskId: string) {
    const completedTask = tasks.map((task) =>
      taskId === task.id ? { ...task, isCompleted: !task.isCompleted } : task,
    )

    setTasks(completedTask)
  }

  function handleRemoveTask(taskId: string) {
    const taskToRemove = tasks.filter((task) => task.id !== taskId)

    setTasks(taskToRemove)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header>
          <Logo />
        </Header>

        <InputContainer>
          <Input
            placeholder="Adicione uma nova tarefa"
            autoCorrect={false}
            placeholderTextColor={theme.colors.gray_300}
            value={newTaskTitle}
            onChangeText={(value) => setNewTaskTitle(value)}
          />
          <Button onPress={handleCreateNewTask} disabled={newTaskTitle === ''}>
            <Feather
              name="plus-circle"
              size={20}
              color={theme.colors.gray_100}
            />
          </Button>
        </InputContainer>

        <TaskDetailsContainer>
          <TotalTask>
            <TitleCreated>Criadas</TitleCreated>
            <TitleNumberContainer>
              <TitleNumber>{totalTask}</TitleNumber>
            </TitleNumberContainer>
          </TotalTask>

          <TotalTask>
            <TitleCompleted>Concluídas</TitleCompleted>
            <TitleNumberContainer>
              <TitleNumber>{tasksCompleted}</TitleNumber>
            </TitleNumberContainer>
          </TotalTask>
        </TaskDetailsContainer>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
              onCheck={handleCheckTask}
              onRemove={handleRemoveTask}
            />
          )}
          ListEmptyComponent={
            <TaskContent>
              <Feather
                name="clipboard"
                size={56}
                color={theme.colors.gray_400}
              />
              <Title>Você ainda não tem tarefas cadastradas</Title>
              <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
            </TaskContent>
          }
        />
      </Container>
    </TouchableWithoutFeedback>
  )
}
