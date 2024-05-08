"use client"

import { useRouter } from "next/navigation"
import s from "./BlogCard.module.css"

export default function BlogCard({ data, isLoading }) {
  const router = useRouter()

  return <div className={s.card_list} loading={isLoading?"!":undefined}>
    {(isLoading? [...Array(5)] : data).map((a, i) => (
      <div className={s.card} onClick={() => {
        if(!isLoading) {
          router.push(`/blog/${a?.slug||""}`)
        }
      }}>
        <div className={s.card_banner}>
          {!isLoading? <img src={a?.image} /> : ""}
        </div>
        <div className={s.card_desc}>
          <h2>{a?.title||""}</h2>
          <p>{a?.description||""}</p>
        </div>
        <div className={s.card_label}>
          <span></span>
        </div>
      </div>
    ))}
  </div>
}