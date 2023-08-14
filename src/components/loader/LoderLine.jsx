import React from 'react';
import { useAppContext } from '../../context';

export default function LoaderLine() {
  const { showSidebar, collapsed } = useAppContext();
  return (
    <>
      {!collapsed || showSidebar ? (
        <div className="flex justify-center items-center w-full h-screen fixed top-0 left-[140px] bg-transparent  bg-opacity-50 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version={1.0}
            width="32px"
            height="32px"
            viewBox="0 0 128 128"
            xmlSpace="preserve"
            fill="transparent"
            className="bg-transparent"
          >
            <rect x={0} y={0} width="100%" height="100%" fill="transparent" />
            <g>
              <path d="M59.6 0h8v40h-8V0z" fill="transparent" />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(30 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(60 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(90 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(120 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#b2b2b2"
                transform="rotate(150 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#999999"
                transform="rotate(180 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#7f7f7f"
                transform="rotate(210 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#666666"
                transform="rotate(240 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#4c4c4c"
                transform="rotate(270 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#333333"
                transform="rotate(300 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#191919"
                transform="rotate(330 64 64)"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
                calcMode="discrete"
                dur="1080ms"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen fixed top-0 left-0 bg-transparent  bg-opacity-50 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version={1.0}
            width="32px"
            height="32px"
            viewBox="0 0 128 128"
            xmlSpace="preserve"
            fill="transparent"
            className="bg-transparent"
          >
            <rect x={0} y={0} width="100%" height="100%" fill="transparent" />
            <g>
              <path d="M59.6 0h8v40h-8V0z" fill="transparent" />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(30 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(60 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(90 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#cccccc"
                transform="rotate(120 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#b2b2b2"
                transform="rotate(150 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#999999"
                transform="rotate(180 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#7f7f7f"
                transform="rotate(210 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#666666"
                transform="rotate(240 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#4c4c4c"
                transform="rotate(270 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#333333"
                transform="rotate(300 64 64)"
              />
              <path
                d="M59.6 0h8v40h-8V0z"
                fill="#191919"
                transform="rotate(330 64 64)"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
                calcMode="discrete"
                dur="1080ms"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
