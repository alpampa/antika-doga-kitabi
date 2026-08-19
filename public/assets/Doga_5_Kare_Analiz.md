# Beş Ekosistemde "Tek Karede Dört Mevsim" Denemesi - Karşılaştırmalı Araç Sınırları Analizi

## Deney Tasarımı
Aynı yapay zeka ucu (Pollinations) ile **aynı konsept** ("tek sürekli manzarada dört mevsimin kesintisiz geçişi") beş farklı doğal ekosisteme uygulandı:

1. **Karışık orman** (meşe-akçaağaç) — `doga_1_karisik_orman.jpg`
2. **Dağ vadisi** (nehir, kır çiçekleri, çamlar) — `doga_2_dag_vadisi.jpg`
3. **Göl kıyısı** (yansıma, çevre orman) — `doga_3_gol_kiysisi.jpg`
4. **Orman patikası** (derin gölgeli orman, yapraklardan süzülen ışık) — `doga_4_orman_patikasi.jpg`
5. **Şelale ve yeşillik** (yosunlu kayalar) — `doga_5_selalesi_yesillik.jpg`

**Çözünürlük sınırı (ilk araç sınırı):** URL'lerde 1920x1080 istenmesine rağmen gelen görsellerin tamamı **1024x576** boyutundadır. Ücretsiz uç, çözünürlüğü sınırlamakta ve "yüksek çözünürlük" talebini karşılamamaktadır.

## Görsel Bazında Analiz

### 1. Karışık Orman (meşe-akçaağaç) — En Keskin Şeritlenme
- Renk sıcaklığı profili (R-B): 57 | 45 | 49 | 32 | 57 | 64 | 38 | 44 — soldan sağa **sürekli dalgalanır**, mevsimsel bir akış izlemez; şeritler arasında rastgele sıcak-soğuk atlamaları vardır.
- Sınır keskinliği maksimum **31,3** — beş deneyin en yüksek değeri; dikey çizgiler belirgindir.
- Mevsim imzaları: sonbahar %4,4 (yüksek), çiçek %0,9, yeşil %0,2, kar %0,0. Yaprak döken ağaçların sonbahar kızılı, kış karına ve ilkbahar yeşiline **dönüşememiş**; sonbahar tonu karenin büyük bölümüne yayılıp diğer mevsimleri ezmiştir. İki farklı ağaç türünün (meşe/akçaağaç) ayrı renk paletleri, modelin "her türe ayrı mevsim" işlemesi gerektiren bir durumken, model renkleri şerit şerit karıştırıp yapaylaştırmıştır.

### 2. Dağ Vadisi — En Organik Geçiş
- R-B profili: 1 | -19 | -53 | -47 | -34 | -18 | 6 | 18 — soldan sağa **kademeli ve düzgün** bir gradyan; soğuk (sol) → nötr → sıcak (sağ) doğal bir akış.
- Sınır keskinliği ortada **9–13** gibi düşük değerlerde; keskin atlamalar yalnızca iki uçta (24,9 / 24,3) görülür.
- Mevsim imzaları: yeşil %11,7 (beş deneyin en yükseği — çamlar ve çayır korunmuş), çiçek %0,6, sonbahar %0,5, kar %0,1.
- Yorum: **Kademeli renk sıcaklığı geçişi + korunan yeşil doku** sayesinde model, mevsim değişimini doğal bir "gün boyu ışık kayması" gibi gizleyebilmiştir. Dağ vadisi, zoraki geçişi en organik biçimde eriten ekosistem olmuştur.

### 3. Göl Kıyısı — Salınımlı Şeritler ve Ezilen Mevsimler
- R-B profili: 43 | 28 | -1 | -10 | 44 | 67 | 53 | 79 — sıcak → soğuk → **ani sıcak sıçraması**; göl yansımasının bulunduğu ortada soğuk bir çöküş, sonrasında sert bir çıkış vardır.
- Sınır keskinliği maksimum 23,5.
- Mevsim imzaları: sonbahar %8,9 (beş deneyin en yükseği), çiçek %0,9, yeşil %0,1, kar %0,0.
- Yorum: Göl yansıması, modelin "suyu da mevsimlendirme" zorunluluğunu artırır; model bunu yapamayıp kıyı ormanını ağırlıkla sonbahar kızılına boyamış, suyun mevsimsel yansımasını ise tekdüze bırakmıştır. Yansıma bölgesindeki soğuk düşüş ile kıyıdaki sıcak yükseliş arasında yapay bir çizgi oluşmuştur.

### 4. Orman Patikası — Karanlıkta Gizlenen Sınırlar
- R-B profili: 46 | 39 | 63 | 68 | 67 | 46 | 25 | 18 — sıcak tonlu, ortada yükselip düşen dalgalı bir profil.
- Sınır keskinliği maksimum 21,5.
- Mevsim imzaları: hepsi çok düşük (yeşil %1,0, sonbahar %1,3, çiçek %0,1, kar %0,0).
- Yorum: "Derin gölgeli orman + yapraklardan süzülen ışık" promptu, modeli genel olarak koyu tonlara itmiştir. Koyu atmosfer, mevsim sınırlarını görsel olarak **maskelemiştir** (kolaj fark edilmez) ama bunu yaparken mevsimleri de tamamen bastırmıştır; sonuç mevsimsiz, tek düze bir gölgeli ormandır. Sınırlar gizlenmiş ama mevsimler de yok olmuştur.

### 5. Şelale ve Yeşillik — En Yumuşak Sınırlar, Tek Mevsimde Kilitlenme
- R-B profili: 4 | 3 | -11 | -28 | -16 | 3 | 5 | 4 — merkezde (şelale) soğuk bir düşüş, kenarlarda nötr; salınım düşüktür.
- Sınır keskinliği maksimum **17,4** — beş deneyin **en düşüğü**; dikey şerit bölünmesi en az görülen görseldir.
- Mevsim imzaları: yeşil **%42,8** (beş deneyin en yükseği — karenin neredeyse yarısı), kar %0,1, çiçek %0,0, sonbahar %0,0.
- Yorum: Model, "yemyeşil doğa" kimliğine öylesine yapışmıştır ki dört mevsimin hiçbirini üretmemiştir (çiçek ve sonbahar imzası %0,0). Şelale ve yosunlu kayalar, yumuşak geçişlerle "organik görünme" şansı en yüksek ekosistem olmasına rağmen, model mevsim değişimini denememiş; mevsimsiz tek bir yaz manzarası olarak kalmıştır.

## Karşılaştırmalı Tablo

| Ekosistem | R-B Profil Karakteri | Maks. Sınır Keskinliği | Yeşil % | Sonbahar % | Mevsim Başarısı |
|---|---|---|---|---|---|
| Karışık orman | Rastgele dalgalı | 31,3 | 0,2 | 4,4 | Şeritlendi, sonbahar ezdi |
| Dağ vadisi | Kademeli gradyan | 24,9 | 11,7 | 0,5 | **En organik** |
| Göl kıyısı | Sıcak-soğuk sıçrama | 23,5 | 0,1 | 8,9 | Şeritlendi, yansıma yapay |
| Orman patikası | Dalgalı, koyu | 21,5 | 1,0 | 1,3 | Sınırlar maskelendi ama mevsimler yok |
| Şelale | Merkezde tek soğuk düşüş | 17,4 | 42,8 | 0,0 | En yumuşak ama tek mevsim |

## Bitki Örtüsünün Renk Karışımı Üzerine Gözlemler

- **Yaprak döken ağaçlar (meşe/akçaağaç) renk karışımının en zayıf halkasıdır:** Sonbahar kızılı ile ilkbahar yeşili zıt paletlerdir; model bunları eritmek yerine ya birini egemen kılar (orman: sonbahar %4,4, yeşil %0,2; göl: sonbahar %8,9, yeşil %0,1) ya da koyu gölgede gizler (patika). "Eriyen" bir karışım hiçbir deneyde gözlenmemiştir.
- **Herdemyeşil çamlar ve çayırlar modelin sığınağıdır:** Yeşil dokunun yoğun olduğu ekosistemlerde (dağ vadisi %11,7, şelale %42,8) model mevsim varyasyonunu zayıf üretse de doku tutarlılığı bozulmamıştır; kar/çiçek/sonbahar imzaları yerine "sabit yeşil" ile yetinmiştir.
- **Çiçek imzaları hiçbir ekosistemde üretilememiştir:** En yüksek değer %0,9; "kır çiçekleri" ve "çiçek açan bahar" taleplerine rağmen model, çiçek dokusunu mevsim geçişinin parçası olarak çiz(e)memiştir.
- **Kar imzası beş görselde de yok denecek kadar azdır (%0,0–%0,1):** "Dört mevsim"in kış ayağı, tüm deneylerde en çok ihmal edilen mevsimdir.

## Sonuç: Hangisi Geçişi Daha Organik Gizleyebildi?

**Dağ vadisi (`doga_2_dag_vadisi.jpg`)** beş ekosistem içinde mevsim geçişini en organik biçimde gizleyebilen doğal alandır: renk sıcaklığı soldan sağa kesintisiz bir gradyan çizer (−53 → +18), sınır keskinliği ortada 9–13'e kadar düşer ve yeşil doku (%11,7) korunur. Vadinin doğal uzamsal derinliği ve atmosferik perspektifi, modelin renk geçişini "uzaklıkla açıklanabilir" hale getirerek şeritlenmeyi yumuşatmıştır. Şelale (`doga_5`) en düşük sınır keskinliğine sahiptir ancak bunu mevsimleri hiç üretmeyerek başarmıştır — "organik gizleme" değil, "mevsimsiz kalma"dır. Karışık orman ve göl kıyısı, yaprak döken ağaçların zıt paletleri yüzünden en şeritli sonuçları vermiştir; orman patikası ise karanlığıyla sınırları maskelemiş ama içini boşaltmıştır.

**Genel araç sınırı:** Model, mevsim geçişini "renk sıcaklığı gradyanı" olarak ancak atmosferik derinliği olan sahnelerde (vadi) gizleyebilmekte; kapalı, dokusal sahnelere (orman, göl, patika) girdiğinde ya keskin dikey bölmelere ya da tek mevsimde kilitlenmeye dönmektedir. Ağaç türü düzeyinde renk karışımı (meşe+akçaağaç, çam+çiçek) üretilememiş; çiçek ve kar imzaları beş deneyin tamamında ihmal edilmiştir.
