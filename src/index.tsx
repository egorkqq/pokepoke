import React from 'react'
import { createRoot } from 'react-dom/client'

import { H } from 'highlight.run'

import App from './App'

if (process.env.NODE_ENV === 'production') {
  H.init(process.env.REACT_APP_HIGHLIGHT_ID, {
    serviceName: 'frontend-app',
    tracingOrigins: true,
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
    },
  })
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
