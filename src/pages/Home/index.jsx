import React from 'react';
import Header from '@/components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';
import PersonalProfile from './components/PersonalProfile';
import Project from './components/Project';
import Works from './components/Works';


export default function Home() {
  return (
    <div>
      <Header />
      <LandingIntroBanner />
      <div id="home/resume">
        <PersonalProfile />
      </div>
      <div id="home/project">
        <Project />
      </div>
      <div id="home/works">
        <Works />
      </div>
    </div>
  );
}
