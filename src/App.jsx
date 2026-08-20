import { useCallback, useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

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

const SAYFALAR = [
  { tip: 'kapak' },
  { tip: 'onsoz' },
  ...DOGA_SAYFALARI.map((g) => ({ tip: 'gorsel', g })),
  ...URUN_SAYFALARI.map((g) => ({ tip: 'gorsel', g })),
  { tip: 'sonsoz' },
]

// Tek sayfa kalirsa kitabin son sayfasi bos birakilir (cift sayfa duzeni)
if (SAYFALAR.length % 2 === 1) {
  SAYFALAR.push({ tip: 'bos' })
}

function KapakIcerik() {
  return (
    <div className="kapak-ic">
      <div className="kapak-cerceve">
        <div className="kapak-sus">✦</div>
        <h1 className="kapak-baslik">
          DÖRT MEVSİMİN<br />TEK MANZARASI
        </h1>
        <p className="kapak-alt-baslik">Ekolojik Döngü</p>
        <div className="kapak-cizgi" />
        <p className="kapak-metin">
          Doğanın usta fırçasından on manzara: kışın ayazından baharın
          tomurcuğuna uzanan ekolojik döngü
        </p>
        <div className="kapak-sus">✦</div>
      </div>
    </div>
  )
}

function OnsozIcerik() {
  return (
    <div className="sayfa-ic metin-sayfasi">
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
        yüzeylerine uzanan on ayrı karede, mevsimlerin birbirine nasıl
        eridiğini sergiler.
      </p>
      <div className="sayfa-imza">— Doğa Defteri</div>
    </div>
  )
}

function SonsozIcerik() {
  return (
    <div className="sayfa-ic metin-sayfasi">
      <h2 className="sayfa-baslik">Sonsöz</h2>
      <div className="sayfa-cizgi" />
      <p className="sayfa-paragraf">
        Böylece, doğanın usta fırçasıyla işlenmiş on manzara, bir kitabın
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
        <img className="gorsel" src={yol} alt={g.baslik} />
      </div>
      <p className="sayfa-aciklama">{g.aciklama}</p>
    </div>
  )
}
function SayfaIcerik({ sayfa }) {
  if (sayfa.tip === 'kapak') return <KapakIcerik />
  if (sayfa.tip === 'onsoz') return <OnsozIcerik />
  if (sayfa.tip === 'sonsoz') return <SonsozIcerik />
  if (sayfa.tip === 'bos') return <div className="sayfa-bos" />
  return <GorselIcerik g={sayfa.g} />
}

function Kitap() {
  const [spread, setSpread] = useState(0)
  const [ceviriyor, setCeviriyor] = useState(false)
  const [yon, setYon] = useState('ileri')
  const [animsiz, setAnimsiz] = useState(false)
  const kilit = useRef(false)
  const zamanlayici = useRef(null)

  const sonSpread = Math.floor(SAYFALAR.length / 2) - 1

  const cevirmeyiBitir = useCallback((hedef) => {
    setSpread(hedef)
    setCeviriyor(false)
    setAnimsiz(true)
    zamanlayici.current = setTimeout(() => {
      setAnimsiz(false)
      kilit.current = false
    }, 90)
  }, [])

  const ileri = useCallback(() => {
    if (kilit.current || spread >= sonSpread) return
    kilit.current = true
    setYon('ileri')
    setCeviriyor(true)
    zamanlayici.current = setTimeout(() => cevirmeyiBitir(spread + 1), 1080)
  }, [spread, sonSpread, cevirmeyiBitir])

  const geri = useCallback(() => {
    if (kilit.current || spread <= 0) return
    kilit.current = true
    setYon('geri')
    setCeviriyor(true)
    zamanlayici.current = setTimeout(() => cevirmeyiBitir(spread - 1), 1080)
  }, [spread, cevirmeyiBitir])

  useEffect(() => {
    const tu = (e) => {
      if (e.key === 'ArrowRight') ileri()
      if (e.key === 'ArrowLeft') geri()
    }
    window.addEventListener('keydown', tu)
    return () => window.removeEventListener('keydown', tu)
  }, [ileri, geri])

  useEffect(() => {
    return () => {
      if (zamanlayici.current) clearTimeout(zamanlayici.current)
    }
  }, [])

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
  const arkaImg = arkaSayfa && arkaSayfa.g ? arkaSayfa.g.img : 'doga_2_dag_vadisi.jpg'

  return (
    <>
      <img key={arkaImg} className="sahne-bg" src={BASE + 'assets/' + arkaImg} alt="" />
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
              <SayfaIcerik sayfa={solGosterilen} />
              {solGosterilen && solGosterilen.tip !== 'kapak' && (
                <div className="sayfa-numara">
                  Sayfa {(geriCeviriliyor ? spread - 1 : spread) * 2 + 1} / {SAYFALAR.length}
                </div>
              )}
            </div>

            <div className="sayfa sayfa-sag-zemin">
              {zemin ? <SayfaIcerik sayfa={zemin} /> : <div className="sayfa-bos" />}
              {zemin && zemin.tip !== 'kapak' && (
                <div className="sayfa-numara">
                  Sayfa {zeminNumara} / {SAYFALAR.length}
                </div>
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
                {yaprakOnSayfa ? <SayfaIcerik sayfa={yaprakOnSayfa} /> : <div className="sayfa-bos" />}
                {yaprakOnSayfa && yaprakOnSayfa.tip !== 'kapak' && (
                  <div className="sayfa-numara">
                    Sayfa {yaprakOnNumara} / {SAYFALAR.length}
                  </div>
                )}
              </div>
              <div className="yaprak-yuz yaprak-arka">
                {yaprakArkaSayfa ? <SayfaIcerik sayfa={yaprakArkaSayfa} /> : <div className="sayfa-bos" />}
                {yaprakArkaSayfa && yaprakArkaSayfa.tip !== 'kapak' && (
                  <div className="sayfa-numara">
                    Sayfa {yaprakArkaNumara} / {SAYFALAR.length}
                  </div>
                )}
              </div>
            </div>          </div>
        </div>

        <button
          type="button"
          className={'kitap-ok kitap-ok-sag' + (spread >= sonSpread ? ' gizli' : '')}
          onClick={ileri}
          aria-label="Sonraki sayfa"
        >
          ›
        </button>

        <div className="kitap-sayac">
          {spread + 1} / {sonSpread + 1}
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="sahne">
      <div className="sahne-perde" />
      <header className="sahne-baslik">
        <h1>Dört Mevsimin Tek Manzarası: Ekolojik Döngü</h1>
      </header>
      <Kitap />
      <footer className="sahne-imza">Doğa Defteri · Alp Ampa</footer>
    </div>
  )
}

export default App


