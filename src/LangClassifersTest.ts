import {assert} from 'chai'
import {NGramParser} from "./NGramParser";
import {LangClassifers} from "./LangClassifers";

describe("LangClassifiers", function() {

    it("basic", function () {

        const classifier = LangClassifers.create();

        assert.equal(classifier.classify(TEXT), 'es');

    })

});

const TEXT = "Pero tras no tener los resultados esperados e impulsado por el contraataque inglés lanzado a Berlín, Hitler desvió los bombardeos directamente a las ciudades inglesas. Así se pudo ver en la operación Blitz, donde los nazis bombardearon por más de cinco meses las ciudades más importantes de Inglaterra, pero más potentemente en su capital Londres. Las urbes de Liverpool, Coventry, Bristol, Southampton, Birmingham, Swindon, Plymouth, Cardiff, Mánchester y Sheffield también fueron fuertemente bombardeadas. Pese a todos los fuertes ataques de Alemania, Inglaterra resistió firmemente y al final, la Luftwaffe fue rechazada por los Hurricanes y los Spitfires, mientras la Marina Real británica mantenía el control del canal de la Mancha. El Blitz provocó alrededor de 43 000 muertes, y destruyó más de un millón de viviendas, pero fracasó en alcanzar los objetivos estratégicos de sacar a Inglaterra de la guerra o dejarla incapaz de resistir una invasión. Así, los planes de invasión alemanes fueron pospuestos indefinidamente.\n" +
    "\n"
