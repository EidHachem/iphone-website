import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "https://9502c348f1a6fe2b3314bac8a0a31c7b@o4508074315743232.ingest.de.sentry.io/4508074320789584",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
