
import React from "react";
import {useState}  from "react"
import {meter,vector ,needle} from "../assets/index"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Checkbox
  } from "@material-tailwind/react";
import {eachCheckboxContents} from "../Constants/index"

function CheckboxComponent() {
    const [checkedCount,setCheckedcount] = useState(0)
    

    //handle every  checked event
    const  handleCheckboxChange =  (event) =>{
        const isChecked = event.target.checked
        //set the checkedCount state
        setCheckedcount((prevCount) => isChecked ? prevCount + 1 :  prevCount - 1 )
    }
    
    const totalNumberOfCheckboxes = eachCheckboxContents.length
    const needlePosition = (checkedCount/totalNumberOfCheckboxes) * 90 
    const myStyles = {
        position:"absolute",
        left:  `${5+ needlePosition}%`,
    
    }

    return (
        <>
        <div className="flex flex-col-reverse sm:flex-col">
            <div   className="grid-container container mx-auto  mt-[5%] grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-4  justify-items-center">
            {
                eachCheckboxContents.map(({labelForEachCheckbox,percent,placeholder})=> {

                    return (
                        <Card key ={labelForEachCheckbox}  
                              className="card-checkbox  mt-[10%] mx-0  grid  justify-items-start 
                                         w-[80%]  sm:min-w-[220px] sm:max-w-[250px]  sm:h-[120px] 
                                        relative bg-[rgba(221, 225, 237, 0.24)] "
                                        >
                            <CardBody>
                                <img className="absolute top-2 right-2" src={vector} alt="" />
                            <Checkbox   className=" m-0 checked:green   sm:p-3 "   
                                        color="green" 
                                        ripple={true} 
                                        onChange={handleCheckboxChange} 
                                        label={
                                        <Typography  className="font-sans break-words text-xm font-medium  sm:font-xl ">
                                            {labelForEachCheckbox}    
                                        </Typography>
                                        } />
                            </CardBody>     
                            <CardFooter className="pt-0  flex flex-col-reverse sm:flex-row">
                                <input placeholder={placeholder} 
                                       className="sm:placeholder:text-[#000000]/25 
                                                  placeholder:truncate placeholder:text-xm 
                                                  sm:placeholder:px-2 border-[0.01em] border-[#02C988]/20 rounded-full  
                                                  w-full  sm:h-[21px]" 
                                       type="text"  />
                                <Typography className="p-0 text-[#000000]/50 font-sans  font-semibold px-2 ">{percent}</Typography>
                            </CardFooter>
                        </Card>                        
                    )  
              })

            }
            </div>
            <div className="w-[90%] sm:w-2/3 mx-auto mt-10 relative">
                <ul className="flex flex-row justify-between py-2">
                    <li>High</li>
                    <li>Medium</li>
                    <li>Low</li>
                </ul>
                <img src={needle}   className="h-[20px] top-7 sm:top-10 sm:h-[24px]  md:h-[29px] " style={myStyles} alt=""/>
                <img src={meter} alt="" />
            </div>
            <div className="place-self-center" >
                <a href="#" className="inline-block text-center">
                    <button  className="py-5 hidden sm:block flex items-center gap-2 " type="">Check Detail Checklist here 
                    </button>
                </a>
                
            </div>
        </div>
        </>
      
    );
  }




  export default CheckboxComponent