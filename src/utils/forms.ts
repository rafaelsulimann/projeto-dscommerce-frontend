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

export function updateAll(inputs: any, response: any){
    const newInputs: any = {};
    for(var name in inputs){
        newInputs[name] = {...inputs[name], value: response[name]};
    }
    return newInputs;
}

export function validate(inputs: any, name: string){
    if(!inputs[name].validation){
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);
    return {...inputs, [name]: {...inputs[name], invalid: isInvalid.toString()}} 
}