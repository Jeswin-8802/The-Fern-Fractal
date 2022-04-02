# The-Fern-Fractal
 Also called the Barnsley Fern, it is a fractal pattern generated by iterating over four sets of transformations chosen based on a specific probability factor.

 # How It Works
 The formula for a single transformation looks like this:<br>
    ![7a6ccaaa702062c1c63c488c076d4e1d08f94302](https://user-images.githubusercontent.com/84562594/161367657-7b912c8e-0853-4db6-b8f0-9d5d1261d0ac.svg)
 <br><br>
 There are `4` such transformations and each of the transformations are specifically tasked with creating a portion of the fern.<br> 
|       _function_      |   a	  |   b   |	  c   |	  d   |	  e   |	  f   |	  p   |	 PART                           | 
|:----------------------|:------|:------|:------|:------|:------|:------|:------|:--------------------------------|
|    _ƒ<sub>1</sub>_	   |  0.   |  0.   |  0.  	|  0.16 |  0.  	|  0.   |  0.01 |  `Stem`                         |
|    _ƒ<sub>2</sub>_	   |  0.85	|  0.04 |	−0.04	|  0.85	|  0.	  |  1.60	|  0.85	|  `Successively smaller leaflets`|
|    _ƒ<sub>3</sub>_	   |  0.20	| −0.26	|  0.23	|  0.22	|  0.	  |  1.60	|  0.07	|  `Largest left-hand leaflet`    |
|    _ƒ<sub>4</sub>_	   | −0.15	|  0.28	|  0.26	|  0.24	|  0.	  |  0.44	|  0.07	|  `Largest right-hand leaflet`   |

Here `p` is the `probability factor` and it determines the probability of choosing that function from the list of 4 functions.
<br><br><br>
![5bc8debe5073efbf8347bed92ab7c1b4fbd1bf67](https://user-images.githubusercontent.com/84562594/161368439-ae64c1c3-8dc8-4eb9-b458-a659871e6947.svg)
<br>
![5bc8debe5073efbf8347bed92ab7c1b4fbd1bf67](https://user-images.githubusercontent.com/84562594/161368479-45cf13ed-d3c9-4768-8db6-23430cf78081.svg)
<br>
![687f3f274b69c4e3597a470065d3669e137e7e36](https://user-images.githubusercontent.com/84562594/161368503-f399836d-f5ad-439a-8ba5-640cb66d0ae1.svg)
<br>
![40699077f271fd7f45d3e26c536b1d4b1a9c50dd](https://user-images.githubusercontent.com/84562594/161368524-43188052-df24-4359-b57b-f868892a1dab.svg)

<br><br>
Each iteration chooses 1 of 4 functions based on it's probability factor *(in the first iteration, `(0, 0)` is used as the initial input)*. The co-ordinates obtained are traced in the output and is used as input for the next iteration. Mare the number of iterations, the more defined the fern looks as the number of points plotted increases.
<br><br>
By slightly changing the function parameters, we can create different variations of fern.
<br><br>
![image](https://user-images.githubusercontent.com/84562594/161369303-30ae6642-fc4d-4dbc-bef0-ecf0b99b0619.png)
<br>

# References
* https://en.wikipedia.org/wiki/Barnsley_fern
* https://solarianprogrammer.com/2017/11/02/barnsley-fern-python-3/
* https://scipython.com/book/chapter-7-matplotlib/examples/the-barnsley-fern/
