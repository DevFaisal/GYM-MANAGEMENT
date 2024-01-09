import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
    const [members, setMembers] = useState([])
    const [totalMembers, setTotalMembers] = useState(0)

    const getMembers = async () => {
        await axios.get(`${import.meta.env.VITE_SERVER_URL}dashboard/start`)
            .then(res => {
                if (res.status === 200) {
                    setMembers(res.data)
                    setTotalMembers(res.data.users?.length)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    getMembers()
    useEffect(() => {
        getMembers();
    })

    return (
        <div className='h-screen bg-lime-900'>
            <div className='flex justify-between gap-10 p-10'>
                <div className="flex flex-col gap-2">
                    <div className='bg-white  p-5'>
                        <h1 className="text-xl">Total Members : {totalMembers}</h1>
                    </div>
                    <div className='bg-white  p-5'>
                        <h1 className="text-xl">Total Revenue: $10,000</h1>
                    </div>
                    <div className='bg-white  p-5'>
                        <h1 className="text-xl">Outstanding Payments: 10000</h1>
                    </div>
                </div>
                <div className='bg-white  p-5'>
                    <h1 className="text-xl">List of Members</h1>
                    <table className='table-auto text-center border-separate border-spacing-2 bg-gray-300'>
                        {/* <caption class="caption-bottom">
                                List of Members
                            </caption> */}
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Parentage</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Package</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.users?.map((member, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{member.name}</td>
                                            <td>{member.parentage}</td>
                                            <td>{member.phone}</td>
                                            <td>{member.address}</td>
                                            {/* <td>{member.outstandingFee}</td> */}
                                            {/* <td>{member.package}</td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-white  p-5'>
                    <h1 className="text-xl">Outstanding Fee</h1>
                    <table className='table-auto text-center border-separate border-spacing-2 bg-gray-300'>
                        {/* <caption class="caption-bottom">
                                List of Members
                            </caption> */}
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Outstanding Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.users?.map((member, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{member.name}</td>
                                            <td>{member.address}</td>
                                            {/* <td>{member.outstandingFee}</td> */}
                                            {/* <td>{member.package}</td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard