import React from 'react'
import Images from '../images';
import { Link, useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }


  return (
    <div className="flex items-center bg-gray-200 justify-center h-screen w-screen">
      <div className="grid grid-cols-2 gap-3">
        <Link to={`/workportfolios/portfolios`}>
          <div
            className="px-48 drop-shadow-xl cursor-pointer py-16 bg-orange-300 m-3 rounded-xl"
          >
            <img src={Images.home_icon} height="90px" width="90px" alt="image" />
            <div className="mb-2 mt-2">Work Portfolios</div>
          </div>
        </Link>

        <Link to={`/workportfolios/white_papers`}>
          <div
            className="px-48 drop-shadow-xl cursor-pointer py-16 bg-amber-300 m-3 rounded-xl"
          >
            <img src={Images.home_icon} height="90px" width="90px" alt="image" />
            <div className="mb-2 mt-2">White Papers</div>

          </div>
        </Link>

        <Link to={`/workportfolios/brochures`}>
          <div
            className="px-48 drop-shadow-xl cursor-pointer py-16 bg-lime-300 m-3 rounded-xl"
          >
            <img src={Images.home_icon} height="90px" width="90px" alt="image" />
            <div className="mb-2 mt-2">Brochures</div>

          </div>
        </Link>

        <Link to={`/workportfolios/videos`}>
          <div
            className="px-48 drop-shadow-xl cursor-pointer py-16 bg-fuchsia-300 m-3 rounded-xl"
          >
            <img src={Images.home_icon} height="90px" width="90px" alt="image" />
            <div className="mb-2 mt-2">Videos</div>

          </div>
        </Link>

      </div>
    </div>
  )
}

export default Home;
