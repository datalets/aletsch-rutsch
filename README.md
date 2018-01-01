Aletsch-Rutsch
==============

This is a visualisation of the [Aletsch Glacier](https://en.wikipedia.org/wiki/Aletsch_Glacier) in Switzerland, rendered as a 3D model using [A-Frame](https://github.com/aframevr/aframe/) and several components: 

- [alongpath](https://github.com/protyze/aframe-alongpath-component)
- [curve](https://github.com/protyze/aframe-curve-component)
- [particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component)
- [terrain model](https://github.com/bryik/aframe-terrain-model-component)

Additionally, [Zepto.js](http://zeptojs.com/) is used for loader code.

A description of how the dataset was prepared can be found in the [data README](data/README.md).

# FAQ

- *What's with the Gobbledigook?*
You mean, the words shown at the top during loading? Well, after some playful experiments with A.I. poetry generators over the holidays, a few choice samples were collected in `haiku.js` and shown randomly. See [PoetRNN.jl](https://github.com/loleg/PoetRNN.jl)

# License

This repository is published under the [MIT License](LICENSE).

The contents of the `data` folder are published under the Public Domain Dedication and License v1.0 whose full text can be found at: http://www.opendatacommons.org/licenses/pddl/1.0/.