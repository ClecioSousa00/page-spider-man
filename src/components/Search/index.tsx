import Link from 'next/link'
import { Search as SearchBtn } from 'lucide-react'

export const Search = () => {
  return (
    <div className="group flex items-center">
      <input
        className="w-0 border-b border-white bg-transparent outline-none transition-all duration-300 ease-in-out group-hover:w-36"
        type="text"
        placeholder="Pesquisar"
      />
      <Link href="#">
        <SearchBtn size={20} />
      </Link>
    </div>
  )
}
