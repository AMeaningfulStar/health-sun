export default function Logout() {
  return (
    <div className="h-24 w-full px-4">
      <div className="flex h-full w-full items-center justify-start border-t-2">
        <div className="group ml-4 flex cursor-pointer items-center gap-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 group-active:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path
                d="M9.51097 2.16467C11.3742 2.16467 12.8938 3.65821 12.8938 5.49699V9.09198L8.3121 9.09198C7.98375 9.09198 7.72412 9.34716 7.72412 9.66988C7.72412 9.9851 7.98375 10.2478 8.3121 10.2478L12.8938 10.2478L12.8938 13.8353C12.8938 15.674 11.3742 17.1751 9.4957 17.1751H5.77691C3.90606 17.1751 2.38647 15.6816 2.38647 13.8428L2.38647 5.50449C2.38647 3.65821 3.9137 2.16467 5.78455 2.16467L9.51097 2.16467ZM14.8002 7.08073C15.0254 6.84807 15.3932 6.84807 15.6183 7.07323L17.8098 9.25724C17.9224 9.36982 17.9825 9.51242 17.9825 9.67003C17.9825 9.82014 17.9224 9.97024 17.8098 10.0753L15.6183 12.2593C15.5057 12.3719 15.3556 12.4319 15.213 12.4319C15.0629 12.4319 14.9128 12.3719 14.8002 12.2593C14.5751 12.0342 14.5751 11.6664 14.8002 11.4413L16.0011 10.2479H12.8939V9.09213H16.0011L14.8002 7.8988C14.5751 7.67365 14.5751 7.30589 14.8002 7.08073Z"
                fill="white"
              />
            </svg>
          </div>
          <span className=" text-lg text-gray-400 group-active:text-gray-700">Logout</span>
        </div>
      </div>
    </div>
  )
}
