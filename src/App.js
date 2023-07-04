import  React,{  useMemo, useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import list from "./data";
import "./styles/App.css";

const App = () => {
  const [display, setDisplay] = useState(true);
  const [cart, setCart] = useState([]);
  const [newdata,setnewdata]=useState([])
  const [check,setcheck]=useState(0);

const [mobileshow,setmobileshow]=useState(false);
const [laptopshow,setlaptopshow]=useState(false);
const [desktopshow,setdesktopshow]=useState(false);
const [ramshow,setramshow]=useState(false)

const [mobiledata,setmobiledata]=useState([]);
const [laptopdata,setlaptopdata]=useState([]);
const [desktopdata,setdesktopdata]=useState([]);


const [selectedOption, setSelectedOption] = useState('');
const [selects, setselects] = useState('');


const [brand,setbrand]=useState('');
const [size,setsize]=useState('')


const handleChange=(e)=>{
  setSelectedOption(e.target.value)
}

const handleChange2=(e)=>{
  setselects(e.target.value)
}

const dataitemchange=(item)=>{
     setbrand(item)
}

const datasizechange=(item)=>{
  setsize(item)
}

let cont;
  useMemo(()=>{
  if(mobileshow===true && ramshow===true)
  {
    if(brand!=='' && size!=='')
    {
      cont=list.filter(items=>{
        return items.size===size && items.brand===brand
      })
       setnewdata(cont)
      setcheck(1)
    }

    else if(brand==='')
    {
      cont=list.filter(items=>{
        return items.size===size;
      })
      setnewdata(cont)
      console.log(size)
      console.log(cont)
      setcheck(1)
    }
    else if(size==='')
    {
      cont=list.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }

  }
  
  else if(laptopshow===true && ramshow===true)
  {
    if(brand!=='' && size!=='')
    {
      cont=list.filter(items=>{
        return items.size===size&& items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }

    else if(brand==='')
    {
      cont=list.filter(items=>{
        return items.size===size
      })
      setnewdata(cont)
      setcheck(1)
    }
    else if(size==='')
    {
      cont=list.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }
  }

  else if(desktopshow===true && ramshow===true)
  {
    if(brand!=='' && size!=='')
    {
      cont=list.filter(items=>{
        return items.size===size && items.brand===brand;
      })
      setnewdata(cont)
      setcheck(1)
    }

    else if(brand==='')
    {
      cont=list.filter(items=>{
        return items.size===size
      })
      setnewdata(cont)
      setcheck(1)
    }
    else if(size==='')
    {
      cont=list.filter(items=>{
        return items.brand===brand
      })
      setnewdata(cont)
      setcheck(1)
    }
  }

 else if(mobileshow===true)
  {
    cont=mobiledata.filter(items=>{
      return items.brand===brand
    })
    setnewdata(cont)
    setcheck(1)
  }

 else if(laptopshow===true)
  {
    cont=laptopdata.filter(items=>{
      return items.brand===brand
    })
    setnewdata(cont)
    setcheck(1)
  }

  else if(desktopshow==true)
  {
    cont=desktopdata.filter(items=>{
      return items.brand===brand
    })
    setnewdata(cont)
    setcheck(1);
  }

  else if(ramshow===true)
  {
    cont=list.filter(items=>{
      return items.size===size
    })
    setnewdata(cont)
    setcheck(1);
  }

},[brand,size])



const desktopclick=()=>{
  setdesktopshow(!desktopshow);
}

const laptopclick=()=>{
  setlaptopshow(!laptopshow)
}

const mobileclick=()=>{
  setmobileshow(!mobileshow)
}

const ramclick=()=>{
  setramshow(!ramshow)
}

useMemo(()=>{
  if(laptopshow===false&&desktopshow===false &&mobileshow===false )
  {
   const items=list.filter(item=>{
      return item
    })
    setnewdata(items);
    setcheck(1)
  }
  
  else if(laptopshow===true&&desktopshow===true &&mobileshow===true)
  {
   const items=list.filter(item=>{
      return item
    })
    setnewdata(items);
    setcheck(1)
  }
  else if(mobileshow===true&&laptopshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='mobile' || item.type==='laptop';
    })
    setnewdata(items);
    setmobilap(items)
    setcheck(1)
  }
  else if(mobileshow===true&&desktopshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='mobile' ||item.type==='desktop';
    })
    setnewdata(items);
    setmobidesk(items)
    setcheck(1)
  }
  else if(laptopshow===true&&desktopshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='laptop' ||item.type==='desktop';
    })
    setnewdata(items);
    setlapdesk(items)
    setcheck(1)
  }
 else if(mobileshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='mobile';
    })
    setnewdata(items);
    setmobiledata(items)
    setcheck(1)
  }
 else if(laptopshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='laptop';
    })
    setnewdata(items);
    setlaptopdata(items)
    setcheck(1)
  }
  else if(desktopshow===true)
  {
   const items=list.filter(item=>{
      return item.type==='desktop';
    })
    setnewdata(items);
    setdesktopdata(items)
    setcheck(1)
  }
  else if(ramshow===true)
  {
   const items=list.filter(item=>{
      return item;
    })
    setnewdata(items);
    setcheck(1)
  }


},[mobileshow,laptopshow,desktopshow,ramshow])

  return (
    <React.StrictMode>
      <Navbar setDisplay={setDisplay} size={cart.length} />
      <div className='center'>
      <div className="left">
       
      <div className="inside">
      <div className='outerbrand'><input  onChange={mobileclick}  type="checkbox"/><span>MOBILE BRAND</span></div>
       {
         mobileshow?(
        <div className="inner-cont">
      <div className="innerbrand"><input  type="radio" value="option1" onChange={handleChange} onClick={()=>dataitemchange('Vivo')} checked={selectedOption === 'option1'}  /><label>VIVO</label></div>
      <div className="innerbrand"> <input type="radio" value="option2" onChange={handleChange} onClick={()=>dataitemchange('Oppo')} checked={selectedOption === 'option2'}/><label>OPPO</label>  </div>
      <div className="innerbrand"> <input  type="radio" value="option3" onChange={handleChange} onClick={()=>dataitemchange('Redmi')} checked={selectedOption === 'option3'} /><label>REDMI</label></div>
      <div className="innerbrand">
       <input  type="radio" value="option4" onChange={handleChange} onClick={()=>dataitemchange('Realme')} checked={selectedOption === 'option4'}  /><label>REALME</label>
       </div>
       <div className="innerbrand">
       <input type="radio" value="option5" onChange={handleChange} onClick={()=>dataitemchange('Oneplus')} checked={selectedOption === 'option5'}  /><label>ONEPLUS</label>
       </div> 
       <div className="innerbrand">
       <input type="radio" value="option6" onChange={handleChange} onClick={()=>dataitemchange('Samsung')} checked={selectedOption === 'option6'}/><label>SAMSUNG</label>
      </div>
       </div>
         ):
         (null)
       }
      <div className='outerbrand'><input onChange={laptopclick}   type='checkbox'/><span>LAPTOP BRAND</span></div>
      {
        laptopshow?

        (
          <div className="inner-cont">
       <div className="innerbrand"><input type="radio" value="option7" onChange={handleChange}  onClick={()=>dataitemchange('Lenovo')} checked={selectedOption === 'option7'} /><label>LENOVO</label></div>
       <div className="innerbrand"><input type="radio" value="option8" onChange={handleChange} onClick={()=>dataitemchange('Hp')} checked={selectedOption === 'option8'}/><label>HP</label></div>
       <div className="innerbrand"><input type="radio" value="option9" onChange={handleChange} onClick={()=>dataitemchange('Dell')} checked={selectedOption === 'option9'} /><label>DELL</label></div>
       <div className="innerbrand"><input type="radio" value="option10" onChange={handleChange} onClick={()=>dataitemchange('Acer')} checked={selectedOption === 'option10'} /><label>ACER</label></div>


          </div>



        ):
        (null)
      }

      
       <div  className='outerbrand' >  <input type='checkbox' onChange={desktopclick}/><span>DESKTOP BRAND</span></div>

       {

        desktopshow?
        (
          <div className="inner-cont">
       <div className="innerbrand"><input type="radio" value="option11" onChange={handleChange}  checked={selectedOption === 'option11'}onClick={()=>dataitemchange('lenovo')}   /><label>LENOVO</label></div>
       <div className="innerbrand"><input  type="radio" value="option12" onChange={handleChange} checked={selectedOption === 'option12'}onClick={()=>dataitemchange('hp')}  /><label>HP</label></div>
       <div className="innerbrand"><input  type="radio" value="option13" onChange={handleChange} checked={selectedOption === 'option13'} onClick={()=>dataitemchange('dell')} /><label>DELL</label></div>
       <div className="innerbrand"><input  type="radio" value="option14" onChange={handleChange} checked={selectedOption === 'option14'}onClick={()=>dataitemchange('acer')}  /><label>ACER</label></div>
       <div className="innerbrand"><input  type="radio" value="option15" onChange={handleChange}  checked={selectedOption === 'option15'}onClick={()=>dataitemchange('asus')} /><label>ASUS</label></div>
       </div>


        ):
        (null
        )

       }
      

      <div className="outerbrand"><input onChange={ramclick}   type="checkbox"/><span>RAM</span></div>
       {
         ramshow?(

          <div className="inner-cont">
       <div className="innerbrand"> <input  type="radio" value="option1"onChange={handleChange2} checked={selects=== 'option1'} onClick={()=>datasizechange('4GB')}   /><label>4GB</label></div>
      <div className="innerbrand"> <input type="radio" value="option2" onChange={handleChange2}  checked={selects === 'option2'}onClick={()=>datasizechange('8GB')}  /><label>8GB</label></div>
       <div className="innerbrand"><input  type="radio" value="option3"onChange={handleChange2} checked={selects=== 'option3'} onClick={()=>datasizechange('12GB')}  /><label>12GB</label></div>
       <div className="innerbrand"><input  type="radio" value="option4" onChange={handleChange2}  checked={selects=== 'option4'}onClick={()=>datasizechange('16GB')}  /><label>16GB</label></div>
        </div>

         ):
         (
          null
         )

       }

       </div>

       </div>
           {display ? (
              <Body  data={newdata} check={check} cart={cart} setCart={setCart}/>
            ) : (
              <Cart cart={cart} setCart={setCart} />)
           }
      
      </div>
    </React.StrictMode>
  );
};

export default App;
