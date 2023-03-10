export function update(inputs:any, name:string, newValue:string){
    return {...inputs, [name] : {...inputs[name], value: newValue }};
}

export function toValues(formData:any){
    const data: any = {};
    for(var name in formData){
        data[name] = formData[name].value;
    }
    return data;
}