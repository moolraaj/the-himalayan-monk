import Link from "next/link"
import { leh } from "./assets/images"


function Notfound() {
  return (
    <>
      <div className="not_found_banner">
        <img src={leh.src} alt={leh.src} />
        <h1>page not found <Link href="/">go back to homepage</Link></h1>
      </div>
      <div className="page_top">
        <div className="not_found_outer">
          <div className="not_found_inner">

          </div>
        </div>
      </div>
    </>
  )
}

export default Notfound
