import { PropsWithChildren } from 'react'

import { withAuth } from 'hooks'
import { ProjectLayout } from '../'
import { RealtimeMenu } from './RealtimeMenu'

export interface RealtimeLayoutProps {
  title?: string
}

const RealtimeLayout = ({ children }: PropsWithChildren<RealtimeLayoutProps>) => {
  return (
    <ProjectLayout title="Realtime" product="Realtime" productMenu={<RealtimeMenu />}>
      {children}
    </ProjectLayout>
  )
}

export default withAuth(RealtimeLayout)
