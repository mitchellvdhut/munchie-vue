import type { LucideIconComponent } from '@/types/lucideIcon.ts'

export interface TopNavMeta {
  leftIcon?: LucideIconComponent
  rightIcon?: LucideIconComponent
  onLeftIconClick?: () => void
  onRightIconClick?: () => void
  title?: string
}
