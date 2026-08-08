import os
from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # Allow processing ultra-high resolution images

cert_dir = r"public\certifications"
max_dim = 800  # Max width/height in pixels

print(f"Compressing certificate images in '{cert_dir}'...")

for fname in os.listdir(cert_dir):
    if fname.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        fpath = os.path.join(cert_dir, fname)
        orig_size = os.path.getsize(fpath)
        
        try:
            with Image.open(fpath) as img:
                # Convert RGBA to RGB if saving as JPEG or optimizing PNG
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                # Resize if larger than max_dim
                width, height = img.size
                if width > max_dim or height > max_dim:
                    img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                
                # Save optimized image
                img.save(fpath, format='PNG', optimize=True)
                
                new_size = os.path.getsize(fpath)
                reduction = (1 - new_size / orig_size) * 100
                print(f"  {fname}: {orig_size / 1024 / 1024:.2f} MB -> {new_size / 1024:.1f} KB ({reduction:.1f}% smaller)")
        except Exception as e:
            print(f"  Error processing {fname}: {e}")

print("\nDone compressing all certificate images!")
