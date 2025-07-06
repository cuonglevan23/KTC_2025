import { Button } from '../ui';
import { NAVIGATION_ITEMS } from '../../constants';

interface CategoryFiltersProps {
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
  className?: string;
}

export function CategoryFilters({ 
  selectedCategory, 
  onCategoryChange, 
  className 
}: CategoryFiltersProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      <Button
        variant={!selectedCategory ? 'primary' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange(undefined)}
      >
        Tất cả
      </Button>
      
      {NAVIGATION_ITEMS.map((item) => (
        <Button
          key={item.id}
          variant={selectedCategory === item.id ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(item.id)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
