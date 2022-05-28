import Link from "next/link"
import React from "react"

type Props = {
  items: Item[]
}

type Item = {
  id: string,
  name: string,
}

export const List:React.FC<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link href={`/items/${item.id}`}>
          <a>{item.name}</a>
        </Link>
      </li>
    ))}
  </ul>
)