# Temp-to-Temp
##Temperature Conversion App that allows for conversion between 6 scales, written in Javascript using Kinoma Studio. 

The Temp-to-Temp application does exactly what its name suggests: it easily converts a temperature from one of 6 different temperature types into another type. Additionally, it displays the conversion of all 6-scales at the bottom for easy access. Currently, the Temp-to-Temp is capable of conversions between the Celsius, Fahrenheit, Kelvin, Rankine, Delisle, and Newton temperature scales. 

<h4>See a video of the app in action here: https://www.youtube.com/watch?v=FzgqKata5MA&list=UUc6KCm3yl0wdNFNGNK-yxLQ</h4>
<br><br>
<h3>INSTRUCTIONS:</h3>
How to Use the Temp-to-Temp (in 5 easy steps!)
<ol>
  <li>Open up the application.</li>
  <li>Select the desired input temperature using the slider. Check the current temperature with the input temperature display on the top of the middle column, under the blue INPUT letters.</li>
  <li>Select the desired input scale using the radio buttons on the left of the application – check that the INPUT (SCALE) above the input temperature in the top of the middle column changes to reflect your desired input scale.</li>
  <li>Select the desired output scale using the radio buttons on the right of the application – check that the OUTPUT (SCALE) below the output temperature on the bottom of the middle column changes to reflect your desired output scale.</li>
  <li>If you want to do more conversions, repeat steps 1-4 until you’re finished with your conversion.</li>
</ol> 

(NOTE: The equivalent of your selected temperature will appear in the 6-scale display on the bottom half of the application in all 6 scales for easy reading or if you want multiple conversions at once.)
 
<br>
<h3>BEHIND THE CODE:</h3>
The app is constructed using a huge conglomerate of things: different containers, a ton of styles for all text, 2 sets of 6-count radio buttons, a slider (from 0 – 350), and a lot of different labels. The main background (backCon) is a simple purple (#9999FF) container that acts as the background – everything is built on this. The only things added directly to the backCon are the radio button sets and the slider. 

There are 5 separate containers apart from the backCon, they are:
```1.	displayCon: holds the transition piece, a label, (“if you’re curious…” between the input and output halves of the app.
```2.	tempCon: holds the output labels (converted temperature and scale) for the left side at the bottom of the app
```3.	tempCon2: holds the output labels (converted temperature and scale) for the right side at the bottom of the app
```4.	initTempCon: holds the label whose values is adjusted by the slider, also holds the label that reflects the chosen input scale
```5.	outputTempCon: holds the label whose value is calculated after the output scale is selected, also holds the label that reflects the chosen output scale
<br>
<h3> IN-APP DESIGN: </h3>
The temperature desired is selected using a basic slider whose values range from 0 to 350. The input temperature, changed via the slider, is displayed at the top of the middle column. The output temperature, based on calculations, is displayed at the bottom of the middle column. <br>
The desired input scale is selected using a panel of 6-different radio buttons, each titled with the scale they represent. The input scales are located on the left side of the temperature reader. After selecting an input scale, the display about the INPUT temperature will change to reflect the chosen scale. After an input-scale is selected, calculations are made every time the slider is moved, providing a continuous and immediate conversion – these calculations are reflected by the 6-scales at the bottom of the app. <br>
The desired output scale is similarly selected using a panel of 6-different radio buttons, each titled with the scale they represent. The output scales are located on the right side of the temperature reader. After selecting an output scale, the display below the OUTPUT temperature will change to reflect the chosen scale. <br>
The color-scheme of the app is based around the color #6060A8, a dark and soft purple. The two adjacent colors, a teal and a light purple, and variants of them, are found throughout the application. As is evidenced fairly quickly, there are a lot of different types of texts visible in the app – the colors chosen for each of the different temperature scales, however, are consistent.


