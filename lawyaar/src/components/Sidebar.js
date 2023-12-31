import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="flex h-screen w-16 flex-col justify-between  bg-[2A1F2F] ">
  <div>
    <div className="inline-flex h-16 w-16 items-center justify-center">
      <span
        className="grid h-12 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
      >
        L
      </span>
    </div>

    <div className="">
      <div className="px-2">


        <ul className="space-y-1  pt-4">
          <li>
            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-[2A1F3D] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Teams
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-[2A1F3D] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Teams
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-[2A1F3D] hover:text-white"            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Billing
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-[2A1F3D] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Invoices
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-[2A1F3D] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Account
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 rounded border-gray-100 bg-[#b23b3b] p-2 ">
    <form action="/logout">
      <button
        type="submit"
        className="group relative flex justify-center rounded px-2 py-1.5 text-white hover:bg-[8b3b3b] hover:text-white "      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-10 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>

        <span
          className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        >
          Logout
        </span>
      </button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Sidebar