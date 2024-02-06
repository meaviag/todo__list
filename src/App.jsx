import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import './App.css'


function Main() {
  return (
    <div>
      <Header className ='head'>
      </Header>
      <MainContent className = 'main'>


      </MainContent>
    </div>
  )
}

export default Main //объявляем, что данная функция будет считаться главной функцией  и работать вне данного файла.