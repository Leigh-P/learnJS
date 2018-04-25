function phi(table) {
    return (table[3] * table[0] - table[1] * table[2]) /
        Math.sqrt((table[2] + table[3]) *
            (table[1] + table[0]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
// update
/* function phi([n00,n01,n10,n11]){
    return ()
}
let {name}
*/

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        // for (let entry of JOURNAL)
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
}

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
    // get the collection of every type of events
}

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event,JOURNAL));
    if(correlation > 0.1 || correlation < -0.1){
    console.log(event + ":", correlation);
    }
}