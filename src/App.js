import React, {useState} from 'react'
import ip from 'ip'
function App(){

  const details = useState(true);
  const handleClick=()=>{
    document.write(ip.address())
    var findIP = new Promise(r=>{var w=window,a=new(w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);
    console.log('a', a)
    a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
    findIP.then(ip => document.write('your ip: ', ip)).catch(e => console.error(e))
  }
  return (
    <div className="row">
    <div className="col text-center">
        <h2>Find my IP and Location</h2>
        <p className="mt-3">
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Find my details
            </button>

            <div className="row justify-content-center mt-3">
                <div className="col-lg-6 text-center text-dark">
                    {details && (
                        <ul className="list-group">
                            <li className="list-group-item">
                               hiiii
                            </li>
                            <li className="list-group-item">
                                IP
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </p>
    </div>
</div>
   )
}

export default App;