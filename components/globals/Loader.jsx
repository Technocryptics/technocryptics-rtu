import React from "react";

export default function Loader() {
  return (
    <>
      <div className="frame w-full h-screen overflow-hidden">
        <div className="center">
          <div className="loader">
            <div className="plane bottom"></div>
            <div className="plane left"></div>
            <div className="plane right"></div>
            <div className="plane back"></div>
            <div className="plane front"></div>
            <div className="plane top"></div>
            <div className="plane fill-top"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          perspective: 500px;
        }

        .loader {
          width: 120px;
          height: 120px;
          transform-style: preserve-3d;
          transform: rotateX(-25deg) rotateY(45deg);
          transition: all 0.5s ease-in-out;
          cursor: pointer;
        }
        .loader:hover {
          transform: rotateX(-25deg) rotateY(45deg) translateY(-15px);
        }

        .loader .plane {
          position: absolute;
          width: 120px;
          height: 120px;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.1);
        }
        .loader .bottom {
          transform: rotateX(-90deg) translateZ(60px);
          background: #fbbd23;
          box-shadow: -8px -8px 10px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease-in-out;
        }
        .loader .left {
          transform: rotateY(-90deg) translateZ(60px);
        }
        .loader .left:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fbbd23;
          transform-origin: 50% 100%;
          -webkit-animation: fill 4s ease-in-out infinite alternate;
          animation: fill 4s ease-in-out infinite alternate;
        }
        .loader .right {
          transform: rotateY(90deg) translateZ(60px);
        }
        .loader .right:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fbbd23;
          transform-origin: 50% 100%;
          -webkit-animation: fill 4s ease-in-out infinite alternate;
          animation: fill 4s ease-in-out infinite alternate;
        }
        .loader .back {
          transform: rotateY(180deg) translateZ(60px);
        }
        .loader .back:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fbbd23;
          transform-origin: 50% 100%;
          -webkit-animation: fill 4s ease-in-out infinite alternate;
          animation: fill 4s ease-in-out infinite alternate;
        }
        .loader .front {
          transform: rotateY(0deg) translateZ(60px);
        }
        .loader .front:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fbbd23;
          transform-origin: 50% 100%;
          -webkit-animation: fill 4s ease-in-out infinite alternate;
          animation: fill 4s ease-in-out infinite alternate;
        }
        .loader .top {
          transform: rotateX(90deg) translateZ(60px);
          opacity: 0.5;
        }
        .loader .fill-top {
          background: #fbbd23;
          -webkit-animation: fill-top 4s ease-in-out infinite alternate;
          animation: fill-top 4s ease-in-out infinite alternate;
        }

        @-webkit-keyframes fill {
          0%,
          25% {
            transform: scaleY(0);
          }
          75%,
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes fill {
          0%,
          25% {
            transform: scaleY(0);
          }
          75%,
          100% {
            transform: scaleY(1);
          }
        }
        @-webkit-keyframes color-bottom {
          0% {
            background: rgba(0, 0, 0, 0.1);
          }
          25%,
          100% {
            background: #fbbd23;
          }
        }
        @keyframes color-bottom {
          0% {
            background: rgba(0, 0, 0, 0.1);
          }
          25%,
          100% {
            background: #fbbd23;
          }
        }
        @-webkit-keyframes color-top {
          0%,
          25% {
            background: rgba(0, 0, 0, 0.1);
          }
          75%,
          100% {
            background: #fbbd23;
          }
        }
        @keyframes color-top {
          0%,
          25% {
            background: rgba(0, 0, 0, 0.1);
          }
          75%,
          100% {
            background: #fbbd23;
          }
        }
        @-webkit-keyframes fill-top {
          0%,
          25% {
            transform: rotateX(90deg) translateZ(-60px);
          }
          75%,
          100% {
            transform: rotateX(90deg) translateZ(59px);
          }
        }
        @keyframes fill-top {
          0%,
          25% {
            transform: rotateX(90deg) translateZ(-60px);
          }
          75%,
          100% {
            transform: rotateX(90deg) translateZ(59px);
          }
        }
      `}</style>
    </>
  );
}
