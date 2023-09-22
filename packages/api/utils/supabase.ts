import { createClient } from '@supabase/supabase-js'
import type { Database } from '../database-generated'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://mtelzvckwsdkcqbvwewx.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZWx6dmNrd3Nka2NxYnZ3ZXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2Nzg1MDYsImV4cCI6MjAwNzI1NDUwNn0.5O1uyK3bdpViuWCo7x0zWQfMQHAxxy0P8qQbyGFlYe8'

export const initClient = () => {
  const client = createClient<Database>(supabaseUrl, supabaseAnonKey)

  return client
}
