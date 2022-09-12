import {
  ImgSedeTecChorrillos1,
  ImgSedeTecChorrillos2,
  ImgSedeTecChorrillos3,
  ImgSedeTecChorrillos4,
  ImgSedeTecChorrillos5,
  ImgSedeTecRimac1,
  ImgSedeTecRimac2,
  ImgSedeTecRimac3,
  ImgSedeTecRimac4,
  ImgSedeTecTarapaca1,
  ImgSedeTecTarapaca2,
  ImgSedeTecTarapaca3,
  ImgSedeTecTarapaca4,
} from "../images";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const campusTechniciansMilitary = [
  {
    title: "Sede de Chorrillos",
    imgCarousels: [
      ImgSedeTecChorrillos1,
      ImgSedeTecChorrillos2,
      ImgSedeTecChorrillos3,
      ImgSedeTecChorrillos4,
      ImgSedeTecChorrillos5,
    ],
    listSocialLinks: [
      {
        icon: faPhone,
        text: "998 461 170",
        link: "tel:+51998461170",
      },
      {
        icon: faEnvelope,
        text: "certes_chorrillos@outlook.com",
        link: "mailto:certes_chorrillos@outlook.com",
      },
      {
        icon: faFacebook,
        text: "Certes Chorrillos",
        link: "https://www.facebook.com/Certes-Chorrillos-710927646021330",
      },
      {
        icon: faLocationDot,
        text: "Av. Escuela Militar S/N Chorrillos",
        link: "https://www.google.com/maps/dir/?api=1&destination=-12.167592963634%2C-77.018716326325",
      },
    ],
  },
  {
    title: "Sede de Tarapacá",
    imgCarousels: [
      ImgSedeTecTarapaca1,
      ImgSedeTecTarapaca2,
      ImgSedeTecTarapaca3,
      ImgSedeTecTarapaca4,
    ],
    listSocialLinks: [
      {
        icon: faPhone,
        text: "998 556 087",
        link: "tel:+51998556087",
      },
      {
        icon: faEnvelope,
        text: "cmsts.sedetarapaca@gmail.com",
        link: "mailto:cmsts.sedetarapaca@gmail.com",
      },
      {
        icon: faFacebook,
        text: "facebook.com/Campo-Deportivo-Tarapaca-Chorrillos",
        link: "https://www.facebook.com/Campo-Deportivo-Tarapaca-Chorrillos-101277401232183/",
      },
      {
        icon: faLocationDot,
        text: "AV. Prolongación Defensores del Morro 1170 -  Chorrillos",
        link: "https://www.google.com/maps/dir/?api=1&destination=-12.194105661443%2C-77.00196146965",
      },
    ],
  },
  {
    title: "Sede de Rímac",
    imgCarousels: [
      ImgSedeTecRimac1,
      ImgSedeTecRimac2,
      ImgSedeTecRimac3,
      ImgSedeTecRimac4,
    ],
    listSocialLinks: [
      {
        icon: faPhone,
        text: "925 739 072",
        link: "tel:+51925739072",
      },
      {
        icon: faEnvelope,
        text: "cmstsrimac@gmail.com",
        link: "mailto:cmstsrimac@gmail.com",
      },
      {
        icon: faFacebook,
        text: "Certes Rimac",
        link: "https://www.facebook.com/Circulo-militar-de-supervisores-tecnicos-y-suboficiales-rimac-103401924608565/",
      },
      {
        icon: faLocationDot,
        text: "Av. Morro de Arica S/N - Rímac",
        link: "https://www.google.com/maps/dir/?api=1&destination=-12.02172%2C-77.03317",
      },
    ],
  },
];
