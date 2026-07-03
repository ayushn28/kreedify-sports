import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    const move = e => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px'; }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px'; }
    }
    const enter = e => {
      if (!e.target.closest('a,button,[role=button],[data-cur]')) return
      dot.current?.classList.add('hov')
      ring.current?.classList.add('hov')
    }
    const leave = e => {
      if (!e.target.closest('a,button,[role=button],[data-cur]')) return
      dot.current?.classList.remove('hov')
      ring.current?.classList.remove('hov')
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])
  return (
    <>
      <div ref={dot}  className="ku-cursor" />
      <div ref={ring} className="ku-cursor-ring" />
    </>
  )
}