import React from 'react';
import Header from '@/components/Header';
import LandingIntroBanner from './components/LandingIntroBanner';
import PersonalProfile from './components/PersonalProfile';
import Project from './components/Project';
import Works from './components/Works';


export default function Home() {
  return (
    <div
      className="home-page"
      style={{
        background: '#fff',
      }}
    >
      <Header />
      <LandingIntroBanner />
      <div id="resume">
        <PersonalProfile />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="works">
        <Works />
      </div>
    </div>
  );
}
