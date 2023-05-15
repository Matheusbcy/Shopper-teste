import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ContainerHome } from './homeStyle'
import Router from '../routes/Router'

function Home() {
  return (
    <div>
        <Header />
        <ContainerHome>
        <Nav />
        <Router />
        </ContainerHome>
        <Footer />
    </div>
  )
}

export default Home