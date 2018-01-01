Climate data
============

The datasets in this folder are aggregated values from the [Swiss temperature mean](https://opendata.swiss/en/dataset/schweizer-temperaturmittel) (opendata.swiss) dataset provided by the Federal Office of Meteorology and Climatology MeteoSwiss. 

Specifically, we use the **summer** column of the *Area-mean temperatures of northern Switzerland > 1000 m a.s.l. 1864-2017* dataset. A full download in tabulated format here: [10.18751](http://www.meteoschweiz.admin.ch/product/input/climate-data/swissmean/10.18751-Climate-Timeseries-CHTM-1.0-north.high.txt).

I wanted to add some additional values that have relevance to [glacier retreat](https://en.wikipedia.org/wiki/Retreat_of_glaciers_since_1850). Precipitation values however can be seen in [MeteoSwiss reports](http://www.meteoschweiz.admin.ch/home/klima/gegenwart/klima-trends.html?filters=rhs150m0_northlow_year_1864-trend), but could not be found as open data.

However, local measurements for the Bernese Alps could be found at [Agroscope - Agrometeo data](http://www.agrometeo.ch/de/meteorology/datas). The following selection was applied to get 2010-2017 values for the measuring station closest to the Aletsch Glacier:

- Wallis
- VISPERTAL
- kumulierter Niederschlag (mm ou litres/m2) 
- Globalstrahlung(Watts/m2)
- jährlich
- 01/12/1997 - 01/01/2018

Since the resulting CSV file only had data from 2011, the data file was cropped.

# Conditions

The conditions of the MeteoSwiss data are as follows:

![](https://opendata.swiss/content/themes/wp-ogdch-theme/assets/images/terms/terms_by-ask.svg)

Open use. Must provide the source. Use for commercial purposes requires permission of the data owner.

- You may use this dataset for non-commercial purposes.
- You may use this dataset for commercial purposes, but you must seek prior permission from the data owner.
- You must provide the source (author, title and link to the dataset).

The Agroscope data has unclear conditions, since the link in the footer goes to the [standard legal terms](https://www.admin.ch/gov/de/start/rechtliches.html) of Swiss government websites.

Therefore this dataset cannot be republished under an open license at time of writing, and is shared here for purposes of demonstration only.

Haiku data
==========

The file `haiku.js` was created using haikus generated with [PoetRNN.jl](https://github.com/loleg/PoetRNN.jl) using as input a haikus dataset collected by Sam Ballas for the original [PoetRNN](https://github.com/sballas8/PoetRNN/tree/master/data).
