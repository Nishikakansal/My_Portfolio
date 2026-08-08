import { pdfToPng } from 'pdf-to-png-converter';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const certs = [
  {
    pdf: resolve('public/certifications/IMS_Certification.pdf'),
    out: resolve('public/certifications/ims_certification.png'),
    label: 'IMS Certification'
  },
  {
    pdf: resolve('public/certifications/AnalyzeSentimentwithNaturalLanguageAPISkillBadge.pdf'),
    out: resolve('public/certifications/nlp_skill_badge.png'),
    label: 'NLP Skill Badge'
  }
];

for (const cert of certs) {
  console.log(`Converting: ${cert.label} ...`);
  try {
    const pages = await pdfToPng(cert.pdf, {
      disableFontFace: false,
      useSystemFonts: true,
      viewportScale: 2.0,   // 2x scale for crisp thumbnail
      pagesToProcess: [1],  // only first page
      strictPagesToProcess: false,
      verbosityLevel: 0
    });
    if (pages.length > 0) {
      writeFileSync(cert.out, pages[0].content);
      console.log(`  ✅ Saved to: ${cert.out}`);
    } else {
      console.log(`  ❌ No pages returned`);
    }
  } catch (err) {
    console.error(`  ❌ Error: ${err.message}`);
  }
}
