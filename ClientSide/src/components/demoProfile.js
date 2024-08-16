import React from 'react'

const Profile = () => {

    const auth = localStorage.getItem('user');


  return (
    <div className='container pflc'>
        <div className="card pfl">
        <img src="https://www.shareicon.net/data/128x128/2016/07/03/790265_people_512x512.png" className="card-img-top imgs" alt="..." />
    <div className="card-body">
        <h5 className="card-title">Profile</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><strong>Name</strong> : {JSON.parse(auth).name}</li>
    <li className="list-group-item"><strong>Email</strong>: {JSON.parse(auth).email}</li>
  </ul>

  
</div>
    </div>
  )
}

export default Profile
