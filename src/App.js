import React, {useState} from 'react'
import ip from 'ip'
import localIpUrl from 'local-ip-url'
function App(){

  const details = useState(true);
  const handleClick=()=>{
    document.write(ip.address())
    document.write(localIpUrl('public', 'ipv4'))
    document.write(localIpUrl('private', 'ipv4'))
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