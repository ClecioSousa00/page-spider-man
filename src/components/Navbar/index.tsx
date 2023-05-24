import Link from 'next/link'
import { Search } from '../Search'

export const Navbar = () => {
  return (
    <div className="flex space-x-14">
      <nav className="">
        <ul className="flex space-x-14">
          <li>
            <Link href="#">SHOP</Link>
          </li>
          <li>
            <Link href="#">NFTs</Link>
          </li>
          <li>
            <Link href="#">Spider-Man: Miles Morales</Link>
          </li>
          <li>
            <Link href="#">Into The Spider- Verse</Link>
          </li>
        </ul>
      </nav>
      <Search />
    </div>
  )
}
