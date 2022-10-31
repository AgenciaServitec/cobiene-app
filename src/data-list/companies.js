import {
  CobieneLogo,
  ImgApelac,
  ImgBiolinks,
  ImgCasaAndina,
  ImgClinicAuna,
  ImgCostaSol,
  ImgEfectiva,
  ImgFinantel,
  ImgFootloose,
  ImgInppares,
  ImgLabRoe,
  ImgLaPositiva,
  ImgLaPositivaVida,
  ImgLazzosComerciales,
  ImgLogistas,
  ImgMedifon,
  ImgMovilBus,
  ImgMultident,
  ImgOltursa,
  ImgRehabilitadora,
  ImgRenzoCosta,
  ImgRimacSeguros,
  ImgSmartFit,
  ImgStoreServitec,
  ImgSugo,
  ImgTinnitus,
  ImgUnilabs,
  ImgVizzano,
  LogoFactura,
  LogoPublicidad,
  Servitec,
} from "../images";
import {
  faEnvelope,
  faFile,
  faPhone,
  faLink,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const companies = [
  {
    type: "laboratory",
    image: ImgInppares,
    title: "Lab. INPPARES",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "a)\tDescuento del 10% de sobre los costos de las tarifas regulares, EN CONSULTAS EN LAS DIFERENTES ESPECIALIDADES LA SEDE DE JESÚS MARÍA.",
      "b)\tDescuento entre el 5% y 10% sobre los costos de las tarifas regulares en, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, realizados en la sede de Jesús María.",
      "c)\tDescuento del 5% de sobre los costos de las tarifas regulares en sedes de LOS OLIVOS Y SAN JUAN DE LURIGANCHO, EN CONSULTAS, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, en las diferentes especialidades sede.",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/12sqPYvBLOgP1_XeonoiGnCNeHMIJyEyY/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://inppares.org/" },
    ],
  },

  {
    type: "clinic",
    image: ImgMedifon,
    title: "MEDIFON",
    benefits: [
      "ALCANCE DEL CONVENIO:",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "Implementará el acceso al beneficio a través del call center y presencial en las sedes de Miraflores, Jesús María, Los Olivos, San Borja, San juan de Lurigancho, San juan de Miraflores, san miguel y Cercado de Lima, en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.  \n",
      "Otorgará el valor de $150 dólares americanos, de descuento sobre los costos de las tarifas regulares, en dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.\n",
      "Otorgará garantía por un año, recalibraciones, limpiezas y mantenimiento ilimitados, así como dotación de seis baterías, en los dispositivos AUDÍFONOS MEDICADOS de la marca BELTONE.\n",
      "Otorgará el 25% de descuento sobre los costos de las tarifas regulares, en baterías, pilas, accesorios de limpieza, en las diferentes sedes.\n",
      "Otorgará el valor de cien s/100 soles, en el costo por consulta especializada previa cita en la especialidad de otorrinolaringología.\n",
      "Otorgará acceso gratuito a los servicios de audiológicos (audiometría y otoscopía), previa cita.\n",
      "Otorgará a los BENEFICIARIOS de “EL EJÉRCITO” el valor de $150 ciento cincuenta dólares americanos de descuento sobre el costo tarifa regular de los DISPOSITIVOS VIBRADORES ÓSEOS.\n",
      "Otorgará el valor de $2000 dos mil dólares americanos de descuento sobre el costo tarifa regular del dispositivo medico a largo plazo, IMPLANTE COCLEAR, en lo correspondiente a la colocación quirúrgica (clínica, operación, anestesiólogo, equipo, post operatorio, cincuenta terapías de lenguaje y otros).\n",
      "Los beneficios antes indicados serán en todas las sedes de MEDIFON.",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1TuvuRj3_e4N2eM1IhgMb7rowjYQxEg9x/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      ,
      { url: "https://medifonperu.pe/" },
    ],
  },

  {
    type: "laboratory",
    image: ImgBiolinks,
    title: "LAB. 'BIOLINKS'",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar\n",
      "BENEFICIO \n",
      "a)\tAcceso a costo diferenciado de porcentaje de descuento sobre la tarifa regular, en todas sus sedes propias y sedes con colaboradores con alianzas estratégicas, de los exámenes de laboratorios que se indican:\n",
      "•\tPruebas de Paternidad Parentesco.  \n",
      "•\tOncológicos aérea diagnostico\n",
      "•\tÁreas infecciosas\n",
      "\n",
      "b)\tRealización de citas mediante:\n",
      "•\tForma PRESENCIAL, en las sedes siguientes:\n",
      "-\tSede Lima Av. Javier Prado Oeste 844 Magdalena y Av. Carlos Izaguirre 736, Los Olivos.\n",
      "-\tSede Trujillo, Av. Jesús de Nazareth 364 Urb. San Andrés.\n",
      "-\tSede Huancayo, Jr. Parra delo Riego 375-399 El Tambo.\n",
      "-\tSede Arequipa, Av. Zamacola 203, Yanahuara.\n",
      "-\tSedes en otras provincias del Perú con colaboradores en convenio con Biolinks. \n",
      "\n",
      "•\tInformes a los teléfonos:  2614411 y 2614412, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las órdenes médicas respectivas.\n",
      "\n",
      "Correo electrónico adn@biolinksperù.com – www.biolinksperu.com.\n",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1032hsI94wA332DYLBX_bDUvmNupGaG8r/view?usp=sharing",
        icon: faBuilding,
        text: "Sedes",
      },
      {
        url: "https://drive.google.com/file/d/19cC4wjIEd7SI5ISCS87xyomg0nOaMxzY/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://biolinksperu.com" },
    ],
  },

  {
    type: "laboratory",
    image: ImgUnilabs,
    title: "Lab. UNILABS",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "a)\tAcceso al 40% de descuento sobre la tarifa regular, de los exámenes de laboratorio de rutina;",
      "b)\tAcceso a la tarifa hospitalaria en el Centro CIMEDIC en las pruebas de diagnóstico por imágenes (tomografía, resonancia magnética).",
      "c)\tAcceso al 10% de descuento sobre la tarifa base, de los denominados exámenes de Anatomía Patológica (citología y quirúrgicos, inmunohistoquímica – marcadores inmunohistoquímicos, biología molecular, citometría de flujo, genética) y pruebas especiales; según el detalle descrito en el botón Detalles del convenio\n",
      "d)\tRealización de citas mediante:\n",
      "•\tForma PRESENCIAL\n",
      "•\tVía CALL CENTER, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las ordenes médicas emitidas por el HMC o centros de salud privados.\n",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/144YibViWp6vReO7y61RCcVrv9PL8AkK3/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://unilabs.pe" },
    ],
  },
  {
    type: "transport",
    image: ImgOltursa,
    title: "OLTURSA",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
      "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "d)\tDeberá de presentar copia de CIP al momento de la compra.\n",
      "BENEFICIO \n",
      "a)\tNo aplica para compras por página web, call center \n",
      "b)\tAcceso los 365 días del año, de forma PRESENCIAL\n",
      "c)\tAcceso al 15% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (bus cama 140,160,180), hacia cualquiera de los destinos.\n",
      "d)\tAcceso al 10% de descuento sobre la tarifa \tregular, en el servicio de envió a través de Servicio expreso y Servicio consolidado, en todos sus destinos.\n",
      "e)\tCostos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de OLTURSA.\n",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1oSV8pJdnILl9eVi85lKyQ2dhwk6sSx3G/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://www.oltursa.pe" },
    ],
  },
  {
    type: "commercial-shop",
    image: ImgFootloose,
    title: "Calzado FOOTLOOSE",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
      "BENEFICIO \n",
      "a)\tExclusivo para compras presenciales.\n",
      "b)\tNo aplica compras por web, app, o Facebook\n",
      "c)\tDescuento del 20% en marcas propias según relación.",
      "d)\tDescuento del 15% en todas marcas diferentes.\n",
      "e)\tTiendas ubicadas en todos los centros comerciales \n",
    ],
    links: [
      { url: "https://www.footloose.pe" },
      {
        url: "https://drive.google.com/file/d/1RAtb1BTaEEwVh9xCId0Xm7QBtZaymmr4/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
    ],
  },
  {
    type: "clinic",
    image: ImgTinnitus,
    title: "TINNITUS",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
      "BENEFICIO \n",
      "Consultas e informes a través del celular y WhatsApp: 980688232, así como correo electrónico comercial@grupoinfinitech.com y presencial en la Av. Canadá Nº 3630, consultorio 205 San Borja en todos sus servicios, procedimientos y dispositivos médicos auditivos ofrecidos.  \n",
      "Descuento del 30% en audífonos medicados programables que comercialice la empresa.\n",
      "Gratis Kit de limpieza por la compra de audífonos medicados. \n",
      "Descuento del 20% de en servicios de audiología, psicología nutrición.\n",
    ],
    links: [{ url: "http://tinnitusperu.com" }],
  },
  {
    type: "commercial-shop",
    image: ImgRenzoCosta,
    title: "RENZO COSTA",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
      "BENEFICIO \n",
      "a)\tExclusivo para compras presenciales.\n",
      "b)\tNo aplica compras por web, app, o Facebook\n",
      "c)\tDescuento del 10% en todos los productos tiendas propias según relación en Detalles del convenio",
      "d)\tDescuento del 5% en todos los productos, toda la cadena de tiendas a nivel nacional (centros comerciales)",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1MIAudy4sU8wGOjzaqcvbtvG2CMTKod0n/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://www.renzocosta.com" },
    ],
  },
  {
    image: ImgLazzosComerciales,
    title: "LAZZOS COMERCIALES",
    benefits: [
      "\t20% DE DESCUENTO SOBRE EL PRECIO DE ETIQUETA EN TODAS LAS TIENDAS MOSSA SHOES Y VISANO TIENDA FÍSICO Y VIRTUAL\n",
      "BENEFICIARIOS:",
      "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES  Y FAMILIARES DIRECTOS",
    ],
    links: [{ url: "https://www.lazzos.com.pe" }],
  },
  {
    type: "clinic",
    image: ImgMultident,
    title: "MULTIDENT",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "Acceso a los distintos servicios odontológicos ofrecidos, a través de costos diferenciados, mediante porcentaje de descuento sobre las tarifas regulares, de acuerdo a lo establecido.\n",
      "Implementará a través la programación a través del call center, y de forma presencial en todas sedes a nivel nacional, y en todos sus horarios.\n",
      "Servicios de emergencias dentales, las 24 horas del día, los 7 días de la semana en la sede de la Av. César Vallejo N° 1560 - Lince y en todas las sedes a nivel nacional en horario de atención.\n",
      // "CONSULTA GRATUITA \n",
      "Examen odontológico de cortesía.\n",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1ESEdYrS0JqrWB2c-RDd_YbWBOJlGIRQG/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
      { url: "https://www.multident.pe" },
    ],
  },
  {
    type: "transport",
    image: ImgMovilBus,
    title: "Movil Bus",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, Padres).\n",
      "c)\tPara el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "d)\tDeberá de presentar copia de CIP al momento de la compra.\n",
      "BENEFICIO \n",
      "a)\tNo aplica para compras por página web, call center \n",
      "b)\tAcceso los 365 días del año, de forma PRESENCIAL\n",
      "c)\tAcceso al 20% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (económico, premier, presidencial, ejecutivo, vip), hacia cualquiera de los destinos.\n",
      "d)\tAcceso al 30% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER,\tque inicien en provincias (hacia Lima) a excepción de Lima como origen.\n",
      "e)\tAcceso al 15% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER que inicien en Lima, hacia cualquiera de los destinos ofrecidos.\n",
      "f)\tCostos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de MOVILBUS.\n",
    ],
    links: [
      { url: "https://www.movilbus.pe/" },
      {
        url: "https://drive.google.com/file/d/13qwGSu6d6IFbM4Yx8SZBvhIGkbl3mKCQ/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
    ],
  },
  {
    type: "gym",
    image: ImgSmartFit,
    title: "Smart Fit",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "Acceso PLAN BLACK corporativo, con un costo de s/99.90, el cual otorga los siguientes beneficios: \n",
      "•\tExoneración del pago único de “Matrícula”, mediante pago a cuenta de tarjeta crédito o débito.\n",
      "•\tExoneración del pago anual de “Mantenimiento”.\n",
      "•\tExoneración del pago de la penalidad por resolución anticipada contemplada en la cláusula “Cancelación y Expulsión”.\n",
      "•\tEntrenamiento en cualquier sede del Perú y Latinoamérica.\n",
      "•\tInvitación amigos y familiares hasta 5 veces al mes.\n",
      "•\tAcceso a sillones de masajes.\n",
      "•\tAcceso de manera ilimitada a la plataforma Virtual SMART FIT GO.\n",
      "•\tLibre de elección de fechas de entrenamiento, mínimo un mes.\n",
    ],
    links: [
      { url: "https://www.smartfit.com.pe" },
      {
        url: "https://drive.google.com/file/d/1doEYxPYrX21ttcHH79tNk35SRY0dGddw/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
    ],
  },
  {
    type: "clinic",
    image: ImgApelac,
    title: "Apeplac",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIOS:",
      "Servicios psicopedagógicos, especializados en problemas de lenguaje, aprendizaje y conducta, a través de tarifas especiales, mediante porcentaje de descuento, según grado de el BENEFICIARIO, así como costos diferenciados en las sedes de APEPLAC.  SURCO y RÌMAC",
      "Direcciones y citas telefónicas \n",
      `Sede Surco Mariscal Castilla 1170 - Teléfonos <a href="tel:4356989" target="_blank" >4356989</a>  y <a href="tel:990436788" target="_blank" >990436788</a>.`,
      'Sede Rímac Calle Fray Ramón Rojas 191 – Teléfono: <a href="tel:990436788" target="_blank" >990436788</a>. ',
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1lctGxgax5YZDgsAV_H-Dr-xeQQbXgiyd/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
    ],
  },
  // {
  //   type: "commercial-shop",
  //   image: ImgLogistas,
  //   title: "Logistas",
  //   benefits: [
  //     "•\tSERVICIOS DE MANTENIMIENTO VEHICULAR CORRECTIVOS\n",
  //     "COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
  //     "BENEFICIARIOS:",
  //     "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES  Y FAMILIARES DIRECTOS",
  //   ],
  //   links: [{}],
  // },
  // {
  //   type: "commercial-shop",
  //   image: ImgSugo,
  //   title: "Sugo",
  //   benefits: [
  //     "COMPRAS EN LINEA EN SUS PLATAFORMAS DE CONSUMO SOSTENIBLE HASTA EL 50% DE DESCUENTO DEL PRECIO DEL MERCADO",
  //     "ALCANCE:",
  //     "PERSONAL MILITAR EN ACTIVIDAD O RETIRO Y FAMILIARES DIRECTOS PERSONAL CIVIL (CÓNYUGUES, HIJOS, PADRES )",
  //   ],
  // },
  // {
  //   type: "clinic",
  //   image: ImgClinicAuna,
  //   title: "Clínica Auna",
  //   benefits: ["POR FIRMAR"],
  //   links: [{ url: "https://auna.pe/conocenos/" }],
  // },
  {
    type: "financial",
    image: ImgEfectiva,
    title: "Financ. Efectiva",
    benefits: ["POR FIRMAR"],
    links: [{ url: "https://www.efectiva.com.pe/" }],
  },
  {
    type: "financial",
    image: ImgFinantel,
    title: "Financ. Finantel",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en situación de actividad o retiro y personal civil en situación de actividad o cesante.\t.\n",
      "TASA DE INTERES ANUAL:\n",
      "Según clasificación de SBS de 18% a 22%\n",
      "Mejores tasas por campañas impulsadas por la FINANCIERA de acuerdo al análisis del mercado\n",
    ],
    links: [{ url: "https://www.finantel.pe/" }],
  },
  {
    type: "financial",
    image: ImgRehabilitadora,
    title: "FINANC. LA REHABILITADORA",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en situación de actividad o retiro y personal civil en situación de actividad o cesante.\t.\n",
      "TASA DE INTERES ANUAL:\n",
      "Según clasificación de SBS de 18.5% a 24.6%\n",
      "Mejores tasas por campañas impulsadas por la FINANCIERA de acuerdo al análisis del mercado\n",
    ],
    links: [{ url: "https://larehabilitadora.com/" }],
  },
  {
    type: "hotel",
    image: ImgCasaAndina,
    title: "HOTEL CASA ANDINA",
    benefits: [
      "1.\tALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres); debidamente acreditados.\n",
      "2.\tFORMA DE ACREDITACIÓN:\n",
      "2.1.\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "2.2.\tPresentación del carnet de identificación familiar CIF (cónyuge, \thijos, padres y hermanos).\n",
      "2.3.\tPara el caso de familiares directos, que no posean el Carnet de Identidad \tFamiliar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",

      "3.\tBENEFICIO \n",
      "3.1.\tAcceso a descuentos sobre la tarifa regular, precios diferenciales, en los alojamientos propios y asociados, ubicados a nivel nacional, vigentes al momento de la reserva, según relación actualizada, de forma trimestral.",
      "3.2. Acceso a los servicios hoteleros ofrecidos, a través de porcentaje de descuento sobre las tarifas regulares, otorgados EXCLUSIVAMENTE mediante la web.",
      `<a href="https://www.casa-andina.com/es/ofertas/ejercitoperu" target="_blank">https://www.casa-andina.com/es/ofertas/ejercitoperu</a>`,
      "Canales de atención a través de correo electrónico:",
      `<a href="centraldereservas@casa-andina.com" target="_blank">centraldereservas@casa-andina.com</a>`,
      "Y call center",
      `<a href="tel:013916500" target="_blank">(01) 3916500</a>`,
      "Código de acceso al descuento es EJERCITOPERU22.",
      "3.3.\tBeneficio previa presentación física del respectivo Carnet de Identidad Personal del titular (CIP), y familiares directos mediante presentación del Carnet de Identificación Familiar (CIF); y/o DNI, al momento del CHECK IN en el hotel elegido.\n",
      "3.4.\tLa no acreditación del BENEFICIARIO, ante el Hotel será motivo de no acceder a los descuentos por convenio, reservándose el derecho de cobrar el monto vigente al momento del CHECK – IN.\n",
      "3.5.\tLas reservas realizadas son de tarifas NO REEMBOLSABLE.\n",
      "3.6.\tAplica el 10% a la tarifa inicial por el cargo correspondiente a servicios y el  IGV. \n",
    ],
    links: [
      { url: "https://www.casa-andina.com/es/home8" },
      {
        url: "https://drive.google.com/file/d/1c-r__vS6vfKcRTSOXe85pw2pHiR1OuRW/view",
        text: "Ver descuentos",
        icon: faFile,
      },
      {
        url: "mailto:centraldereservas@casa-andina.com",
        text: "centraldereservas@casa-andina.com",
        icon: faEnvelope,
      },
      {
        url: "tel:013916500",
        text: "(01) 3916500.",
        icon: faPhone,
      },
    ],
  },
  {
    type: "hotel",
    image: ImgCostaSol,
    title: "HOTEL COSTA DEL SOL ",
    benefits: [
      "1.\tALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos y padres); debidamente acreditados.\n",
      "2.\tFORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, \thijos, padres).\n",
      "3.\tBENEFICIO \n",
      "-\tDesayuno buffet, bebida de bienvenida, wifi en todas las instalaciones, uso de piscina, gimnasio, spa (jacuzzi, sauna) sin costo en alojamiento como parte de las reserva.\n",
      "-\t10% de DSCTO  en el restaurante PAPRIKA, sobre precio de carta, incluyendo bebidas. \n",
      "-\t10% de DSCTO descuento en el consumo de alimentos y bebidas solicitados en el servicio a la habitación, en el bar, en el spa, u otro ambiente. \n",
      "-\t10% de descuento en los servicios del SPA (masajes, tratamiento de manos, pies, faciales, entre otros),sobre el costo total al momento del pago, para las sedes de Piura – Trujillo Golf – Trujillo Centro – Cajamarca – Lima Aeropuerto – Lima Salaverry. \n",
      "-\t10% en no alojados en el hotel en restaurante PAPRIKA o el BARWALAKy SARIA SKY BAR. \n",
      "-\t10% de descuento en los servicios de lavandería.\n",
      "RESERVAS:\n",
      `AL <a href="tel:2009200" target="_blank">51(1) 2009200</a>, opción 1 y mediante correo electrónico, dirigido a:`,
      `<a href="raggiuro@costadelsolperu.com" target="_blank">raggiuro@costadelsolperu.com</a>`,
      `<a href="corporativo@costadelsolperu.com" target="_blank">corporativo@costadelsolperu.com</a>`,
    ],
    links: [
      {
        url: "https://www.costadelsolperu.com/hoteles/hotel-costa-del-sol-wyndham-lima-ciudad/",
      },
      {
        url: "tel:2009200",
        text: "51(1) 2009200",
        icon: faPhone,
      },
      {
        url: "mailto:raggiuro@costadelsolperu.com",
        text: "raggiuro@costadelsolperu.com",
        icon: faEnvelope,
      },
      {
        url: "mailto:corporativo@costadelsolperu.com",
        text: "corporativo@costadelsolperu.com",
        icon: faEnvelope,
      },
      {
        url: "https://drive.google.com/file/d/1uq6ZomiXJkiQlECigzB9DL75uaJ5kmJu/view",
        text: "Ver descuentos",
        icon: faFile,
      },
    ],
  },
  {
    type: "laboratory",
    image: ImgLabRoe,
    title: "Lab. Roe",
    benefits: ["Por Firmar"],
    links: [{ url: "https://www.labroe.com/" }],
  },
  {
    type: "commercial-shop",
    image: ImgVizzano,
    title: "CALZADO VIZZANO",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres); debidamente acreditados.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "a)\tPresentación del carnet de identificación personal militar o civil CIP\n",
      "b)\tPresentación del carnet de identificación familiar CIF (cónyuge, hijos, padres).\n",
      "BENEFICIO \n",
      "a)\tCompras presenciales, solo en tiendas propias. \n",
      "b)\tAplica para compras en tienda virtual, mediante el uso del cupón al momento de hacer el pago\n",
      `<a href="https://www.mossashoes.com/" target="_blank">https://www.mossashoes.com/</a>`,
      "\tCupón MOSSAEJE20\n",
      "c)\tDescuento del 20% en marcas propias \n",
      "d)\tDescuento del 20% en todas marcas diferentes.\n",
    ],
    links: [
      {
        url: "https://drive.google.com/file/d/1T_a8CfUiAOElAIivhkejrIpFXFuWUwSL/view?usp=sharing",
        icon: faLink,
        text: "Detalles del convenio",
      },
    ],
  },
  {
    type: "technology",
    image: Servitec,
    title: "Servitec - Perú",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://servitecperu.com/" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+servicio:+https://servitecperu.com/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "technology",
    image: LogoPublicidad,
    title: "Pagina Web",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://servitec.site/08_service_ppc_management.php" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+servicio:+https://servitec.site/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "technology",
    image: LogoFactura,
    title: "Facturación Electronica",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://factura.servitec.site/" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+servicio:+https://factura.servitec.site/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "technology",
    image: LogoPublicidad,
    title: "Publicidad Google",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://publicidadgoogle.site/" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto:+https://publicidadgoogle.site/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "technology",
    image: Servitec,
    title: "Reparación de Proyectores",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://reparacion-proyectores.com/" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+servicio:+https://reparacion-proyectores.com/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "technology",
    image: ImgStoreServitec,
    title: "Tienda Servitec",
    benefits: ["Con la presentación de su CIP 10% de descuento"],
    links: [
      { url: "https://tiendaservitec.com/" },
      {
        url: "https://api.whatsapp.com/send/?phone=+51941801827&text=Estoy+interesado+en+su+producto+https://tiendaservitec.com/&app_absent=0",
        icon: faWhatsapp,
        text: "Contactenos",
      },
    ],
  },
  {
    type: "life-insurance",
    image: ImgRimacSeguros,
    title: "Seguros Rimac",
    benefits: [
      `<img src="${CobieneLogo}" width="15%"/> `,
      "Estamos trabajando por el bienestar",
      "Proximamente...",
    ],
    // links: [{ url: "https://www.rimac.com" }],
  },
  {
    type: "life-insurance",
    image: ImgLaPositiva,
    benefits: [
      `<img src="${CobieneLogo}" width="15%"/> `,
      "Estamos trabajando por el bienestar",
      "Proximamente...",
    ],
    title: "Seguro Salud Positiva",
    // links: [{ url: "https://www.lapositiva.com.pe" }],
  },
  {
    type: "life-insurance",
    benefits: [
      `<img src="${CobieneLogo}" width="15%"/> `,
      "Estamos trabajando por el bienestar",
      "Proximamente...",
    ],
    image: ImgLaPositivaVida,
    title: "Seguro Vida Positiva",
    // links: [{ url: "https://www.lapositiva.com.pe" }],
  },
];
