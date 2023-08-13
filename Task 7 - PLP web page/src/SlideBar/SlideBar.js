import Colors from './Colors/Color';
import Price from './Price/Price';

import "./SlideBar.css";

 function SlideBar({handleChange}) {
  return (
    <section className="SlideBar">
        
        <Colors handleChange={handleChange}></Colors>
        <Price handleChange={handleChange}></Price>
        
    </section>
  )
}
export default SlideBar