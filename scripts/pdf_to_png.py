import fitz  # PyMuPDF
import os

certs = [
    {
        "pdf": r"public\certifications\IMS_Certification.pdf",
        "out": r"public\certifications\ims_certification.png",
        "label": "IMS Certification"
    },
    {
        "pdf": r"public\certifications\AnalyzeSentimentwithNaturalLanguageAPISkillBadge.pdf",
        "out": r"public\certifications\nlp_skill_badge.png",
        "label": "NLP Skill Badge (Google Cloud)"
    }
]

for cert in certs:
    print(f"Converting: {cert['label']} ...")
    try:
        doc = fitz.open(cert["pdf"])
        page = doc[0]  # First page only
        # Render at 2x scale (144 DPI) for a crisp thumbnail
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(cert["out"])
        print(f"  Saved -> {cert['out']} ({pix.width}x{pix.height}px)")
        doc.close()
    except Exception as e:
        print(f"  ERROR: {e}")

print("\nDone!")
