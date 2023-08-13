import "./Color.css";
import Inputs from "../../Componets/Inputs";

 function Color({handleChange}){
  return (
    <div>
    <h2 className="sidebar-title price-title">Colors</h2>
    <label className="sidebar-label-container">
      <input onChange={handleChange} 
             type = "radio"
             value ="" 
             name = "test1"
      />
      <span className="checkmark all"></span>All
    </label>

    <Inputs handleChange={handleChange}
            value="white"
            title="White"
            name="test1"
            
    />

    <Inputs handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            
    />
     <Inputs handleChange={handleChange}
            value="rose"
            title="Rose"
            name="test1"
            
    />
     <Inputs handleChange={handleChange}
            value="green"
            title="Green"
            name="test1"
            
    />
     <Inputs handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
            
    />
  


  </div>
  )
}

export default Color;
