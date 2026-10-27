import Link from "next/link";
import { ArrowRight, ShipWheel } from "lucide-react";

const publicPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Gateway() {
  return (
    <main className="gateway-page" style={{ backgroundImage: `linear-gradient(105deg,rgba(255,255,255,.82) 0%,rgba(255,255,255,.72) 44%,rgba(255,255,255,.58) 100%), url(${publicPath}/images/hai-phong-port-hero.png)` }}>
      <div className="gateway-noise" />
      <header className="gateway-header"><div className="gateway-brand"><span className="gateway-company"><strong>CÔNG TY TNHH VẬN TẢI THƯƠNG MẠI HÀ ANH</strong><small>HÀ ANH LOGISTICS · HẢI PHÒNG</small><span>Hạ Đoạn 2, Đường Trần Hưng Đạo, P. Đông Hải 2, Q. Hải An, Tp. Hải Phòng</span></span></div><div className="gateway-contact"><a href="tel:02253978897">02253 978 897</a><a href="mailto:haanhtraco@gmail.com">haanhtraco@gmail.com</a></div></header>
      <section className="gateway-choices">
        <Link className="gateway-card port-card logo-left" href="/cang"><div className="gateway-card-inner"><img className="gateway-3d-logo" src={`${publicPath}/logo/hoang-anh-port-3d.png`} alt="Logo Cảng Hoàng Anh" /><div className="gateway-card-copy"><span className="choice-kicker">CẢNG HOÀNG ANH</span><h2>Nơi hàng hóa<br /><em>hội tụ.</em></h2><p>Cảng, kho bãi và dịch vụ bốc xếp tại Hải Phòng.</p><span className="choice-cta">Khám phá cảng <ArrowRight /></span></div></div></Link>
        <Link className="gateway-card transport-card logo-right" href="/van-tai"><div className="gateway-card-inner"><div className="gateway-card-copy"><span className="choice-kicker">VẬN TẢI HÀ ANH</span><h2>Đưa hàng đi<br /><em>đúng nhịp.</em></h2><p>Vận chuyển container, hàng rời và đường thủy.</p><span className="choice-cta">Khám phá vận tải <ArrowRight /></span></div><img className="gateway-3d-logo" src={`${publicPath}/logo/haanh-traco-3d.png`} alt="Logo Hà Anh Traco" /></div></Link>
      </section>
      <footer className="gateway-footer"><span><ShipWheel size={15} /> HẢI PHÒNG · VIỆT NAM</span><span>20+ NĂM KINH NGHIỆM</span><span>ĐIỀU HƯỚNG ĐẾN HAI NĂNG LỰC</span></footer>
    </main>
  );
}
