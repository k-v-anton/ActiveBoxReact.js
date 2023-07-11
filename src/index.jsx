import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './components/App'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
    <App />
)
