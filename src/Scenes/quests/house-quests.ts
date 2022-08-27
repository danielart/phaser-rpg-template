export const csvStringQuest = [
    ['type', 'key', 'next', 'end'], // Line 1: HEADER

    ['q', 'texto de ejemplo, ves a donde la carne', '', ''], // Quest1 Part1
    ['', '', 'Pulsa E para comer', ''],         //    First Option for Quest1 Part1 (there could be several option per Quest)
    ['q', 'Coge la Carne', '', ''],        //  Quest1 Part2
    ['', '', 'Ahora ves a oler el sillon', ''],  //    First Option for Quest1 Part2
    ['', '', 'Ahora ves a oler el sofá', ''],  //   awcons Option for Quest1 Part2
    ['q', 'Oler el sillon', '', ''], //  Quest1 Part3
    ['', '', 'DONE', '', ''],           //  First Option for Quest1 Part3
    ['q', 'DONE', '', '1'],            //  QUEST End
].map(x => x.join(',')).join('\n');