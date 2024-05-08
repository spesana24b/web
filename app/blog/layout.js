"use client"

import { LinerIcon } from 'hugeicons-react'
import { useRouter, usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const path = usePathname()
  return <div style={{marginTop:50,maxWidth:550}} className="response">
    <div style={{width:"100%",height:"40px",display:"flex",alignItems:"center",padding:"0px 12px",userSelect:"none"}}>
      {path.split("/").slice(1).map((a, i) => (
        <div style={{display:"flex",alignItems:"center"}}>
          <LinerIcon size={14}/>
          <span style={{margin:"0px 2px",background:"#f2f2f2",padding:"4px 8px",borderRadius:9,fontSize:14}}>{a.trim().replace(/-/g, " ")}</span>
        </div>
      ))}
    </div>
    {children}
  </div>
}