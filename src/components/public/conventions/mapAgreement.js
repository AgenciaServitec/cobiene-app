export const mapApiAgreementToCollapse = (item) => {
  let benefitsList = [];

  if (Array.isArray(item.educationalInstitutionBenefits)) {
    benefitsList = item.educationalInstitutionBenefits
      .map((b) => b?.description)
      .filter(Boolean);
  } else if (item.companyBenefits) {
    benefitsList = [item.companyBenefits];
  } else if (Array.isArray(item.benefits)) {
    benefitsList = item.benefits;
  }

  const phones = item.contact?.phones || [];
  const emails = item.contact?.emails || [];

  const links = [];

  if (item.website) {
    links.push({
      url: item.website,
      text: "Visita nuestra página web",
    });
  }

  return {
    title: item.title || item.name || "Sin título",
    titleContent: item.titleContent || item.title || item.name,
    image: item.logoPhoto?.url || item.image || null,
    alert: item.alert || null,
    scope: item.scope || null,
    benefits: benefitsList,
    phones,
    emails,
    links: item.links || links,
    urlFile: item.urlFile || item.documentUrl || null,
    qrCode: item.qrCode || null,
    qrLink: item.qrLink || null,
  };
};
