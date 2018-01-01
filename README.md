Aletsch-Rutsch
==============

This is a visualisation of the [Aletsch Glacier](https://en.wikipedia.org/wiki/Aletsch_Glacier) in Switzerland. On the topic of [Retreat of glaciers](https://en.wikipedia.org/wiki/Retreat_of_glaciers_since_1850), Wikipedia currently says:

> Aletsch Glacier retreated 2.8 km (1.7 mi) from 1880 to 2009. This rate of retreat has also increased since 1980, with 30%, or 800 m (2,600 ft), of the total retreat occurring in the last 20% of the time period.

#### Technical info

The colored "snowballs" seen in this dataviz are increasing in weight according to real data: three climate indicators for the time period 2011-2017:

- <font color="red">**RED**</font>: Area-mean temperatures of northern Switzerland > 1000 m
- <font color="green">**GREEN**</font>: Cumulative precipitation (mm or litres/m2) 
- <font color="yellow">**YELLOW**</font>: Global irradiation (Watts/m2)

With this we attempt to point some attention at the lack of easily accessible, open data available to assess such claims. See the **[data README](data/README.md)** for details.

The terrain is a representation of the actual alpine region, rendered as a 3D model using the Virtual Reality library [A-Frame](https://github.com/aframevr/aframe/) and several A-Frame components: 

- [alongpath](https://github.com/protyze/aframe-alongpath-component)
- [curve](https://github.com/protyze/aframe-curve-component)
- [particle system](https://github.com/IdeaSpaceVR/aframe-particle-system-component)
- [terrain model](https://github.com/bryik/aframe-terrain-model-component)

Additionally, [Zepto.js](http://zeptojs.com/) is used for loader code.

A description of how the terrain model was prepared can be found in the **[geodata README](geodata/README.md)**.

Note that it was initially attempted to use a [physics system](https://github.com/donmccurdy/aframe-physics-system) to simulate the rolling of the spheres down the glacier. However, the complexity of the model as well as lack of time was a constraint. Therefore the balls are rolling along fixed tracks, which were hand-placed using the A-Frame inspector:

![screenshot](img/_screenshot.jpg)

#### Inspiration

This project was inspired by [Glacier changing in time](https://www.schoolmaps.ch/2015/11/13/gletscher-im-wandel-der-zeit/), a learning module based on a storymap from [Swisstopo](https://www.geo.admin.ch/en/thematic-geoportals-federal-offices/storymaps-telling-stories-with-geodata.html), and precipitated by discovering these two images on Wikimedia Commons:

[![Aletschgletscher-mit-Jungfrau.jpg - Public Domain](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Aletschgletscher-mit-Jungfrau.jpg/320px-Aletschgletscher-mit-Jungfrau.jpg)](https://commons.wikimedia.org/wiki/File%3AAletschgletscher-mit-Jungfrau.jpg)

[![Grosser Aletschgletscher 3178.JPG - Dirk Beyer - CC BY-SA 2.5](https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Grosser_Aletschgletscher_3178.JPG/320px-Grosser_Aletschgletscher_3178.JPG)](https://commons.wikimedia.org/wiki/File:Grosser_Aletschgletscher_3178.JPG)

#### What's with the Gobbledigook

You mean, could we please explain the words shown at the top while loading? Well, okay, if you insist.. After playful experiments with A.I. poetry generators over the holidays, a few choice samples were collected in `haiku.js` and shown here randomly. See [PoetRNN.jl](https://github.com/loleg/PoetRNN.jl) (GitHub)

Oh, and happy new year! :tada:

# Licenses

The contents of the `data` folder are published under the [Public Domain Dedication and License v1.0](http://www.opendatacommons.org/licenses/pddl/1.0/).

All code and libraries in the `lib` folder are copyright to their respective authors and open source under the [MIT License](lib/aletsch/LICENSE) - with the exception of [aframe-alongpath-component](https://github.com/protyze/aframe-alongpath-component), which is licensed under the GNU General Public License v3.0. As per the terms of GPL, this project is also licensed under the [GNU General Public License v3.0](LICENSE):


    Aletsch-Rutsch, a data visualization
    Copyright (C) 2017 Oleg Lavrovsky

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
