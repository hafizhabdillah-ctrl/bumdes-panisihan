import react from 'react';
import TopBar from '../../../Components/TopBar';

export default function Umkm() {
    return (
        <div>
            <TopBar/>

            <div className='px-6 py-4 flex flex-col'>
                <h1 className='text-3xl font-bold text-gray-800'>Usaha Mikro, Kecil, dan Menengah</h1>
                <div className='flex flex-row gap-6'>
                    <img src="/placeholder.png" alt="Sport Center" className='w-2/5 h-96 object-cover mt-4 rounded-lg'/>
                    <p className='mt-4 font-semibold text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, similique amet fugit aperiam quas sed ea dicta? Consequatur at repellat enim assumenda dolor ratione illo quasi itaque minima pariatur fuga inventore, quibusdam nulla commodi explicabo necessitatibus numquam! Corporis quo exercitationem error veniam tempora odit reiciendis velit deleniti eveniet dolores. Minima?
                    </p>
                </div>
            </div>
        </div>
    )
}