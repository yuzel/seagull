import React from 'react'
import Header from '@/components/Header'
import LandingIntroBanner from './components/LandingIntroBanner'
import PersonalProfile from './components/PersonalProfile'
import Project from './components/Project'
import Works from './components/Works'
import './style.scss'

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <LandingIntroBanner />
      <div id="home/resume" className="home-content">
        <PersonalProfile />
      </div>
      <div id="home/project" className="home-content">
        <Project />
      </div>
      <div id="home/works" className="home-content">
        <Works />
      </div>
    </div>
  )
}
