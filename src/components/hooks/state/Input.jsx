
import {inputs} from "./inputsArray"

function Input({changeFormData,userForm})
{
   

    return (
       <>
        {inputs.map((inp,i)=>
        {
            return (
                <>
                <input {...inp} onChange={changeFormData} value={userForm[inp.name]}/>
                <br />
                </>
            )
        })}
       </>
    )
}

export default Input