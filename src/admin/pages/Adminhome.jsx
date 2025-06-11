import React from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Adminhome() {

  // barchart data

  const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

// pichart data

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];




  return (
    <>

      <Adminheader />


      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>

        {/* admin home contents */}
        <div className='p-4'>
          <div className="md:grid grid-cols-3 text-white">

            <div className=' md:px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FontAwesomeIcon icon={faBook} className='fa-3x' />
                </div>
                <div className='text-center'>
                  <h1 className='text-2xl'>Total number of Books</h1>
                  <h1 className='text-xl '>100+</h1>
                </div>
              </div>
            </div>


            <div className=' md:px-5 mt-4 md:mt-0'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-600 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FontAwesomeIcon icon={faUsers} className='fa-3x' />
                </div>
                <div className='text-center'>
                  <h1 className='text-2xl'>Total number of Users</h1>
                  <h1 className='text-xl'>100+</h1>
                </div>
              </div>

            </div>


            <div className=' md:px-5 mt-4 md:mt-0'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-400 rounded p-4'>
                <div className='flex justify-center items-center'>
                  <FontAwesomeIcon icon={faUserTie} className='fa-3x' />
                </div>
                <div className='text-center'>
                  <h1 className='text-2xl'>Total number of Employee</h1>
                  <h1 className='text-xl'>100+</h1>
                </div>
              </div>

            </div>
          </div>

          {/* diagram contents */}
          <div className="md:grid grid-cols-2 px-5 my-10">

            {/* bar chart */}
            <div style={{width:'100%' , height:'500px'}} className='px-10'>
              {/* responsive container are used to place the chart in responsive way */}
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart  data={data}>
                  {/* type of chart used */}
                  {/* here the data attribute reperent the data which holds the data to be displayed */}
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* the 3 3 represents 3 px width and 3px gap b/w line and cartesiangrid represent background dots */}
                  <XAxis dataKey="name" />
                  {/* x axis = name - label */}
                  <YAxis />
                  {/* y axis = automatically arranged based on data */}
                  <Tooltip />
                  {/* used to display data when hover */}
                  <Legend />
                  {/* used to fetch the data */}
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                  {/* bar represents the bar datakey=data to display , fill = color of the bar */}
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* pichart */}
            <div style={{width:'100%' , height:'500px'}} className='px-10'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart >
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>






      <Footer />

    </>
  )
}

export default Adminhome