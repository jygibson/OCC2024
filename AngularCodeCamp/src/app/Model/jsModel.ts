export class MadLibsModel {
    properNoun: string;
    noun: string;
    adjective: string;
    verb: string;
    verb2: string;
    madLibs: boolean;

    constructor(properNoun: string,
        noun: string,
        adjective: string,    
        verb: string,
        verb2: string,
        madLibs: boolean) {
            properNoun = properNoun,
            noun = noun,
            adjective = adjective
            verb = verb,
            verb2 = verb2,
            madLibs = madLibs
      }
}