interface CategorySwitcherProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export function CategorySwitcher({ categories, selected, onSelect }: CategorySwitcherProps) {
  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm transition-all
            ${selected === category ? "bg-white shadow-sm font-medium" : "text-gray-600 hover:bg-gray-100"}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

