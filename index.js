'use strict'

const ParseEntities = require('@datagica/parse-entities')

const data = require('./database')

class Parser extends ParseEntities {
  constructor(opts) {
    super({
      debug: false,
      fields: ['label','aliases'],
      data,
      maxLength: 7,
      spellings: (map, name) => {
        // console.log("\nIN: "+name);

        // it is about 10% faster without the regex.. maybe this is because we
        // didn't compile it


        // about 850ms to run the test
        /*
        const replaced_ = name
         .replace(/universi(?:tée|dad|tat) (?:de )?(?:tech?nologica|tech?nologique|tech?nologie|tech?nologique)/gi, 'university of technology')
         .replace(/universi(?:tée|dad|tat)/gi, 'university')
         .replace(/university/gi, 'uni')
         .replace(/ (?:a|au|aux) (?:la|le|les|los) /gi, ' at the ')
         .replace(/ (?:la|le|el|les|los) /gi, ' the ')
         .replace(/sme /gi, 'sm ')
         .replace(/ de /gi, ' of ');
         */

         // about 780ms to run the test
         const replaced = name
           .replace('universitée de technologie', 'university of technology')
           .replace('universidad de tecnologica', 'university of technology')
           .replace('technische universität', 'university of technology')
           .replace('université', 'university')
           .replace('universidad', 'university')
           .replace('universität', 'university')
           .replace(' a la ', ' at the ')
           .replace(' le ', ' the ')
           .replace(' la ', ' the ')
           .replace(' el ', ' the ')
           .replace(' les ', ' the ')
           .replace(' los ', ' the ')
           .replace(' los ', ' the ')
           .replace(' de ', ' of ')
           .replace(' de ', ' of ') // twice: on purpose

        // console.log("OUT:"+replaced)
        map.set(replaced, 0.67)
      }
    })
  }
}
const singletonInstance = new Parser()
const singletonMethod = function() { return singletonInstance.parse.apply(singletonInstance, arguments) }
module.exports = singletonMethod
module.exports.default = singletonMethod
module.exports.database = data
module.exports.parser = singletonInstance
module.exports.Parser = Parser