#!/usr/bin/env python3
"""Writes weapons/manifest.json and char/manifest.json.
Static hosts that do not show folder listings (Netlify, Vercel, S3, ...) use these
files to find weapons and characters. Run it after adding a weapon:  python3 tools/make-manifest.py"""
import json, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W = os.path.join(root, 'weapons'); out = []
for d in sorted(os.listdir(W)):
    p = os.path.join(W, d)
    if not os.path.isdir(p) or d.startswith('.'): continue
    fs = sorted(os.listdir(p))
    js = next((f for f in fs if f.lower() == d.lower() + '.js'), None) or next((f for f in fs if f.lower().endswith('.js')), None)
    png = next((f for f in fs if f.lower() == d.lower() + '.png'), None) or next((f for f in fs if f.lower().endswith('.png')), None)
    out.append({'id': d, 'js': js, 'png': png})
json.dump({'weapons': out}, open(os.path.join(W, 'manifest.json'), 'w'), indent=1)
C = os.path.join(root, 'char')
if os.path.isdir(C):
    json.dump({'chars': sorted(f for f in os.listdir(C) if f.lower().endswith('.png'))}, open(os.path.join(C, 'manifest.json'), 'w'), indent=1)
print(len(out), 'weapons')
