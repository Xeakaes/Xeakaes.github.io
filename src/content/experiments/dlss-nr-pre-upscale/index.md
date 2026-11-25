---
title: DLSS NR Pre-Upscale
order: 1
status: Work in progress
summary: A ReShade add-on that runs DLSS 5 Neural Rendering on the render-resolution image, before DLSS upscales it.
technologies: [C++, ReShade add-on, NVIDIA NGX, D3D11, D3D12]
diagram: pre-upscale
notes:
  - D3D11 games are served through a cross-API bridge using shared textures and a shared fence. This path is itself work in progress and not every title is confirmed working.
  - Frames can be skipped; the network's effect is then carried along motion vectors instead of repeating an old image.
  - Includes a GPU profiler so stage costs are measured on the machine in use.
credits:
  - { name: neural-upstream by Matias Lombo, role: the architecture this project started from, href: 'https://github.com/matiasLombo/neural-upstream' }
  - { name: NIGos/dlss5-bridge, role: the cross-API bridge pattern, href: 'https://github.com/NIGos/dlss5-bridge' }
  - { name: video2dlssnr by Daniil Sokolyuk, role: the NGX routing recipe }
disclaimer: MIT licensed. Not affiliated with or endorsed by NVIDIA.
links:
  - { label: Repository, href: 'https://github.com/Xeakaes/dlss5-nr-pre-upscale' }
---
