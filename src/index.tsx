import React from 'react'
import { createRoot } from 'react-dom/client'

import { H } from 'highlight.run'

import App from './App'

H.init(process.env.REACT_APP_HIGHLIGHT_ID, {
  serviceName: 'frontend-app',
  tracingOrigins: true,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
    urlBlocklist: [
      // insert full or partial urls that you don't want to record here
      // Out of the box, Highlight will not record these URLs (they can be safely removed):
      'https://www.googleapis.com/identitytoolkit',
      'https://securetoken.googleapis.com',
    ],
  },
})

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
