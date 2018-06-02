# Parse Institutions

Extract educational institutions from text

## Usage

Example:

```javascript
await parse('el año que viene voy a trabajar a la universidad de tecnologica de Compiègne')
```

Output:
```json
  [
    {
      "ngram": "universidad de tecnologica de Compiègne",
      "value": {
        "id": "fr-utc",
        "country": "France",
        "city": "Compiègne",
        "location": [
          49.4155636,
          2.816239
        ],
        "label": {
          "fr": "Université de Technologie de Compiègne",
          "en": "University of Technologie of Compiègne, France"
        },
        "aliases": {
          "en": [
            "University of Technology of Compiègne",
            "University of Technology of Compiègne",
            "University of Technology of Compiegne",
            "University of Technology of Compiegne",
            "University of Technology of Compiègne, France",
            "University of Technology of Compiègne France",
            "University of Technology of Compiegne, France",
            "University of Technology of Compiegne France"
          ],
          "fr": [
            "UTC, France",
            "UTC, Compiègne",
            "UTC, Compiègne, France",
            "UTC Compiègne",
            "UTC de Compiègne",
            "UTC à Compiègne",
            "UTC Compiegne",
            "UTC, Compiegne",
            "UTC de Compiegne",
            "UTC a Compiegne",
            "Université de Technologie de Compiègne",
            "Université de Technologie de Compiègne",
            "Université de Technologie de Compiegne",
            "Université de Technologie de Compiegne",
            "Université de Technologie de Compiègne, France",
            "Université de Technologie de Compiègne France",
            "Université de Technologie de Compiegne, France",
            "Université de Technologie de Compiegne France"
          ]
        },
        "programs": [
          "Computer Engineering"
        ]
      },
      "score": 0.67,
      "position": {
        "sentence": 0,
        "word": 9,
        "begin": 37,
        "end": 76
      }
    }
  ]
```

## TODO

### Improve the named entity algorithm to reduce the complexity and length of aliases

Currently we have to define manually the various alternative spellings
(with and without commas, accents..) which is very cumbersome.
 Ideally these should be done automatically.

### Find a common denominator for institution types (it is messy right now)

- We should implement this maybe:
https://en.wikipedia.org/wiki/Types_of_educational_institutions

### Add more institutions: France

https://fr.wikipedia.org/wiki/Liste_des_universit%C3%A9s_en_France
http://www.wikiwand.com/en/Union_of_Independent_Grandes_%C3%89coles

### Add more institutions: United States

```
  Calvin College[133]
  Capitol College[134]
  Carnegie Mellon University[135]
  Cedarville University[136]
  Christian Brothers University[137]
  Christopher Newport University[138]
  City College of New York[139]
  Clarkson University[140]
  Clemson University[141]
  Cleveland State University[142]
  Colorado State University[143]
  Columbia University[144]
  Cornell University[145]
  Drexel University[146]
  Duke University[147]
  Fairleigh Dickinson University[148]
  Florida Atlantic University[149]
  Florida Institute of Technology[150]
  Florida International University[151]
  Florida State University[152]
  George Mason University[153]
  Georgia Institute of Technology[154]
  Gonzaga University[155]
  Grand Valley State University[156]
  Howard University[157]
  Illinois Institute of Technology[158]
  Indiana Institute of Technology[159]
  Indiana University-Purdue University Indianapolis[160]
  Iowa State University[161]
  Lipscomb University[162]
  Louisiana State University[163]
  Manhattan College[164]
  Marquette University[165]
  Mercer University[166]
  Miami University[167]
  Michigan State University[168]
  Michigan Technological University[169]
  Johns Hopkins University[170]
  Johnson C. Smith University[171]
  Kansas State University[172]
  Kettering University[173]
  Lafayette College[174]
  Lawrence Technological University[175]
  Lehigh University[176]
  Liberty University[177]
  Milwaukee School of Engineering[178]
  Minnesota State University, Mankato[179]
  Mississippi State University[180]
  Missouri University of Science and Technology[181]
  Montana State University[182]
  Morgan State University[183]
  Naval Postgraduate School[184]
  New Jersey Institute of Technology[185]
  New Mexico State University[186]
  New York Institute of Technology[187]
  North Carolina A&T State University[188]
  North Carolina State University[189]
  North Dakota State University[190]
  Northeastern University[191]
  Northwestern University[192]
  Oakland University[193]
  OGI School of Science and Engineering[194]
  Ohio Northern University[195]
  Ohio State University[196]
  Oklahoma State University[197]
  Old Dominion University[198]
  Pacific Lutheran University[199] offers B.S. (ABET accredited)
  Pennsylvania State University[200]
  Polytechnic Institute of New York University[201]
  Polytechnic University of Puerto Rico[202]
  Portland State University[203]
  Prairie View A&M University[204]
  Purdue University[205]
  Rensselaer Polytechnic Institute[206]
  Rice University[207]
  Rochester Institute of Technology[208]
  Rose-Hulman Institute of Technology[209]
  Rowan University[210]
  Rutgers University[211]
  Saginaw Valley State University[212]
  Saint Louis University[213]
  Saint Mary's University[214]
  San Diego State University[215]
  San Francisco State University[216]
  San Jose State University[217]
  Santa Clara University[218]
  Seattle University[219]
  South Dakota School of Mines & Technology[220]
  Southern Illinois University, Carbondale[221]
  Southern Illinois University, Edwardsville[222]
  Southern Methodist University[223]
  St. Cloud State University[224]
  Stevens Institute of Technology[225]
  Stony Brook University[226]
  State University of New York at New Paltz[227]
  Temple University[228]
  Tennessee Technological University[229]
  Texas A&M University[230]
  Texas Tech University[231]
  The College of New Jersey[232]
  The George Washington University[233]
  The University of Akron[234] offers a B.S (ABET accredited)
  Tri-State University[235]
  Tufts University[236]
  University at Buffalo[237]
  University of Alabama[238] offers B.S, M.S., and Ph.D (ABET accredited)
  University of Alabama at Birmingham[239] offers a Ph.D
  University of Alabama in Huntsville[240] offers B.S., M.S., and Ph.D (ABET accredited)
  University of Alaska Fairbanks[241]
  University of Arizona[242] offers B.S., M.S., M.Eng., and Ph.D (ABET accredited)
  University of Arkansas[243] offers B.S., M.S., and Ph.D (ABET accredited)
  University of Bridgeport[244]
  University of California, Davis[245]
  University of California, Irvine[246]
  University of California, Riverside[247]
  University of California, San Diego[248]
  University of California, Santa Barbara[249]
  University of California, Santa Cruz[250]
  University of Central Florida[251]
  University of Cincinnati[252]
  University of Colorado, Boulder[253]
  University of Colorado, Colorado Springs[254]
  University of Colorado, Denver[255]
  University of Connecticut[256]
  University of Dayton[257]
  University of Delaware[258]
  University of Denver[259]
  University of Detroit Mercy[260]
  University of Florida[261]
  University of Hartford[262]
  University of Houston[263]
  University of Houston–Clear Lake[264]
  University of Idaho[265]
  University of Illinois at Chicago[266]
  University of Illinois at Urbana-Champaign[267]
  University of Iowa[268]
  University of Kansas[269]
  University of Kentucky[270]
  University of Louisiana at Lafayette[271]
  University of Louisville[272]
  University of Nebraska at Lincoln[273]
  University of Maine[274]
  University of Maryland, College Park[275]
  University of Maryland, Baltimore County[276]
  University of Massachusetts Amherst[277]
  University of Massachusetts Dartmouth[278]
  University of Massachusetts Lowell[279]
  University of Memphis[280]
  University of Miami[281]
  University of Michigan–Dearborn[282]
  University of Minnesota[283]
  University of Minnesota, Duluth[284]
  University of Missouri[285]
  University of Nebraska, Lincoln[286]
  University of Nevada, Las Vegas[287]
  University of Nevada, Reno[288]
  University of New Hampshire[289]
  University of New Haven[290]
  University of New Mexico[291]
  University of North Carolina, Charlotte[292]
  University of North Texas[293]
  University of Notre Dame[294]
  University of Oklahoma[295]
  University of Pittsburgh[296]
  University of Puerto Rico, Mayaguez[297]
  University of Rhode Island[298]
  University of Rochester[299]
  University of South Alabama[300]
  University of South Carolina[301]
  University of South Florida[302]
  University of Tennessee, Knoxville[303]
  University of Texas at Austin[304]
  University of Texas at Dallas[305]
  University of Texas at El Paso[306]
  University of the Pacific[307]
  University of Utah[308]
  University of Virginia[309]
  University of Washington[310]
  University of West Florida[311]
  University of Wisconsin - Madison[312]
  University of Wyoming[313]
  Utah State University[314]
  Valparaiso University[315]
  Villanova University[316]
  Virginia Commonwealth University[317]
  Virginia Polytechnic Institute and State University[318]
  Walla Walla University[319]
  Washington State University[320]
  Washington University in St. Louis[321]
  Wayne State University[322]
  West Virginia University[323]
  Western Michigan University[324]
  Wichita State University[325]
  Worcester Polytechnic Institute[326]
  Wright State University[327]
  Youngstown State University[328]
```

## Add more institutions: World

https://en.wikipedia.org/wiki/Lists_of_universities_and_colleges
https://en.wikipedia.org/wiki/List_of_universities_with_computer_engineering_programs

```
    Pakistan[edit]
    Forman Christian College (A Chartered University)
    Mirpur University of Science and Technology, Mirpur A.K
    Dawood College of Engineering and Technology
    Ghulam Ishaq Khan Institute of Engineering Sciences and Technology, Swabi[78]
    Balochistan University of Engineering and Technology at Khuzdar, Balochistan
    University of Engineering and Technology, Lahore at Lahore, Punjab[79]
    Mehran University of Engineering and Technology at Jamshoro, Sindh
    NED University of Engineering and Technology[80] at Karachi
    University of Engineering and Technology (NWFP) at Peshawar, North-West Frontier Province
    Sir Syed University of Engineering and Technology at Karachi
    University of Engineering and Technology, Taxila at Taxila, Punjab
    Institute of Space Technology, Islamabad
    The University of Lahore, Lahore
    Bahauddin Zakariya University, Multan
    Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology[81]
    Air University[82]
    Bahria University[83]
    Center for Advance Studies in Engineering
    COMSATS Institute of Information Technology[84]
    Federal Urdu University of Arts, Science & Technology
    National University of Sciences and Technology[85]
    Pakistan Institute of Engineering & Applied Sciences[86]
    Quaid-e-Awam university of Engineering, Science & Technology Nawabshah[87]
    Quaid-i-Azam University
    National University of Computer and Emerging Sciences, formerly FAST Institute of Computer Science[88]
    Prism Institute of Information Technology
    Philippines[edit]
    Adamson University[89]
    Batangas State University[90]
    AMA Computer University[91]
    Ateneo de Manila University[92]
    Bulacan State University[93]
    Colegio de San Juan de Letran Calamba[94]
    De La Salle University[95]
    Mapua Institute of Technology[96]
    Mariano Marcos State University[97]
    Polytechnic University of the Philippines[98]
    University of the East[99]
    University of San Jose - Recoletos[100]
    Technological Institute of the Philippines[101]
    University of the Philippines
    Puerto Rico[edit]
    Polytechnic University of Puerto Rico[102]
    South Africa[edit]
    University of Cape Town
    University of Pretoria[103]
    Stellenbosch University[104]
    North-West University[105]
    University of KwaZulu-Natal[106]
    Spain[edit]
    University of Oviedo
    University of Cádiz
    University of La Coruña
    Universidad Carlos III de Madrid
    Universitat Politècnica de Catalunya (FIB)
    Universidad de Zaragoza (EINA)
    Sri Lanka[edit]
    University of Peradeniya
    University of Moratuwa[107]
    University of Ruhuna
    Thailand[edit]
    King Mongkut's Institute of Technology Ladkrabang[108]
    King Mongkut's University of Technology Thonburi
    United Kingdom[edit]
    University of Greenwich[109]
    Glamorgan University[110]
    University of East Anglia[111]
    Vietnam[edit]
    FPT University[329]
    Venezuela[edit]
    Universidad de Oriente[330]
    Universidad Simón Bolívar[331]
    ```
