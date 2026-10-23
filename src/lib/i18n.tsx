import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "sl";
type Item = [string, string, string, string];

const en = {
  nav: { home: "Home", about: "About", experience: "Experience", services: "Services", contact: "Contact" },
  menu: "Menu", close: "Close",
  role: "Organist & Music Educator",
  home: {
    lead: "Bringing warmth and dignity to life's important moments through the music of the organ — in church, in concert, and in the classroom.",
    cta: "Get in touch", more: "Learn more", viewServices: "View services",
    cards: [
      ["Weddings & Ceremonies", "Thoughtfully chosen music for your most meaningful day."],
      ["Church Services", "Reliable liturgical playing and congregational accompaniment."],
      ["Organ Lessons", "Patient, structured teaching for all ages and levels."],
    ],
    quote: "\"The organ is, in my eyes and ears, the king of instruments.\"",
  },
  about: {
    eyebrow: "About", title: "A life in music",
    paras: [
      "Anna Novak is an organist and music educator whose playing is known for its clarity, warmth and sensitivity to the occasion. She first sat at the organ at the age of twelve in her local parish church, and has been devoted to the instrument ever since.",
      "She studied organ performance at the Academy of Music, followed by a master's degree in church music, with additional masterclasses in historical performance practice in Germany and the Netherlands.",
      "Her repertoire spans from Baroque masters such as Bach and Buxtehude to the French Romantic tradition and contemporary works. Alongside performing, she finds great joy in teaching and in sharing the instrument with new generations of players.",
      "Outside of music, Anna enjoys visiting historic churches and their organs, reading, and long walks in the countryside.",
    ],
    education: "Education",
    eduList: ["M.Mus. Church Music — Academy of Music, 2016", "B.Mus. Organ Performance — Academy of Music, 2014", "Masterclasses in Haarlem and Leipzig, 2015–2019"],
  },
  exp: {
    eyebrow: "Experience", title: "Positions & performances",
    lead: "Over a decade of playing for services, ceremonies and concerts, and teaching the next generation.",
    positionsTitle: "Professional experience", concertsTitle: "Selected concerts", eduTitle: "Education",
    positions: [
      ["2019 – present", "Principal Organist", "St. Mary's Parish Church", "Weekly services, feast days, choir accompaniment and planning of liturgical music."],
      ["2017 – present", "Organ & Piano Teacher", "Municipal Music School", "Teaching students aged 10 to adult, preparing pupils for exams and competitions."],
      ["2014 – 2019", "Assistant Organist", "Cathedral of St. Nicholas", "Services, weddings and accompaniment of the cathedral choir."],
    ] as Item[],
    concerts: [
      ["June 2025", "Summer Organ Evening", "Cathedral of St. Nicholas", "Works by Bach, Franck and Widor."],
      ["December 2024", "Advent Concert with Chamber Choir", "St. Mary's Parish Church", "Accompaniment and solo chorale preludes."],
      ["September 2023", "International Organ Festival", "Basilica of the Assumption", "Recital of French Romantic repertoire."],
      ["April 2022", "Easter Music Meditation", "Franciscan Church", "Programme of Baroque and contemporary works."],
    ] as Item[],
    edu: [
      ["2014 – 2016", "Master of Music, Church Music", "Academy of Music", "Organ, improvisation and choral conducting."],
      ["2010 – 2014", "Bachelor of Music, Organ Performance", "Academy of Music", "Graduated with distinction."],
    ] as Item[],
  },
  services: {
    eyebrow: "Services", title: "Music for every occasion",
    lead: "Available as an organist for a wide range of occasions, and as a teacher for students of all ages.",
    list: [
      ["Weddings", "From the processional to the recessional, music chosen together with you to reflect your style and the spirit of the day."],
      ["Ceremonies & Funerals", "Dignified, sensitive music for memorials, baptisms, anniversaries and other ceremonies."],
      ["Church Services", "Regular or substitute organist for Sunday services, feast days and special liturgies."],
      ["Concerts & Recitals", "Solo organ recitals and participation in concert programmes and festivals."],
      ["Accompaniment", "Accompaniment of choirs, soloists and instrumentalists for rehearsals and performances."],
      ["Organ Lessons", "Individual lessons for beginners and advanced students — technique, repertoire, and liturgical playing."],
    ],
    outro: "Every occasion is different. Please get in touch to discuss your plans, dates and repertoire.",
    cta: "Contact me",
  },
  contact: {
    eyebrow: "Contact", title: "Let's talk",
    lead: "For weddings, services, concerts or lessons, I'd be glad to hear from you. I usually reply within two days.",
    email: "Email", elsewhere: "Elsewhere",
  },
};

const sl: typeof en = {
  nav: { home: "Domov", about: "O meni", experience: "Izkušnje", services: "Storitve", contact: "Kontakt" },
  menu: "Meni", close: "Zapri",
  role: "Organistka & glasbena pedagoginja",
  home: {
    lead: "S toplino in dostojanstvom orgelske glasbe spremljam pomembne trenutke življenja — v cerkvi, na koncertu in v učilnici.",
    cta: "Stopite v stik", more: "Več o meni", viewServices: "Ogled storitev",
    cards: [
      ["Poroke in slovesnosti", "Skrbno izbrana glasba za vaš najpomembnejši dan."],
      ["Bogoslužja", "Zanesljivo liturgično igranje in spremljava ljudskega petja."],
      ["Ure orgel", "Potrpežljivo in sistematično poučevanje za vse starosti in ravni."],
    ],
    quote: "»Orgle so v mojih očeh in ušesih kralj inštrumentov.«",
  },
  about: {
    eyebrow: "O meni", title: "Življenje v glasbi",
    paras: [
      "Anna Novak je organistka in glasbena pedagoginja, katere igranje odlikujejo jasnost, toplina in občutek za priložnost. Za orgle je prvič sedla pri dvanajstih letih v domači župnijski cerkvi in jim je od takrat predana.",
      "Študirala je orgle na Akademiji za glasbo, nato pa magistrirala iz cerkvene glasbe in se dodatno izpopolnjevala na mojstrskih tečajih zgodovinske izvajalske prakse v Nemčiji in na Nizozemskem.",
      "Njen repertoar sega od baročnih mojstrov, kot sta Bach in Buxtehude, do francoske romantike in sodobnih del. Poleg nastopanja ji veliko veselje prinaša poučevanje in predajanje ljubezni do orgel novim generacijam.",
      "V prostem času rada obiskuje zgodovinske cerkve in njihove orgle, bere in se sprehaja po naravi.",
    ],
    education: "Izobrazba",
    eduList: ["Mag. cerkvene glasbe — Akademija za glasbo, 2016", "Dipl. orgle — Akademija za glasbo, 2014", "Mojstrski tečaji v Haarlemu in Leipzigu, 2015–2019"],
  },
  exp: {
    eyebrow: "Izkušnje", title: "Zaposlitve in nastopi",
    lead: "Več kot desetletje igranja pri bogoslužjih, slovesnostih in koncertih ter poučevanja nove generacije.",
    positionsTitle: "Delovne izkušnje", concertsTitle: "Izbrani koncerti", eduTitle: "Izobrazba",
    positions: [
      ["2019 – danes", "Glavna organistka", "Župnijska cerkev sv. Marije", "Nedeljska bogoslužja, praznike, spremljava zbora in načrtovanje liturgične glasbe."],
      ["2017 – danes", "Učiteljica orgel in klavirja", "Glasbena šola", "Poučevanje učencev od 10. leta do odraslih, priprava na izpite in tekmovanja."],
      ["2014 – 2019", "Pomočnica organista", "Stolnica sv. Nikolaja", "Bogoslužja, poroke in spremljava stolnega zbora."],
    ],
    concerts: [
      ["Junij 2025", "Poletni orgelski večer", "Stolnica sv. Nikolaja", "Dela Bacha, Francka in Widorja."],
      ["December 2024", "Adventni koncert s komornim zborom", "Župnijska cerkev sv. Marije", "Spremljava in solistični koralni preludiji."],
      ["September 2023", "Mednarodni orgelski festival", "Bazilika Marijinega vnebovzetja", "Recital francoske romantične glasbe."],
      ["April 2022", "Velikonočna glasbena meditacija", "Frančiškanska cerkev", "Program baročnih in sodobnih del."],
    ],
    edu: [
      ["2014 – 2016", "Magisterij, cerkvena glasba", "Akademija za glasbo", "Orgle, improvizacija in zborovsko dirigiranje."],
      ["2010 – 2014", "Diploma, orgle", "Akademija za glasbo", "Diplomirala z odliko."],
    ],
  },
  services: {
    eyebrow: "Storitve", title: "Glasba za vsako priložnost",
    lead: "Na voljo sem kot organistka za najrazličnejše priložnosti in kot učiteljica za učence vseh starosti.",
    list: [
      ["Poroke", "Od vhoda do izhoda — glasba, izbrana skupaj z vami, ki odraža vaš slog in duh dneva."],
      ["Slovesnosti in pogrebi", "Dostojanstvena, občutljiva glasba za spominske slovesnosti, krste, obletnice in druge priložnosti."],
      ["Bogoslužja", "Stalna ali nadomestna organistka za nedeljska bogoslužja, praznike in posebne liturgije."],
      ["Koncerti in recitali", "Solistični orgelski recitali ter sodelovanje na koncertih in festivalih."],
      ["Spremljava", "Spremljava zborov, solistov in instrumentalistov na vajah in nastopih."],
      ["Ure orgel", "Individualne ure za začetnike in napredne — tehnika, repertoar in liturgično igranje."],
    ],
    outro: "Vsaka priložnost je drugačna. Pišite mi in se pogovorimo o vaših načrtih, datumih in repertoarju.",
    cta: "Pišite mi",
  },
  contact: {
    eyebrow: "Kontakt", title: "Pogovoriva se",
    lead: "Za poroke, bogoslužja, koncerte ali ure orgel bom vesela vašega sporočila. Običajno odgovorim v dveh dneh.",
    email: "E-pošta", elsewhere: "Drugje",
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
