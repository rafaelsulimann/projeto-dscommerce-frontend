export default function FormInput(props: any){

    const {validation, invalid="false", dirty="false", onTurnDirty, ...inputProps} = props;

    function handleTurnDirty(){
        onTurnDirty(props.name);
    }

    return(
        <input onBlur={handleTurnDirty} {...inputProps} data-invalid={invalid} data-dirty={dirty}/>
    );
}