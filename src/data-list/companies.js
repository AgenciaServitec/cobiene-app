import {
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
  ImgLazzosComerciales,
  ImgLogistas,
  ImgMedifon,
  ImgMovilBus,
  ImgMultident,
  ImgOltursa,
  ImgRehabilitadora,
  ImgRenzoCosta,
  ImgSmartFit,
  ImgStoreServitec,
  ImgTinnitus,
  ImgUnilabs,
  ImgVizzano,
  Servitec,
} from "../images";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
      "a)\tDescuento del 10% de sobre los costos de las tarifas regulares, EN CONSULTAS EN LAS DIFERENTES ESPECIALIDADES LA SEDE DE JESÚS MARÍA. Anexo 01\n",
      "b)\tDescuento entre el 5% y 10% sobre los costos de las tarifas regulares en, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, realizados en la sede de Jesús María. Anexo 01\n",
      "c)\tDescuento del 5% de sobre los costos de las tarifas regulares en sedes de LOS OLIVOS Y SAN JUAN DE LURIGANCHO, EN CONSULTAS, EXÁMENES DE LABORATORIO Y PROCEDIMIENTOS CLÍNICOS, en las diferentes especialidades sede.  Anexo 01\n",
    ],
    links: [{ url: "https://inppares.org/" }],
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
      "Los beneficios antes indicados serán en todas las sedes de MEDIFON, según Anexo 01.\n",
    ],
    links: [{ url: "https://medifonperu.pe/" }],
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
    links: [{ url: "https://biolinksperu.com" }],
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
      "a)\tAcceso al 40% de descuento sobre la tarifa regular, de los exámenes de laboratorio de rutina; ANEXO 01\n",
      "b)\tAcceso a la tarifa hospitalaria en el Centro CIMEDIC en las pruebas de diagnóstico por imágenes (tomografía, resonancia magnética). ANEXO 01. \n",
      "c)\tAcceso al 10% de descuento sobre la tarifa base, de los denominados exámenes de Anatomía Patológica (citología y quirúrgicos, inmunohistoquímica – marcadores inmunohistoquímicos, biología molecular, citometría de flujo, genética) y pruebas especiales; según el detalle descrito en el ANEXO 01.\n",
      "d)\tRealización de citas mediante:\n",
      "•\tForma PRESENCIAL\n",
      "•\tVía CALL CENTER, debiendo acreditarse el día de la cita con el CIP, CIF y/o DNI, según sea el caso, y la presentación de las ordenes médicas emitidas por el HMC o centros de salud privados.\n",
    ],
    links: [{ url: "https://unilabs.pe" }],
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
      "b)\tAcceso los 364 días del año, de forma PRESENCIAL\n",
      "c)\tAcceso al 15% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (bus cama 140,160,180), hacia cualquiera de los destinos.\n",
      "d)\tAcceso al 10% de descuento sobre la tarifa \tregular, en el servicio de envió a través de Servicio expreso y Servicio consolidado, en todos sus destinos.\n",
      "e)\tCostos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de OLTURSA.\n",
    ],
    links: [{ url: "https://www.oltursa.pe" }],
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
      "c)\tDescuento del 15% en marcas propias según relación anexo \n",
      "d)\tDescuento del 10% en todas marcas diferentes.\n",
      "e)\tTiendas ubicadas en todos los centros comerciales \n",
    ],
    links: [{ url: "https://www.footloose.pe" }],
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
      "c)\tDescuento del 10% en todos los productos tiendas propias según relación anexo\n",
      "d)\tDescuento del 5% en todos los productos, toda la cadena de tiendas a nivel nacional (centros comerciales), anexo\n",
    ],
    links: [{ url: "https://www.renzocosta.com" }],
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
      "Acceso a los distintos servicios odontológicos ofrecidos, a través de costos diferenciados, mediante porcentaje de descuento sobre las tarifas regulares, de acuerdo a lo establecido en el Anexo 01.\n",
      "Implementará a través la programación a través del call center, y de forma presencial en todas sedes a nivel nacional, y en todos sus horarios.\n",
      "Servicios de emergencias dentales, las 24 horas del día, los 7 días de la semana en la sede de la Av. César Vallejo N° 1560 - Lince y en todas las sedes a nivel nacional en horario de atención.\n",
      "CONSULTA GRATUITA \n",
      "Profilaxis y destartraje de cortesía.\n",
    ],
    links: [{ url: "https://www.multident.pe" }],
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
      "b)\tAcceso los 364 días del año, de forma PRESENCIAL\n",
      "c)\tAcceso al 20% de descuento sobre la tarifa regular, en transporte interprovincial de pasajeros (económico, premier, presidencial, ejecutivo, vip), hacia cualquiera de los destinos.\n",
      "d)\tAcceso al 30% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER,\tque inicien en provincias (hacia Lima) a excepción de Lima como origen.\n",
      "e)\tAcceso al 15% de descuento sobre la tarifa regular, en el servicio de envió a través de MOVIL CARGA y MOVIL COURIER que inicien en Lima, hacia cualquiera de los destinos ofrecidos.\n",
      "f)\tCostos diferenciados, de transporte del tipo CORPORATIVO o transporte TURÍSTICO, previa evaluación de MOVILBUS.\n",
    ],
    links: [{ url: "https://www.movilbus.pe/" }],
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
    links: [{ url: "https://www.smartfit.com.pe" }],
  },
  {
    type: "clinic",
    image: ImgApelac,
    title: "Apelac",
    benefits: [
      "ALCANCE DEL CONVENIO:\n",
      "Dirigido al personal militar en actividad o retiro, personal civil en situación de actividad, así como sus familiares directos (cónyuge, hijos, padres y hermanos); debidamente acreditados sin límite de edad.\n",
      "FORMA DE ACREDITACIÓN:\n",
      "Presentación del carnet de identificación personal militar o civil CIP\n",
      "Presentación del carnet de identificación familiar CIF (cónyuge, hijos, padres y hermanos).\n",
      "Para el caso de familiares directos, que no posean el Carnet de Identidad Familiar (CIF), presentarán el (DNI) y el titular deberá de acompañarlos para que acredite el vínculo familiar.\n",
      "BENEFICIO \n",
      "Servicios psicopedagógicos, especializados en problemas de lenguaje, aprendizaje y conducta, a través de tarifas especiales, mediante porcentaje de descuento, según grado de el BENEFICIARIO, así como costos diferenciados en las sedes de APEPLAC. Anexo A – SURCO y Anexo B – RÌMAC\n",
      "Direcciones y citas telefónicas \n",
      "Sede Surco Mariscal Castilla 1170 - Teléfonos 4356989 y 990436788.\n",
      "Sede Rímac Calle Fray Ramón Rojas 191 – Teléfono: 990436788.\n",
    ],
    links: [{}],
  },
  {
    type: "commercial-shop",
    image: ImgLogistas,
    title: "Logistas",
    benefits: [
      "•\tSERVICIOS DE MANTENIMIENTO VEHICULAR CORRECTIVOS\n",
      "COSTOS DIFERENCIADOS DE LA TARIFA REGULAR, SEGÚN TARIFARIO",
      "BENEFICIARIOS:",
      "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES  Y FAMILIARES DIRECTOS",
    ],
    links: [{}],
  },
  // {
  //   type: "commercial-shop",
  //   image: ImgSugo,
  //   title: "Sugo",
  //   benefits: [
  //     "ACCESO EN LÍNEA EN SUS PLATAFORMAS EN COMPRAS DE CONSUMO SOSTENIBLE\n",
  //     "HASTA 50% DEL PRECIO EN EL MERCADO\n",
  //     "BENEFICIARIOS:",
  //     "PERSONAL MILITAR EN ACTIVIDAD, RETIRO Y FAMILIARES DIRECTOS EMPLEADOS CIVILES  Y FAMILIARES DIRECTOS",
  //   ],
  // },
  {
    type: "clinic",
    image: ImgClinicAuna,
    title: "Clínica Auna",
    benefits: ["POR FIRMAR"],
    links: [{ url: "https://auna.pe/conocenos/" }],
  },
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
      "Nuestras tarifas de alojamiento incluyen:\n",
      "Desayuno Buffet\n",
      "10% de DSCTO en Restaurante Paprika sobre precio de Carta. No aplica para menú.\n",
      "10% de DSCTO en Alimentos y Bebidas, aplica para bebidas alcohólicas\n",
      "10% de DSCTO en Lavandería.\n",
      "10% de DSCTO en SPA Sobre precios de masajes, para las sedes Piura, Trujillo Golf, Trujillo centro,\n",
      "Cajamarca, Aeropuerto, Salaverry.\n",
      "Una bebida de bienvenida a elección (welcome drink)\n",
      "Servicio de WI FI en todas nuestras instalaciones\n",
      "Business Center\n",
      "Uso del Gimnasio, piscina y sauna donde esté disponible. De acuerdo a las disposiciones del gobierno y Mincetur por la llegada del COVID-19.\n",
      "Servicio de recojo y traslado al aeropuerto para reservas individuales, previa reserva (no aplica grupos) en las ciudades de: Tumbes, Piura, Trujillo, Chiclayo, Pucallpa, Arequipa y Cajamarca.\n",
      "No aplica para los Hoteles de Lima y Cusco.\n",
      "El recojo y traslado al aeropuerto se brindará de acuerdo a las disposiciones del gobierno y Mincetur por la llegada del COVID-19 y bajo previa reserva en servicio compartido y sólo en los horarios establecidos por cada Hotel (cualquier retraso por parte del cliente será su responsabilidad). Este servicio no aplica para Grupos sólo para pasajeros Individuales.",
      " A continuación le brindamos mayor información al respecto:",
      " CDSW Lima Aeropuerto.- No es necesario trasladarse en auto ya que nuestro hotel se localiza a 25 metros de la puerta de Salidas Internacionales. Asimismo, contamos con acceso directo desde el segundo nivel del Aeropuerto al Hotel.\n",
      "CDSW Lima City.- El servicio de traslado Ida o Vuelta tiene un costo de S/ 70 neto (en efectivo) por unidad pagando directamente al conductor. Si desea cargar el servicio a la cuenta de la habitación, es posible pero tendría que adicionar el 18% IGV y el 10% servicios",
    ],
    links: [
      { url: "https://www.casa-andina.com/es/home8" },
      {
        url: "https://www.casa-andina.com/es/ofertas",
        text: "https://www.casa-andina.com/es/ofertas",
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
    benefits: [""],
    links: [
      {
        url: "https://www.costadelsolperu.com/hoteles/hotel-costa-del-sol-wyndham-lima-ciudad/",
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
      "\thttps://www.mossashoes.com/\n",
      "\tCupón MOSSAEJE20\n",
      "c)\tDescuento del 15% en marcas propias \n",
      "d)\tDescuento del 10% en todas marcas diferentes.\n",
    ],
    links: [{}],
  },
  {
    type: "technology",
    image: Servitec,
    title: "Servitec - Perú",
    benefits: [],
    links: [{ url: "https://servitecperu.com/" }],
  },
  {
    type: "technology",
    image: ImgStoreServitec,
    title: "Tienda Servitec",
    benefits: [],
    links: [{ url: "https://tiendaservitec.com/" }],
  },
];
