import * as React from "react";

export default function TourGuideExamPractice() {
  // Minimal Tailwind-based, single-file React quiz app
  // 100 questions across requested topics. 5 choices each. Immediate feedback, next question flow, final report.

  const questions = [
    // --- GENEL TURİZM BİLGİSİ, MEVZUAT, SOSYOLOJİ (1-15) ---
    {
      id: 1,
      topic: "Genel Turizm Bilgisi",
      q: `Bir destinasyonda ziyaretçilerin konaklama, yeme-içme, ulaşım, eğlence gibi ihtiyaçlarını birlikte karşılayan sistemin genel adı nedir?`,
      choices: ["Turizm arzı", "Turizm talebi", "Turizm altyapısı", "Turistik çekicilik", "Turizm üstyapısı"],
      answer: 0,
      expl: "Konaklama, yeme-içme, ulaşım, eğlence gibi bileşenlerin tamamı bir arada 'turizm arzı' olarak adlandırılır."
    },
    {
      id: 2,
      topic: "Turizm Mevzuatı",
      q: `Türkiye'de turist rehberliği mesleğini düzenleyen temel kanun aşağıdakilerden hangisidir?`,
      choices: ["1618 sayılı Kanun", "6326 sayılı Kanun", "2634 sayılı Kanun", "7183 sayılı Kanun", "5846 sayılı Kanun"],
      answer: 1,
      expl: "Turist rehberliği mesleği 6326 sayılı Turist Rehberliği Meslek Kanunu ile düzenlenir."
    },
    {
      id: 3,
      topic: "Turizm Sosyolojisi",
      q: `Turist ile ev sahibi toplum bireyi arasındaki karşılıklı etkileşim en çok hangi kavramla açıklanır?`,
      choices: ["Kültürel taşıma kapasitesi", "Konaklama katsayısı", "Çoğulculuk", "Medeniyetler çatışması", "Sosyal değişim"],
      answer: 4,
      expl: "Turist-ev sahibi etkileşimi 'sosyal değişim' yaklaşımıyla incelenir; tarafların maliyet-fayda algıları belirleyicidir."
    },
    {
      id: 4,
      topic: "Turizm Mevzuatı",
      q: `Rehberin tur sırasında katılımcıların can güvenliğine ilişkin önlemleri hatırlatması aşağıdaki hangi yükümlülüğün kapsamındadır?`,
      choices: ["Mesleki özen ve dikkat", "Reklam yasağı", "Yetki devri", "Vergi sorumluluğu", "Meslekten çekilme"],
      answer: 0,
      expl: "Rehber, mesleki özen ve dikkat yükümlülüğü gereği güvenlik ve bilgilendirme yapar."
    },
    {
      id: 5,
      topic: "Genel Turizm Bilgisi",
      q: `Bir ülkenin dışarıya sattığı turizm hizmetlerinin parasal karşılığına ne denir?`,
      choices: ["Turizm arzı", "Turizm geliri", "Turizm çarpanı", "Turizm harcaması", "Seyahat bütçesi"],
      answer: 1,
      expl: "Ülkeye döviz girişini sağlayan kalem turizm geliridir."
    },
    {
      id: 6,
      topic: "Turizm Mevzuatı",
      q: `Rehberin meslek icrası sırasında kimlik kartını görünür biçimde taşıması kuralı hangi ilkeye dayanır?`,
      choices: ["Şeffaflık", "Gizlilik", "Yetki paylaşımı", "Zorunlu arabuluculuk", "Mukimlik"],
      answer: 0,
      expl: "Kimlik kartının görünür taşınması şeffaflık ve yetkinin ispatı içindir."
    },
    {
      id: 7,
      topic: "Turizm Sosyolojisi",
      q: `Aşağıdakilerden hangisi turizmin ev sahibi toplum üzerindeki olası olumsuz sosyo-kültürel etkilerindendir?`,
      choices: ["Gelir çeşitlenmesi", "Yerel gururun artması", "Mevsimsellik baskısı", "Kültürel ticaretleşme", "Kültürel mirasın korunması"],
      answer: 3,
      expl: "Aşırı ticarileşme yerel kültürün gösteriye dönüşmesi riskini doğurur."
    },
    {
      id: 8,
      topic: "Genel Turizm Bilgisi",
      q: `Bir destinasyonun ziyaretçi kapasitesinin fiziksel, çevresel ve sosyal sınırlarını ifade eden kavram hangisidir?`,
      choices: ["Kalite endeksi", "Taşıma kapasitesi", "Talep esnekliği", "Çekicilik düzeyi", "Deneyim yoğunluğu"],
      answer: 1,
      expl: "Taşıma kapasitesi, bozulma yaratmadan kaldırılabilecek maksimum ziyaretçiyi ifade eder."
    },
    {
      id: 9,
      topic: "Turizm Mevzuatı",
      q: `Profesyonel turist rehberinin hak ve yükümlülükleri hangi kurumla ilişkili meslek birliği tarafından temsil edilir?`,
      choices: ["TÜRSAB", "TÜROFED", "TUREB", "TÜROB", "DEİK"],
      answer: 2,
      expl: "TUREB (Türkiye Turist Rehberleri Birliği) mesleğin üst birliğidir."
    },
    {
      id: 10,
      topic: "Turizm Sosyolojisi",
      q: `"Kültürel yakınlık" aşağıdakilerden hangisine en çok katkı sağlar?`,
      choices: ["Vize kolaylığı", "Pazarlama bütçesi", "Turist-ev sahibi iletişimi", "Konaklama doluluğu", "Uçuş frekansı"],
      answer: 2,
      expl: "Kültürel yakınlık, karşılıklı anlayış ve etkileşimi güçlendirir."
    },

    // --- TÜRKİYE’NİN TARİHİ ve TURİZM COĞRAFYASI (11-20) ---
    {
      id: 11,
      topic: "Türkiye Coğrafyası",
      q: `Peribacaları, yeraltı şehirleri ve kaya oyma kiliseleriyle ünlü alan hangi UNESCO statüsündedir?`,
      choices: ["Biyosfer Rezervi", "Geopark", "Dünya Miras Alanı", "Somut Olmayan Miras", "Ramsar Alanı"],
      answer: 2,
      expl: "Göreme Milli Parkı ve Kapadokya Kayalık Sitleri Dünya Mirası’dır."
    },
    {
      id: 12,
      topic: "Türkiye Coğrafyası",
      q: `Likya Yolu yürüyüş rotası ağırlıklı olarak hangi ilin kıyı şeridinde uzanır?`,
      choices: ["Muğla", "Antalya", "Mersin", "Aydın", "İzmir"],
      answer: 1,
      expl: "Likya Yolu’nun büyük bölümü Antalya kıyılarındadır."
    },
    {
      id: 13,
      topic: "Türkiye Tarihi",
      q: `Hititlerin başkenti Hattuşa günümüzde hangi il sınırları içindedir?`,
      choices: ["Yozgat", "Çorum", "Amasya", "Samsun", "Tokat"],
      answer: 1,
      expl: "Hattuşa (Boğazköy) Çorum ilindedir."
    },
    {
      id: 14,
      topic: "Türkiye Coğrafyası",
      q: `Ani Arkeolojik Alanı hangi sınır kapısına yakın konumdadır?`,
      choices: ["Gürbulak", "Kapıköy", "Doğubayazıt", "Akyaka", "Alican"],
      answer: 4,
      expl: "Ani, Türkiye-Ermenistan sınırındaki Alican bölgesine yakındır."
    },
    {
      id: 15,
      topic: "Türkiye Coğrafyası",
      q: `Göbeklitepe hangi il sınırları içindedir?`,
      choices: ["Şanlıurfa", "Mardin", "Diyarbakır", "Adıyaman", "Gaziantep"],
      answer: 0,
      expl: "Göbeklitepe, Şanlıurfa’dadır."
    },
    {
      id: 16,
      topic: "Türkiye Coğrafyası",
      q: `Kaçkar Dağları Millî Parkı ağırlıklı olarak hangi bölgede yer alır?`,
      choices: ["Doğu Anadolu", "Karadeniz", "Marmara", "İç Anadolu", "Akdeniz"],
      answer: 1,
      expl: "Kaçkarlar Doğu Karadeniz’dedir."
    },
    {
      id: 17,
      topic: "Türkiye Tarihi",
      q: `Çatalhöyük Neolitik Kenti hangi il sınırındadır?`,
      choices: ["Konya", "Antalya", "Karaman", "Burdur", "Kayseri"],
      answer: 0,
      expl: "Çatalhöyük Konya ilindedir."
    },
    {
      id: 18,
      topic: "Türkiye Coğrafyası",
      q: `Nemrut Dağı’ndaki Kommagene heykelleri ağırlıkla gün doğumu/gün batımı izleme noktasıyla hangi il sınırındadır?`,
      choices: ["Adıyaman", "Malatya", "Şanlıurfa", "Kilis", "Mardin"],
      answer: 0,
      expl: "Nemrut Dağı (Kommagene) Adıyaman’dadır."
    },
    {
      id: 19,
      topic: "Türkiye Coğrafyası",
      q: `Sümela Manastırı hangi vadide konumlanır?`,
      choices: ["Fırtına Vadisi", "Zigana Vadisi", "Altındere Vadisi", "Çoruh Vadisi", "İkizdere Vadisi"],
      answer: 2,
      expl: "Sümela, Altındere Vadisi Millî Parkı’ndadır."
    },
    {
      id: 20,
      topic: "Türkiye Coğrafyası",
      q: `Dalyan’daki caretta carettalar için korunan sahil hangisidir?`,
      choices: ["İncekum", "İztuzu", "Patara", "Kaputaş", "Çıralı"],
      answer: 1,
      expl: "Dalyan’daki ünlü kumsal İztuzu’dur."
    },

    // --- GENEL TÜRK TARİHİ ve KÜLTÜRÜ (21-28) ---
    { id: 21, topic: "Genel Türk Tarihi", q: `Orhun Yazıtları hangi Türk kağanları dönemine aittir?`, choices: ["Göktürk II. Kağanlığı", "Selçuklu", "Uygur", "Hun", "Timur"], answer: 0, expl: "Bilge Kağan, Kül Tigin ve Tonyukuk anıtları Göktürk II. dönemidir." },
    { id: 22, topic: "Genel Türk Kültürü", q: `Dede Korkut Hikâyeleri'nin dili hangi lehçe temellidir?`, choices: ["Oğuz", "Kıpçak", "Karluk", "Çağatay", "Harezm"], answer: 0, expl: "Oğuz Türkçesi temellidir." },
    { id: 23, topic: "Genel Türk Tarihi", q: `Malazgirt Savaşı hangi tarihte olmuştur?`, choices: ["1048", "1071", "1176", "1243", "1299"], answer: 1, expl: "1071 Malazgirt, Anadolu'nun kapılarını Türklere açmıştır." },
    { id: 24, topic: "Genel Türk Kültürü", q: `Ahi teşkilatının kurucusu kabul edilen kişi kimdir?`, choices: ["Hacı Bektaş Veli", "Ahi Evran", "Mevlana", "Yunus Emre", "Hacı Bayram-ı Veli"], answer: 1, expl: "Ahi Evran esnaf birliklerinin piri kabul edilir." },
    { id: 25, topic: "Genel Türk Tarihi", q: `Karakurum başkent hangi devletin merkezidir?`, choices: ["Büyük Selçuklu", "Timur", "Hun", "Göktürk", "Moğol İmparatorluğu"], answer: 4, expl: "Karakurum, Moğol İmparatorluğu’nun başkentidir." },
    { id: 26, topic: "Genel Türk Kültürü", q: `Nevruz geleneği Türk kültüründe hangi güneş hareketiyle ilişkilidir?`, choices: ["Gündönümü (yaz)", "Ekinoks (ilkbahar)", "Ekinoks (sonbahar)", "Gündönümü (kış)", "Ay tutulması"], answer: 1, expl: "21 Mart ilkbahar ekinoksu Nevruz’dur." },
    { id: 27, topic: "Genel Türk Tarihi", q: `Büyük Selçuklu Devleti'nin en parlak dönemi hangi hükümdar zamanıdır?`, choices: ["Tuğrul Bey", "Alp Arslan", "Melikşah", "Sencer", "Kutalmış"], answer: 2, expl: "Melikşah dönemi fetihler ve teşkilatla öne çıkar." },
    { id: 28, topic: "Genel Türk Kültürü", q: `Kopuz hangi müzik aletinin atası sayılır?`, choices: ["Ney", "Kemençe", "Bağlama", "Ud", "Kanun"], answer: 2, expl: "Kopuz, bağlamanın atası kabul edilir." },

    // --- OSMANLI TARİHİ (29-38) ---
    { id: 29, topic: "Osmanlı Tarihi", q: `Osmanlı'da tımar sistemi en çok hangi alanı finanse ederdi?`, choices: ["Donanma", "Saray masrafları", "Eğitim", "Eyalet yönetimi", "Sipahi askerî gücü"], answer: 4, expl: "Tımar geliri sipahi süvarilerinin teçhiz ve idamesine ayrılırdı." },
    { id: 30, topic: "Osmanlı Tarihi", q: `İlk Osmanlı başkenti aşağıdakilerden hangisidir?`, choices: ["Bursa", "Edirne", "Söğüt", "İznik", "İstanbul"], answer: 2, expl: "Kuruluş devrinde Söğüt merkez kabul edilir." },
    { id: 31, topic: "Osmanlı Tarihi", q: `İstanbul'un fethi hangi tarihte gerçekleşti?`, choices: ["1453", "1402", "1517", "1526", "1571"], answer: 0, expl: "29 Mayıs 1453'te fethedildi." },
    { id: 32, topic: "Osmanlı Tarihi", q: `"Kanunî" unvanı hangi padişaha aittir?`, choices: ["II. Bayezid", "Yavuz Sultan Selim", "Kanunî Sultan Süleyman", "I. Murad", "IV. Murad"], answer: 2, expl: "Uzun saltanatı ve kanunnameleriyle bilinir." },
    { id: 33, topic: "Osmanlı Tarihi", q: `Islahat Fermanı hangi yılda ilan edilmiştir?`, choices: ["1839", "1856", "1876", "1908", "1922"], answer: 1, expl: "Tanzimat (1839) sonrasında 1856'da İslahat Fermanı ilan edildi." },
    { id: 34, topic: "Osmanlı Tarihi", q: `Osmanlı'da 'devşirme' sistemi en çok hangi sınıfın yetiştirilmesinde kullanılmıştır?`, choices: ["İlmiye", "Ulema", "Kalemiye", "Saray hizmetleri", "Kapıkulu ocakları"], answer: 4, expl: "Enderun ve kapıkulu ocakları için devşirme uygulanırdı." },
    { id: 35, topic: "Osmanlı Tarihi", q: `Matrakçı Nasuh aşağıdakilerden hangisiyle tanınır?`, choices: ["Minyatür haritalar", "Musiki", "Mimarlık", "Felsefe", "Coğrafya"], answer: 0, expl: "Sefer güzergâhlarını minyatür haritalarla resmetmiştir." },
    { id: 36, topic: "Osmanlı Tarihi", q: `Osmanlı donanmasının en parlak kaptanlarından olup Preveze zaferini kazanan kimdir?`, choices: ["Piri Reis", "Sokollu", "Barbaros Hızır Hayreddin Paşa", "Turgut Reis", "Gediz"], answer: 2, expl: "1538 Preveze zaferi Barbaros'a aittir." },
    { id: 37, topic: "Osmanlı Tarihi", q: `Lale Devri hangi padişah ve veziriazam dönemiyle özdeşleşir?`, choices: ["I. Mahmud ve Nevşehirli Damat İbrahim Paşa", "III. Ahmed ve Nevşehirli Damat İbrahim Paşa", "III. Selim ve Koca Ragıp Paşa", "II. Mustafa ve Köprülü", "I. Abdülhamid ve Halil Hamid Paşa"], answer: 1, expl: "1718-1730 Lale Devri, III. Ahmed ve Nevşehirli Damat İbrahim Paşa dönemidir." },
    { id: 38, topic: "Osmanlı Tarihi", q: `II. Meşrutiyet hangi yılda ilan edildi?`, choices: ["1876", "1908", "1909", "1913", "1920"], answer: 1, expl: "1908'de ilan edilmiştir." },

    // --- ARKEOLOJİ ve MİTOLOJİ (39-46) ---
    { id: 39, topic: "Arkeoloji", q: `Arkeolojik tabakalaşmayı ifade eden kavram hangisidir?`, choices: ["Tipoloji", "Stratigrafi", "Seramikoloji", "Dendrokronoloji", "Numismatik"], answer: 1, expl: "Stratigrafi kazı katmanlarını inceler." },
    { id: 40, topic: "Mitoloji", q: `Yunan mitolojisinde zanaat ve ateş tanrısı kimdir?`, choices: ["Ares", "Hermes", "Apollon", "Hefestos", "Dionysos"], answer: 3, expl: "Hefestos demircilik ve ateş tanrısıdır." },
    { id: 41, topic: "Arkeoloji", q: `Karbon-14 yöntemi en çok hangi amaçla kullanılır?`, choices: ["Metal analiz", "Yaş tayini", "Yazıt okuma", "Harita çıkarma", "İzotop ayrıştırma"], answer: 1, expl: "C-14 organik kalıntıların yaşını verir." },
    { id: 42, topic: "Mitoloji", q: `Frigya’nın ana tanrıçası hangisidir?`, choices: ["Kibele", "Artemis", "Hera", "Demeter", "Afrodit"], answer: 0, expl: "Kibele (Kybele) Frig ana tanrıçasıdır." },
    { id: 43, topic: "Arkeoloji", q: `Anadolu’daki 'megaron' planlı yapı hangi kültürde tipiktir?`, choices: ["Hitit", "Urartu", "Frig", "Lidya", "Geç Roma"], answer: 2, expl: "Frig mimarisinde megaron planı yaygındır." },
    { id: 44, topic: "Mitoloji", q: `Homeros’un İlyada’sındaki savaş hangi kent çevresinde geçer?`, choices: ["Miletos", "Troya", "Efes", "Didyma", "Sardeis"], answer: 1, expl: "İlyada Troya Savaşı'nı anlatır." },
    { id: 45, topic: "Arkeoloji", q: `"Tell" terimi arkeolojide neyi ifade eder?`, choices: ["Taş ocağı", "Toprak set", "Yapay höyük", "Yeraltı mezarı", "Kaya tapınak"], answer: 2, expl: "Tell, yerleşim kalıntılarının oluşturduğu höyüktür." },
    { id: 46, topic: "Mitoloji", q: `Zeus’un başından doğan bilgelik tanrıçası kimdir?`, choices: ["Artemis", "Athena", "Hera", "Hestia", "Persephone"], answer: 1, expl: "Athena'nın doğumu bu mit ile anlatılır." },

    // --- ROMA, YUNAN, BİZANS TARİHİ (47-56) ---
    { id: 47, topic: "Roma Tarihi", q: `Roma'da cumhuriyet döneminin sonunu simgeleyen kişi kimdir?`, choices: ["Julius Caesar", "Augustus", "Pompeius", "Cicero", "Traianus"], answer: 1, expl: "Augustus ile imparatorluk dönemi başlar." },
    { id: 48, topic: "Yunan Tarihi", q: `Pers Savaşları'nda Atinalıların deniz zaferi hangi savaştır?`, choices: ["Marathon", "Salamis", "Plataea", "Thermopylai", "Granikos"], answer: 1, expl: "MÖ 480 Salamis deniz zaferidir." },
    { id: 49, topic: "Bizans Tarihi", q: `Hagia Sophia'nın inşasında baş mimarlar kimlerdir?`, choices: ["Sinan ve Davud", "Anthemius ve Isidoros", "Prokopios ve Narses", "Zeno ve Basil", "Arkadyus ve Honoryus"], answer: 1, expl: "Miletli Anthemius ve Trallesli Isidoros'tur." },
    { id: 50, topic: "Roma Tarihi", q: `Roma hukukunun derlenmiş külliyatı 'Corpus Iuris Civilis' hangi imparator döneminde derlendi?`, choices: ["Diocletianus", "Justinianus", "Hadrianus", "Nero", "Konstantinus"], answer: 1, expl: "Justinianus döneminde derlendi." },
    { id: 51, topic: "Yunan Tarihi", q: `Peloponez Savaşları Atina ile hangi şehir devleti arasında yaşanmıştır?`, choices: ["Thebai", "Argos", "Delos", "Sparta", "Korinth"], answer: 3, expl: "Atina-Sparta arasındaki uzun savaşlardır." },
    { id: 52, topic: "Bizans Tarihi", q: `Bizans'ın 'Makedon Rönesansı' hangi yüzyıllarda yaşanmıştır?`, choices: ["4-5.yy", "6-7.yy", "9-11.yy", "12-13.yy", "14-15.yy"], answer: 2, expl: "9-11. yüzyıllar kültürel canlanma dönemidir." },
    { id: 53, topic: "Roma Tarihi", q: `İmparator Traianus döneminde Roma İmparatorluğu'nun ulaştığı en geniş sınırlar hangi yüzyıla rastlar?`, choices: ["MÖ 1. yy", "MS 1. yy", "MS 2. yy", "MS 3. yy", "MS 4. yy"], answer: 2, expl: "Traianus MS 2. yüzyıldadır." },
    { id: 54, topic: "Yunan Tarihi", q: `Parthenon hangi tanrıçaya adanmıştır?`, choices: ["Hera", "Athena", "Afrodit", "Artemis", "Demeter"], answer: 1, expl: "Parthenon, Athena'ya adanmıştır." },
    { id: 55, topic: "Bizans Tarihi", q: `İkonoklazm dönemi temelde neyin yasaklanması/karşıtlığıyla ilgilidir?`, choices: ["Orucun kaldırılması", "Azizlerin reddi", "İkonların kırılması/kullanımına karşıtlık", "Grekçenin yasaklanması", "Mabet kapatılması"], answer: 2, expl: "İkon karşıtlığıdır." },
    { id: 56, topic: "Roma Tarihi", q: `Roma'da halk meclisleri aşağıdakilerden hangisiyle ifade edilir?`, choices: ["Senatus", "Comitia", "Praetorium", "Curia", "Forum"], answer: 1, expl: "Comitia halk meclisleridir." },

    // --- GENEL SANAT TARİHİ (57-62) ---
    { id: 57, topic: "Sanat Tarihi", q: `Gotik mimaride aşağıdakilerden hangisi ayırt edici değildir?`, choices: ["Sivri kemer", "Uçan payanda", "Kabak kemer", "Vitray pencereler", "Yüksek nef"], answer: 2, expl: "Kabak (yuvarlak) kemer Romanesk özelliğidir." },
    { id: 58, topic: "Sanat Tarihi", q: `Rönesans’ta 'perspektif'in kuramsallaşması kiminle ilişkilendirilir?`, choices: ["Giotto", "Brunelleschi", "Michelangelo", "Bernini", "Donatello"], answer: 1, expl: "Brunelleschi çizgisel perspektifi kuramsallaştırdı." },
    { id: 59, topic: "Sanat Tarihi", q: `Barok heykelin öncülerinden, Aziz Teresa’nın Vecdi eserinin sahibi kimdir?`, choices: ["Bernini", "Canova", "Cellini", "Donatello", "Ghiberti"], answer: 0, expl: "Bernini Barok heykelde başat isimdir." },
    { id: 60, topic: "Sanat Tarihi", q: `Kapadokya kaya kiliselerindeki fresk tekniği hangi resim tekniğine girer?`, choices: ["Yağlıboya", "Sulu boya", "Enkaustik", "Al secco/Al fresco", "Guaj"], answer: 3, expl: "Fresk (al fresco) kireç sıva üzerine ıslakken yapılır." },
    { id: 61, topic: "Sanat Tarihi", q: `Osman Hamdi Bey’in aşağıdaki eserlerinden hangisi arslan figürlü ünlü tablodur?`, choices: ["Kaplumbağa Terbiyecisi", "Silah Taciri", "Mihrap", "Cami Kapısı", "Arzuhalci"], answer: 0, expl: "Kaplumbağa Terbiyecisi sanatçının simge eseridir." },
    { id: 62, topic: "Sanat Tarihi", q: `Selimiye Camii'nin mimarı kimdir?`, choices: ["Mimar Hayreddin", "Mimar Davud", "Sedefkâr Mehmed Ağa", "Mimar Sinan", "Kasım Ağa"], answer: 3, expl: "Edirne Selimiye, Mimar Sinan'ın ustalık eseridir." },

    // --- DİNLER TARİHİ (63-66) ---
    { id: 63, topic: "Dinler Tarihi", q: `Musevilik'te kutsal metinlerin genel adı nedir?`, choices: ["Tevrat", "Tanah", "Talmud", "Mişna", "Midraş"], answer: 1, expl: "Tanah; Tora, Neviim, Ketuvim'den oluşur." },
    { id: 64, topic: "Dinler Tarihi", q: `Hıristiyanlık’ta 325 İznik Konsili’nin başat tartışması hangi konudur?`, choices: ["Trinite", "Vaftiz", "İkonlar", "Azizlik", "Günah çıkarma"], answer: 0, expl: "İsa'nın ilahiyeti ve Teslis doktrini tartışılmıştır." },
    { id: 65, topic: "Dinler Tarihi", q: `İslam’da hac ibadetinin şartlarından biri olmayan hangisidir?`, choices: ["Mikat", "Tavaf", "Say", "Vaftiz", "Vakfe"], answer: 3, expl: "Vaftiz Hıristiyan ritüelidir." },
    { id: 66, topic: "Dinler Tarihi", q: `Budizm’de Nirvana kavramı en yakın hangi anlama gelir?`, choices: ["Yeniden doğuş", "Arınma banyosu", "Arzu ve ıstırabın sönmesi", "Keşişlik yemini", "Tanrı ile birleşme"], answer: 2, expl: "Nirvana, arzuların sönmesi ve ıstırabın bitişidir." },

    // --- SAĞLIK, İLK YARDIM, TURİST SAĞLIĞI, PSİKOLOJİ (67-73) ---
    { id: 67, topic: "İlk Yardım", q: `Bilinç kaybı olan bir kazazede nefes alıyor ama dil geriye düşme riski var. En uygun pozisyon hangisidir?`, choices: ["Sırtüstü düz", "Yüzüstü", "Yarı oturur", "Yana sabit (koma) pozisyonu", "Başı geriye aşırı itme"], answer: 3, expl: "Koma pozisyonu hava yolunu korur ve kusma aspirasyon riskini azaltır." },
    { id: 68, topic: "Genel Sağlık Bilgisi", q: `Güneş çarpmasında ilk yapılacak uygulamalardan biri değildir?`, choices: ["Serin bir ortama almak", "Sıvı takviyesi", "Sıkı sarmak/Isı yalıtımlı battaniye", "Soğuk uygulama", "Giysileri gevşetmek"], answer: 2, expl: "Aşırı sarma ısı kaybını engelleyip durum kötüleştirir." },
    { id: 69, topic: "Turist Psikolojisi", q: `Kalabalık gruplarda karar yorgunluğunu azaltmak için rehberin hangi tekniği en etkilidir?`, choices: ["Sürekli anket", "Mikro seçimleri azaltma", "Hepsini oylama", "Bire bir danışma", "Rastgele seçim"], answer: 1, expl: "Seçenek sayısını azaltmak karar yorgunluğunu düşürür." },
    { id: 70, topic: "Sağlık Turizmi", q: `Türkiye’nin sağlık turizminde öne çıktığı alanlardan biri değildir?`, choices: ["Saç ekimi", "Diş tedavileri", "Termal kürler", "Kalp nakli turizmi", "Göz cerrahisi"], answer: 3, expl: "Organ nakli turizmi mevzuat ve etik yönlerden sınırlıdır." },
    { id: 71, topic: "İlk Yardım", q: `Aşırı kanamada ilk uygulama prensibi hangisidir?`, choices: ["Turnike", "Basınç uygulama ve elevasyon", "Soğuk uygulama", "Gevşetici masaj", "Antibiyotik"], answer: 1, expl: "Doğrudan bası ve mümkünse elevasyon ilk basamaktır; turnike son çaredir." },
    { id: 72, topic: "Turist Sağlığı", q: `Tropikal bölgelerde seyahat edenlere aşağıdakilerden hangisi temel önleyici öneridir?`, choices: ["Sokak yiyecekleri tercih edin", "Musluktan bol su için", "Kapalı şişe su ve iyi pişmiş gıda tüketin", "Her öğünde çiğ salata şart", "Buzlu içecek önerilir"], answer: 2, expl: "Su ve gıda hijyeni gastrointestinal riskleri azaltır." },
    { id: 73, topic: "Turist Psikolojisi", q: `Kriz anında panik bulaşmasını azaltmada rehberin ses tonu nasıl olmalıdır?`, choices: ["Yüksek ve hızlı", "Monoton ve sert", "Alçak, net ve ölçülü", "Şakacı", "Fısıltı"], answer: 2, expl: "Alçak, net, ölçülü ve komutif ses tonu sakinleştirir." },

    // --- İLETİŞİM & MESLEK ETİĞİ (74-77) ---
    { id: 74, topic: "İletişim", q: `Aktif dinlemede aşağıdakilerden hangisi uygun değildir?`, choices: ["Göz teması", "Söz kesmemek", "Yargılayıcı dil", "Başla onaylama", "Parafraz"], answer: 2, expl: "Yargılayıcı dil güveni zedeler." },
    { id: 75, topic: "Meslek Etiği", q: `Rehberin bahşiş beklentisi ile ilgili doğru tutum hangisidir?`, choices: ["Turu başında talep", "Tur boyunca ima", "Sona doğru nazik bilgi ve gönüllülük vurgusu", "Standart tarife ilanı", "Belirli miktar dayatma"], answer: 2, expl: "Gönüllülük ve baskıdan kaçınma etik olandır." },
    { id: 76, topic: "İletişim", q: `Grup içi anlaşmazlıkta arabuluculuk yaparken ilk adım nedir?`, choices: ["Suçlu belirleme", "Tarafları ayrı dinleme", "Topluluk önünde tartışma", "Sosyal medyaya taşıma", "Oylama"], answer: 1, expl: "Tarafları ayrı dinlemek gerilimi düşürür ve bilgi sağlar." },
    { id: 77, topic: "Meslek Etiği", q: `Yerel rehberlik gerektiren sit alanında, yetkisiz anlatım taleplerine rehberin yanıtı ne olmalıdır?`, choices: ["İzin verilebilir", "Kısa süreli müsamaha", "Yetkili rehbere yönlendirme ve mevzuata uyum", "Göz yummak", "Gruba bırakmak"], answer: 2, expl: "Sit alanlarında mevzuat ve yetki kurallarına uyum esastır." },

    // --- ANADOLU MEDENİYETLERİ (78-82) ---
    { id: 78, topic: "Anadolu Medeniyetleri", q: `Lidya'nın başkenti neresidir?`, choices: ["Sardeis", "Gordion", "Arslantepe", "Tuşpa", "Boğazköy"], answer: 0, expl: "Lidya'nın başkenti Sardeis'tir." },
    { id: 79, topic: "Anadolu Medeniyetleri", q: `Urartu mimarisinde tipik sulama kalıntıları hangi adla bilinir?`, choices: ["Kervansaray", "Sulak", "Kanalizasyon", "Şamram kanalı", "Gölet"], answer: 3, expl: "Şamram (Menua) kanalı Van çevresinde meşhurdur." },
    { id: 80, topic: "Anadolu Medeniyetleri", q: `Frig yazıtlarında sık görülen kuş motifi hangi anlamla ilişkilidir?`, choices: ["Savaş", "Bereket ve ana tanrıça", "Denizcilik", "Göç", "Ticaret"], answer: 1, expl: "Kibele kültüyle bereket bağlamında yorumlanır." },
    { id: 81, topic: "Anadolu Medeniyetleri", q: `Hatti-Hitit panteonunda fırtına tanrısı kimdir?`, choices: ["Teşup/Tarḫunna", "Arinna", "Nabu", "Ea", "Shamash"], answer: 0, expl: "Teşup/Tarhunta fırtına tanrısıdır." },
    { id: 82, topic: "Anadolu Medeniyetleri", q: `Kültepe (Kaniş) tabletleri hangi dil-karışımıyla ünlüdür?`, choices: ["Hititçe-Luwice", "Akkadça-Asurca", "Urartuca", "Fenikece", "Aramice"], answer: 1, expl: "Asur ticaret kolonileri tabletleridir." },

    // --- HALK BİLİMİ, DİL, EDEBİYAT, EL SANATLARI (83-87) ---
    { id: 83, topic: "Halk Bilimi", q: `Aşağıdakilerden hangisi somut olmayan kültürel miras ögesidir?`, choices: ["Han", "Köprü", "Âşıklık geleneği", "Kervansaray", "Kaleler"], answer: 2, expl: "Âşıklık geleneği yaşayan mirastır." },
    { id: 84, topic: "Dil/Edebiyat", q: `Divan edebiyatında 'gazel' için hangisi doğrudur?`, choices: ["Uzun mesnevi", "Beyitlerle kurulur", "Hece ölçüsü", "Kısa manzum mektup", "Yalnız aruzsuz"], answer: 1, expl: "Gazel beyit nazım şeklidir ve genellikle aruzla yazılır." },
    { id: 85, topic: "El Sanatları", q: `Çini sanatının Osmanlı’daki önemli üretim merkezi hangisidir?`, choices: ["Kütahya", "Bilecik", "Edirne", "Manisa", "Trabzon"], answer: 0, expl: "Kütahya ve İznik çini merkezleridir; İznik klasik dönemde öncüdür." },
    { id: 86, topic: "Dil/Edebiyat", q: `Göktürk yazısı hangi yazı yönüyle yazılır?`, choices: ["Soldan sağa", "Sağdan sola", "Yukarıdan aşağı", "Dairesel", "Karma"], answer: 1, expl: "Göktürk (Orhun) yazısı sağdan sola yazılır." },
    { id: 87, topic: "Halk Bilimi", q: `Nevruz kutlamalarında yaygın ritüellerden biri değildir?`, choices: ["Ateş üzerinden atlama", "Semeni (yeşertme)", "Hıdırellez dileği", "Yumurta tokuşturma", "Su başı ziyareti"], answer: 2, expl: "Hıdırellez ayrı bir bahar ritüelidir (Mayıs başı)." },

    // --- FLORA, FAUNA, DOĞA TARİHİ (88-92) ---
    { id: 88, topic: "Flora/Fauna", q: `Anadolu'nun endemik bir kozalaklısı olan 'Sedir' hangi adla bilinir?`, choices: ["Cedrus libani", "Pinus nigra", "Abies cilicica", "Juniperus excelsa", "Picea orientalis"], answer: 0, expl: "Lübnan Sediri (Cedrus libani) Toroslar’da yaygındır." },
    { id: 89, topic: "Flora/Fauna", q: `Caretta caretta Türkiye’de hangi sahillerde üreme yapar?`, choices: ["Karadeniz", "Marmara", "Ege ve Akdeniz kıyıları", "Sadece Ege", "Sadece Akdeniz"], answer: 2, expl: "Ege ve Akdeniz kıyılarında önemli yuvalama alanları vardır." },
    { id: 90, topic: "Doğa Tarihi", q: `Pamukkale travertenlerini oluşturan başlıca mineral nedir?`, choices: ["Demir oksit", "Silis", "Kalsit (kalsiyum karbonat)", "Mika", "Feldspat"], answer: 2, expl: "Termal suların CaCO3 çöktürmesi travertenleri oluşturur." },
    { id: 91, topic: "Flora/Fauna", q: `Kaçkar Dağları’nda yaygın görülen büyük memeli hangisidir?`, choices: ["Anadolu parsı", "Kızıl geyik", "Boz ayı", "Yaban keçisi", "Çakal"], answer: 2, expl: "Doğu Karadeniz’de boz ayı popülasyonu mevcuttur." },
    { id: 92, topic: "Doğa Tarihi", q: `"Jeopark" kavramı öncelikle neyi korumayı hedefler?`, choices: ["Kentsel dokuyu", "Siyasi sınırları", "Jeolojik mirası", "Sualtı ekosistemlerini", "Göç yollarını"], answer: 2, expl: "Jeopark, jeolojik/jeomorfolojik mirası korur ve eğitim/turizmle bütünler." },

    // --- MÜZECİLİK ve TARİHİ ESERLERE İLİŞKİN SUÇLAR (93-96) ---
    { id: 93, topic: "Müzecilik", q: `Eserin müze kayıt defterine ilk kez işlenmesi hangi süreçtir?`, choices: ["Envanter", "Sergileme", "Restorasyon", "Konservasyon", "Provenans"], answer: 0, expl: "Envanter, ilk kayıt ve numaralandırmadır." },
    { id: 94, topic: "Müzecilik", q: `Eserin özgün malzemesini korumaya yönelik bilimsel tekniklerin genel adı nedir?`, choices: ["Kuratorya", "Konservasyon", "Teşhir", "Kürasyon", "Sponsorluk"], answer: 1, expl: "Konservasyon, koruma-onarım süreçlerini kapsar." },
    { id: 95, topic: "Eser Suçları", q: `Kültür varlıklarının yurt dışına kaçırılmasının önlenmesi hangi temel ilke ile ilgilidir?`, choices: ["Yerinden yönetim", "Mülkiyetin devri", "Kaynak ülke ilkesi", "Evrenselcilik", "Serbest dolaşım"], answer: 2, expl: "Kaynak ülke ilkesi, köken ülkenin haklarını vurgular." },
    { id: 96, topic: "Müzecilik", q: `Gezici sergilerde eser nakliyesinde en kritik unsur hangisidir?`, choices: ["Sergi metni", "Işık seviyesi", "İklimlendirme ve paketleme", "Ziyaretçi sayısı", "Bilet fiyatı"], answer: 2, expl: "Sıcaklık-nem kontrolü ve profesyonel paketleme esastır." },

    // --- ROMA/YUNAN/BİZANS ek, TÜRK DİLİ vs. (97-100) ---
    { id: 97, topic: "Dil/Edebiyat", q: `"Kutadgu Bilig" hangi yüzyılda yazılmıştır?`, choices: ["9.yy", "10.yy", "11.yy", "12.yy", "13.yy"], answer: 2, expl: "Yusuf Has Hacip’in eseri 11. yüzyıldandır." },
    { id: 98, topic: "Bizans Tarihi", q: `Bizans'ta Hipodrom hangi amaç için kullanılırdı?`, choices: ["Ticaret", "Yarış ve tören", "Askerî eğitim", "Mahkeme", "Pazar"], answer: 1, expl: "Hipodrom at arabası yarışları ve tören alanıdır." },
    { id: 99, topic: "Roma Tarihi", q: `Roma'da su kemerlerinin taşıdığı yapısal öğe nedir?`, choices: ["Kemer ve tonoz", "Payanda", "Kasetli tavan", "Ahşap karkas", "Moloz duvar"], answer: 0, expl: "Kemer-tonoz sistemleri hidrolik hatları taşır." },
    { id: 100, topic: "Genel", q: `Rehberin başarı eşiği bu sınavda kaç doğru üzerinden belirlenmiştir?`, choices: ["50", "60", "65", "70", "75"], answer: 3, expl: "Bu denemede başarı eşiği 70 doğru olarak tanımlandı." }
  ];

  const total = questions.length;

  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [answers, setAnswers] = React.useState([]); // {choice, correct}
  const [showResult, setShowResult] = React.useState(false);
  const [reviewMode, setReviewMode] = React.useState(false);
  const [showTests, setShowTests] = React.useState(false);

  const current = questions[index];
  const progress = Math.round(((index) / total) * 100);

  function submitAnswer() {
    if (selected === null) return;
    const correct = selected === current.answer;
    const newAnswers = [...answers];
    newAnswers[index] = { choice: selected, correct };
    setAnswers(newAnswers);
    setShowResult(true);
  }

  function nextQuestion() {
    setShowResult(false);
    setSelected(null);
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      setReviewMode(true);
    }
  }

  const correctCount = answers.filter(a => a?.correct).length;
  const score = Math.round((correctCount / total) * 100);
  const passed = score >= 70;

  function restart() {
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setShowResult(false);
    setReviewMode(false);
  }

  // --- Basit kendi kendine testler (test cases) ---
  const testResults = React.useMemo(() => {
    const res = [] as { name: string; pass: boolean; info?: string }[];
    const ids = new Set<number>();

    // 1) Soru sayısı 100
    res.push({ name: "Toplam soru sayısı 100", pass: questions.length === 100, info: `bulunan: ${questions.length}` });

    // 2) Her soruda 5 şık
    const wrongChoices = questions.filter(q => q.choices.length !== 5).map(q => q.id);
    res.push({ name: "Her soruda 5 seçenek var", pass: wrongChoices.length === 0, info: wrongChoices.length ? `Hatalı id: ${wrongChoices.join(", ")}` : undefined });

    // 3) Cevap indeksleri 0-4 aralığında
    const wrongAnswers = questions.filter(q => q.answer < 0 || q.answer > 4).map(q => q.id);
    res.push({ name: "Cevap indeksleri 0-4 aralığında", pass: wrongAnswers.length === 0, info: wrongAnswers.length ? `Hatalı id: ${wrongAnswers.join(", ")}` : undefined });

    // 4) ID benzersiz
    let duplicateId: number | null = null;
    for (const q of questions) {
      if (ids.has(q.id)) { duplicateId = q.id; break; }
      ids.add(q.id);
    }
    res.push({ name: "Soru ID'leri benzersiz", pass: duplicateId === null, info: duplicateId ? `Tekrar eden id: ${duplicateId}` : undefined });

    // 5) Konu başlığı boş değil
    const emptyTopics = questions.filter(q => !q.topic || !q.topic.trim()).map(q => q.id);
    res.push({ name: "Tüm sorularda konu (topic) mevcut", pass: emptyTopics.length === 0, info: emptyTopics.length ? `Eksik id: ${emptyTopics.join(", ")}` : undefined });

    return res;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Turist Rehberliği Deneme Sınavı (100 Soru)</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowTests(v => !v)} className="px-3 py-2 rounded-2xl bg-white shadow">{showTests ? 'Test Panelini Kapat' : 'Test Paneli'}</button>
            <button onClick={restart} className="px-3 py-2 rounded-2xl bg-white shadow">Sıfırla</button>
          </div>
        </div>

        {showTests && (
          <div className="mb-4 bg-white rounded-2xl p-4 shadow">
            <div className="font-semibold mb-2">Otomatik Kontroller</div>
            <div className="grid sm:grid-cols-2 gap-2">
              {testResults.map((t, i) => (
                <div key={i} className={`rounded-2xl p-3 border ${t.pass ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.pass ? '✓ Başarılı' : '✗ Hatalı'}{t.info ? ` — ${t.info}` : ''}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!reviewMode && (
          <>
            <div className="w-full bg-white rounded-2xl p-4 sm:p-6 shadow">
              <div className="mb-3 text-sm text-gray-600">Soru {index + 1} / {total} · {current.topic}</div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div className="h-2 rounded-full" style={{ width: `${progress}%`, background: `linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(16,185,129,1) 100%)` }} />
              </div>

              <p className="text-lg sm:text-xl font-semibold mb-4">{current.q}</p>

              <div className="grid gap-3">
                {current.choices.map((c, i) => (
                  <label key={i} className={`border rounded-2xl p-3 cursor-pointer transition ${selected===i? 'border-blue-500 ring-2 ring-blue-200': 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name={`q-${current.id}`} className="mr-2" checked={selected===i} onChange={() => setSelected(i)} />
                    <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                    {c}
                  </label>
                ))}
              </div>

              {!showResult ? (
                <div className="mt-6 flex justify-end">
                  <button onClick={submitAnswer} className="px-5 py-2 rounded-2xl bg-blue-600 text-white shadow">İşaretle</button>
                </div>
              ) : (
                <div className="mt-6">
                  <div className={`p-4 rounded-2xl ${selected===current.answer? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="font-semibold mb-1">{selected===current.answer? 'Doğru!' : 'Yanlış.'}</div>
                    <div className="text-sm mb-1">Doğru cevap: <span className="font-semibold">{String.fromCharCode(65 + current.answer)}</span></div>
                    <div className="text-sm text-gray-700">{current.expl}</div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">Şu ana kadarki puan: <span className="font-semibold">{Math.round(((answers.filter(a=>a?.correct).length)/ (index+1)) * 100)}%</span></div>
                    <button onClick={nextQuestion} className="px-5 py-2 rounded-2xl bg-emerald-600 text-white shadow">Sonraki</button>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 text-xs text-gray-500">Başarı eşiği: 70/100</div>
          </>
        )}

        {reviewMode && (
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-bold mb-2">Sonuç</h2>
            <div className="text-lg mb-1">Skor: <span className="font-semibold">{score}</span>/100 {passed? '✅ Başarılı' : '❌ Başarısız'}</div>
            <div className="text-sm text-gray-600 mb-4">Doğru: {correctCount} · Yanlış: {total - correctCount}</div>

            <h3 className="font-semibold mt-4 mb-2">Konu Kırılımı</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {Object.entries((questions as any).reduce((acc: any, q: any, i: number) => { const key = q.topic; if (!acc[key]) acc[key] = { total: 0, correct: 0 }; acc[key].total += 1; if (answers[i]?.correct) acc[key].correct += 1; return acc; }, {})).map(([k, v]: any) => (
                <div key={k} className="border rounded-2xl p-3 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold">{k}</div>
                    <div className="text-xs text-gray-500">{(v as any).correct}/{(v as any).total} doğru</div>
                  </div>
                  <div className="text-sm font-semibold">{Math.round(((v as any).correct / (v as any).total) * 100)}%</div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold mt-6 mb-2">Yanıt Dökümü</h3>
            <div className="grid gap-2 max-h-72 overflow-auto pr-2">
              {questions.map((q, i) => (
                <div key={q.id} className={`rounded-2xl p-3 border ${answers[i]?.correct? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="text-sm font-semibold mb-1">{i+1}. {q.q}</div>
                  <div className="text-xs">Doğru: {String.fromCharCode(65 + q.answer)} · Senin: {answers[i]? String.fromCharCode(65 + (answers[i] as any).choice) : '-'} · {answers[i]?.correct? 'Doğru' : 'Yanlış'}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              <button onClick={restart} className="px-5 py-2 rounded-2xl bg-gray-100">Baştan Başla</button>
            </div>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-400">Not: Bu içerik, rehber adayı seviyesinde, Şubat 2025'teki sınav kapsam başlıklarıyla uyumlu olacak şekilde hazırlanmış örnek bir denemedir.</div>
      </div>
    </div>
  );
}
