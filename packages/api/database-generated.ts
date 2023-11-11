export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      banners: {
        Row: {
          created_at: string
          id: string
          image: string
          link: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          link: string
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          link?: string
          title?: string
        }
        Relationships: []
      }
      brands: {
        Row: {
          created_at: string
          id: string
          image: string
          is_active: boolean
          is_featured: boolean
          name: string
          provider: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          is_active?: boolean
          is_featured?: boolean
          name: string
          provider: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          is_active?: boolean
          is_featured?: boolean
          name?: string
          provider?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "brands_provider_fkey"
            columns: ["provider"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string
          id: string
          image: string | null
          is_featured: boolean
          main_menu: Json | null
          name: string
          parent: string | null
          slug: string
          sort: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image?: string | null
          is_featured?: boolean
          main_menu?: Json | null
          name: string
          parent?: string | null
          slug: string
          sort?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image?: string | null
          is_featured?: boolean
          main_menu?: Json | null
          name?: string
          parent?: string | null
          slug?: string
          sort?: number
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_fkey"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          brand: string
          created_at: string
          description: string
          id: string
          is_active: boolean
          name: string
          price: number
          provider: string
          sale_price: number
          sku: string
          slug: string
        }
        Insert: {
          brand: string
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          name: string
          price: number
          provider: string
          sale_price: number
          sku: string
          slug: string
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          name?: string
          price?: number
          provider?: string
          sale_price?: number
          sku?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_fkey"
            columns: ["brand"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_provider_fkey"
            columns: ["provider"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          }
        ]
      }
      products_categories: {
        Row: {
          category: string
          product: string
        }
        Insert: {
          category: string
          product: string
        }
        Update: {
          category?: string
          product?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_categories_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_categories_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_images: {
        Row: {
          created_at: string
          id: string
          image: string
          product: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          product: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          product?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_images_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_related: {
        Row: {
          from: string
          to: string
        }
        Insert: {
          from: string
          to: string
        }
        Update: {
          from?: string
          to?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_related_from_fkey"
            columns: ["from"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_related_to_fkey"
            columns: ["to"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_variants: {
        Row: {
          color: Json | null
          created_at: string
          id: string
          is_active: boolean
          product: string
          sku: string
          sort: number
          stock: number
          vendor_code: string | null
        }
        Insert: {
          color?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          product: string
          sku: string
          sort?: number
          stock?: number
          vendor_code?: string | null
        }
        Update: {
          color?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          product?: string
          sku?: string
          sort?: number
          stock?: number
          vendor_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_variants_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_variants_images: {
        Row: {
          created_at: string
          id: string
          image: string
          variant: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          variant: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          variant?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_variants_images_variant_fkey"
            columns: ["variant"]
            isOneToOne: false
            referencedRelation: "products_variants"
            referencedColumns: ["id"]
          }
        ]
      }
      providers: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      stores: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          hours: Json | null
          id: string
          is_active: boolean
          lat: number
          lng: number
          map: string | null
          name: string
          social_networks: Json | null
          state: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          hours?: Json | null
          id?: string
          is_active?: boolean
          lat: number
          lng: number
          map?: string | null
          name: string
          social_networks?: Json | null
          state?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          hours?: Json | null
          id?: string
          is_active?: boolean
          lat?: number
          lng?: number
          map?: string | null
          name?: string
          social_networks?: Json | null
          state?: string | null
          website?: string | null
        }
        Relationships: []
      }
      stores_brands: {
        Row: {
          brand: string
          store: string
        }
        Insert: {
          brand: string
          store: string
        }
        Update: {
          brand?: string
          store?: string
        }
        Relationships: [
          {
            foreignKeyName: "stores_brands_brand_fkey"
            columns: ["brand"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stores_brands_store_fkey"
            columns: ["store"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
