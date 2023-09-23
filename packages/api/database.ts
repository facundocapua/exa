import type { Database } from './database-generated'

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
