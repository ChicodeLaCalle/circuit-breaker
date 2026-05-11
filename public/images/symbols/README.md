# Cybersiglism Images Setup - White Background Removal

## ✅ AUTOMATIC WHITE BACKGROUND REMOVAL

The code now **automatically removes white backgrounds** using CSS blend modes and filters:

```css
mix-blend-mode: screen;  // Makes white transparent
filter: invert(1) hue-rotate(260deg) brightness(1.5) ... // Inverts and colors purple
```

**This means:**
- White backgrounds become transparent automatically
- Black ink becomes purple (matching the site)
- No need to manually remove backgrounds!

## Where to Find Images (Even with White BG)

Since white backgrounds are automatically removed, you can use ANY images:

### Sources:

1. **Google Images** (search any of below, save as PNG)
   - "cybersigilism tattoo flash black ink"
   - "biomechanical tattoo drawing"
   - "organic tattoo line work"
   - "tribal tattoo stencil"

2. **Pinterest**
   - Search: cybersigilism, biomechanical tattoo, organic line work
   - Right-click → Save image

3. **Instagram Tattoo Artists**
   - Screenshot their flash sheets
   - Examples: @hxhxx, @thomas_hooper, @sam_ricketts

4. **Tattoo Flash Sites**
   - tattooflashart.com
   - Pinterest boards

## Quick Setup

1. **Find 6 images** (any size, white background OK)
2. **Save them as:**
   ```
   sigil-1.png
   sigil-2.png
   sigil-3.png
   sigil-4.png
   sigil-5.png
   sigil-6.png
   ```
3. **Put in:** `/public/images/symbols/`
4. **Done!** White backgrounds automatically disappear

## How It Works

### The Magic CSS:
```css
mix-blend-mode: screen;
filter: invert(1) hue-rotate(260deg) brightness(1.5) saturate(1.5);
```

**What this does:**
1. `invert(1)` - Swaps black↔white (black ink becomes white, white bg becomes black)
2. `hue-rotate(260deg)` - Turns white ink into purple
3. `brightness(1.5)` - Makes it brighter
4. `saturate(1.5)` - Makes color more vivid
5. `mix-blend-mode: screen` - Black areas become transparent

### Result:
- ❌ White background → Transparent
- ✅ Black ink → Bright purple
- ✨ Purple glow effect automatically added

## If CSS Doesn't Work (Alternative Methods)

### Method 2: Online Tools (Free)

1. **Remove.bg** (remove.bg)
   - Upload image
   - Download transparent PNG
   - 100% free

2. **Photopea** (photopea.com - free Photoshop alternative)
   - Open image
   - Select → Color Range → Select White
   - Delete
   - Export as PNG

3. **GIMP** (gimp.org - free)
   - Colors → Color to Alpha
   - Choose white
   - Export as PNG

### Method 3: Use SVG Instead

Convert images to SVG (vector) using:
- **Vectorizer.AI** (vectorizer.ai) - Free
- Upload PNG → Download SVG → Perfect transparency

## Recommended Image Types

Any of these work great:

- ✅ Black ink drawings on white
- ✅ Tattoo flash sheets
- ✅ Line drawings
- ✅ Biomechanical art
- ✅ Tribal patterns
- ✅ Organic flowing lines
- ✅ Spine/bone illustrations
- ✅ Vein/nerve diagrams

## Testing

After adding images, run:
```bash
npm run dev
```

Visit http://localhost:3000

You should see:
- Purple tattoo-style symbols
- No white backgrounds
- Glow effects around symbols
- Symbols positioned around edges

## Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Must be in `/public/images/symbols/`
- Refresh browser cache (Ctrl+Shift+R)

**Still see white backgrounds?**
- Try the CSS is already applied
- If still visible, use Remove.bg tool
- Or try different images

**Images too big/small?**
- Edit `size: 350` values in Hero.tsx
- Larger number = bigger image

## Example Search Terms

Find images with these searches:
- "cybersigilism tattoo flash sheet"
- "biomechanical tattoo design"
- "organic line work tattoo"
- "thomas hooper tattoo flash"
- "hxhxx tattoo art"
- "biomech tattoo stencil"
- "tribal spine tattoo"
- "blackwork organic tattoo"

## File Structure

```
/public/images/symbols/
├── sigil-1.png  (recommended size: 500-1000px)
├── sigil-2.png
├── sigil-3.png
├── sigil-4.png
├── sigil-5.png
├── sigil-6.png
└── README.md
```

## Tips

- **Any black ink drawing works** - the CSS converts it to purple
- **White backgrounds are OK** - automatically removed
- **Higher resolution = better** - 1000x1000px ideal
- **PNG or JPG both work** - PNG recommended for quality
- **No need to edit images** - just drop them in!

---

The CSS blend mode trick means you can literally use ANY black ink drawing and it will look perfect on the dark background! 🖤💜
