import React from "react";
import TopBar from "../../Components/TopBar";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar showMainLinks={false} />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-gray-900">Tentang Kami</h1>
        <p className="mt-4 text-gray-600 flex justify-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, expedita explicabo. Laborum placeat repellendus eos porro cumque laboriosam voluptates dolorum sed itaque aut nulla nisi numquam facere molestias obcaecati vel necessitatibus natus in voluptas aperiam, quae incidunt quod. Possimus facere aut unde maxime quia quaerat enim, ipsum esse dignissimos exercitationem?.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 flex justify-center">Struktur</h1>
      </div>
    </div>
  );
}
