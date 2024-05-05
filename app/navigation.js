"use client"

import Link from "next/link"
import s from "./navigation.module.css"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const route = useRouter()

  return <header className={s.header}>
    <div className={s.header_flex+" response"}>
      <div className={s.header_title} onClick={() => {
        route.push("/")
      }}>
        <b>Spesana 24'B</b>
      </div>
      <div className={s.header_link}>
        <Link href="/blog">Blog</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  </header>
}