import bugModel from './models/bugModel'

export function retriveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:26877712,
        name:"crash when loading",
        details: "clashes after 4 seconds",
        steps:"open the application and it clashes",
        version:"V2.0",
        assigned:"Jane kigenyi",
        priority:1,
        time:"23:56",
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}
