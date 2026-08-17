export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      blocks: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      classroom_inspections: {
        Row: {
          checked_at: string | null
          classroom_id: string
          id: string
          inspection_id: string
          is_fully_operational: boolean
          notes: string | null
        }
        Insert: {
          checked_at?: string | null
          classroom_id: string
          id?: string
          inspection_id: string
          is_fully_operational?: boolean
          notes?: string | null
        }
        Update: {
          checked_at?: string | null
          classroom_id?: string
          id?: string
          inspection_id?: string
          is_fully_operational?: boolean
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "classroom_inspections_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classroom_inspections_inspection_id_fkey"
            columns: ["inspection_id"]
            isOneToOne: false
            referencedRelation: "inspections"
            referencedColumns: ["id"]
          },
        ]
      }
      classrooms: {
        Row: {
          block_id: string
          code: string
          created_at: string | null
          floor: number
          id: string
          is_active: boolean
        }
        Insert: {
          block_id: string
          code: string
          created_at?: string | null
          floor?: number
          id?: string
          is_active?: boolean
        }
        Update: {
          block_id?: string
          code?: string
          created_at?: string | null
          floor?: number
          id?: string
          is_active?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "classrooms_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "blocks"
            referencedColumns: ["id"]
          },
        ]
      }
      device_check_items: {
        Row: {
          classroom_inspection_id: string
          created_at: string | null
          device_id: string
          has_hdmi_vga_cable: boolean
          has_power_cable: boolean
          has_remote_control: boolean
          id: string
          observations: string | null
          overall_status: Database["public"]["Enums"]["check_result"]
          powers_on: boolean
        }
        Insert: {
          classroom_inspection_id: string
          created_at?: string | null
          device_id: string
          has_hdmi_vga_cable?: boolean
          has_power_cable?: boolean
          has_remote_control?: boolean
          id?: string
          observations?: string | null
          overall_status?: Database["public"]["Enums"]["check_result"]
          powers_on?: boolean
        }
        Update: {
          classroom_inspection_id?: string
          created_at?: string | null
          device_id?: string
          has_hdmi_vga_cable?: boolean
          has_power_cable?: boolean
          has_remote_control?: boolean
          id?: string
          observations?: string | null
          overall_status?: Database["public"]["Enums"]["check_result"]
          powers_on?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "device_check_items_classroom_inspection_id_fkey"
            columns: ["classroom_inspection_id"]
            isOneToOne: false
            referencedRelation: "classroom_inspections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_check_items_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
        ]
      }
      device_replacements: {
        Row: {
          cost: number
          created_at: string | null
          device_id: string
          id: string
          item_type: Database["public"]["Enums"]["replacement_item_type"]
          quantity: number
          reason: string
          registered_by: string
          replaced_at: string
        }
        Insert: {
          cost?: number
          created_at?: string | null
          device_id: string
          id?: string
          item_type: Database["public"]["Enums"]["replacement_item_type"]
          quantity?: number
          reason: string
          registered_by: string
          replaced_at?: string
        }
        Update: {
          cost?: number
          created_at?: string | null
          device_id?: string
          id?: string
          item_type?: Database["public"]["Enums"]["replacement_item_type"]
          quantity?: number
          reason?: string
          registered_by?: string
          replaced_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "device_replacements_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_replacements_registered_by_fkey"
            columns: ["registered_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      device_types: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      devices: {
        Row: {
          brand: string
          classroom_id: string | null
          created_at: string | null
          id: string
          installation_date: string | null
          internal_code: string
          model: string
          notes: string | null
          serial_number: string | null
          status: Database["public"]["Enums"]["device_status"]
          type_id: string
          updated_at: string | null
        }
        Insert: {
          brand: string
          classroom_id?: string | null
          created_at?: string | null
          id?: string
          installation_date?: string | null
          internal_code: string
          model: string
          notes?: string | null
          serial_number?: string | null
          status?: Database["public"]["Enums"]["device_status"]
          type_id: string
          updated_at?: string | null
        }
        Update: {
          brand?: string
          classroom_id?: string | null
          created_at?: string | null
          id?: string
          installation_date?: string | null
          internal_code?: string
          model?: string
          notes?: string | null
          serial_number?: string | null
          status?: Database["public"]["Enums"]["device_status"]
          type_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "device_types"
            referencedColumns: ["id"]
          },
        ]
      }
      inspections: {
        Row: {
          completed_at: string | null
          created_at: string | null
          general_notes: string | null
          id: string
          inspector_id: string
          scheduled_date: string
          started_at: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          general_notes?: string | null
          id?: string
          inspector_id: string
          scheduled_date?: string
          started_at?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          general_notes?: string | null
          id?: string
          inspector_id?: string
          scheduled_date?: string
          started_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inspections_inspector_id_fkey"
            columns: ["inspector_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_active: boolean
          name: string
          password_hash: string
          role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_active?: boolean
          name: string
          password_hash: string
          role?: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_active?: boolean
          name?: string
          password_hash?: string
          role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      check_result: "ok" | "warning" | "failed" | "missing"
      device_status:
        | "operational"
        | "under_maintenance"
        | "damaged"
        | "missing_accessories"
        | "stored"
      replacement_item_type:
        | "battery_remote"
        | "cable_hdmi"
        | "cable_vga"
        | "cable_power"
        | "lamp_bulb"
        | "remote_control_unit"
        | "other"
      user_role: "admin" | "tech_support" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
