import React from "react";
import TopBar from "../../Components/TopBar";

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900">Visi & Misi</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900">Visi</h1>
        <ul className="text-xl font-bold text-gray-600 list-disc">
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
        </ul>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Misi</h1>
        <ul className="text-xl font-bold text-gray-600 list-disc">
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
          <li className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda hic at blanditiis sapiente fuga quo itaque totam consequuntur ducimus est dolorem nihil, saepe architecto.
          </li>
        </ul>
      </div>
    </div>
  );
}
