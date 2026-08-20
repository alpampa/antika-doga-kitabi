import { useCallback, useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const ROMEN = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI',
]

const DOGA_SAYFALARI = [
  {
    img: 'doga_1_karisik_orman.jpg',
    baslik: 'Karışık Orman',
    aciklama:
      'Meşe ile akçaağacın gövde gövdeye durduğu bu sık ormanda dört mevsim, yaprak hücrelerinin içinde erir: baharın taze yeşili yazın koyu gölgesine, sonbaharın kehribarı kışın ayaz beyazına usulca teslim olur.',
  },
  {
    img: 'doga_2_dag_vadisi.jpg',
    baslik: 'Dağ Vadisi',
    aciklama:
      'Nehrin sarp vadiden süzüldüğü bu manzarada yaban çiçekleri, kar sınırının hemen altında baharı müjdeler. Çamların herdemyeşil gölgesi, vadinin dört mevsimlik dokusunu tek bir nefeste harmanlar.',
  },
  {
    img: 'doga_3_gol_kiysisi.jpg',
    baslik: 'Göl Kıyısı',
    aciklama:
      'Gölün aynasında dört mevsim tek karede yansır: kıyıdaki ormanın karı, suyun üstünde eriyerek bahar tomurcuklarına dönüşür. Yansıma, keskin sınırları yumuşatıp hepsini tek bir pus içinde kaynaştırır.',
  },
  {
    img: 'doga_4_orman_patikasi.jpg',
    baslik: 'Orman Patikası',
    aciklama:
      'Yaprakların arasından süzülen güneş, patikayı mevsimlerin takvimine dönüştürür: bahar ışığı yazın sıcaklığına karışır, sonbaharın altın ışınları kışın mavi ayazına dönüşür.',
  },
  {
    img: 'doga_5_selalesi_yesillik.jpg',
    baslik: 'Şelale ve Yosunlu Kayalar',
    aciklama:
      'Yosunlu kayalardan dökülen su, dört mevsimi tek bir akışta taşır: baharın tazeliği, yazın serinliği, sonbaharın hışırtısı ve kışın buza kesen sessizliği.',
  },
]

const URUN_SAYFALARI = [
  {
    img: 'urun_01_kitap.jpg',
    baslik: 'Kitap Kapağı',
    aciklama:
      'Kapağın yüzeyi, doğanın dört mevsimlik döngüsünü kendi varlığında taşır; tomurcuklar yaza, yapraklar kışa açılan bir sahife gibi kıvrılır.',
  },
  {
    img: 'urun_02_kanvas.jpg',
    baslik: 'Kanvas Tablo',
    aciklama:
      'Geniş tuval, mevsimlerin atmosferik değerlerini kesintisiz taşır; tuvalli doku, ağaç kabuğu ve yaprak greniyle kardeşlik kurar.',
  },
  {
    img: 'urun_06_takvim.jpg',
    baslik: 'Masa Takvimi',
    aciklama:
      'Sayfanın eğik duruşu, panoramanın genişliğini vurgular; her gün çevrilen yaprak, doğanın kendi takvimini hatırlatır.',
  },
  {
    img: 'urun_07_yapboz_kutusu.jpg',
    baslik: 'Ahşap Yapboz Kutusu',
    aciklama:
      'Ahşap kutunun dokusu, yaşlı ağaçların yaşam döngüsüyle sıcak bir uyum kurar; parçalar birleştiğinde dört mevsim tek bir orman olur.',
  },
  {
    img: 'urun_10_defter.jpg',
    baslik: 'Defter Kapağı',
    aciklama:
      'Deri kapağın kabartması, geçişlere fiziksel derinlik katar; bu deftere yazılan her satır, doğanın döngüsü gibi kalıcıdır.',
  },
]

const YENI_SAYFALAR = [
  {
    img: 'yeni_1_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması I',
    aciklama:
      'Işığın dört mevsimi tek kadrajda erittiği bir kesit: her renk, bir öncekinin sınırında usulca başlar ve keskin çizgi bırakmadan yerini sonrakine bırakır.',
  },
  {
    img: 'yeni_2_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması II',
    aciklama:
      'Dört iklimin aynı ufukta buluştuğu bu karede doğa, şeritler yerine renk katmanlarını yan yana dizer; geçişler bir paletin yumuşak dokunuşu gibidir.',
  },
  {
    img: 'yeni_3_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması III',
    aciklama:
      'Karın beyazı ile çiçeğin canlılığı arasındaki mesafe, bu manzarada yalnızca bir ışık oyununa dönüşür: kış ve bahar aynı dalda konuşur.',
  },
  {
    img: 'yeni_4_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması IV',
    aciklama:
      'Aynı ağaçların dört ayrı mevsimdeki hâli, zamanın yüzünü tek bir nefeste gösterir; gölgeler ve renkler birbirinin içinden doğar.',
  },
  {
    img: 'yeni_5_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması V',
    aciklama:
      'Eriyen geçişler: tomurcuğun yeşili yaz gölgesine, altın yaprak kış ayazına kendini bırakır; doğa bu döngüde asla keskin bir sınır çizmez.',
  },
  {
    img: 'yeni_6_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması VI',
    aciklama:
      'Bulutların ve ışığın ortak diliyle yazılmış bir mevsim senfonisi: dört bölüm, tek kare; her ton bir öncekinin uzantısı gibi akar.',
  },
  {
    img: 'yeni_7_mevsim_panoramasi.jpg',
    baslik: 'Mevsim Panoraması VII',
    aciklama:
      'Doğanın hafızası: kışın hüznü ile baharın umudu aynı ufuk çizgisinde buluşur; soğuk ve sıcak, tek bir atmosferde dengelenir.',
  },
]

const SAYFALAR = [
  { tip: 'kapak' },
  { tip: 'onsoz' },
  { tip: 'icerikler' },
  { tip: 'bolum', numara: 'I', ad: 'Manzaralar', img: 'doga_1_karisik_orman.jpg', metin: 'Karışık ormanlardan şelale kıyılarına — doğanın dört mevsimlik yüzü, beş ayrı ekosistemde eriyerek akar.' },
  ...DOGA_SAYFALARI.map((g) => ({ tip: 'gorsel', g })),
  { tip: 'bolum', numara: 'II', ad: 'Ürünler', img: 'urun_01_kitap.jpg', metin: 'Ekolojik döngü gündelik nesnelerin yüzeyinde de sürer: her baskı, doğanın takvimini üzerinde taşır.' },
  ...URUN_SAYFALARI.map((g) => ({ tip: 'gorsel', g })),
  { tip: 'bolum', numara: 'III', ad: 'Yeni Çalışmalar', img: 'yeni_1_mevsim_panoramasi.jpg', metin: 'Aynı tema, yeni fırçalar: mevsim erimesini farklı ışık ve kompozisyonlarla yeniden deneyen yedi kare.' },
  ...YENI_SAYFALAR.map((g) => ({ tip: 'gorsel', g })),
  { tip: 'alinti', metin: 'Doğayı korumak, geleceğin hafızasını korumaktır.', kaynak: 'Doğa Defteri' },
  { tip: 'sonsoz' },
]

// Tek sayfa kalirsa kitabin son sayfasi bos birakilir (cift sayfa duzeni)
if (SAYFALAR.length % 2 === 1) {
  SAYFALAR.push({ tip: 'bos' })
}

function KapakIcerik({ ac }) {
  return (
    <div className="kapak-ic">
      <img
        className="kapak-gorsel"
        src={BASE + 'assets/doga_1_karisik_orman.jpg'}
        alt=""
      />
      <div className="kapak-perde" />
      <div className="kapak-cerceve">
        <div className="kapak-sus">✦ ✦ ✦</div>
        <p className="kapak-serisi">Antika Doğa · Serisi</p>
        <h1 className="kapak-baslik">
          DÖRT MEVSİMİN<br />TEK MANZARASI
        </h1>
        <p className="kapak-alt-baslik">Ekolojik Döngü</p>
        <div className="kapak-cizgi" />
        <p className="kapak-metin">
          Doğanın usta fırçasından on yedi manzara: kışın ayazından baharın
          tomurcuğuna uzanan ekolojik döngü
        </p>
        <button type="button" className="kapak-ac" onClick={ac}>
          Kitabı Aç
        </button>
        <div className="kapak-sus">✦ ✦ ✦</div>
      </div>
    </div>
  )
}

function OnsozIcerik() {
  return (
    <div className="sayfa-ic metin-sayfasi kagit-ic">
      <h2 className="sayfa-baslik">Önsöz</h2>
      <div className="sayfa-cizgi" />
      <p className="sayfa-paragraf">
        Bu kitap, doğanın dört mevsimlik döngüsünü tek bir bakışta toplamak için
        kaleme alınmıştır. Kışın dondurucu ayazı ile baharın ilk tomurcuğu
        arasında keskin bir çizgi yoktur; doğa, renkleri bir palet gibi
        birbirinin içine yedirir.
      </p>
      <p className="sayfa-paragraf">
        Sayfalar boyunca ağaçların nefes alışını ve toprağın uyanışını
        izleyeceksiniz. Her manzaranın altında, geçişin doğasını anlatan kısa
        bir gözlem yazılıdır.
      </p>
      <p className="sayfa-paragraf">
        Bu deneme; karışık ormanlardan dağ vadilerine, göl kıyılarından ürün
        yüzeylerine uzanan on yedi ayrı karede, mevsimlerin birbirine nasıl
        eridiğini sergiler.
      </p>
      <div className="sayfa-imza">— Doğa Defteri</div>
    </div>
  )
}

function IceriklerIcerik({ git }) {
  const bolumler = [
    { numara: 'I', ad: 'Manzaralar', aciklama: 'Beş ekosistemde mevsim erimesi', hedef: 1 },
    { numara: 'II', ad: 'Ürünler', aciklama: 'Döngünün nesnelerdeki izi', hedef: 4 },
    { numara: 'III', ad: 'Yeni Çalışmalar', aciklama: 'Yedi yeni mevsim denemesi', hedef: 7 },
    { numara: 'IV', ad: 'Sonsöz', aciklama: 'Döngünün kapanışı', hedef: 12 },
  ]
  return (
    <div className="sayfa-ic metin-sayfasi kagit-ic icerikler-sayfasi">
      <h2 className="sayfa-baslik">İçindekiler</h2>
      <div className="sayfa-cizgi" />
      <div className="icerikler-liste">
        {bolumler.map((b) => (
          <button
            key={b.numara}
            type="button"
            className="icerik-satir"
            onClick={() => git(b.hedef)}
          >
            <span className="icerik-numara">{b.numara}</span>
            <span className="icerik-adi">{b.ad}</span>
            <span className="icerik-aciklama">{b.aciklama}</span>
            <span className="icerik-ok">→</span>
          </button>
        ))}
      </div>
      <p className="icerik-not">
        Bölüm adlarına dokunarak doğrudan ilgili sayfaya gidebilirsiniz.
      </p>
      <div className="sayfa-imza">✦</div>
    </div>
  )
}

function BolumIcerik({ b }) {
  return (
    <div className="bolum-ic">
      <img className="bolum-gorsel" src={BASE + 'assets/' + b.img} alt="" />
      <div className="bolum-perde" />
      <div className="bolum-icerik">
        <div className="bolum-numara">Bölüm {b.numara}</div>
        <h2 className="bolum-ad">{b.ad}</h2>
        <div className="bolum-cizgi" />
        <p className="bolum-metin">{b.metin}</p>
      </div>
    </div>
  )
}

function AlintiIcerik({ a }) {
  return (
    <div className="sayfa-ic kagit-ic alinti-sayfasi">
      <div className="alinti-tirnak">“</div>
      <p className="alinti-metin">{a.metin}</p>
      <div className="alinti-kaynak">— {a.kaynak}</div>
    </div>
  )
}

function SonsozIcerik() {
  return (
    <div className="sayfa-ic metin-sayfasi kagit-ic">
      <h2 className="sayfa-baslik">Sonsöz</h2>
      <div className="sayfa-cizgi" />
      <p className="sayfa-paragraf">
        Böylece, doğanın usta fırçasıyla işlenmiş on yedi manzara, bir kitabın
        sayfalarında son bulur. Keskin şeritler değil, eriyen geçişler:
        ağaçların nefesi, suyun akışı ve ışığın mevsimden mevsime dönüşü...
      </p>
      <p className="sayfa-paragraf">
        Mevsimler biter ama döngü sürer: her kışın ardından bir bahar, her
        kitabın ardından yeni bir hikâye gelir.
      </p>
      <div className="sayfa-imza">✦</div>
    </div>
  )
}

function GorselIcerik({ g }) {
  const yol = BASE + 'assets/' + g.img
  return (
    <div className="sayfa-ic gorsel-sayfasi">
      <h2 className="sayfa-baslik">{g.baslik}</h2>
      <div className="sayfa-cizgi" />
      <div className="gorsel-cerceve">
        <img className="gorsel-golge" src={yol} alt="" aria-hidden="true" />
        <img className="gorsel" src={yol} alt={g.baslik} decoding="async" />
      </div>
      <p className="sayfa-aciklama">{g.aciklama}</p>
    </div>
  )
}

function SayfaIcerik({ sayfa, ac, git }) {
  if (sayfa.tip === 'kapak') return <KapakIcerik ac={ac} />
  if (sayfa.tip === 'onsoz') return <OnsozIcerik />
  if (sayfa.tip === 'icerikler') return <IceriklerIcerik git={git} />
  if (sayfa.tip === 'bolum') return <BolumIcerik b={sayfa} />
  if (sayfa.tip === 'alinti') return <AlintiIcerik a={sayfa} />
  if (sayfa.tip === 'sonsoz') return <SonsozIcerik />
  if (sayfa.tip === 'bos') return <div className="sayfa-bos" />
  return <GorselIcerik g={sayfa.g} />
}

function Kitap() {
  const [spread, setSpread] = useState(0)
  const [ceviriyor, setCeviriyor] = useState(false)
  const [yon, setYon] = useState('ileri')
  const [animsiz, setAnimsiz] = useState(false)
  const [sesAcik, setSesAcik] = useState(
    () => (typeof localStorage !== 'undefined' ? localStorage.getItem('kitap-ses') === '1' : false)
  )
  const [soluk, setSoluk] = useState(false)
  const [hizli] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const kilit = useRef(false)
  const zamanlayici = useRef(null)
  const sesBaglam = useRef(null)
  const suresi = hizli ? 90 : 1080

  const sonSpread = Math.floor(SAYFALAR.length / 2) - 1

  const calFlip = useCallback(() => {
    if (!sesAcik) return
    try {
      if (!sesBaglam.current) {
        const AC = window.AudioContext || window.webkitAudioContext
        if (!AC) return
        sesBaglam.current = new AC()
      }
      const ctx = sesBaglam.current
      if (ctx.state === 'suspended') ctx.resume()
      const t = ctx.currentTime
      const uzunluk = Math.floor(ctx.sampleRate * 0.16)
      const buf = ctx.createBuffer(1, uzunluk, ctx.sampleRate)
      const d = buf.getChannelData(0)
      for (let i = 0; i < uzunluk; i++) {
        const k = 1 - i / uzunluk
        d[i] = (Math.random() * 2 - 1) * k * k
      }
      const kaynak = ctx.createBufferSource()
      kaynak.buffer = buf
      const filtre = ctx.createBiquadFilter()
      filtre.type = 'bandpass'
      filtre.frequency.value = 1600
      filtre.Q.value = 0.7
      const kazanc = ctx.createGain()
      kazanc.gain.value = 0.14
      kaynak.connect(filtre)
      filtre.connect(kazanc)
      kazanc.connect(ctx.destination)
      kaynak.start(t)
    } catch (e) {
      /* ses hatalari yoksayilir */
    }
  }, [sesAcik])

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('kitap-ses', sesAcik ? '1' : '0')
    }
  }, [sesAcik])

  const cevirmeyiBitir = useCallback(
    (hedef) => {
      setSpread(hedef)
      setCeviriyor(false)
      setAnimsiz(true)
      zamanlayici.current = setTimeout(() => {
        setAnimsiz(false)
        kilit.current = false
      }, 90)
    },
    []
  )

  const ileri = useCallback(() => {
    if (kilit.current || spread >= sonSpread) return
    kilit.current = true
    setYon('ileri')
    setCeviriyor(true)
    calFlip()
    zamanlayici.current = setTimeout(() => cevirmeyiBitir(spread + 1), suresi)
  }, [spread, sonSpread, cevirmeyiBitir, calFlip, suresi])

  const geri = useCallback(() => {
    if (kilit.current || spread <= 0) return
    kilit.current = true
    setYon('geri')
    setCeviriyor(true)
    calFlip()
    zamanlayici.current = setTimeout(() => cevirmeyiBitir(spread - 1), suresi)
  }, [spread, cevirmeyiBitir, calFlip, suresi])

  const atla = useCallback(
    (hedef) => {
      if (kilit.current) return
      const h = Math.max(0, Math.min(sonSpread, hedef))
      if (h === spread) return
      kilit.current = true
      setAnimsiz(true)
      setCeviriyor(false)
      setSpread(h)
      zamanlayici.current = setTimeout(() => {
        setAnimsiz(false)
        kilit.current = false
      }, 60)
    },
    [spread, sonSpread]
  )

  useEffect(() => {
    const tu = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        ileri()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        geri()
      }
      if (e.key === 'Home') atla(0)
      if (e.key === 'End') atla(sonSpread)
      if (e.key === 'Escape') {
        if (document.fullscreenElement) document.exitFullscreen()
      }
    }
    window.addEventListener('keydown', tu)
    return () => window.removeEventListener('keydown', tu)
  }, [ileri, geri, atla, sonSpread])

  // Kontroller: fare/touch hareketiyle gorunur, hareketsizlikte solar
  useEffect(() => {
    let t
    const uyandir = () => {
      setSoluk(false)
      clearTimeout(t)
      t = setTimeout(() => setSoluk(true), 3000)
    }
    uyandir()
    window.addEventListener('mousemove', uyandir)
    window.addEventListener('touchstart', uyandir)
    window.addEventListener('keydown', uyandir)
    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', uyandir)
      window.removeEventListener('touchstart', uyandir)
      window.removeEventListener('keydown', uyandir)
    }
  }, [])

  // Sonraki/onceki sayfanin gorsellerini onceden yukle (gecislerde takilma olmasin)
  useEffect(() => {
    const yukle = (s) => {
      if (s < 0 || s > sonSpread) return
      ;[SAYFALAR[s * 2], SAYFALAR[s * 2 + 1]].forEach((p) => {
        if (p && p.g) {
          const im = new Image()
          im.src = BASE + 'assets/' + p.g.img
        }
        if (p && p.img) {
          const im = new Image()
          im.src = BASE + 'assets/' + p.img
        }
      })
    }
    yukle(spread + 1)
    yukle(spread - 1)
    yukle(spread)
  }, [spread, sonSpread])

  useEffect(() => {
    return () => {
      if (zamanlayici.current) clearTimeout(zamanlayici.current)
    }
  }, [])

  const tamEkran = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    } catch (e) {
      /* yoksay */
    }
  }

  const geriCeviriliyor = ceviriyor && yon === 'geri'

  const solSayfa = SAYFALAR[spread * 2]
  const yaprakOn = SAYFALAR[spread * 2 + 1]
  const yaprakArka = geriCeviriliyor
    ? SAYFALAR[(spread - 1) * 2]
    : SAYFALAR[(spread + 1) * 2]
  const zemin = geriCeviriliyor
    ? SAYFALAR[(spread - 1) * 2 + 1]
    : SAYFALAR[(spread + 1) * 2 + 1]
  // Geri cevirirken sol sayfa, varilacak sayfayi gosterir (animasyon sonunda sicrama olmaz)
  const solGosterilen = geriCeviriliyor ? SAYFALAR[(spread - 1) * 2] : solSayfa
  const yaprakOnSayfa = geriCeviriliyor ? solSayfa : yaprakOn
  const yaprakArkaSayfa = geriCeviriliyor ? SAYFALAR[(spread - 1) * 2 + 1] : yaprakArka
  const yaprakOnNumara = geriCeviriliyor ? spread * 2 + 1 : spread * 2 + 2
  const yaprakArkaNumara = geriCeviriliyor ? (spread - 1) * 2 + 2 : (spread + 1) * 2 + 1
  const zeminNumara = geriCeviriliyor ? (spread - 1) * 2 + 2 : (spread + 1) * 2 + 2

  const gosterilen = ceviriyor
    ? yon === 'ileri'
      ? spread + 1
      : spread - 1
    : spread
  const arkaSayfa = SAYFALAR[gosterilen * 2]
  const arkaImg =
    (arkaSayfa && (arkaSayfa.g ? arkaSayfa.g.img : arkaSayfa.img)) ||
    'doga_2_dag_vadisi.jpg'

  const sayfaNumarasi = (n) => String(n).padStart(2, '0')

  return (
    <div className={'sahne' + (soluk ? ' soluk' : '')}>
      <div className="sahne-perde" />
      <img key={arkaImg} className="sahne-bg" src={BASE + 'assets/' + arkaImg} alt="" />
      <header className="sahne-baslik">
        <h1>Dört Mevsimin Tek Manzarası: Ekolojik Döngü</h1>
      </header>
      <div className="kitap-sahne">
        <button
          type="button"
          className={'kitap-ok kitap-ok-sol' + (spread <= 0 ? ' gizli' : '')}
          onClick={geri}
          aria-label="Önceki sayfa"
        >
          ‹
        </button>

        <div className="kitap">
          <div className="kitap-sirt" />
          <div className="kitap-sayfa-alani">
            <div className="sayfa sayfa-sol" onClick={geri}>
              <SayfaIcerik sayfa={solGosterilen} ac={ileri} git={atla} />
              {solGosterilen && solGosterilen.tip !== 'kapak' && (
                <div className="sayfa-numara">
                  {sayfaNumarasi((geriCeviriliyor ? spread - 1 : spread) * 2 + 1)}
                </div>
              )}
            </div>

            <div className="sayfa sayfa-sag-zemin">
              {zemin ? <SayfaIcerik sayfa={zemin} ac={ileri} git={atla} /> : <div className="sayfa-bos" />}
              {zemin && zemin.tip !== 'kapak' && (
                <div className="sayfa-numara">{sayfaNumarasi(zeminNumara)}</div>
              )}
            </div>

            <div
              className={
                'sayfa-yapragi' +
                (geriCeviriliyor ? ' sayfa-yapragi-geri' : '') +
                (ceviriyor ? (geriCeviriliyor ? ' ceviriliyor-geri' : ' ceviriliyor') : '') +
                (animsiz ? ' animsiz' : '')
              }
              onClick={geriCeviriliyor ? geri : ileri}
            >
              <div className="yaprak-yuz yaprak-on">
                {yaprakOnSayfa ? <SayfaIcerik sayfa={yaprakOnSayfa} ac={ileri} git={atla} /> : <div className="sayfa-bos" />}
                {yaprakOnSayfa && yaprakOnSayfa.tip !== 'kapak' && (
                  <div className="sayfa-numara">{sayfaNumarasi(yaprakOnNumara)}</div>
                )}
              </div>
              <div className="yaprak-yuz yaprak-arka">
                {yaprakArkaSayfa ? <SayfaIcerik sayfa={yaprakArkaSayfa} ac={ileri} git={atla} /> : <div className="sayfa-bos" />}
                {yaprakArkaSayfa && yaprakArkaSayfa.tip !== 'kapak' && (
                  <div className="sayfa-numara">{sayfaNumarasi(yaprakArkaNumara)}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={'kitap-ok kitap-ok-sag' + (spread >= sonSpread ? ' gizli' : '')}
          onClick={ileri}
          aria-label="Sonraki sayfa"
        >
          ›
        </button>

        <div className="kitap-kontroller">
          <div className="kitap-sayac">
            {ROMEN[spread]} / {ROMEN[sonSpread]}
          </div>
          <button
            type="button"
            className={'kontrol-dugme' + (sesAcik ? ' aktif' : '')}
            onClick={() => setSesAcik((v) => !v)}
            aria-label="Sayfa sesi"
            title={sesAcik ? 'Sayfa sesi açık' : 'Sayfa sesi kapalı'}
          >
            {sesAcik ? '♫' : '♪'}
          </button>
          <button
            type="button"
            className="kontrol-dugme"
            onClick={tamEkran}
            aria-label="Tam ekran"
            title="Tam ekran"
          >
            ⛶
          </button>
        </div>
      </div>
      <footer className="sahne-imza">Doğa Defteri · Alp Ampa</footer>
    </div>
  )
}

function App() {
  return <Kitap />
}

export default App
