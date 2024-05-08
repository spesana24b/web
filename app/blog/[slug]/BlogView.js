"use client"

import s from "./BlogView.module.css"

export default function BlogView({ data, content }) {
  return <div className={s.reader}>
    <div className={s.banner}>
      <img src={data?.image} />
    </div>
    <div className={s.docs}>
      <h2>{data.title}</h2>
      {content}
    </div>
  </div>
}