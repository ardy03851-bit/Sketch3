#!/usr/bin/env python3
"""Writes manifest.json files for every content folder:
   weapons/, weapons2/, biomes/, biomes2/ and char/.
Static hosts that do not show folder listings (GitHub Pages, Netlify, Vercel, S3, ...) use these
files to find content when the GitHub API is not reachable.
Run it after adding a weapon or a biome:   python3 tools/make-manifest.py"""
import json, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def pick(fs, d, ext):
    return next((f for f in fs if f.lower() == d.lower() + ext), None) or next((f for f in fs if f.lower().endswith(ext)), None)

def folder(name, key):
    W = os.path.join(root, name)
    if not os.path.isdir(W): return 0
    out = []
    for d in sorted(os.listdir(W)):
        p = os.path.join(W, d)
        if not os.path.isdir(p) or d.startswith('.'): continue
        fs = sorted(f for f in os.listdir(p) if not f.startswith('.'))
        out.append({'id': d, 'js': pick(fs, d, '.js'), 'png': pick(fs, d, '.png'), 'files': fs})
    json.dump({key: out}, open(os.path.join(W, 'manifest.json'), 'w'), indent=1)
    return len(out)

for name, key in (('weapons', 'weapons'), ('weapons2', 'weapons'), ('biomes', 'biomes'), ('biomes2', 'biomes')):
    print(f'{name}/: {folder(name, key)}')
C = os.path.join(root, 'char')
if os.path.isdir(C):
    json.dump({'chars': sorted(f for f in os.listdir(C) if f.lower().endswith('.png'))}, open(os.path.join(C, 'manifest.json'), 'w'), indent=1)
