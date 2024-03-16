import {useEffect,useState} from "react"

function useCurrencyinfo(currency){
       const [data,setData]=useState({})
       useEffect(()=>{
              fetch({
                     "usd":{
                            "inr":82.01
                     }

              }
              )
              .then((res)=> res.json())
              .then((res)=> setData(res[currency]))       // res.currency
       },[currency])
       

       return data

}

export default useCurrencyinfo;