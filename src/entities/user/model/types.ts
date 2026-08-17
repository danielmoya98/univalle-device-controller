import { Database } from '@/types/database.types';

export type UserRole = Database['public']['Enums']['user_role'];

export type UserProfile = Database['public']['Tables']['users']['Row'];

export interface AuthSessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
}
