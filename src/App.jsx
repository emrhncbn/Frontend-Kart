import { useState } from 'react'
import './styles.css'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'

export default function App() {
  const [cardOpen, setCardOpen] = useState(false)
  const [mouseDown, setMouseDown] = useState(false)
  const [initialMouseX, setInitialMouseX] = useState(0)

  const handleMouseDown = (event) =>{
    setMouseDown(true)
    setInitialMouseX(event.clientX)
  }

  const handleMouseUp = () =>{
    setMouseDown(false)
    if(cardOpen){
      setCardOpen(false)
    }
  }

  const handleMouseMove = (event) =>{
    if(mouseDown && !cardOpen){
      const currentMouse = event.clientX
      const delta = currentMouse - initialMouseX
      if(delta >= 50){
        setCardOpen(true)
      }
    }
  }
  /* Challenge

	Kullanıcı kartın kapağına tıkladığında kart açılır ve kapanır, ancak kart şirketi daha sofistike bir kontrol yöntemi istiyor. Kullanıcının mouse ile parmağını kaydırmasını taklit eden bir yöntem. Göreviniz aşağıdaki gibi bir tane ayarlamaktır:
		
		1. "open" class'ı, 34. satırdaki className'i "cover" olan div'e yalnızca aşağıdaki koşulların tümü karşılandığında uygulanmalıdır: 
		   	
			   - Kullanıcı mouse butonunu "cover" div'inin içinde bir yerde basılı tutuyorsa.
			   
    		   - Mouse butonunu basılı tutmaya devam ederken, imleci basılı tutmaya başladığı yerin 50 piksel soluna hareket ettirir. 
		
		2. Kullanıcı daha sonra mouse'unu "cover" div'i açıkken aşağı doğru hareket ettirirse, "open" 
		   class'ı kaldırılmalı ve böylece kart kapatılmalıdır. 
		   
	Not: cardOpen state'ini, 33. satırdaki onClick olay işleyicisini ve 34. satırdaki "open" class'ının şu anda uygulanma şeklini değiştirmeniz veya düzenlemeniz gerekecektir. 
*/

  return (
    <div className='wrapper'>
      <Header />
      <div className='card'>
        <InnerMessage />

        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // onClick={() => setCardOpen((pre) => !pre)}
          className={`cover ${cardOpen && 'open'}`}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' />
        </div>
      </div>
    </div>
  )
}
