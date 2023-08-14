import React from 'react';
import { Image } from './image';

export default function FallbackError() {
  return (
    <div style={{ padding: 25 }}>
      <Image
        src="/favicon/android-chrome-512x512.png"
        width="80"
        className="rounded-full"
        alt="logo"
      />
      <div style={{ marginTop: 40 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2 style={{ fontFamily: 'sans-serif' }}>Something went wrong</h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: '50px',
              textAlign: 'center'
            }}
          >
            Brace yourself till we get the error fixed.
            <br />
            You may also refresh the page or try again later
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
          }}
        >
          <Image src="/assets/svg/illustration_500.svg" alt="error" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
          }}
        >
          <a href="/">
            <button
              className="
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg 
            focus:outline-none focus:shadow-outline"
            >
              Go to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
