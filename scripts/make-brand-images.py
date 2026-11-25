"""Regenerates og.png (1200x630) and PNG icons. Needs: pip install playwright (uses installed Chrome)."""
import pathlib, base64, math
from playwright.sync_api import sync_playwright
root = pathlib.Path(__file__).resolve().parent.parent
def font(n): return 'data:font/woff2;base64,' + base64.b64encode((root/'src/fonts'/n).read_bytes()).decode()
def sq(r, turned):
    s = 0 if turned else 45
    return ' '.join(f'{r*math.cos(math.radians(a+s)):.2f},{r*math.sin(math.radians(a+s)):.2f}' for a in (0,90,180,270))
rs = [300/math.sqrt(2)**n for n in range(7)]
art = ''.join(f'<circle r="{r:.2f}"/><polygon points="{sq(r, n%2==1)}"/>' for n, r in enumerate(rs[:6]))
h = rs[2]/math.sqrt(2); d = 300/math.sqrt(2)
html = f'''<style>@font-face{{font-family:S;src:url({font("space-grotesk-latin-500-normal.woff2")})}}@font-face{{font-family:M;src:url({font("ibm-plex-mono-latin-400-normal.woff2")})}}
body{{margin:0;width:1200px;height:630px;background:#E9E7E1;color:#202326;position:relative;overflow:hidden;font-family:S}}
h1{{position:absolute;left:72px;top:150px;margin:0;font-size:108px;line-height:.96;font-weight:500;letter-spacing:-.045em}} h1 span{{display:block}} h1 span:last-child{{color:#C34E36}}
p{{position:absolute;left:76px;margin:0;font:400 20px M;letter-spacing:.04em}} svg{{position:absolute;left:700px;top:75px}}</style>
<p style="top:66px">KAAN TURAN</p><h1><span>Curiosity,</span><span>made</span><span>tangible.</span></h1><p style="top:542px;color:#55514C">INDEPENDENT DEVELOPER · MEDICAL STUDENT</p>
<svg width="480" height="480" viewBox="-330 -400 750 750" fill="none" stroke="#202326" stroke-width="1.6"><path stroke="#C9C6BE" d="M-900 0H320M0 -400V400M-300 -400V400M300 -400V400M-900 -300H320M-900 300H320"/>
<path fill="#C34E36" stroke="none" d="M {h} {-h} A {rs[2]} {rs[2]} 0 0 1 {h} {h} Z"/>{art}<circle stroke="#C34E36" cx="{d}" cy="{-d}" r="{rs[1]}"/><circle cx="{d}" cy="{d}" r="9" fill="#C34E36" stroke="none"/><circle r="6" fill="#C34E36" stroke="none"/></svg>'''
with sync_playwright() as p:
    b = p.chromium.launch(channel='chrome'); pg = b.new_page(viewport={'width':1200,'height':630})
    pg.set_content(html); pg.evaluate('document.fonts.ready'); pg.screenshot(path=str(root/'public/og.png'))
    for size, name in ((32,'favicon-32.png'), (180,'apple-touch-icon.png')):
        pg.set_viewport_size({'width':size,'height':size})
        pg.set_content(f'<style>body{{margin:0}}svg{{display:block;width:{size}px;height:{size}px}}</style>'+(root/'public/favicon.svg').read_text())
        pg.screenshot(path=str(root/'public'/name))
    b.close()
