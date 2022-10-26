export const countCharacters = (str: string, character: string | RegExp) => new RegExp(character, 'g').exec(str) || []
