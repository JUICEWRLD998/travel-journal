/**
 * Application Entry Point
 * 
 * This file initializes the React application and mounts it to the DOM.
 * It imports the root App component and renders it inside the #root div.
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Global styles and CSS animations
import App from './App.jsx'

// Get the root DOM element and create a React root
const root = createRoot(document.getElementById('root'))

// Render the App component into the root element
root.render(
    <>
        <App />
    </>
)