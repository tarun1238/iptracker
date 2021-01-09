import React, {useState} from 'react'
import ip from "ip";
function App(){

  const details = useState(null);

  const getUserGeolocationDetails = () => {
    var findIP = new Promise(r=>
        {var w=window,a=new(w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)
            ({iceServers:[]}),b=()=>{};
            a.createDataChannel("");
            a.createOffer(c=>a.setLocalDescription(c,b,b),b);
            console.log(a)
            a.onicecandidate=c=>
            {
                try
                {
                    console.log(c, 'candidate')
                 c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g)
                    .forEach(r)
                
                }
                catch(e){
                  console.log('error', e)
                }
            }
        })

        findIP.then(ip => document.write('your ip: ', ip)).catch(e => console.error(e))


        const findIP1 = (onNewIP) => { // onNewIp - your listener function for new IPs
            // compatibility for firefox and chrome
            const myPeerConnection = window.RTCPeerConnection ||
                                     window.mozRTCPeerConnection ||
                                     window.webkitRTCPeerConnection
            const pc = new myPeerConnection({ iceServers: [] })
            const noop = () => {}
            const localIPs = {}
            const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g
          
            const ipIterate = (ip) => {
              if (!localIPs[ip]) onNewIP(ip)
              localIPs[ip] = true
            }
            pc.createDataChannel('') // create a bogus data channel
            pc.createOffer(sdp => {
              sdp.sdp.split('\n').forEach(line => {
                if (line.indexOf('candidate') < 0) return
                line.match(ipRegex).forEach(ipIterate)
              })
              pc.setLocalDescription(sdp, noop, noop)
              console.log('pc', pc)
            }, noop) // create offer and set local description
            pc.onicecandidate = (ice) => { // listen for candidate events
              if (
                !ice ||
                !ice.candidate ||
                !ice.candidate.candidate ||
                !ice.candidate.candidate.match(ipRegex)
              ) return
              ice.candidate.candidate.match(ipRegex).forEach(ipIterate)
            }
          }
          
          const addIP = (ip) => {
            console.log('got ip: ', ip)
          }
          
          findIP1(addIP)
};
  
  return (
    <div className="row">
    <div className="col text-center">
        <h2>Find my IP and Location</h2>
        <p className="mt-3">
            <button
                className="btn btn-primary"
                onClick={getUserGeolocationDetails}
            >
                Find my details
            </button>

            <div className="row justify-content-center mt-3">
                <div className="col-lg-6 text-center text-dark">
                    {details && (
                        <ul className="list-group">
                            <li className="list-group-item">
                                {ip.subnet()}
                                {`${details.city}, ${details.country_name}(${details.country_code})`}
                            </li>
                            <li className="list-group-item">
                                IP: {details.IPv4}
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