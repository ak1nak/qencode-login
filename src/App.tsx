import React from 'react'
import AppRouter from './router/AppRouter'
import { Header } from './components/Header/Header'
import { AppContainer } from './App.styles'

export const App:React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <AppRouter />
    </AppContainer>
  )
}
