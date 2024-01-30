/**
   Licence:
   Copyright (c) 2022 Gecosistema S.r.l.

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
   OTHER DEALINGS IN THE SOFTWARE.
 */

import { useEffect } from "react";


function on(eventType, listener) {
  document.addEventListener(eventType, listener);
}

function off(eventType, listener) {
  document.removeEventListener(eventType, listener);
}

const fireEvent = (eventType, data) => {
  const event = new CustomEvent(eventType, { detail: data })
  document.dispatchEvent(event)
}

/**
 * To be use with useEffects:
 * 
 * Es: 
 * ```
 * useEffects(()=>handleEvent("my-event", myHandlerFunction),[])
 * ```
 *
 * @param {Tob } eventName 
 * @param {*} listener 
 * @returns 
 */
 const handleEvent = ( eventName, listener)=>{
  
  on(eventName, listener)
  return ()=>{ 
      off(eventName, listener)  
  }
}

const useEvent = (eventName, listener)=>{

  //let _deps =  [eventName, listener].concat(dependencies?dependencies:[])

  useEffect(()=>{
    on(eventName, listener)
    return ()=>{ 
        off(eventName, listener)  
    }
  }, [eventName, listener])
}


export { on,  off, fireEvent, useEvent, handleEvent };


