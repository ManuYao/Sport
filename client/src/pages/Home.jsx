import React from 'react';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center mt-11 ml-14'>
          <div className='flex gap-20 align-items-center justify-content-center'>
            <p className='font-black text-4xl text-y_gray'>Y</p>
            <a className='m-auto font-normal text-black text-2xl opacity-45 underline decoration-solid decoration-2 underline-offset-4' href='#'>Lorem</a>
          </div>
          <div className='flex items-center justify-between shadow-lg rounded-2xl shadow-zinc-500/50 border border-Neutral-950 w-52 h-9 p-4 mr-28'>
            <p className='text-y_black'>Réseau</p>
            <div className='flex gap-2'>
              <img src='#' alt='#'></img>
              <img src='#' alt='#'></img>
              <img src='#' alt='#'></img>
            </div>
          </div>
        </div>
      </div>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col gap-14 mt-32 ml-14'>
            <h1 className='text-6xl text-y_black w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <h2 className='text-3xl text-y_black w-3/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h2>
            <div className='flex flex-row'>
              <button variant='contained' endIcon={"#"} className='flex justify-between items-center w-52 h-11 p-2.5 bg-neutral-950 text-white text-xl rounded-2xl shadow-lg shadow-zinc-500/50'>Lorem ipsum<img src='#' alt='#'/></button>
            </div>
          </div>
      {/* </div> */}
      <div className='w-6/12 h-96 mr-2.5 bg-slate-400'></div>
        </div>
    </div>
  );
}
