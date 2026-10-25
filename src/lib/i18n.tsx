import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "sl";
type Item = [string, string, string, string];
type Activity = [string, string, string];

const en = {
  nav: { home: "Home", about: "About", experience: "Experience", services: "Services", contact: "Contact" },
  menu: "Menu", close: "Close",
  role: "Organist & Music Educator",
  home: {
    lead: "Karin Zuza is an organist, pianist and music educator. She teaches organ at music schools in Koper and Ljubljana, accompanies at the Koper and Ribnica Music Schools, and performs as a soloist and with ensembles.",
    cta: "Get in touch", more: "About Karin", viewServices: "Explore services",
    cards: [
      ["Organ teaching", "Teaching organ at music schools in Koper and Ljubljana."],
      ["Piano accompaniment", "Experience accompanying students at exams and collaborating with instrumentalists and ensembles."],
      ["Concerts", "Solo organ performances and collaborations across Slovenia and abroad."],
    ],
    featureTitle: "Music, teaching and the concert stage",
    featureText: "Alongside her teaching, Karin has performed in many solo and collaborative organ concerts and worked with orchestras and choirs.",
  },
  about: {
    eyebrow: "About", title: "Karin Zuza",
    paras: [
      "Karin Zuza is an organist, pianist and music educator. Her work brings together performing, teaching and piano accompaniment.",
      "She completed her undergraduate studies in organ at the Academy of Music, University of Ljubljana, in 2023. From 2023 to 2026, she pursued master's studies in organ teaching at the Academy of Music, University of Ljubljana.",
      "Karin has performed organ concerts in Slovenia, Trieste and London, and collaborated with the Academy of Music's symphony orchestra, chamber orchestra and mixed choir.",
    ],
    education: "Education",
    eduList: ["2023–2026 — Master's studies in organ teaching, Academy of Music, University of Ljubljana", "2020–2023 — Bachelor's degree in organ, Academy of Music, University of Ljubljana", "2016–2020 — General secondary education, Tolmin Grammar School"],
    strengthsTitle: "Strengths",
    strengths: ["Creative and adaptable approach to lesson planning", "Empathetic, patient teaching that fosters a supportive learning environment", "Strong communication and ability to motivate students", "Passion for music and teaching; persistent, goal-oriented and highly motivated"],
    additionalTitle: "Additional skills",
    additional: ["English — B2", "MS Word and Excel — basic knowledge"],
  },
  exp: {
    eyebrow: "Experience", title: "Work and musical achievements",
    lead: "Teaching, piano accompaniment and performances, alongside award-winning results in national and international competitions.",
    positionsTitle: "Professional experience", concertsTitle: "Competition results", eduTitle: "Concert activity",
    positions: [
      ["2026–present", "Organ teacher", "Organ School in Ljubljana", "Teaching organ."],
      ["2026–present", "Accompanist", "Ribnica Music School", "Piano accompaniment."],
      ["2024–present", "Organ teacher and accompanist", "Koper Music School", "Teaching organ and providing accompaniment."],
      ["2024–2025", "Accompanist", "Tolmin Music School", "Piano accompaniment."],
      ["2022 and 2024", "Substitute piano teacher and accompanist", "Tolmin Music School", "Substitute piano lessons and accompaniment."],
      ["2022–2024", "Piano teacher", "Palbin private music school", "Piano lessons."],
      ["2022–present", "Piano accompanist", "Private music school examinations", "Annual accompaniment for students' examinations."],
    ] as Item[],
    concerts: [
      ["2025", "First prize", "ULJUS International Competition", "Complementary piano category."],
      ["2025", "First prize", "Banatus Temesiensis International Competition", "Complementary piano category."],
      ["2024", "First prize with special commendation", "Banatus Temesiensis International Competition", "Complementary piano category."],
      ["2024", "Second prize", "Festival 4 Arts International Competition", "Complementary piano category."],
      ["2024", "Silver prize, second place", "TEMSIG", "Organ category."],
      ["2023", "First prize, 100 points", "Festival 4 Arts International Competition", "First prize and full marks."],
      ["2023", "Gold award", "ULJUS International Competition", "Complementary piano category."],
      ["2023", "Silver prize", "IMMCC, Maribor", "Violin and organ chamber ensemble."],
      ["2022", "Gold award", "ULJUS International Competition", "Complementary piano category."],
      ["2022", "Participant", "Petar Eben International Organ Competition, Opava", "Open category."],
      ["2013, 2016", "Two gold and two silver awards", "TEMSIG", "Piano four hands category."],
    ] as Item[],
    edu: [
      ["Concert performances", "Solo and collaborative organ concerts", "Karin has performed in Ljubljana, Brezovica, Tolmin, Koper, Vipava, Maribor, Ilirska Bistrica, Škofja Loka, Trieste and London."],
      ["Collaborations", "Symphony orchestra, chamber orchestra and mixed choir", "Performed with the Academy of Music, University of Ljubljana's orchestras and mixed choir."],
    ] as Activity[],
    videosTitle: "Selected recordings",
    pianoTitle: "Piano",
    organTitle: "Organ",
    videos: [
      ["Piano", "XI International Piano Competition Smederevo Online", "https://www.youtube.com/watch?v=UEohai3lvM0"],
      ["Piano", "Festivalul de Arte Festival4Arts 2023", "https://www.youtube.com/watch?v=6-SejL5chfI"],
      ["Piano", "Festivalul de Arte Festival4Arts 2024", "https://www.youtube.com/watch?v=lEOd4ShFzWs"],
      ["Piano", "Beethoven: Sonata No. 6 in F major, Op. 10 No. 2 — I. Allegro", "https://www.youtube.com/watch?v=_5SkXBC3lZM"],
      ["Piano", "Schubert: Impromptu, Op. 90 No. 2", "https://www.youtube.com/watch?v=O0x6CMyfeNE"],
      ["Organ", "Concert marking the Academy of Music's 50th anniversary as part of the University of Ljubljana", "https://www.youtube.com/watch?v=jSiAaTio-48&t=2070s"],
      ["Organ", "Exchange concert: organ students of the Ljubljana and Zagreb Academies of Music (20:49)", "https://www.youtube.com/watch?v=4nNkW46rdQU&t=1249s"],
      ["Organ", "Organ students' concert, Academy of Music, University of Ljubljana (selected excerpts: 0:13–27:55, 37:33–55:45, 1:20:20–1:29:19)", "https://www.youtube.com/watch?v=syGQ-Bx_UBI&t=13s"],
      ["Organ", "Karin Zuza's master's recital", "https://drive.google.com/file/d/1AIy9GAPFDAnHWhsBpfxMU8cA4vVXXfZT/view?usp=sharing"],
    ] as [string, string, string][],
  },
  services: {
    eyebrow: "Services", title: "Musical collaborations",
    lead: "Karin's musical work includes organ and piano teaching, accompaniment, and solo and collaborative performances. Possible areas of collaboration also include:",
    list: [
      ["Weddings and events", "Organ or piano music as part of a wedding or event programme."],
      ["Piano accompaniment", "Accompaniment for students, exams, performances and other musical projects."],
      ["Individual lessons", "Individual organ or piano tuition."],
      ["Concerts and collaborations", "Solo and collaborative organ performances."],
    ],
    outro: "These are possible forms of collaboration; each arrangement depends on individual circumstances.",
    cta: "Contact",
  },
  contact: {
    eyebrow: "Contact", title: "Get in touch",
    lead: "For information about Karin's musical work or to discuss a possible collaboration, please contact her.",
    email: "Email", elsewhere: "Recordings and performances",
  },
};

const sl: typeof en = {
  nav: { home: "Domov", about: "O meni", experience: "Izkušnje", services: "Storitve", contact: "Kontakt" },
  menu: "Meni", close: "Zapri",
  role: "Organistka & glasbena pedagoginja",
  home: {
    lead: "Karin Zuza je organistka, pianistka in glasbena pedagoginja. Poučuje orgle na glasbenih šolah v Kopru in Ljubljani, korepetira na glasbenih šolah v Kopru in Ribnici ter nastopa kot solistka in v ansamblih.",
    cta: "Stopite v stik", more: "O Karin", viewServices: "Oglejte si storitve",
    cards: [
      ["Poučevanje orgel", "Poučuje orgle na glasbenih šolah v Kopru in Ljubljani."],
      ["Klavirska korepeticija", "Izkušnje s korepetiranjem učencev na izpitih ter sodelovanjem z instrumentalisti in zasedbami."],
      ["Koncerti", "Samostojni orgelski nastopi in sodelovanja po Sloveniji in v tujini."],
    ],
    featureTitle: "Glasba, poučevanje in koncertni oder",
    featureText: "Poleg poučevanja je Karin izvedla številne samostojne in sodelujoče orgelske koncerte ter sodelovala z orkestri in zbori.",
  },
  about: {
    eyebrow: "O meni", title: "Karin Zuza",
    paras: [
      "Karin Zuza je organistka, pianistka in glasbena pedagoginja. Njeno delo združuje nastopanje, poučevanje in klavirsko korepeticijo.",
      "Leta 2023 je zaključila univerzitetni študij orgel na Akademiji za glasbo Univerze v Ljubljani. Med letoma 2023 in 2026 je na Akademiji za glasbo Univerze v Ljubljani opravljala magistrski študij poučevanja orgel.",
      "Nastopala je na orgelskih koncertih po Sloveniji, v Trstu in Londonu ter sodelovala s Simfoničnim orkestrom Akademije za glasbo, Komornim orkestrom Akademije za glasbo in Mešanim zborom Akademije za glasbo.",
    ],
    education: "Izobrazba",
    eduList: ["2023–2026 — Magistrski študij poučevanja orgel, Akademija za glasbo UL", "2020–2023 — Diplomirana glasbenica orglavka (UN), Akademija za glasbo UL", "2016–2020 — Gimnazijska matura, Gimnazija Tolmin"],
    strengthsTitle: "Močne kompetence",
    strengths: ["Kreativnost in prilagodljivost pri oblikovanju učnih ur", "Empatično in potrpežljivo poučevanje ter spodbudno učno okolje", "Dobra komunikacija in motiviranje učencev", "Strast do glasbe in poučevanja; vztrajnost, ciljna usmerjenost in motiviranost"],
    additionalTitle: "Dodatna znanja",
    additional: ["Angleščina — B2", "Osnovno znanje MS Word in Excel"],
  },
  exp: {
    eyebrow: "Izkušnje", title: "Delo in glasbeni dosežki",
    lead: "Poučevanje, klavirska korepeticija in nastopanje ter nagrajeni rezultati na domačih in mednarodnih tekmovanjih.",
    positionsTitle: "Delovne izkušnje", concertsTitle: "Tekmovalni dosežki", eduTitle: "Koncertna dejavnost",
    positions: [
      ["2026–danes", "Učiteljica orgel", "Orglarska šola v Ljubljani", "Poučevanje orgel."],
      ["2026–danes", "Korepetitorka", "Glasbena šola Ribnica", "Klavirska korepeticija."],
      ["2024–danes", "Učiteljica orgel in korepetitorka", "Glasbena šola Koper", "Poučevanje orgel in korepetiranje."],
      ["2024–2025", "Korepetitorka", "Glasbena šola Tolmin", "Klavirska korepeticija."],
      ["2022 in 2024", "Nadomeščanje pouka klavirja in korepeticij", "Glasbena šola Tolmin", "Nadomeščanje pouka klavirja in korepetiranje."],
      ["2022–2024", "Učiteljica klavirja", "Zasebna glasbena šola Palbin", "Poučevanje klavirja."],
      ["2022–danes", "Klavirska korepetitorka", "Izpiti učencev zasebnih glasbenih šol", "Korepeticije na izpitih učencev."],
    ],
    concerts: [
      ["2025", "Prva nagrada", "Mednarodno tekmovanje ULJUS", "Kategorija komplementarni klavir."],
      ["2025", "Prva nagrada", "Mednarodno tekmovanje Banatus Temesiensis", "Kategorija komplementarni klavir."],
      ["2024", "Prva nagrada s posebno pohvalo", "Mednarodno tekmovanje Banatus Temesiensis", "Kategorija komplementarni klavir."],
      ["2024", "Druga nagrada", "Mednarodno tekmovanje Festival 4 Arts", "Kategorija komplementarni klavir."],
      ["2024", "Srebrna nagrada in drugo mesto", "TEMSIG", "Kategorija orgle."],
      ["2023", "Prva nagrada in 100 točk", "Mednarodno tekmovanje Festival 4 Arts", "Prva nagrada in maksimalnih 100 točk."],
      ["2023", "Zlato priznanje", "Mednarodno tekmovanje ULJUS", "Kategorija komplementarni klavir."],
      ["2023", "Srebrna nagrada", "IMMCC, Maribor", "Komorna zasedba: violina in orgle."],
      ["2022", "Zlato priznanje", "Mednarodno tekmovanje ULJUS", "Kategorija komplementarni klavir."],
      ["2022", "Udeležba", "Mednarodno orgelsko tekmovanje Petra Ebna, Opava", "Odprta kategorija."],
      ["2013, 2016", "Dve zlati in dve srebrni priznanji", "TEMSIG", "Kategorija klavir štiriročno."],
    ],
    edu: [
      ["Koncertni nastopi", "Samostojni in sodelujoči orgelski koncerti", "Karin je nastopala v Ljubljani, Brezovici, Tolminu, Kopru, Vipavi, Mariboru, Ilirski Bistrici, Škofji Loki, Trstu in Londonu."],
      ["Sodelovanja", "Simfonični orkester, Komorni orkester in Mešani zbor", "Sodelovala je z orkestri in zborom Akademije za glasbo Univerze v Ljubljani."],
    ] as Activity[],
    videosTitle: "Izbrani posnetki",
    pianoTitle: "Klavir",
    organTitle: "Orgle",
    videos: [
      ["Klavir", "XI. International Piano Competition Smederevo Online", "https://www.youtube.com/watch?v=UEohai3lvM0"],
      ["Klavir", "Festivalul de Arte Festival4Arts 2023", "https://www.youtube.com/watch?v=6-SejL5chfI"],
      ["Klavir", "Festivalul de Arte Festival4Arts 2024", "https://www.youtube.com/watch?v=lEOd4ShFzWs"],
      ["Klavir", "L. van Beethoven: Sonata št. 6 v F-duru, op. 10 št. 2 — 1. stavek", "https://www.youtube.com/watch?v=_5SkXBC3lZM"],
      ["Klavir", "F. Schubert: Impromptu, op. 90 št. 2", "https://www.youtube.com/watch?v=O0x6CMyfeNE"],
      ["Orgle", "Slavnostni koncert ob 50. obletnici pridružitve Akademije za glasbo k Univerzi v Ljubljani", "https://www.youtube.com/watch?v=jSiAaTio-48&t=2070s"],
      ["Orgle", "Izmenjalni koncert študentov orgel Akademije za glasbo UL in Glasbene akademije Univerze v Zagrebu (20:49)", "https://www.youtube.com/watch?v=4nNkW46rdQU&t=1249s"],
      ["Orgle", "Koncert študentov orgel Akademije za glasbo UL (izbor: 0:13–27:55, 37:33–55:45, 1:20:20–1:29:19)", "https://www.youtube.com/watch?v=syGQ-Bx_UBI&t=13s"],
      ["Orgle", "Magistrski koncert Karin Zuza", "https://drive.google.com/file/d/1AIy9GAPFDAnHWhsBpfxMU8cA4vVXXfZT/view?usp=sharing"],
    ] as [string, string, string][],
  },
  services: {
    eyebrow: "Storitve", title: "Možnosti glasbenega sodelovanja",
    lead: "Karinino glasbeno delo obsega poučevanje orgel in klavirja, korepetiranje ter samostojne in sodelujoče nastope. Med možnimi oblikami sodelovanja so tudi:",
    list: [
      ["Poroke in prireditve", "Orgelska ali klavirska glasba v okviru programa poroke ali prireditve."],
      ["Klavirska korepeticija", "Korepetiranje učencev, izpitov, nastopov in drugih glasbenih projektov."],
      ["Individualni pouk", "Individualni pouk orgel ali klavirja."],
      ["Koncerti in sodelovanja", "Samostojni in sodelujoči orgelski nastopi."],
    ],
    outro: "Navedene so možne oblike sodelovanja; vsak dogovor je odvisen od okoliščin.",
    cta: "Kontakt",
  },
  contact: {
    eyebrow: "Kontakt", title: "Stopite v stik",
    lead: "Za informacije o Karininih glasbenih izkušnjah ali pogovor o morebitnem sodelovanju jo kontaktirajte.",
    email: "E-pošta", elsewhere: "Posnetki in nastopi",
  },
};

const dict = { en, sl };
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "sl", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sl");
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "sl" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(Ctx);
  return { lang, setLang, t: dict[lang] };
}
