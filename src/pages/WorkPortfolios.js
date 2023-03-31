import React, { useEffect, useState } from 'react'
import WorkPortfolioModal from '../modals/WorkPortfolioModal';
import { useParams, Link } from 'react-router-dom';
import { ListData } from '../Redux/Actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';

const WorkPortfolios = () => {
  const [type1, setType1] = useState("");

  const [videoList, setVideoList] = useState([]);
  const { type } = useParams();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const { listData } = useSelector(({ dashboardReducer }) => dashboardReducer);
  console.log("@@@@@@@@@listdata", listData)

  const handleToggleModal = () => {
    setShowModal(true)
  }

  useEffect(() => {
    setType1(type);
    let payload = {
      listType: "video"
    }
    dispatch(ListData(payload))

  }, [])

  useEffect(() => {
    if (listData) {
      setVideoList(listData?.videos)
      console.log("listData--->>>", listData?.videos)
    }

  }, [listData])

  const handleLabelClick = (val) => {
    //  setType1(val);

  }

  const checkType = (val) => {
    return (type1 === val)
  }

  const showTitle = (type1) =>{
      if(type1 ==='videos'){
        return "Videos"
      }else if(type1 ==='portfolios'){
          return "Work Portfolios"
      }else if(type1 ==='brochures'){
          return "Brochures"
      }else if(type1 ==='white_papers'){
          return "White Papers"
      }
  }

  return (
    <>
      <div className="flex justify-between items-center w-screen p-5">
        <Link to='/Home'>
          <span class="material-symbols-outlined flex items-center z-10 justify-center cursor-pointer text-5xl">home</span>
        </Link>
        <h1>{showTitle(type1)}</h1>
        <div className="border border-slate-400 p-2 w-72 rounded-3xl flex justify-between items-center">
          <span class="material-symbols-outlined flex items-center justify-center text-3xl">search</span>
          <input
            type="search"
            className=""
            id="exampleSearch2"
            placeholder="Search here" />
          <div className="flex items-center justify-between border border-slate-300 px-3 py-1 rounded-full">
            <span class="material-symbols-outlined">tune</span>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-center border border-gray-400 h-14 w-14 mr-5 rounded-full">
            <span className="material-symbols-outlined flex items-center justify-center text-3xl  cursor-pointer text-gray-400">
              notifications
            </span>
          </div>
          <div className="flex items-center justify-center border border-gray-400 h-14 w-14 rounded-full">
            <span className="material-symbols-outlined flex items-center justify-center text-3xl  cursor-pointer text-gray-400">person</span>
          </div>
        </div>

      </div>
      <div className="bg-slate-300 h-auto w-screen py-5 px-9 rounded">
        <WorkPortfolioModal show={showModal} setShow={setShowModal} />
        <div className="bg-white rounded-3xl px-5 py-6 mb-4">
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                className={`${checkType("portfolios") ? "bg-green-500" : "bg-indigo-500"} drop-shadow-xl cursor-pointer rounded text-white font-medium py-1.5 px-3 mr-1`}
                onClick={() => {
                  console.log("hii")
                  setType1("portfolios")
                }}
              >Work Portfolios</button>

              <button
                className={`${checkType("brochures") ? "bg-green-500" : "bg-indigo-500"} drop-shadow-xl cursor-pointer rounded text-white font-medium py-1.5 px-3 mr-1`}
                onClick={() => setType1("brochures")}
                type="button"

              >Brochures</button>
              <button
                className={`${checkType("white_papers") ? "bg-green-500" : "bg-indigo-500"} drop-shadow-xl cursor-pointer rounded text-white font-medium py-1.5 px-3 mr-1`}
                onClick={() => setType1("white_papers")}
                type="button"

              >White Papers</button>
              <button
                className={`cursor-pointer ${checkType("videos") ? "bg-green-500" : "bg-indigo-500"} drop-shadow-xl rounded text-white font-medium py-1.5 px-3 mr-1`}
                type="button"
                onClick={() => setType1("videos")}

              >Videos</button>
            </div>
            <div>
              <button className="bg-indigo-500 rounded text-white font-medium py-1.5 cursor-pointer  px-3 mr-1">Download</button>
              <button
                className="bg-indigo-500 rounded text-white font-medium py-1.5 cursor-pointer px-3 mr-1"
                onClick={handleToggleModal}
              >+ Work Portfolio</button>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-7 gap-4 bg-white rounded-3xl px-5 py-4 mb-4">
          <div className="font-medium">No.</div>
          <div className="font-medium">Title</div>
          <div className="font-medium">Country</div>
          <div className="font-medium">Domain</div>
          <div className="font-medium">Category</div>
          <div className="font-medium">Youtube Video</div>
        </div>
        <div className="h-80 overflow-auto">
        {videoList && videoList?.map((item, index) => (
            <div key={index} className="flex items-center justify-center grid grid-cols-7 gap-4 bg-white rounded-3xl px-5 py-4 mb-4 ">
              <div class="">{item?.No}</div>
              <div class="">{item?.Title}</div>
              <div class="">{item?.Country}</div>
              <div class="">{item?.Domain}</div>
              <div class="">{item?.Category}</div>
              <a href={item?.YoutubeVideo} target='_blank'>
                <span class="material-symbols-outlined text-3xl  cursor-pointer ">
                  smart_display
                </span>
              </a>
            </div>
        ))
        }
        </div>


      </div>
    </>
  )

}

export default WorkPortfolios;

//button1 == #007bff

