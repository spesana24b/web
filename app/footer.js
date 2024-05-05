"use client"

import s from "./footer.module.css"

export default function Footer() {
  return <footer className={s.footer}>
    <div className="response">
      <div className={s.footer_grid}>
        <div className={s.footer_title}>
          <h3 style={{margin:0}}>Spesana 24'B</h3>
          <p>Kami adalah siswa siswi SMPN 1 Nanggulan angkatan 24 dari tahun 2021 - 2024 pada kelas B</p>
        </div>
        <div className={s.footer_link}>
          <b>Sosial Media</b>
          <ul>
            <li><a target="_blank" href="/r?id=yt">YouTube</a></li>
            <li><a target="_blank" href="/r?id=ig">Instagram</a></li>
            <li><a target="_blank" href="/r?id=thread">Threads</a></li>
            <li><a target="_blank" href="/r?id=tiktok">Tiktok</a></li>
          </ul>
        </div>
        <div className={s.footer_link}>
          <b>Event Terkait</b>
          <ul>
            <li><a target="_blank" href="/r?id=e.mahatapa">Mahatapa (kemah)</a></li>
            <li><a target="_blank" href="/r?id=e.studytour">Studytour Jak-Ban</a></li>
          </ul>
        </div>
        <div className={s.footer_link}>
          <b>Video Terkait</b>
          <ul>
            <li><a target="_blank" href="/r?id=short-jamkosmoment">Jamkos Moment 9B</a></li>
            <li><a target="_blank" href="/r?id=studytourjakban">Studytour Jak-Ban</a></li>
          </ul>
        </div>
      </div>
      <div className={s.footer_bottom}>
        <p>{`Spesana 24'B ${new Date().getFullYear()} © (End In 2024 May)`}</p>
        <a target="_blank" href="/r?id=about-our-school">About our school</a>
      </div>
    </div>
  </footer>
}