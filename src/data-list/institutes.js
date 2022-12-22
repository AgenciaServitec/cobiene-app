import {
  AKRON,
  BRITANICO,
  CEPEA,
  CEPEABAN,
  CEVATUR,
  DanielCarrion,
  DesarrolloGeneral,
  eigra,
  EscueladeGerencia,
  EUROIDIOMAS,
  FORMACIONEMPRESARIAL,
  GALLIA,
  GAMOR,
  guide,
  ICPNA,
  ImgAlianzaFrancesa,
  ImgAndreVesalio,
  ImgCertus,
  ImgCibertec,
  ImgColumbia,
  ImgEcaprev,
  ImgIcim,
  ImgInstAkrom,
  ImgIsilInst,
  ImgIspaci,
  ImgTltc,
  ImgVonBraun,
  INIDHE,
  INTECI,
  PRIVATECHER,
  ProfesionalTecnico,
  SanVicente,
} from "../images";
import { faPaste } from "@fortawesome/free-solid-svg-icons";

export const institutes = [
  // {
  //   image: CentroModas,
  //   title: "CENTRO DE ALTOS ESTUDIOS DE LA MODA",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  {
    image: CEPEA,
    title: "CEPEA",
    benefits: [
      "Carreras de gastronomía y artes culinarias, administración de servicios de hotelería y guia turismo:\n",
      "20% descuento en el pago de pensiones\n",
      "Carreras de administración, contabilidad, desarrollo de sistemas y enfermería técnica:\n",
      "30% descuento en el pago de pensiones\n",
      "Alcance:",
      "Personal militar en actividad o retiro y familiares directos. personal  civil y familiares directos",
      "- OO, SUP. TCOS. SSOO.  tropa activo y licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://cepea.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: CEPEABAN,
    title: "CEPEBAN",
    benefits: [
      "PROGRAMAS Y CURSOS:\n",
      "25% descuento  en el pago de pensiones en todas las sedes excepto en el distrito de Los Olivos (10%)\n",
      "10% de descuento en las pensiones mensuales en el programa in house (seminarios, fórum, talleres)\n",
      "ALCANCE:",
      "PERSONAL MILITAR EN ACTIVIDAD O RETIRO Y FAMILIARES DIRECTOS. PERSONAL  CIVIL Y FAMILIARES DIRECTOS",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.cepeban.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  // {
  //   image: CESCA,
  //   title: "CESCA",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  {
    image: GAMOR,
    title: "GAMOR",
    benefits: [
      "CURSOS DE CARRERAS TÉCNICAS Y TALLER\n",
      "25% descuento  en el pago de los costos de programas académicos",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://gamor.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: CEVATUR,
    title: "CEVATUR PERÚ",
    benefits: [
      "CARRERAS PROFESIONALES, TÉCNICAS Y DIPLOMADOS\n",
      "30% descuento en matrícula \n",
      "20% descuento en el pago de pensiones en las distintas sedes:",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "http://cevaturperu.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: SanVicente,
    title: "COR. EDU. SAN VICENTE",
    benefits: [
      "PROGRAMAS ACADÉMICOS (INGLÉS, CARRERAS TÉCNICAS, ESPECIALIDADES Y DIPLOMADOS):\n",
      "10% descuento en el pago de matrícula.\n",
      "30% descuento  en el pago de pensiones.\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: GALLIA,
    title: "D'GALLIA",
    benefits: [
      "CARRERAS TÉCNICAS: \n",
      "10% descuento  en el pago de pensiones  \n",
      "CURSOS LIBRES:\n",
      "25% descuento  en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://dgallia.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: DanielCarrion,
    title: "DANIEL A.CARRIÓN",
    benefits: [
      "CURSO DE EXTENSIÓN (01 AÑO)\n",
      "50% descuento en el pago de pensiones y\n",
      "exoneración en derecho de inscripción y matrícula\n",
      "CARRERAS DE EXTENSIÓN PROFESIONAL  \n",
      "50% descuento en el pago de pensiones y\n",
      "exoneración en derecho de inscripción y matrícula \n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.acarrion.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: DesarrolloGeneral,
    title: "INSTITUTO DE DESARROLLO GERENCIAL",
    benefits: [
      "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, ESPECIALIDADES Y DIPLOMADOS):\n",
      "20% descuento en el pago de matrícula\n",
      "20% descuento  en el pago de las pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "http://www.idg.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ProfesionalTecnico,
    title: "INSTITUTO DESARROLLO PROFESIONAL Y TECNICO",
    benefits: [
      "CARRERAS TÉCNICAS, INGLÉS, ESPECIALIDADES Y DIPLOMADOS:\n",
      "20% descuento en el pago de matrícula\n",
      "20% descuento  en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "http://www.idept.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: EscueladeGerencia,
    title: "ESCUELA INTERNACIONAL DE GERENCIA",
    benefits: [
      "CARRERAS TÉCNICAS (COMPUTACIÓN E INFORMÁTICA, ADMINISTRACIÓN COMERCIAL, MARKETING DIGITAL Y VENTAS):\n",
      "Costo diferenciado, en inscripción anual y cuota mensual\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://portal.eiger.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgInstAkrom,
    title: "AKRON",
    benefits: [
      "PROGRAMAS ACADÉMICOS (CARRERAS TÉCNICAS, INGLÉS, ESPECIALIDADES Y DIPLOMADOS):\n",
      "50% descuento  en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.uakron.edu/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: EUROIDIOMAS,
    title: "EUROIDIOMAS",
    benefits: [
      "IDIOMAS:\n",
      "30% descuento  en el pago de pensiones de los programas de Ingles\n",
      "10% descuento  en el pago de pensiones de los programas de portugués\n",
      "10% descuento  en el pago de pensiones de los programas de Alemán\n",
      "20% descuento  en el pago de pensiones de los programas de Ingles para Niños y Juniors\n",
      "10% descuento  en el pago de pensiones de los programas de Inglés Virtual, de manera general\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://euroidiomas.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  // {
  //   image: HEADWAYCOLLEGE,
  //   title: "HEADWAYCOLLEGE",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  {
    image: INTECI,
    title: "INTECI",
    benefits: [
      "CARRERAS  TÉCNICAS EN GASTRONOMIA Y ALTA GESTION\n",
      "15% descuento en el pago de pensiones\n",
      "PROGRAMAS  DE ESPECIALIZACIÓN / CURSOS CORTOS Y TALLERES LIBRES\n",
      "10% descuento en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.inteci.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  // {
  //   image: LECTURAVELOZ,
  //   title: "LECTURA VELOZ",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  // {
  //   image: LATINO,
  //   title: "LATINO",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  // {
  //   image: LIBERTADOR,
  //   title: "LIBERTADOR",
  //   benefits: ["10% DSCTO  EN EL PAGO DE PENSIONES"],
  //   urlFile:
  //     "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
  // },
  {
    image: INIDHE,
    title: "INIDHE",
    benefits: [
      "PROGRAMAS DE DIPLOMADOS Y ESPECIALIZACIONES:\n",
      "50% descuento en el costo de los diferentes programas académicos (cursos de especialización, diplomados, seminarios, talleres)\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.inidhe.edu.pe/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: PRIVATECHER,
    title: "PRIVATECHER",
    benefits: [
      "IDIOMAS:\n",
      "Costo diferenciado por convenio, en el pago de las cuotas mensuales\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.privateacher.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ICPNA,
    title: "ICPNA",
    benefits: [
      "ESTUDIOS  EN EL IDIOMA INGLÉS:\n",
      "15%  descuento sobre la base de las tarifas publicadas en su portal\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.icpna.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: BRITANICO,
    title: "BRITÁNICO",
    benefits: [
      "ESTUDIOS  EN EL IDIOMA INGLÉS:\n",
      "12.5% descuento sobre la base de las tarifas en los programas académicos de enseñanza del idioma (básico, intermedio o avanzado)\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.britanico.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: FORMACIONEMPRESARIAL,
    title: "INSTITUTO DE FORMACIÓN EMPRESARIAL",
    benefits: [
      "PROGRAMAS DE FORMACIÓN:\n",
      "37.7%  de descuento en pensiones en programas de (Ofimática, Inglés, excel en la modalidad On Line)\n",
      "59% de descuento en pensiones para el personal de tropa en programas de (Ofimática, Ingles, excel en la modalidad On Line)\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://ifeep.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: eigra,
    title: "ESCUELA INTERNACIONAL DE GRADUADOS",
    benefits: [
      "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS CORTOS Y SEMINARIOS:\n",
      "30% de descuento en las pensiones para estudios\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.eigra.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: guide,
    title: "INSTITUTO GUIDE",
    benefits: [
      "CURSOS DE PREPARACIÓN:\n",
      "20% de descuento en los diferentes programas\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.guideasesores.com/cursosmilitares/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgVonBraun,
    title: "VON BRAUN",
    benefits: [
      "PROGRAMAS DE FORMACIÓN:\n",
      "30% descuento en el pago de  matrícula y pensiones mensuales\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://istvonbraun.edu.pe/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgEcaprev,
    title: "ECAPREV",
    benefits: [
      "PROGRAMAS DE DIPLOMADOS, ESPECIALIZACIONES, CURSOS CORTOS Y SEMINARIOS:\n",
      "Costo diferenciado por convenio, en el pago de las cuotas mensuales\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://ecaprev.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgIspaci,
    title: "ISPACJ",
    benefits: [
      "PROGRAMAS DE ESPECIALIZACIÓN Y DIPLOMADOS:\n",
      "20% descuento  en el costo de los diplomados (ingeniería, gestión empresarial y administración)\n",
      "30% descuento  en el costo total del programa de capacitación de ingles\n",
      "35% descuento  en el costo tal del programa de capacitación de computación\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://ispacj.com/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgIcim,
    title: "ICIM",
    benefits: [
      "CARRERAS PROFESIONALES TÉCNICAS.\n",
      "15% descuento en el pago de pensiones de las tarifas publicadas.\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.icim.edu.pe/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgAndreVesalio,
    title: "ANDRE VESALIO",
    benefits: [
      "PROGRAMAS TÉCNICOS:\n",
      "50% descuento en el pago de matrícula y pensiones \n",
      "FORMACIÓN CONTINUA:\n",
      "50% descuento en el pago de pensiones\n",
      "PROGRAMA DE ESPECIALIZACIÓN\n",
      "50% descuento en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.institutovesalio.edu.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgIsilInst,
    title: "ISIL",
    benefits: [
      "PROGRAMAS DE EXTENSIÓN PROFESIONAL Y DE ISILTECH:\n",
      "20% descuento en el pago de pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://isil.pe" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgAlianzaFrancesa,
    title: "ALIANZA FRANCESA",
    benefits: [
      "CURSOS DE FRANCÉS, PARA NIÑOS, JÓVENES Y ADULTOS EN TODOS LOS HORARIOS:\n",
      "15% descuento en el pago de las pensiones\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.aflima.org.pe/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    image: ImgCibertec,
    title: "CIBERTEC",
    benefits: [
      "PROGRAMAS TÉCNICOS:\n",
      " - 25 % de descuento sobre el costo de enseñanza, en la primera mensualidad, en cualquiera de sus modalidades y sedes. A partir de la segunda mensualidad para el costo de la enseñanza se aplicará el 8% de descuento sobre las mensualidades, en cualquiera de sus modalidades y sedes.\n",
      "FORMACIÓN CONTINUA:\n",
      " - 15 % de descuento sobre las mensualidades, en cualquiera de sus sedes en programas de formación continua, en la modalidad presencial. \n",
      " - 20 % de descuento sobre las mensualidades, en cualquiera de sus sedes, en programas de formación continua, en la modalidad virtual.\n",
      " - 20 % de descuento sobre las mensualidades en programas de formación continua en aquellos cursos solicitados a un grupo y con tema específico. \n",
      " - 15% de descuento sobre programas académicos específicos a los docentes de la comunidad educativa EP\n",
      " - 15% de descuento sobre programas virtuales de verano de máximo de 24 horas,  a los estudiantes entre 7 y 17 años\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal civil en actividad o cesantes, así como sus familiares directos (cónyuge  e hijos)",
      "- OO, SUP. TCOS. SSOO.  Tropa activo y Licenciado.",
    ],
    urlFile:
      "https://drive.google.com/file/d/1HL7Wh77RrTXis4TQrOeA5I-LfTro-QLw/view?usp=sharing",
    links: [
      { url: "https://www.cibertec.edu.pe/" },
      {
        url: "https://tramites.cobiene.mil.pe/",
        text: "Solicita tu convenio SITRACON",
        icon: faPaste,
      },
    ],
  },
  {
    title: "CERTUS",
    image: ImgCertus,
    benefits: [
      "CARRERAS TÉCNICAS:\n",
      "Otorgar el 20% de descuento en costo de enseñanza (mensualidades) considerando las diferentes modalidades y sedes a nivel nacional.\n",
      "CARRERAS PARA GENTE QUE TRABAJA:\n",
      "Otorgar el 20% de descuento en costo de enseñanza (mensualidades) considerando las diferentes modalidades y sedes a nivel nacional.\n",
      "CURSOS DE FORMACIÓN:\n",
      "Otorgar el 20% de descuento en costo de enseñanza (mensualidades) considerando las diferentes modalidades y sedes a nivel nacional.\n",
      "ALCANCE:",
      "Personal militar en actividad o retiro, personal  civil en actividad o cesantes así como  familiares directos (cónyuges e hijos), tropa servicio militar en actividad o licenciados.\n",
    ],
  },
  {
    title: "TOULOU LAUSE TRE C",
    image: ImgTltc,
    benefits: [
      "CARRERAS DE BACHILLER (04) AÑOS: ",
      "Otorgar el 15% de descuento en costo de enseñanza (mensualidades) en todos los programas de carreras de bachiller de 04 años  considerando las diferentes modalidades y sedes a nivel nacional.",
      "CARRERAS TÉCNICAS DE (03) AÑOS:",
      "Otorgar el 15% de descuento en costo de enseñanza (mensualidades) en todos las carreras técnicas de 03 años, considerando las diferentes modalidades y sedes a nivel nacional.",
      "DIPLOMADOS : ",
      "Otorgar el 15% de descuento, en costo de enseñanza (mensualidades), para estudios de diplomados, en cualquiera de sus modalidades en las diferentes sedes a nivel nacional.",
      "CURSOS DE FORMACIÓN:",
      "Otorgar el 15% de descuento en costo de enseñanza (mensualidades), considerando las diferentes modalidades y sedes a nivel nacional.",
      "FORMACIÓN EXPRESS:",
      "Otorgar el 15% de descuento en costo de enseñanza (mensualidades) en formación EXPRESS, considerando las diferentes modalidades y sedes a nivel nacional.\n",
      "ALCANCE:",
      "Para estudiantes de educación básica regular (nivel secundaria) de las instituciones educativas del ejército.\n",
    ],
  },
  {
    title: "COLUMBIA",
    image: ImgColumbia,
    benefits: [
      "BENEFICIOS QUE OFRECE:",
      "Turismo, Hostelería, Alta Cocina, Aviación Comercial ",
      "Alcance:",
      "100% de descuento en costo por derecho de admisión. ",
      "50% de descuento en mensualidades",
      "BENEFICIARIOS:",
      "Personal militar en actividad o retiro, personal civil y familiares directos (cónyuge e hijos) ",
    ],
  },
];
