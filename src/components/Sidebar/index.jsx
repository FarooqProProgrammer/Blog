import React from 'react'
import { Categories } from '../../Data'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div
            className="
  cs
  overflow-y-auto
  hidden
  lg:flex
  flex-col
  lg:w-menubar
  
  bg-c1
  h-full
  fixed
  top-0
  z-999
  w-[18%]
      "
        >
            <div className="flex-shrink-0 logo1">
                <div className="relative z-20 MBlogo">
                    <a
                        href="/"
                        aria-current="page"
                        className="nuxt-link-exact-active nuxt-link-active"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 98.91 28.62"
                            className="fadeInDown animated"
                        >
                            <defs />{" "}
                            <g>
                                <g id="Layer_1">
                                    <g id="_Group_">
                                        <g id="_Group_2" className="fadeInLeft">
                                            <path d="M30.87 10.44h2l2 2.94 2-2.94H39v7.73h-2.49v-2.78l-1.58 2.32-1.59-2.32v2.78h-2.47zM42.1 10.44H44l2.93 7.73h-2.48l-.25-.7h-2.34l-.25.7h-2.44zm1.45 5.33L43 14.41l-.52 1.36zM47.08 10.44h2l2.13 3v-3h2.43v7.73h-2l-2.12-3v3h-2.44zM60.44 17.82a4.08 4.08 0 0 1-3.63.23 4.06 4.06 0 0 1-2.16-2.16 4.06 4.06 0 0 1 0-3.15 4.07 4.07 0 0 1 2.16-2.16 3.91 3.91 0 0 1 1.57-.32 4.21 4.21 0 0 1 .89.1 3.88 3.88 0 0 1 .82.27l.17.09.16.09.17.11.23.16-1.39 2a1.63 1.63 0 0 0-2.19.09 1.64 1.64 0 0 0-.35.52 1.63 1.63 0 0 0 0 1.26 1.63 1.63 0 0 0 .86.86 1.58 1.58 0 0 0 .63.13 1.6 1.6 0 0 0 1.27-.63H59v-1.63h3v2.57a4.2 4.2 0 0 1-1.56 1.57zM62.73 12.73a4.07 4.07 0 0 1 2.16-2.16 4.05 4.05 0 0 1 3.15 0 4.07 4.07 0 0 1 2.16 2.16 4.07 4.07 0 0 1 0 3.16A4.06 4.06 0 0 1 68 18a4.06 4.06 0 0 1-3.15 0 4.06 4.06 0 0 1-2.16-2.16 4.07 4.07 0 0 1 0-3.16zM65 14.94a1.63 1.63 0 0 0 .86.86 1.63 1.63 0 0 0 1.26 0 1.63 1.63 0 0 0 .86-.86 1.63 1.63 0 0 0 0-1.26 1.63 1.63 0 0 0-.86-.86 1.63 1.63 0 0 0-1.26 0 1.63 1.63 0 0 0-.86.86 1.62 1.62 0 0 0 0 1.26zM71.18 10.44h3.2a3.29 3.29 0 0 1 1 .12 2.23 2.23 0 0 1 .72.39 2 2 0 0 1 .55.7 2 2 0 0 1-.39 2.27 1.7 1.7 0 0 1 .71.72 2.46 2.46 0 0 1 .22 1.1 2.64 2.64 0 0 1-.19 1 2.12 2.12 0 0 1-.53.77 2.34 2.34 0 0 1-.84.49 3.44 3.44 0 0 1-1.11.17h-3.34zm2.55 2.9a.87.87 0 0 0 .53-.13.51.51 0 0 0 .16-.43.47.47 0 0 0-.16-.4.9.9 0 0 0-.53-.12h-.16v1.08zm0 3a1.38 1.38 0 0 0 .76-.16.59.59 0 0 0 .24-.52q0-.66-1-.66h-.16v1.34zM79.91 10.44h1.85l2.93 7.73h-2.43l-.25-.7h-2.34l-.25.7H77zm1.45 5.33l-.52-1.36-.52 1.36zM87.71 10.44h1.85l2.93 7.73h-2.43l-.25-.7h-2.35l-.25.7h-2.43zm1.45 5.33l-.52-1.36-.52 1.36zM95.29 12.53h-2.14l.85-2.09h4.95L96.3 16h2.53L98 18.17h-5.38z" />
                                        </g>{" "}
                                        <g id="_Group_3">
                                            <g id="_Group_4">
                                                <path
                                                    id="_Rectangle_"
                                                    fill="#f5ee70"
                                                    d="M0 0h28.63v28.62H0z"
                                                />{" "}
                                                <g id="_Group_5">
                                                    <path
                                                        id="_Path_"
                                                        d="M5.36 6.68c0-.37 0-.93.5-.93h4.08a.68.68 0 0 1 .66.34q1.87 2.73 3.72 5.48C15.52 9.75 16.76 8 18 6.15a.7.7 0 0 1 .59-.4h4c.2 0 .46 0 .59.19a1.31 1.31 0 0 1 .13.8v15.41a.8.8 0 0 1-.21.62 1.19 1.19 0 0 1-.52.11h-4.86a.59.59 0 0 1-.55-.65V18.1a6.86 6.86 0 0 1-.5.75q-1 1.44-1.94 2.86a.56.56 0 0 1-.92-.21c-.76-1.12-1.54-2.23-2.29-3.35v4.2a.54.54 0 0 1-.53.53H5.68a.77.77 0 0 1-.29-.71V6.81z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>{" "}
            <div className="flex-auto">
                <div className="select-none">
                    <div className="block text-center">
                        <form className="w-full">
                            <div className="flex items-center mx-3 mt-4 border-b-2 border-gray lg:mt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="
        w-full
        py-2
        mr-2
        leading-tight
        bg-transparent
        border-none
        appearance-none
        focus:outline-none
      "
                                />{" "}
                                <button
                                    type="submit"
                                    className="flex-shrink-0 p-1 mr-1 text-black appearance-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-4 arrow"
                                    >
                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>{" "}
                    <div
                        className="
  flex flex-col
  justify-around
  p-3
  text-sm
  font-bold
  uppercase
  menulist
      "
                    >
                        {Categories?.map((item) => {
                            return (
                                <Link href={item.path} className="">
                                    {item.Name}
                                </Link>
                            )
                        })}


                        {" "}
                        <a className="flex items-center justify-between cursor-pointer">
                            More
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className="w-4 r90"
                                >
                                    <path fill="none" d="M-838-2232H562v3600H-838z" />{" "}
                                    <path d="M16 10v28l22-14z" className="arrow" />{" "}
                                    <path fill="none" d="M0 0h48v48H0z" />
                                </svg>
                            </span>
                        </a>
                    </div>{" "}
                    <div
                        aria-hidden="true"
                        hidden="hidden"
                        style={{
                            height: 0,
                            overflow: "hidden",
                            transitionProperty: "height",
                            transitionDuration: "500ms"
                        }}
                    >
                        <div
                            className="
    flex flex-col
    justify-around
    p-3
    pt-0
    text-sm
    font-bold
    uppercase
    menulist
  "
                        >
                            <a href="/about" className="">
                                About
                            </a>{" "}
                            <a rel="nofollow" href="mailto:info@mangobaaz.com">
                                Contact
                            </a>{" "}
                            <a href="/advertise" className="">
                                Advertise
                            </a>
                        </div>{" "}
                        <div className="flex items-center justify-between p-3 text-sm font-bold">
                            <div>Dark Mode</div>{" "}
                            <label className="switch">
                                <input type="checkbox" />
                                &gt;
                                <span className="slider" />
                            </label>
                        </div>
                    </div>{" "}
                    <div className="flex justify-center p-3 sicons">
                        <a
                            title="Link to Facebook"
                            href="https://www.facebook.com/mangobaaz"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 56.693 56.693"
                                className="p-2 border rounded w-9"
                            >
                                <path d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z" />
                            </svg>
                        </a>{" "}
                        <a
                            title="Link to Twitter"
                            href="https://www.twitter.com/mangobaaz"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 56.693 56.693"
                                className="p-2 ml-4 border rounded w-9"
                            >
                                <path d="M52.837 15.065c-1.811.805-3.76 1.348-5.805 1.591 2.088-1.25 3.689-3.23 4.444-5.592-1.953 1.159-4.115 2-6.418 2.454-1.843-1.964-4.47-3.192-7.377-3.192-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56-.87 1.492-1.368 3.228-1.368 5.082 0 3.506 1.784 6.6 4.496 8.412-1.656-.053-3.215-.508-4.578-1.265-.001.042-.001.085-.001.128 0 4.896 3.484 8.98 8.108 9.91-.848.23-1.741.354-2.663.354-.652 0-1.285-.063-1.902-.182 1.287 4.015 5.019 6.938 9.441 7.019-3.459 2.711-7.816 4.327-12.552 4.327-.815 0-1.62-.048-2.411-.142 4.474 2.869 9.786 4.541 15.493 4.541 18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309 1.974-1.422 3.688-3.203 5.042-5.23z" />
                            </svg>
                        </a>{" "}
                        <a
                            title="Link to Youtube"
                            href="https://www.youtube.com/c/mangobaaz"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="p-2 ml-4 border rounded w-9"
                            >
                                <path d="M21.80731 7.805a2.79915 2.79915 0 0 0-2.54907-2.53906C17.69061 5.13586 15.36707 5 12.50012 5c-3.45251 0-6.05865.14105-7.74353.27332A2.79932 2.79932 0 0 0 2.1925 7.815C2.08936 8.90021 2 10.33344 2 12.0423c0 1.66632.08862 3.07422.19128 4.14594a2.79852 2.79852 0 0 0 2.56384 2.53833c1.68482.13226 4.29145.27343 7.745.27343 2.86694 0 5.19049-.13586 6.75812-.266a2.799 2.799 0 0 0 2.54907-2.539C21.91052 15.11548 22 13.69189 22 12s-.08948-3.11548-.19269-4.195zM9.77594 14.93878V9.06122L15.574 12z" />
                            </svg>
                        </a>{" "}
                        <a
                            title="Link to Instagram"
                            href="https://instagram.com/mangobaaz/"
                            target="_blank"
                            rel="noopener"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 56.7 56.7"
                                className="p-2 ml-4 border rounded w-9"
                            >
                                <path d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />{" "}
                                <circle cx="41.5" cy="16.4" r="2.9" />{" "}
                                <path d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
