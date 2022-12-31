import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Backend } from '../../Config'


export const AllUrls = () =>async dispatch =>{
    await axios.get(`${Backend}/urls`).then(res=>{

        const userurls=[]
        res.data.map(rs=>{
            if(rs.email === jwtDecode(localStorage.getItem('user')).email){
                userurls.push(rs)
            }
        })
    
        dispatch({type:"URLSALL",payload:userurls})
    })
}


export const AddIntoJson = (data) => async dispatch =>{
    console.log(data);
 await axios.post(`${Backend}/urls`,{...data,id:Date.now().toString(),email:jwtDecode(localStorage.getItem('user')).email}).then(res=>{
    dispatch(AllUrls())
 })
}

export const ShortenAction = (url) => async dispatch=>{
   
    await axios.get(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`).then(res=>{
        document.getElementById('error').innerText=""
        dispatch(AddIntoJson(res.data.result))
    }).catch(err=>{
        console.log(err);
        document.getElementById('error').innerText="Entered url is not a valid url"
        setTimeout(()=>{
            document.getElementById('error').innerText=""
        },5000)
    })
    
    
    
}


export const deleteUrl = (id) =>async dispatch=>{
    await axios.delete(`${Backend}/urls/${id}`).then(res=>{
        dispatch(AllUrls())
     })
}