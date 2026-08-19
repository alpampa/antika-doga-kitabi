import React from 'react'
import HTMLFlipBook from 'react-pageflip'

const BASE = import.meta.env.BASE_URL

const Page = React.forwardRef(({ children, className }, ref) => (
  <div className={`antik-sayfa ${className || ''}`} ref={ref}>
    {children}
  </div>
))

const DOGA_SAYFALARI = [
  {
    img: 'doga_1_karisik_orman.jpg',
    baslik: 'Karışık Orman',
    aciklama:
      'Meşe ile akçaağacın gövde gövdeye durduğu bu sık ormanda dört mevsim, yaprak hücrelerinin içinde erir: baharın taze yeşili yazın koyu gölgesine, sonbaharın kehribarı kışın ayaz beyazına usulca teslim olur. Hiçbir dal keskin bir çizgiyle bölünmez; geçiş, ağacın özsuyunun ritmiyle akar.',
  },
  {
    img: 'doga_2_dag_vadisi.jpg',
    baslik: 'Dağ Vadisi',
    aciklama:
      'Nehrin sarp vadiden süzüldüğü bu manzarada yaban çiçekleri, kar sınırının hemen altında baharı müjdeler. Çamların herdemyeşil gölgesi, vadinin dört mevsimlik dokusunu tek bir nefeste harmanlar; dağın ışığı, mevsimler arasındaki ince perdeyi organik bir sisle örter.',
  },
  {
    img: 'doga_3_gol_kiysisi.jpg',
    baslik: 'Göl Kıyısı',
    aciklama:
      'Gölün aynasında dört mevsim tek karede yansır: kıyıdaki ormanın karı, suyun üstünde eriyerek bahar tomurcuklarına dönüşür. Suyun sessizliği, geçişi doğanın kendi ritmine bırakır; yansıma, keskin sınırları yumuşatıp hepsini tek bir pus içinde kaynaştırır.',
  },
  {
    img: 'doga_4_orman_patikasi.jpg',
    baslik: 'Orman Patikası',
    aciklama:
      'Yaprakların arasından süzülen güneş, patikayı mevsimlerin takvimine dönüştürür: bahar ışığı yazın sıcaklığına karışır, sonbaharın altın ışınları kışın mavi ayazına dönüşür. Işık huzmeleri, keskin hatların yerine geçişleri yumuşatan doğal bir fırça gibi çalışır.',
  },
  {
    img: 'doga_5_selalesi_yesillik.jpg',
    baslik: 'Şelale ve Yosunlu Kayalar',
    aciklama:
      'Yosunlu kayalardan dökülen su, dört mevsimi tek bir akışta taşır: baharın tazeliği, yazın serinliği, sonbaharın hışırtısı ve kışın buza kesen sessizliği. Suyun sürekliliği, mevsimleri bir kolaj gibi değil, akan bir zaman gibi birbirine bağlar.',
  },
]

const URUN_SAYFALARI = [
  {
    img: 'urun_01_kitap.jpg',
    baslik: 'Kitap Kapağı',
    aciklama:
      'Bu kapağın yüzeyi, doğanın dört mevsimlik döngüsünü kendi varlığında taşır; tomurcuklar yaza, yapraklar kışa açılan bir sahife gibi kıvrılır. Düz mat yüzey, eriyen degradeleri bozulmadan korur.',
  },
  {
    img: 'urun_02_kanvas.jpg',
    baslik: 'Kanvas Tablo',
    aciklama:
      'Geniş tuval, mevsimlerin atmosferik değerlerini kesintisiz taşır; tuvalli doku, ağaç kabuğu ve yaprak greniyle kardeşlik kurar. Doğa, bu yüzeyde gerçek bir tablo gibi nefes alır.',
  },
  {
    img: 'urun_03_fincan.jpg',
    baslik: 'Seramik Fincan',
    aciklama:
      'Silindirik seramiğin etrafında dönen manzara, fincan çevrildikçe mevsimleri akıtır; sırlı yüzeyde geçişler, ışığın kıvrımına uyarak yumuşar. Zaman, bir yudumun içinde döngüsünü tamamlar.',
  },
  {
    img: 'urun_04_canta.jpg',
    baslik: 'Bez Çanta',
    aciklama:
      'Kumaşın kırışıklıkları, geçiş çizgilerini doğal kıvrımlarla yumuşatır; taşındıkça dalgalanan doku, mevsimleri hafif bir esinti gibi birbirine karıştırır.',
  },
  {
    img: 'urun_05_termos.jpg',
    baslik: 'Çelik Termos',
    aciklama:
      'Çeliğin soğuk yüzeyinde gölün yansıması, mevsimleri çifte derinlikle taşır; suyun üstündeki kar, metalin parıltısında bahar çiçeklerine dönüşür.',
  },
  {
    img: 'urun_06_takvim.jpg',
    baslik: 'Masa Takvimi',
    aciklama:
      'Sayfanın eğik duruşu, panoramanın genişliğini vurgular; her gün çevrilen yaprak, doğanın kendi takvimini hatırlatır. Parlak kaplama, mevsim paletini canlı korur.',
  },
  {
    img: 'urun_07_yapboz_kutusu.jpg',
    baslik: 'Ahşap Yapboz Kutusu',
    aciklama:
      'Ahşap kutunun dokusu, yaşlı ağaçların yaşam döngüsüyle sıcak bir uyum kurar; parçalar birleştiğinde dört mevsim tek bir orman olur.',
  },
  {
    img: 'urun_08_saat.jpg',
    baslik: 'Duvar Saati',
    aciklama:
      'Dairesel kadran, mevsimleri sonsuz bir döngü gibi okur; kışın baharla buluştuğu nokta, zamanın kendisi gibi akıp gider.',
  },
  {
    img: 'urun_09_semsiye.jpg',
    baslik: 'Şemsiye',
    aciklama:
      'Kıvrımlı kumaşın gölgesinde mevsimler, yağmur damlalarıyla birlikte akar; damlalar, geçişlerin üzerindeki keskin hatları doğal biçimde yumuşatır.',
  },
  {
    img: 'urun_10_defter.jpg',
    baslik: 'Defter Kapağı',
    aciklama:
      'Deri kapağın kabartması, geçişlere fiziksel derinlik katar; bu deftere yazılan her satır, doğanın döngüsü gibi kalıcıdır.',
  },
]

const KAPAK_SAYFA = (key) => (
  <Page key={key} className="kapak-sayfa">
    <div className="kapak-ic">
      <div className="kapak-cerceve">
        <div className="kapak-sus">❦</div>
        <h1 className="kapak-baslik">ANTİKA<br />DOĞA KİTABI</h1>
        <p className="kapak-alt-baslik">Dört Mevsimin Felsefesi</p>
        <div className="kapak-cizgi" />
        <p className="kapak-metin">
          Doğanın usta fırçasından on beş manzara:<br />
          kışın ayazından baharın tomurcuğuna uzanan ekolojik döngü
        </p>
        <div className="kapak-sus">❦</div>
      </div>
    </div>
  </Page>
)

const ONSOZ_SAYFA = (key) => (
  <Page key={key} className="metin-sayfa">
    <div className="sayfa-ic">
      <h2 className="sayfa-baslik">Önsöz</h2>
      <div className="sayfa-cizgi" />
      <p className="sayfa-paragraf">
        Bu kitap, doğanın dört mevsimlik döngüsünü tek bir bakışta toplamak için kaleme
        alınmıştır. Kışın dondurucu ayazı ile baharın ilk tomurcuğu arasında keskin bir
        çizgi yoktur; doğa, renkleri bir palet gibi birbirinin içine yedirir.
      </p>
      <p className="sayfa-paragraf">
        Sayfaları çevirdikçe, ağaçların nefes alışını ve toprağın uyanışını göreceksiniz.
        Her manzaranın altında, geçişin doğasını anlatan kısa bir gözlem yazılıdır.
      </p>
      <p className="sayfa-paragraf">
        Bu deneme; karışık ormanlardan dağ vadilerine, göl kıyılarından ürün yüzeylerine
        uzanan on beş ayrı karede, mevsimlerin birbirine nasıl eridiğini sergiler.
      </p>
      <div className="sayfa-imza">— Doğa Defteri</div>
    </div>
  </Page>
)

const SONSOZ_SAYFA = (key) => (
  <Page key={key} className="metin-sayfa">
    <div className="sayfa-ic">
      <h2 className="sayfa-baslik">Sonsöz</h2>
      <div className="sayfa-cizgi" />
      <p className="sayfa-paragraf">
        Böylece, doğanın usta fırçasıyla işlenmiş on beş manzara, bir kitabın sayfalarında
        son bulur. Keskin şeritler değil, eriyen geçişler: ağaçların nefesi, suyun akışı
        ve ışığın mevsimden mevsime dönüşü...
      </p>
      <p className="sayfa-paragraf">
        Mevsimler biter ama döngü sürer: her kışın ardından bir bahar, her kitabın
        ardından yeni bir hikâye gelir.
      </p>
      <div className="sayfa-imza">❦</div>
    </div>
  </Page>
)

function GorselSayfa({ g, key }) {
  return (
    <Page key={key} className="gorsel-sayfa">
      <div className="sayfa-ic">
        <h2 className="sayfa-baslik">{g.baslik}</h2>
        <div className="sayfa-cizgi" />
        <div className="gorsel-cerceve">
          <img
            className="gorsel"
            src={`${BASE}assets/${g.img}`}
            alt={g.baslik}
            loading="lazy"
          />
        </div>
        <p className="sayfa-aciklama">{g.aciklama}</p>
      </div>
    </Page>
  )
}

function Kitap() {
  return (
    <HTMLFlipBook
      width={560}
      height={760}
      size="stretch"
      minWidth={300}
      maxWidth={920}
      minHeight={420}
      maxHeight={1120}
      maxShadowOpacity={0.7}
      showCover={false}
      mobileScrollSupport={true}
      drawShadow={true}
      flippingTime={1400}
      useMouseEvents={true}
      clickEventForward={true}
      usePortrait={false}
      startZIndex={0}
      autoSize={true}
      showPageCorners={true}
      disableFlipByClick={false}
      className="kitap-canvasi"
    >
      {KAPAK_SAYFA('kapak')}
      {ONSOZ_SAYFA('onsoz')}
  
      {DOGA_SAYFALARI.map((g, i) => (
        <GorselSayfa key={`doga-${i}`} g={g} />
      ))}
      {URUN_SAYFALARI.map((g, i) => (
        <GorselSayfa key={`urun-${i}`} g={g} />
      ))}
      {SONSOZ_SAYFA('sonsoz')}
    </HTMLFlipBook>
  )
}

export default function App() {
  return (
    <div className="calisma-masasi">
      <header className="sahne-baslik">
        <h1 className="sahne-baslik-ana">Antika Doğa Kitabı</h1>
        <p className="sahne-baslik-alt">
          Dört mevsimin tek manzarada eridiği ekolojik döngü · Sayfaları çevirin
        </p>
      </header>
      <Kitap />
      <p className="sahne-dipnot">
        Sayfaları farenizle köşesinden tutarak veya sağ-sol tuşlarıyla çevirebilirsiniz.
      </p>
    </div>
  )
}
