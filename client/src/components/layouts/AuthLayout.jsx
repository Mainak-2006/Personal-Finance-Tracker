import React from 'react'
import CARD_2 from "../../assets/images/card2.png"
import {LuTrendingUpDown} from "react-icons/lu"

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
                {children}
            </div>
            <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
                <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
                <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
                <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

                <div className="grid grid-cols-1 z-20 relative">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track Your Income & Expenses"
                        value="430,000"
                        color="bg-primary"
                    />
                </div> 
                <img
                    src={CARD_2}
                    className="w-64 lg:w-[90%] absolute rounded-xl bottom-10 shadow-lg shadow-blue-400/15"
                />
            </div>
        </div >
    )
}

export default AuthLayout;

const StatsInfoCard =({icon,label,value,color})=>{
    return (
        <div className="bg-white rounded-2xl p-4 gap-6 shadow-md max-w-lg mx-6 mt-10 relative z-10">
            <div className="flex items-center gap-4">
                <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                    <div className="text-xl">
                        {icon}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">
                        {label}
                    </p>
                    <p className="text-2xl font-bold text-black">
                        ${value}
                    </p>
                </div>
            </div>
        </div>
    )
}