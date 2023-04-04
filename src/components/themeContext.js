import React, { useEffect, useState } from "react";
import ParticlesConfig from "./ParticlesConfig";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";


const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const [particlesContainer, setParticlesContainer] = useState();

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);
  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <Particles
          theme={theme}
          id="tsparticles"
          particlesLoaded="particlesLoaded"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesConfig}
        />
    </ThemeContext.Provider>
  );
};