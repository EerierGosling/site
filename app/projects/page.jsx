"use client"

import { useState, useEffect, useMemo } from 'react';
import '../globals.css';
import './Projects.css';
import projectsData from './projects.json';
import ProjectItem from '../components/ProjectItem.jsx';
import EventItem from '../components/EventItem.jsx';

function Projects() {

  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  useEffect(() => {
    setProjects(projectsData.projects);
    setEvents(projectsData.events);
  }, []);

  const mainEvents = events.filter(event => !event.more);
  const moreEvents = events.filter(event => event.more);

  return (
    <div className="projects-content">
      <h1 className="section-title">events</h1>
      <section className="events-container">
        {mainEvents.map((event, index) => <EventItem event={event} key={index} />)}
      </section>
      {moreEvents.length > 0 && (
        <div className="more-events">
          <button
            className="more-events-toggle"
            onClick={() => setShowMoreEvents(prev => !prev)}
          >
            {showMoreEvents ? 'show less events ▲' : 'more events ▼'}
          </button>
          {showMoreEvents && (
            <section className="events-container">
              {moreEvents.map((event, index) => <EventItem event={event} key={index} />)}
            </section>
          )}
        </div>
      )}
      <h1 className="section-title">projects</h1>
      <section className="projects-container">
        {projects.map((project, index) => <ProjectItem project={project} key={index} />)}
      </section>
    </div>
  );
}

export default Projects;
