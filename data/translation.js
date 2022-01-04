/**
 * The translation's documentation is a dictionary using the key as the id language  and the value as a dictionary
 * with all the translation needed with english as the default value
 * @type {{en: {sofa: string, fridge: string, table: string}, fr: {sofa: string, fridge: string, table: string}}}
 */

const translation = {
    en: {
        fridge: 'fridge',
        sofa: 'sofa',
        table: 'table'
    },
    fr: {
        fridge: 'frigo',
        sofa: 'canape',
        table: 'table'
    }
}

module.exports = translation;