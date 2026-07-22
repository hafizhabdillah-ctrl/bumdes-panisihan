import React from "react";
import TopBar from "../../Components/TopBar";

export default function Aset() {
    return (
        <div>
            <TopBar showMainLinks={false}/>
            <div className="flex justify-center text-gray-500 space-x-2 text-center items-center mt-20">
                <p className="text-gray-600">Aset</p>
            </div>
        </div>
    );
}