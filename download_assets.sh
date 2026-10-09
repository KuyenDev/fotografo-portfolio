#!/bin/bash
set -e

download() {
  local url="$1"
  local dest="$2"
  if [ ! -f "$dest" ]; then
    echo "Downloading $dest..."
    curl -sSL -A "Mozilla/5.0" "$url" -o "$dest" || echo "Failed $dest"
  fi
}

# Hero
download "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85" "public/images/hero/main-hero.jpg"
download "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1600&q=85" "public/images/hero/about-hero.jpg"

# Portraits
download "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85" "public/images/portraits/portrait-01.jpg"
download "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85" "public/images/portraits/portrait-02.jpg"
download "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85" "public/images/portraits/portrait-03.jpg"
download "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85" "public/images/portraits/portrait-04.jpg"

# Editorial
download "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85" "public/images/editorial/editorial-01.jpg"
download "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85" "public/images/editorial/editorial-02.jpg"
download "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85" "public/images/editorial/editorial-03.jpg"
download "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85" "public/images/editorial/editorial-04.jpg"

# Fashion
download "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" "public/images/fashion/fashion-01.jpg"
download "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85" "public/images/fashion/fashion-02.jpg"
download "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85" "public/images/fashion/fashion-03.jpg"
download "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85" "public/images/fashion/fashion-04.jpg"

# Architecture
download "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85" "public/images/architecture/architecture-01.jpg"
download "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" "public/images/architecture/architecture-02.jpg"
download "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85" "public/images/architecture/architecture-03.jpg"
download "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85" "public/images/architecture/architecture-04.jpg"

# Events
download "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85" "public/images/events/events-01.jpg"
download "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85" "public/images/events/events-02.jpg"
download "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85" "public/images/events/events-03.jpg"
download "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85" "public/images/events/events-04.jpg"

# Projects
download "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1600&q=85" "public/images/projects/project-shadows-hero.jpg"
download "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-shadows-01.jpg"
download "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-shadows-02.jpg"

download "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1600&q=85" "public/images/projects/project-human-hero.jpg"
download "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-human-01.jpg"
download "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-human-02.jpg"

download "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85" "public/images/projects/project-urban-hero.jpg"
download "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-urban-01.jpg"
download "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-urban-02.jpg"

download "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85" "public/images/projects/project-motion-hero.jpg"
download "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-motion-01.jpg"
download "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85" "public/images/projects/project-motion-02.jpg"

echo "All demo images downloaded successfully."
