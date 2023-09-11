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
          name: string
          provider: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          image: string
          name: string
          provider: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          name?: string
          provider?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "brands_provider_fkey"
            columns: ["provider"]
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
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_provider_fkey"
            columns: ["provider"]
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
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_categories_product_fkey"
            columns: ["product"]
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
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_related_to_fkey"
            columns: ["to"]
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
          product: string
          sku: string
          stock: number
        }
        Insert: {
          color?: Json | null
          created_at?: string
          id?: string
          product: string
          sku: string
          stock?: number
        }
        Update: {
          color?: Json | null
          created_at?: string
          id?: string
          product?: string
          sku?: string
          stock?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_variants_product_fkey"
            columns: ["product"]
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
