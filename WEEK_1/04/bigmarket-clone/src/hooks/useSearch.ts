import { useState, useMemo } from 'react'
import type { Product } from '../types'

interface UseSearchResult {
  searchTerm: string
  setSearchTerm: (term: string) => void
  filteredProducts: Product[]
  searchResults: Product[]
}

export function useSearch(products: Product[]): UseSearchResult {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products
    }

    const term = searchTerm.toLowerCase()
    return products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (product.description && product.description.toLowerCase().includes(term))
    )
  }, [products, searchTerm])

  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
    searchResults: filteredProducts
  }
}
