// IMPORT SECTION
import React from 'react'
import { Link } from 'react-router-dom'
import './explore.css'
// =======================================================================================
const Explore = () => {
    const cities = [
        "Bangalore",
        "Chennai",
        "Delhi",
        "Hyderabad",
        "Kolkata",
        "Mumbai",
        "Pune"
        
    ]

    const cityimgs = [
        "https://i.pinimg.com/originals/72/4f/06/724f066edfefde900fab352e50cd6a54.jpg",
        "https://lp-cms-production.imgix.net/2019-06/f142b3016a4a4bb7bb7c20b1aa38a7c6-chennai-madras.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200",
        "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/06/cover-10.jpg",
        "https://th.bing.com/th/id/R.9c247dfc6ccfc0d12bcfae0ea2cf3ddd?rik=3px%2frKhXR4AVHw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_DBdASmjjss4%2fTFLqft8AUZI%2fAAAAAAAAAC0%2fIb9foHHtSL0%2fs1600%2fcharminar2.jpg&ehk=ZquPeG1EqtP90cihGHZvVuSVvT26z29aVl6HRQIr7oI%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.QVSoLjd5S7wn4Aggi5Jp6AHaE8?pid=ImgDet&rs=1",
        "https://1.bp.blogspot.com/-uqv7sYU74Ho/Xgtlb2rRVEI/AAAAAAAADBs/Dcwg7IYfX6MFp84yHuXd9Vzy7xmvquT-wCLcBGAsYHQ/s1600/u.6.jpg",
        "https://www.adotrip.com/public/images/city/master_images/5e4d07bdd37f0-Pune_Travel.jpg"
    ]
  return (
    <div className="explore-container">
        <div className="explore-heading">
           <h3>Discover your destination</h3>
       

        </div>
        <div className="explore-cities">
            {cities.map((city, index) => (
              <Link to={`/search?city=${city.toLowerCase()}`}className="explore-city" key={index}> 
                   <div className="cityimg"> <img src={cityimgs[index]} alt={city}/></div>
                   <p>{city}</p>
                   </Link>

            ))}
        </div>
    </div>
  )
}

export default Explore