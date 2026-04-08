'use client'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotSidebar } from '@copilotkit/react-ui'
import '@copilotkit/react-ui/styles.css'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <CopilotSidebar
        instructions="You are an NBA expert. Answer questions about teams, players, stats, game predictions, and history. Be enthusiastic and data-driven."
        defaultOpen={false}
        labels={{ title: 'NBA AI Oracle', initial: 'Ask me anything — teams, stats, predictions...' }}
      >
        {children}
      </CopilotSidebar>
    </CopilotKit>
  )
}
