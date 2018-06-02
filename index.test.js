const parse = require('./index')
test('should work on a simple university name', () => Promise.all(
  [{
      input: "Next year I will study at Université de Technologie de Compiègne, France",
      expected: [{
        "ngram": "Université de Technologie de Compiègne  France",
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
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 6,
          "begin": 26,
          "end": 72
        }
      }]
    },
    {
      input: "Omggg I've been accepted to Harvard so happy!!! 👩‍💼 👩‍⚖️",
      expected: [{
        "ngram": "Harvard",
        "value": {
          "id": "us-ma-cambridge-harvard",
          "country": "United States",
          "state": "Massachusetts",
          "city": "Cambridge",
          "location": [
            42.374444, -71.116944
          ],
          "acceptance_rate": [{
            "year": 2016,
            "value": 5.4
          }],
          "students": [{
            "year": 2014,
            "value": 21000
          }],
          "label": {
            "en": "Harvard University"
          },
          "aliases": {
            "en": [
              "Harvard",
              "Harvard College",
              "Harvard Uni",
              "Harvard Uni Cambridge",
              "Harvard Univ",
              "Harvard Univ Cambridge",
              "Harvard University",
              "Harvard University Cambridge",
              "Harvard University, Cambridge",
              "Harvard Cambridge"
            ]
          },
          "type": "private university",
          "programs": []
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 5,
          "begin": 28,
          "end": 35
        }
      }]
    },
    {
      input: "The professional video game player is a MIT drop-out, he founded is first startup at 7 years old",
      expected: [{
        "ngram": "MIT",
        "value": {
          "id": "us-ma-cambridge-mit",
          "country": "United States",
          "state": "Massachusetts",
          "city": "Cambridge",
          "location": [
            42.35982, -71.09211
          ],
          "acceptance_rate": [{
            "year": 2015,
            "value": 32
          }],
          "students": [{
            "year": 2015,
            "value": 11319
          }],
          "label": {
            "en": "Massachusetts Institute of Technology"
          },
          "aliases": {
            "en": [
              "Massachusetts Institute of Technology",
              "MIT",
              "MIT, Cambridge"
            ]
          },
          "type": "private research university",
          "programs": []
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 7,
          "begin": 40,
          "end": 43
        }
      }]
    }
  ].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))

test('should work on an unexpected university spelling', () => Promise.all(
  [{ // spanish
    input: "el año que viene voy a trabajar a la universidad de tecnologica de Compiègne",
    expected: [{
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
    }]
  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))

test('return empty list if there is no match', () => Promise.all(
  [{
    input: `  `,
    expected: []
  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))


test('should match long university names', () => Promise.all(
  [{
    input: `
     1901-1902 Tokyo University.
     1979-1982 Hong Kong University of Science and Technology
  `,
    expected: [{
        "ngram": "Tokyo University",
        "value": {
          "country": "japan",
          "label": "Tokyo University",
          "aliases": [],
          "programs": [
            "Computer Engineering"
          ]
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 7,
          "begin": 16,
          "end": 32
        }
      },
      {
        "ngram": "Hong Kong University of Science and Technology",
        "value": {
          "id": "hk-university-of-science-and-technology",
          "country": "hong kong",
          "label": {
            "en": "The Hong Kong University of Science and Technology"
          },
          "aliases": {
            "en": "Hong Kong University of Science and Technology"
          },
          "programs": [
            "Computer Engineering"
          ]
        },
        "score": 1,
        "position": {
          "sentence": 1,
          "word": 1,
          "begin": 49,
          "end": 95
        }
      }
    ]
  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))