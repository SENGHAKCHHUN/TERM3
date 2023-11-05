let students = ['Romdul', 'RomChong', 'Kolap'];
let countries = ['Canada', 'Cambodia', 'Thai'];
let majors = ['SNA', 'WEB', 'Database'];
let obj = {};
let newarr = [];
for (let i = 0; i < students.length; i++) {
    newarr.push(obj);
    for (let j = 0; i < majors.length; j++) {
        obj.student = students[j];
        obj.countries = countries[j]
        obj['majors'] = majors[j]
    }
}
console.log(newarr)