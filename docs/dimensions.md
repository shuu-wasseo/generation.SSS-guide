---
outline: deep
---

# dimensions and currency

dimensions are the pillars of generation.SSS.

most dimensions produce the dimension one tier below them (S3 dimensions produce S2 dimensions, etc.) but S1 dimensions produce the main currency.

[[toc]]

## types of dimensions and currency

| dimension | currency needed | currency produced | conditions |
| :-------: | :-------------: | :---------------: | :--------: |
| S         | S               | S                 | any        |
| como      | como            | comodust          | any        |

## production of dimensions
| dimension | normal | ggc7 | ggc8 |
| :-------: | :----: | :--: | :--: |
| S1        | S      | S    | S    |
| S2        | S1     | S    | S    |
| S3        | S2     | S1   | S1   |
| S4        | S3     | S2   | S3   |
| S5        | S4     | S3   | S2   |
| S6        | S5     | S4   | S4   |
| S7        | S6     | S5   | S5   |
| S8        | S7     | S6   | S7   |

## possible boosts / multipliers (in order)

### S production

| source                                   | conditions | boost (let n = value in source)  |
| :--------------------------------------: | :--------: | :------------------------------: |
| total number of S2 dimensions            | ggc7       | + n                              |
| highest unlocked S dimension             | any        | × n<sup>2</sup>                  |
| comodust                                 | any        | × n<sup>0.125</sup>              |
| time since last grand gravity            | ggc2       | × 24<sup>10<sup>6</sup>n-1</sup> |
| randomly generated number from 0.24 to 8 | ggc6       | × n                              |
| associated achievements                  | any        | ^ 1.125n                         |

### dimension production

| source                                   | dimensions | conditions | boost (let n = value in source) |
| :--------------------------------------: | :--------: | :--------: | :-----------------------------: |
| number of self bought manually           | any        | any        | × (25/24)<sup>n</sup>           |
| sacrifice                                | S-S8       | any        | × max(1, log<sub>8</sub>n)      |
| corresponding challenge completed        | any        | any        | ^ 1.125                         |
| randomly generated number from 0.24 to 8 | any        | ggc6       | × n                             |
| associated achievements                  | any        | any        | ^ 1.125n                        |
