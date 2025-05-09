import type { ReactNode } from 'react'
import type { BaseParams } from './params'

export interface BaseComponentProps {
  dataTestId?: string
}

export interface BaseLayoutProps extends BaseParams {
  children?: ReactNode
}
